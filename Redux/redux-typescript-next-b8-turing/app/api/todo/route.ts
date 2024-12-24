import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

interface Context {
    params: undefined;
}

export async function GET(request: NextRequest, context: Context) {

    return NextResponse.json(data);
}
