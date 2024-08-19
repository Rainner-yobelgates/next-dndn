import { NextResponse } from 'next/server';
import { getData } from "@/libs/dndn-api";

export async function middleware(req) {
    try {
        const visitor = await getData("visitor");
        
    } catch (error) {
        console.error('Error fetching visitor data:', error);
    }
  return NextResponse.next();
}