export type OobaboogaTextgenResponse = {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: OobaboogaChoice[];
};
export declare const isOobaboogaChoice: (maybe: unknown) => maybe is OobaboogaChoice;
export type OobaboogaChoice = {
    index: number;
    finish_reason: null;
    text: string;
    logprobs: Logprobs;
};
type Logprobs = {
    top_logprobs: object[];
};
export {};
