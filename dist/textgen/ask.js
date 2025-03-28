import { iff, isDefined } from "@mjt-engine/object";
export const ask = (con) => async ({ userMessage, systemMessage, timeoutMs = 60 * 1000, model, }) => {
    return new Promise(async (resolve, reject) => {
        await con.requestMany({
            options: {
                timeoutMs,
            },
            subject: "textgen.generate",
            onResponse: async (response) => {
                if (response.done) {
                    resolve(response.text);
                    return;
                }
            },
            request: {
                body: {
                    model,
                    stream: true,
                    messages: [
                        iff(systemMessage, (content) => ({
                            role: "system",
                            content,
                        })),
                        {
                            role: "user",
                            content: userMessage,
                        },
                    ].filter(isDefined),
                },
            },
        });
    });
};
//# sourceMappingURL=ask.js.map