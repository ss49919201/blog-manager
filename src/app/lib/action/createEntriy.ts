"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1),
  body: z.string().min(1),
});

export async function createEntry(data: FormData) {
  console.log(data);

  const { title, body } = schema.parse({
    title: data.get("title"),
    body: data.get("body"),
  });

  console.log(title, body);

  redirect("/entries");
}
