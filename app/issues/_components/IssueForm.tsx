"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";

import ErrorMessage from "@/components/ui/ErrorMessage";
import Spinner from "@/components/ui/Spinner";
import issueSchema, { IssueSchema } from "@/validations/issue";
import axios, { AxiosResponse } from "axios";
import "easymde/dist/easymde.min.css";
import { Issue } from "@prisma/client";

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueSchema>({
    resolver: zodResolver(issueSchema),
    defaultValues: {
      title: issue?.title,
      description: issue?.description,
    },
  });

  const onSubmit = async (data: IssueSchema) => {
    setIsSubmitting(true);
    try {
      let response: AxiosResponse;
      if (issue) response = await axios.patch(`/api/issues/${issue.id}`, data);
      else response = await axios.post("/api/issues", data);
      router.push(`/issues`);
      router.refresh();
    } catch (error: any) {
      let err = "An unexpected error occurred.";
      if (error.response.data) err = error.response.data.error;
      setError(err);
      setIsSubmitting(false);
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
        <Button disabled={isSubmitting}>
          {issue ? "Update Issue" : "Create Issue"}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </main>
  );
};

export default IssueForm;
