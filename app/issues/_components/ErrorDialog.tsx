import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import React from "react";

interface Props {
  title: string;
  description: string;
  open: boolean;
  onClose: () => void;
}

const ErrorDialog = ({ title, description, open, onClose }: Props) => {
  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Content style={{ maxWidth: 500 }}>
        <AlertDialog.Title>{title}</AlertDialog.Title>
        <AlertDialog.Description size="2">
          {description}
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Action>
            <Button variant="soft" onClick={onClose}>
              OK
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default ErrorDialog;
