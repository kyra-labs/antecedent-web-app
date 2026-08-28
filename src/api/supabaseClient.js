import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Fail fast with clear error messages
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase environment variables are missing! " +
      "Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your .env.local file.",
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
