import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request) {
  try {
    const body = await request.json();

    const username = body.username?.trim();
    const password = body.password?.trim();
    const phone = body.phone?.trim();

    if (!username || !password || !phone) {
      return NextResponse.json({
        success: false,
        error: "Vui lòng nhập đầy đủ thông tin.",
      });
    }

    // Kiểm tra username đã tồn tại chưa
    const { data: exist } = await supabase
      .from("users")
      .select("id")
      .eq("username", username)
      .maybeSingle();

    if (exist) {
      return NextResponse.json({
        success: false,
        error: "Tên tài khoản đã tồn tại.",
      });
    }

    // Tạo tài khoản
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          username,
          password,
          phone,
          balance: 0,
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
      user: data,
    });

  } catch (err) {
    return NextResponse.json({
      success: false,
      error: err.message,
    });
  }
}
