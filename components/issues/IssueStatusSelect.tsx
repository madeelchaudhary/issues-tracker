"use client";

import { IssueStatus } from "@prisma/client";
import { Select } from "@radix-ui/themes";

interface Props {
  status?: IssueStatus;
  onChange: (status: IssueStatus) => void;
  isFilter?: boolean;
}

const IssueStatusSelect = ({ status, onChange, isFilter }: Props) => {
  return (
    <Select.Root
      defaultValue={isFilter && !status ? "0" : status}
      onValueChange={onChange}
    >
      <Select.Trigger placeholder="Select a status" />
      <Select.Content>
        {isFilter && <Select.Item value="0">All</Select.Item>}
        <Select.Item value={IssueStatus.OPEN}>Open</Select.Item>
        <Select.Item value={IssueStatus.IN_PROGRESS}>In Progress</Select.Item>
        <Select.Item value={IssueStatus.CLOSED}>Closed</Select.Item>
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusSelect;
