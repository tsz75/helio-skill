import type { ActionRef } from '../types/action';
import type { DisplayDynamicPropertyRef } from '../types/dynamicProperty';
declare function alert(options: {
    message: DisplayDynamicPropertyRef;
    onConfirm?: ActionRef;
    onCancel?: ActionRef;
}): ActionRef;
export declare const actions: {
    Alert: typeof alert;
};
export {};
