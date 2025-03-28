export declare const Textgens: {
    chatMessagesToPromptText: ({ messages, messageTemplate, }: {
        messages: Readonly<import("..").OpenRouterMessage[]>;
        messageTemplate: import("./ChatMessageTemplate").ChatMessageTemplate;
    }) => string;
    ask: <M extends import("..").TextgenConnectionMap>(con: import("@mjt-engine/message/dist/createConnection").MessageConnectionInstance<M>) => ({ userMessage, systemMessage, timeoutMs, model, }: {
        systemMessage?: string;
        userMessage: string;
        timeoutMs?: number;
        model?: string;
    }) => Promise<string | undefined>;
};
