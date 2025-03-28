import { iff, isDefined } from "@mjt-engine/object";
import type { TextgenConnectionMap } from "../TextgenConnectionMap";
import type { MessageConnectionInstance } from "@mjt-engine/message/dist/createConnection";

export const ask =
  <M extends TextgenConnectionMap>(con: MessageConnectionInstance<M>) =>
  async ({
    userMessage,
    systemMessage,
    timeoutMs = 60 * 1000,
    model,
  }: {
    systemMessage?: string;
    userMessage: string;
    timeoutMs?: number;
    model?: string;
  }): Promise<string | undefined> => {
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
              iff(
                systemMessage,
                (content) =>
                  ({
                    role: "system",
                    content,
                  } as const)
              ),
              {
                role: "user",
                content: userMessage,
              } as const,
            ].filter(isDefined),
          },
        },
      });
    });
  };
