"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ErrorDialog from "../_components/ErrorDialog";

interface Props {
  issueId: string;
}

const IssueDeleteBtn = ({ issueId }: Props) => {
  const router = useRouter();
  const [error, setError] = useState(false);

  async function deleteIssue() {
    setError(false);
    try {
      await axios.delete(`/api/issues/7${issueId}`);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setError(true);
    }
  }

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">Delete</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 500 }}>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure you want to delete this issue? This action cannot be
            undone.
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={deleteIssue}>
                Confirm
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <ErrorDialog
        title="Deletion Failed"
        description="An error occurred while deleting the issue."
        onClose={() => setError(false)}
        open={error}
      />
    </>
  );
};

export default IssueDeleteBtn;
