"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export const createCompoanion = async (formData: CreateCompanion) => {
  const { userId } = await auth();
  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author: userId })
    .select();

  if (error || !data) {
    throw new Error(error.message || "Failed to create companion");
  }

  return data[0];
};
