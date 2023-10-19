import { NextRequest, NextResponse } from "next/server";
import issueSchema from "@/validations/issue";
import prisma from "@/prisma/client";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const validation = issueSchema.safeParse(body);

    if (!validation.success)
      return NextResponse.json(
        {
          error: validation.error.errors[0].message,
        },
        { status: 400 }
      );

    const data = validation.data;
    const newIssue = await prisma.issue.create({
      data,
    });

    return NextResponse.json(newIssue, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
};
