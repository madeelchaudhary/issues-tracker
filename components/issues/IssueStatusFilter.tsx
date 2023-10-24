"use client";
import { useRouter, useSearchParams } from "next/navigation";
import IssueStatusSelect from "./IssueStatusSelect";
import { IssueStatus } from "@prisma/client";

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentStatus = searchParams.get("status") as IssueStatus | null;

  function onChange(status?: string) {
    const params = new URLSearchParams(searchParams);
    if (status && status !== "0") {
      params.set("status", status);
    } else {
      params.delete("status");
    }
    const query = params.size ? `?${params.toString()}` : "";
    router.replace(`/issues${query}`);
  }

  return (
    <IssueStatusSelect
      status={currentStatus ?? undefined}
      isFilter
      onChange={onChange}
    />
  );
};

export default IssueStatusFilter;
