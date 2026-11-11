import type { ActionRef } from '../types/action';
import type { DynamicPropertyRef } from '../types/dynamicProperty';
import type { OpaqueFileRef } from '../types/file';
import type { InstanceRefListSchema } from '../types/instance';
import type { PropertyType } from './propHelpers';
export type HelioType = {
    kind: string;
    optional: boolean;
    value: unknown;
};
export type HelioString = {
    kind: 'String';
    optional: boolean;
    value: string;
};
export type HelioNumber = {
    kind: 'Number';
    optional: boolean;
    value: number;
    minValue?: number;
    maxValue?: number;
};
export type HelioBoolean = {
    kind: 'Boolean';
    optional: boolean;
    value: boolean;
};
export type HelioEnum = {
    kind: 'Enum';
    optional: boolean;
    value: string;
    options: Array<string>;
};
export type HelioChildren = {
    kind: 'Children';
    optional: boolean;
    value: InstanceRefListSchema;
};
export type HelioDynamicProperty = {
    kind: 'DynamicProperty';
    optional: boolean;
    value: DynamicPropertyRef;
};
export type HelioAction = {
    kind: 'Action';
    optional: boolean;
    value: ActionRef;
};
export type HelioFile = {
    kind: 'File';
    optional: boolean;
    value: OpaqueFileRef;
};
export type HelioObject = {
    kind: 'Object';
    optional: boolean;
    value: Record<string, unknown>;
};
export type HelioList = {
    kind: 'List';
    optional: boolean;
    value: Array<unknown>;
};
export type ValueOf<T extends PropertyType> = T['value'];
export type Required<T extends HelioType> = {
    [key in keyof T]: key extends 'optional' ? false : T[key];
};
