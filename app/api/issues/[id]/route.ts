import prisma from "@/prisma/client";
import { issueUpdateSchema } from "@/validations/issue";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

interface Props {
  params: {
    id: string;
  };
}

export const PATCH = async (req: NextRequest, { params: { id } }: Props) => {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = await req.json();
    const validation = issueUpdateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          error: validation.error.errors[0].message,
        },
        { status: 400 }
      );
    }

    const { title, description, assigneeId } = validation.data;

    if (!title && !description && assigneeId === undefined) {
      return NextResponse.json(
        {
          error: "No fields to update",
        },
        { status: 400 }
      );
    }

    if (assigneeId) {
      const assignee = await prisma.user.findUnique({
        where: {
          id: assigneeId,
        },
      });

      if (!assignee) {
        return NextResponse.json(
          {
            error: "Assignee not found",
          },
          { status: 404 }
        );
      }
    }

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
      data: {
        title,
        description,
        assigneeId,
      },
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
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

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
