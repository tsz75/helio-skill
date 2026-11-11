import { type ReactNode } from 'react';
/**
 * A single selectable option of a {@link Dropdown}.
 *
 * @category UI
 */
export type DropdownOptionType<ValueType> = {
    /**
     * The value reported through `onValueChange` when this option is selected.
     */
    value: ValueType;
    /**
     * Label displayed for this option.
     */
    label: string;
    /**
     * Icon displayed next to the label, both in the option list and in the
     * closed dropdown while this option is selected.
     */
    icon?: ReactNode | undefined;
    /**
     * @default false
     */
    disabled?: boolean | undefined;
};
/**
 * @category UI
 *
 * @inline
 */
export type DropdownProps<ValueType> = {
    /**
     * Available options that can be selected.
     */
    options: ReadonlyArray<DropdownOptionType<ValueType>>;
    /**
     * The controlled value of the dropdown. Should be used in conjunction with
     * `onValueChange`.
     */
    value?: ValueType | undefined;
    /**
     * Called when the user selects an option.
     */
    onValueChange(value: ValueType): void;
    /**
     * The placeholder text shown while no option is selected.
     */
    placeholder?: string | undefined;
    /**
     * Provide an accessible name for screen readers. Use this when the dropdown
     * has no visible label next to it — the selected option's text does not
     * name the control itself.
     *
     * @example
     * `Operating system`
     */
    ariaLabel?: string | undefined;
    /**
     * @default false
     */
    disabled?: boolean | undefined;
};
/**
 * Component that displays a dropdown to select one of the given options,
 * using the currently active HELIO theme.
 *
 * @category UI
 *
 * @since 1.0.0
 */
export declare function Dropdown<ValueType>(props: DropdownProps<ValueType>): import("react/jsx-runtime").JSX.Element;
