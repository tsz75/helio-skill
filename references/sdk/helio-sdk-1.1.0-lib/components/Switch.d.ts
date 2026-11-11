/**
 * @category UI
 *
 * @inline
 */
export type SwitchProps = {
    /**
     * The checked state of the switch.
     */
    checked: boolean;
    /**
     * Called when the user toggles the switch.
     */
    onCheckedChange(checked: boolean): void;
    /**
     * Provide an accessible name for screen readers. The switch renders no
     * visible label of its own, so set this unless a visible label is
     * associated with it elsewhere.
     *
     * @example
     * `Dark mode`
     */
    ariaLabel?: string;
    /**
     * @default false
     */
    disabled?: boolean;
};
/**
 * Component that displays a switch using the currently active HELIO theme.
 *
 * @category UI
 *
 * @since 1.0.0
 */
export declare function Switch(props: SwitchProps): import("react/jsx-runtime").JSX.Element;
