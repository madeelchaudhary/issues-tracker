"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import SimpleMdeReact from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import issueSchema, { IssueSchema } from "@/validations/issue";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import ErrorMessage from "@/components/ui/ErrorMessage";

const NewIssuePage = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueSchema>({
    resolver: zodResolver(issueSchema),
  });

  const onSubmit = async (data: IssueSchema) => {
    try {
      const response = await axios.post("/api/issues", data);
      router.push(`/issues`);
    } catch (error) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <main className="max-w-xl p-5">
      {error && (
        <Callout.Root className="mb-3">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <h1>New Issue</h1>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root>
          <TextField.Input {...register("title")} placeholder="Title" />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMdeReact {...field} placeholder="Description" />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button>Submit Issue</Button>
      </form>
    </main>
  );
};

export default NewIssuePage;
