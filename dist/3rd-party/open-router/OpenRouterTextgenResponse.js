// @see https://openrouter.ai/docs#responses
export const isOpenRouterNonStreamingChoice = (maybe) => {
    const straw = maybe;
    return (typeof straw === "object" && typeof straw.message?.content === "string");
};
export const isOpenrouterStreamingChoice = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && typeof straw.delta?.content === "string";
};
//# sourceMappingURL=OpenRouterTextgenResponse.js.map