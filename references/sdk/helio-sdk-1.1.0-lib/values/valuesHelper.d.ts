import type { ValueTypeBoolean, ValueTypeNumber, ValueTypeString, ValueTypeUnknown } from '../types/values';
export declare const values: {
    Number: () => ValueTypeNumber;
    String: () => ValueTypeString;
    Boolean: () => ValueTypeBoolean;
    Unknown: () => ValueTypeUnknown;
};
