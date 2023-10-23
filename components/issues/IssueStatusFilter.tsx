"use client";
import IssueStatusSelect from "./IssueStatusSelect";

const IssueStatusFilter = () => {
  return (
    <IssueStatusSelect isFilter onChange={(value) => console.log(value)} />
  );
};

export default IssueStatusFilter;
