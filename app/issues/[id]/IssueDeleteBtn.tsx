import { Button } from "@radix-ui/themes";
import React from "react";

interface Props {
  issueId: string;
}

const IssueDeleteBtn = ({ issueId }: Props) => {
  return <Button color="red">Delete</Button>;
};

export default IssueDeleteBtn;
