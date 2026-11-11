import type { DisplayActionRef } from '../types/action';
import type { DisplayDynamicPropertyRef } from '../types/dynamicProperty';
export declare function isDynamicPropertyRef(value: unknown): value is DisplayDynamicPropertyRef;
export declare function isActionRef(value: unknown): value is DisplayActionRef;
