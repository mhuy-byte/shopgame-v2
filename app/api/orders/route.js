import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }

  return NextResponse.json({
    success: true,
    data,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    const { data, error } = await supabase
      .from("orders")
      .insert([
        {
          game: body.game,
          package_name: body.package_name,
          uid: body.uid,
          server_id: body.server_id,
          phone: body.phone,
          price: body.price,
          status: "pending",
        },
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
      });
    }

    return NextResponse.json({
      success: true,
      order: data,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err.message,
    });
  }
}
