"use client";
import { useRouter } from "next/navigation";
import IssueStatusSelect from "./IssueStatusSelect";
import { IssueStatus } from "@prisma/client";

interface Props {
  status?: IssueStatus;
}

const IssueStatusFilter = ({ status }: Props) => {
  const router = useRouter();

  function onChange(status?: string) {
    const query = !status || status === "0" ? "" : `?status=${status}`;
    router.replace(`/issues${query}`);
  }

  return <IssueStatusSelect status={status} isFilter onChange={onChange} />;
};

export default IssueStatusFilter;
