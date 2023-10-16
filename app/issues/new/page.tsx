"use client";
import { TextField, TextArea, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <main className="p-5">
      <h1>New Issue</h1>
      <div className="max-w-xl space-y-3">
        <TextField.Root>
          <TextField.Input placeholder="Title" />
        </TextField.Root>
        <TextArea placeholder="Description" />
        <Button>Submit Issue</Button>
      </div>
    </main>
  );
};

export default NewIssuePage;
