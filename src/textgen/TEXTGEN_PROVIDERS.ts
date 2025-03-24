export const TEXTGEN_PROVIDERS = ["openai", "oobabooga"] as const;

export type TextgenProviderType = (typeof TEXTGEN_PROVIDERS)[number];
