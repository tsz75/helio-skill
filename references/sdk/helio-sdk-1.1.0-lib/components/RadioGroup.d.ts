import { type ReactNode } from 'react';
/**
 * A single selectable option of a {@link RadioGroup}.
 *
 * @category UI
 */
export type RadioGroupOptionType<ValueType> = {
    /**
     * The value reported through `onValueChange` when this option is selected.
     */
    value: ValueType;
    /**
     * Label displayed next to the radio button.
     */
    label: ReactNode;
};
/**
 * @category UI
 *
 * @inline
 */
export type RadioGroupProps<ValueType> = {
    /**
     * Available options that can be selected.
     */
    options: ReadonlyArray<RadioGroupOptionType<ValueType>>;
    /**
     * The controlled value of the radio group. Should be used in conjunction
     * with `onValueChange`.
     */
    value: ValueType;
    /**
     * Called when the user selects an option.
     */
    onValueChange(value: ValueType): void;
    /**
     * Provide an accessible name for the group as a whole. Radio groups rarely
     * have a visible caption, so setting this is recommended — screen readers
     * announce it when focus enters the group.
     *
     * @example
     * `Operating system`
     */
    ariaLabel?: string | undefined;
    /**
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * @default 'vertical'
     */
    orientation?: 'horizontal' | 'vertical' | undefined;
};
/**
 * Component that displays a group of radio buttons to select one of the given
 * options, using the currently active HELIO theme.
 *
 * @category UI
 *
 * @since 1.1.0
 */
export declare function RadioGroup<ValueType>(props: RadioGroupProps<ValueType>): import("react/jsx-runtime").JSX.Element;
