import { type ReactNode } from 'react';
/**
 * A single button of a {@link ButtonGroup}.
 *
 * @category UI
 */
export type ButtonGroupOptionType<ValueType extends string> = {
    /**
     * The value reported through `onValueChange` when this button is toggled.
     * Must be unique within the group.
     */
    value: ValueType;
    /**
     * Label displayed inside the button.
     */
    label?: ReactNode;
    /**
     * Provide an accessible name for screen readers. Use this when `label`
     * contains no readable text — e.g. an icon-only alignment button.
     *
     * @example
     * `Align left`
     */
    ariaLabel?: string | undefined;
    /**
     * @default false
     */
    disabled?: boolean | undefined;
};
/**
 * The selection behavior of a {@link ButtonGroup}: either a single value can
 * be active at a time, or multiple values can be active simultaneously.
 *
 * @category UI
 */
export type ButtonGroupTypeProps<ValueType extends string> = {
    type: 'single';
    /**
     * The controlled value of the active button. Should be used in
     * conjunction with `onValueChange`.
     */
    value?: ValueType | undefined;
    /**
     * Called when the user activates a button.
     */
    onValueChange(value: ValueType): void;
} | {
    type: 'multiple';
    /**
     * The controlled values of the active buttons. Should be used in
     * conjunction with `onValueChange`.
     */
    value?: ValueType[] | undefined;
    /**
     * Called when the user toggles a button.
     */
    onValueChange(value: ValueType[]): void;
};
/**
 * @category UI
 *
 * @inline
 */
export type ButtonGroupProps<ValueType extends string> = {
    /**
     * Buttons to render in the group. Each item must have a unique `value`.
     */
    options: ReadonlyArray<ButtonGroupOptionType<ValueType>>;
    /**
     * Provide an accessible name for the group as a whole. Button groups rarely
     * have a visible caption, so setting this is recommended — it tells screen
     * reader users what the buttons collectively control.
     *
     * @example
     * `Text alignment`
     */
    ariaLabel?: string | undefined;
    /**
     * When `true`, prevents the user from interacting with the button group and
     * all its items.
     *
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Stretch the group to fill available space and make items within
     * equal-width.
     *
     * @default false
     */
    stretchItems?: boolean | undefined;
} & ButtonGroupTypeProps<ValueType>;
/**
 * Component that displays a group of toggleable buttons, using the currently
 * active HELIO theme. Supports activating a single value or multiple values at
 * once via the `type` prop.
 *
 * @category UI
 *
 * @since 1.1.0
 */
export declare function ButtonGroup<ValueType extends string>(props: ButtonGroupProps<ValueType>): import("react/jsx-runtime").JSX.Element;
