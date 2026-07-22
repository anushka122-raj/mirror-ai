import { NextResponse } from "next/server";
import { extractText } from "unpdf";
import { parseResume } from "../../lib/parser";
import { calculateATS } from "../../lib/ats";
import { calculateCompanyMatch } from "../../lib/companyMatch";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("resume") as File;

    if (!file) {
      return NextResponse.json(
        {
          success: false,
          error: "No file uploaded",
        },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();

    const result = await extractText(new Uint8Array(arrayBuffer));

    console.log("UNPDF RESULT:", result);

    const text = Array.isArray(result.text)
      ? result.text.join("\n")
      : String(result.text ?? "");

    const parsed = parseResume(text);
    const atsScore = calculateATS(parsed);
    return NextResponse.json({
  success: true,
  text,
  parsed,
  atsScore,
});

    return NextResponse.json({
      success: true,
      text,
      parsed,
    });
  } catch (error: any) {
    console.error("PDF ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}