"use client";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

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

  function handleChange(value: string) {
    const assigneeId = value === "0" || !value ? null : value;
    axios.patch(`/api/issues/${issue.id}`, {
      assigneeId,
    });
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
