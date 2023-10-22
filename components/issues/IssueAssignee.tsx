"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";

const IssueAssignee = () => {
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

  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign ..." />
      <Select.Content>
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
