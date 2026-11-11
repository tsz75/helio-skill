import { type ReactNode } from 'react';
import type { Indeterminate } from '../enums';
/**
 * The checked state of a {@link Checkbox}. In addition to the boolean `true`
 * and `false` states, a checkbox can be `'indeterminate'`.
 *
 * @category UI
 */
export type CheckboxCheckedType = boolean | Indeterminate;
/**
 * @category UI
 *
 * @inline
 */
export type CheckboxProps = {
    /**
     * The checked state of the checkbox. Supports an `'indeterminate'` state in
     * addition to `true` and `false`.
     */
    checked: CheckboxCheckedType;
    /**
     * Called when the user toggles the checkbox.
     */
    onCheckedChange(checked: boolean): void;
    /**
     * Label displayed next to the checkbox. Required so the choice is explicit:
     * the prop can't be omitted. The type still permits "empty" values, though —
     * `""`, `null`, `undefined`, and `false` all render no label.
     */
    label: ReactNode;
    /**
     * Provide an accessible name for screen readers. Use this when `label`
     * contains no readable text — e.g. when it renders only an icon, or when it
     * is empty. It replaces the visible label for assistive technology.
     *
     * @example
     * `Enable notifications`
     */
    ariaLabel?: string;
    /**
     * @default false
     */
    disabled?: boolean;
    /** Automatically focus the checkbox when it is rendered to the UI */
    autoFocus?: boolean;
};
/**
 * Component that displays a checkbox using the currently active HELIO theme.
 *
 * @category UI
 *
 * @since 1.0.0
 */
export declare function Checkbox(props: CheckboxProps): import("react/jsx-runtime").JSX.Element;
