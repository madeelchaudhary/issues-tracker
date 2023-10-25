import prisma from "@/prisma/client";
import React from "react";
import IssueSummaryCard, { IssueSummaryItem } from "./IssueSummaryCard";
import { Flex } from "@radix-ui/themes";

const IssueSummary = async () => {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });

  const summary: IssueSummaryItem[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
    { label: "In Progress Issues", value: inProgress, status: "IN_PROGRESS" },
  ];
  return (
    <Flex gap="5">
      {summary.map((item) => (
        <IssueSummaryCard key={item.status} summary={item} />
      ))}
    </Flex>
  );
};

export default IssueSummary;
