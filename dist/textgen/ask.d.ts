import type { TextgenConnectionMap } from "../TextgenConnectionMap";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";
export declare const ask: <M extends TextgenConnectionMap>(con: MessageConnectionInstance<M>) => ({ userMessage, systemMessage, timeoutMs, model, }: {
    systemMessage?: string;
    userMessage: string;
    timeoutMs?: number;
    model?: string;
}) => Promise<string | undefined>;
