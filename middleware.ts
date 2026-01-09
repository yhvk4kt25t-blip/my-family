import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Handle validation-key.txt request directly
  if (request.nextUrl.pathname === "/validation-key.txt") {
    const validationKey =
      "fb59d8cea7bfe1a30108fe28615f0fe68eff509f8c96c949744ceb4b99f1603f00b6ea62149f978f4540b6cd04e14d9beee23c112f8575ed2dc687d517228cc3"

    return new NextResponse(validationKey, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    })
  }

  // Additional middleware logic can be added here

  return NextResponse.next()
}

export const config = {
  matcher: "/validation-key.txt",
}
