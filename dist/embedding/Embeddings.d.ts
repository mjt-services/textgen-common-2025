/**
 * Convert Ollama JSON embedding response to Float64Array with full precision.
 *
 * @param jsonResponse - The JSON response from Ollama's /api/embeddings endpoint
 * @returns Float64Array containing 64-bit float values
 */
export declare function parseEmbeddingToFloat64Array(jsonResponse: {
    embedding: number[];
}): Float64Array;
export declare const Embeddings: {
    parseEmbeddingToFloat64Array: typeof parseEmbeddingToFloat64Array;
};
