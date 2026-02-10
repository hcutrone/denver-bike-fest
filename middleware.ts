import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
	const showSite = new URLSearchParams(request.nextUrl.search).has("showSite");
	const headers = new Headers(request.headers);
	headers.set("x-show-site", showSite ? "true" : "false");
	return NextResponse.next({ request: { headers } });
}
