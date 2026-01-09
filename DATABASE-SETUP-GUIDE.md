# Database Setup Guide

Your app currently uses localStorage which only stores data in the browser and gets cleared on cache clear or device change. For production use, you need a real database.

## Recommended: Supabase (Free Tier Available)

### Step 1: Create Supabase Account
1. Go to https://supabase.com
2. Sign up for free account
3. Create a new project
4. Save your project credentials

### Step 2: Add Supabase Integration to Your App
In v0, go to the Connect section and add Supabase integration.

### Step 3: Database Schema

Once Supabase is connected, run these SQL scripts in v0:

#### Create Tables
\`\`\`sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pi_uid TEXT UNIQUE NOT NULL,
  username TEXT,
  email TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Families table
CREATE TABLE families (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  created_by UUID REFERENCES users(id),
  max_members INTEGER DEFAULT 10,
  payment_status TEXT DEFAULT 'pending',
  payment_tx_hash TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Family members table
CREATE TABLE family_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  family_id UUID REFERENCES families(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  role TEXT DEFAULT 'member',
  joined_at TIMESTAMP DEFAULT NOW()
);

-- Memories table
CREATE TABLE memories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  family_id UUID REFERENCES families(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  date DATE,
  location TEXT,
  tags TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Memory photos table
CREATE TABLE memory_photos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  memory_id UUID REFERENCES memories(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  caption TEXT,
  uploaded_at TIMESTAMP DEFAULT NOW()
);

-- Events table
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  family_id UUID REFERENCES families(id) ON DELETE CASCADE,
  created_by UUID REFERENCES users(id),
  title TEXT NOT NULL,
  description TEXT,
  event_date TIMESTAMP NOT NULL,
  location TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Family tree table
CREATE TABLE family_tree (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  family_id UUID REFERENCES families(id) ON DELETE CASCADE,
  person_name TEXT NOT NULL,
  birth_date DATE,
  death_date DATE,
  gender TEXT,
  parent_id UUID REFERENCES family_tree(id),
  spouse_id UUID REFERENCES family_tree(id),
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

#### Enable Row Level Security (RLS)
\`\`\`sql
-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE families ENABLE ROW LEVEL SECURITY;
ALTER TABLE family_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE memories ENABLE ROW LEVEL SECURITY;
ALTER TABLE memory_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE family_tree ENABLE ROW LEVEL SECURITY;

-- RLS Policies (users can only access their own families' data)
CREATE POLICY "Users can view their own data" ON users
  FOR SELECT USING (auth.uid()::text = pi_uid);

CREATE POLICY "Users can view families they belong to" ON families
  FOR SELECT USING (
    id IN (SELECT family_id FROM family_members WHERE user_id IN 
      (SELECT id FROM users WHERE pi_uid = auth.uid()::text))
  );

CREATE POLICY "Users can view family members of their families" ON family_members
  FOR SELECT USING (
    family_id IN (SELECT family_id FROM family_members WHERE user_id IN 
      (SELECT id FROM users WHERE pi_uid = auth.uid()::text))
  );

-- Add similar policies for memories, events, family_tree
\`\`\`

### Step 4: Update App to Use Supabase

After the database is set up, the app will automatically use Supabase instead of localStorage.

## Alternative: Neon Database

1. Go to https://neon.tech
2. Create free account
3. Create a new project
4. Add Neon integration in v0
5. Use similar SQL schema as above

## Benefits of Database vs localStorage

| Feature | localStorage | Database |
|---------|-------------|----------|
| Data persistence | Browser only | Cross-device |
| Data loss risk | High (cache clear) | Low (backed up) |
| Capacity | 5-10 MB | Unlimited |
| Multi-user | No | Yes |
| Security | Client-side | Server-side |
| Search | Slow | Fast (indexed) |
| Backup | Manual | Automatic |

## Migration from localStorage to Database

Once database is set up, users can export their localStorage data and import it to the database using the migration tool in the app settings.
