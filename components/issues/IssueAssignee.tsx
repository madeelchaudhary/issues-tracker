"use client";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

import { toast } from "react-hot-toast";

const IssueAssignee = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get<User[]>("/api/users");
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Skeleton height="2.25rem" />;

  if (error) return <Select.Root>Error</Select.Root>;

  async function handleChange(value: string) {
    const assigneeId = value === "0" || !value ? null : value;
    try {
      await axios.patch(`/xapi/issues/${issue.id}`, {
        assigneeId,
      });
    } catch (e) {
      toast.error("Failed to update assignee");
    }
  }

  return (
    <Select.Root
      defaultValue={issue.assigneeId || "0"}
      onValueChange={handleChange}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Item value="0">Unassigned</Select.Item>
        {users?.map((user) => (
          <Select.Item value={user.id} key={user.id}>
            {user.name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueAssignee;
