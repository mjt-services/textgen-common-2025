/**
 * Convert Ollama JSON embedding response to Float64Array with full precision.
 *
 * @param jsonResponse - The JSON response from Ollama's /api/embeddings endpoint
 * @returns Float64Array containing 64-bit float values
 */
export function parseEmbeddingToFloat64Array(jsonResponse) {
    if (!Array.isArray(jsonResponse.embedding)) {
        throw new Error('Invalid embedding response: missing or malformed "embedding" array.');
    }
    return new Float64Array(jsonResponse.embedding);
}
export const Embeddings = {
    parseEmbeddingToFloat64Array,
};
//# sourceMappingURL=Embeddings.js.map