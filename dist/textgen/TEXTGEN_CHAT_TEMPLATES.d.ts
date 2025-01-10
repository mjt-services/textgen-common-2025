import type { ChatMessageTemplate } from "./ChatMessageTemplate";
export declare const CHAT_ML_TEMPLATE: ChatMessageTemplate;
export declare const LLAMA3_TEMPLATE: ChatMessageTemplate;
export declare const OPENCHAT_TEMPLATE: ChatMessageTemplate;
export declare const DEFAULT_CHAT_MESSAGE_TEMPLATE: ChatMessageTemplate;
export declare const TEXTGEN_CHAT_TEMPLATES: {
    readonly chatML: ChatMessageTemplate;
    readonly llama3: ChatMessageTemplate;
    readonly glm3: ChatMessageTemplate;
    readonly openchat: ChatMessageTemplate;
};
export type TextgenChatTemplateType = keyof typeof TEXTGEN_CHAT_TEMPLATES;
