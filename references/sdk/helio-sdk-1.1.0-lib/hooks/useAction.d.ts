import type { ActionRef, UseActionHookResult } from '../types/action';
/**
 * Prepares an Action Ref for execution.
 *
 * @category Hooks
 *
 * @since 1.0.0
 *
 * @example
 *   const onClick = useAction(props.onClick);
 *
 *   return (
 *     <button onClick={onClick.call}>
 *       {onClick.render()}
 *       Button
 *     </button>
 *   );
 */
export declare function useAction(action: ActionRef | undefined): UseActionHookResult;
