"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";

const IssueAssignee = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get<User[]>("/api/users");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign ..." />
      <Select.Content>
        {users.map((user) => (
          <Select.Item value={user.id} key={user.id}>
            {user.name}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueAssignee;
