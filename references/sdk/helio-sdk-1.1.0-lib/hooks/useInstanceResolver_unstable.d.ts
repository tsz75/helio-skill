import type { DisplayInstance, InstanceRefSchema } from '../types/instance';
/**
 * @experimental Might be removed in future versions or change behavior
 * @category Hooks
 *
 */
export declare function useInstanceResolver_unstable(): <PropsType extends Record<string, unknown>>(instanceRef: InstanceRefSchema, predicate?: (props: object) => props is PropsType) => DisplayInstance<PropsType> | undefined;
