import cloudinary from "@/app/cloudinary";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const results = await cloudinary.search
      .expression("folder:uploads")
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    return NextResponse.json(results.resources);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "erro ao buscar imagens" }, { status: 500 });
  }
}

