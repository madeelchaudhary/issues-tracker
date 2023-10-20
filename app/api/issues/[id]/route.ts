import prisma from "@/prisma/client";
import issueSchema from "@/validations/issue";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: string;
  };
}

export const PATCH = async (req: NextRequest, { params: { id } }: Props) => {
  try {
    const body = await req.json();
    const validation = issueSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: validation.error.errors[0].message,
        },
        { status: 400 }
      );
    }

    const data = validation.data;
    const issue = await prisma.issue.findUnique({
      where: {
        id,
      },
    });

    if (!issue) {
      return NextResponse.json(
        {
          error: "Issue not found",
        },
        { status: 404 }
      );
    }

    const updatedIssue = await prisma.issue.update({
      where: {
        id,
      },
      data,
    });

    return NextResponse.json(updatedIssue, {
      status: 200,
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

export const DELETE = async (_: NextRequest, { params: { id } }: Props) => {
  try {
    const issue = await prisma.issue.findUnique({
      where: {
        id,
      },
    });

    if (!issue) {
      return NextResponse.json(
        {
          error: "Issue not found",
        },
        { status: 404 }
      );
    }

    const deletedIssue = await prisma.issue.delete({
      where: {
        id: issue.id,
      },
    });

    return NextResponse.json(deletedIssue, {
      status: 200,
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
