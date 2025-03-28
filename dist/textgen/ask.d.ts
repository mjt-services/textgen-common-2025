import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
import type { TextgenConnectionMap } from "../TextgenConnectionMap";
export declare const ask: <M extends TextgenConnectionMap>(con: MessageConnectionInstance<M>) => ({ userMessage, systemMessage, timeoutMs, model, }: {
    systemMessage?: string;
    userMessage: string;
    timeoutMs?: number;
    model?: string;
}) => Promise<string | undefined>;
