import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(
  "https://cunfcsyvefbjhcqyaohz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDI0NjY5NSwiZXhwIjoxOTQ1ODIyNjk1fQ.gyLOC27S7YZtpV33f-OLPtH_pyGktoeqDY-z4IepMXw"
);
