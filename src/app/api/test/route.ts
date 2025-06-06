import getServerSession from "next-auth";
import { pusherServer } from "@/lib/pusher";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await pusherServer.trigger(
      `private-123abc`,
      "test:notification",
      `is Notification received via PUSHER to particular user having email- prakash39911@gmail.com`
    );

    return NextResponse.json({ message: "Notification sent successfully" });
  } catch (error) {
    console.log("Unable to trigger pusher notification", error);
    return NextResponse.json(
      { message: "Pusher Trigger notification failed" },
      { status: 500 }
    );
  }
}
