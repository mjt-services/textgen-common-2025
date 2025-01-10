import type { OpenRouterMessage } from "../3rd-party/open-router/OpenRouterTextgenRequest";
import type { ChatMessageTemplate } from "./ChatMessageTemplate";
export declare const chatMessagesToPromptText: ({ messages, messageTemplate, }: {
    messages: Readonly<OpenRouterMessage[]>;
    messageTemplate: ChatMessageTemplate;
}) => string;
