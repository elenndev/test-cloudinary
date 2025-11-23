import cloudinary from "@/app/cloudinary";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();
  const file: File | null = data.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "arquivo não foi enviado" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);


  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "uploads" },
      (error, result) => {
        if (error) reject(error);
        else resolve(NextResponse.json(result));
      }
    );
    stream.end(buffer);
  });
}

