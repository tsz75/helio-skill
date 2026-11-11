export type ValueTypeNumber = {
    type: 'Number';
};
export type ValueTypeString = {
    type: 'String';
};
export type ValueTypeBoolean = {
    type: 'Boolean';
};
export type ValueTypeUnknown = {
    type: 'Unknown';
};
export type ReturnTypeMap = {
    Number: number;
    String: string;
    Boolean: boolean;
    Unknown: unknown;
};
export type ValueType = ValueTypeNumber | ValueTypeString | ValueTypeBoolean | ValueTypeUnknown;
export type ValueReturnType<T extends ValueType> = T extends {
    type: infer K;
} ? K extends keyof ReturnTypeMap ? ReturnTypeMap[K] : unknown : unknown;
