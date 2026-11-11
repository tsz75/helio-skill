import type { Icons } from '../main';
import type { DisplayDynamicPropertyRef } from '../types/dynamicProperty';
export declare const StaticId = "com.helio-hmi.builtin.Static";
export declare const DataVariableId = "com.helio-hmi.builtin.ServiceData";
export declare const SignalingStatusId = "com.helio-hmi.builtin.SignalingStatus";
export declare const TranslatableId = "com.helio-hmi.builtin.MsgFormat";
export declare const IconId = "com.helio-hmi.builtin.Icon";
type Status = 'good' | 'warning' | 'critical' | 'accent' | 'neutral';
export declare const dynamicProperties: {
    StaticValue: (value: string | number | boolean) => DisplayDynamicPropertyRef;
    DataVariable: () => DisplayDynamicPropertyRef;
    Translatable: (messageKey: string) => DisplayDynamicPropertyRef;
    Status: (initialStatus: Status) => DisplayDynamicPropertyRef;
    Icon: (iconName: Icons) => DisplayDynamicPropertyRef;
};
type UnvalidatedDynamicPropertyData = {
    value: unknown;
    meta: unknown;
};
export declare function mockDynamicProperty(dynamicProperty: DisplayDynamicPropertyRef | undefined): UnvalidatedDynamicPropertyData;
export {};
