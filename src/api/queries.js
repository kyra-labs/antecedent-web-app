import { supabase } from "./supabaseClient";

export const getLatestDigest = async () => {
  const { data: latest, error } = await supabase
    .from("digests")
    .select(
      `
        id, 
        digest_date, 
        title, 
        introduction, 
        reading_minutes,
        digest_items(
            rank, 
            section, 
            events(
                title,
                category,
                importance_score,
                what_happened,
                background,
                what_changed,
                why_it_matters,
                uncertainties,
                timeline,
                event_articles(
                    articles(
                        canonical_url,
                        sources(name))))) `,
    )
    .eq("status", "ready")
    .order("digest_date", { ascending: false })
    .order("rank", { foreignTable: "digest_items" })
    .limit(1)
    .maybeSingle();

  if (error) throw error;

  return latest;
};

export const getDigestById = async (id) => {
  const { data, error } = await supabase
    .from("digests")
    .select(
      `
        id, 
        digest_date, 
        title, 
        introduction, 
        reading_minutes,
        digest_items(
            rank, 
            section, 
            events(
                title,
                category,
                importance_score,
                what_happened,
                background,
                what_changed,
                why_it_matters,
                uncertainties,
                timeline,
                event_articles(
                    articles(
                        canonical_url,
                        sources(name))))) `,
    )
    .eq("id", id)
    .order("digest_date", { ascending: false })
    .order("rank", { foreignTable: "digest_items" })
    .limit(1)
    .single();

  if (error) throw error;

  return data;
};

export const getDigestArchive = async () => {
  const { data, error } = await supabase
    .from("digests")
    .select(
      `
        id, 
        digest_date, 
        title,
        reading_minutes `,
    )
    .eq("status", "ready")
    .order("digest_date", { ascending: false });

  if (error) throw error;

  return data;
};
