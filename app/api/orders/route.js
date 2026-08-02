import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Orders API hoạt động",
    data: [],
  });
}

export async function POST(request) {
  const body = await request.json();

  return NextResponse.json({
    success: true,
    message: "Đơn hàng đã được nhận",
    order: {
      id: "SG-" + Date.now(),
      ...body,
      status: "Đang chờ xử lý",
      createdAt: new Date().toISOString(),
    },
  });
}
