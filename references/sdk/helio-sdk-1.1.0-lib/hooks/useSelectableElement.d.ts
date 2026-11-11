export type UseSelectableElementResult = {
    'data-helio-id': string | undefined;
};
/**
 * Makes a DOM element selectable in the IDE.
 *
 * @category Hooks
 *
 * @since 1.0.0
 *
 * @example Usage
 * ```tsx
 * function MyComponent() {
 *   const selectableAttrs = useSelectableElement();
 *
 *   return <div {...selectableAttrs}>Selectable Element</div>;
 * }
 * ```
 */
export declare function useSelectableElement(): UseSelectableElementResult;
