import { type CSSProperties, type FocusEvent, type ReactNode } from 'react';
/**
 * @category UI
 *
 * @inline
 */
export type NumberInputProps = {
    /**
     * Current value of the input if using a "controlled" component
     *
     * If this prop changes over time, the field will be updated.
     */
    value?: number | undefined;
    /**
     * Default value of the input if using as an "uncontrolled" component.
     *
     * If this prop changes over time, the field will _not_ be updated.
     */
    defaultValue?: number | undefined;
    /**
     * Placeholder text that will be displayed while the field has no value.
     */
    placeholder?: string | undefined;
    /**
     * Provide an accessible name for screen readers. Use this when the input
     * has no visible label — e.g. a compact font-size field marked only by an
     * icon. A `placeholder` alone does not name the input.
     *
     * @example
     * `Font size`
     */
    ariaLabel?: string | undefined;
    disabled?: boolean | undefined;
    invalid?: boolean | undefined;
    readOnly?: boolean | undefined;
    autoFocus?: boolean | undefined;
    style?: CSSProperties | undefined;
    /**
     * Unit information displayed next to the current value
     */
    unit?: string | undefined;
    /**
     * Formatting options for displaying the value.
     *
     * Values will automatically be formatted using the currently active locale.
     */
    format?: Intl.NumberFormatOptions;
    /** Integer step size */
    stepSize?: number;
    /** Whether to show increment/decrement buttons */
    showStepper?: boolean;
    range?: {
        min?: number;
        max?: number;
    };
    leftItems?: ReactNode | undefined;
    rightItems?: ReactNode | undefined;
    /**
     * Called with the new input value when the value is changed by the user.
     */
    onChange(nextValue: number): void;
    /**
     * Called when the input receives focus.
     */
    onFocus?(event: FocusEvent): void;
    /**
     * Called when the input loses focus.
     */
    onBlur?(event: FocusEvent): void;
};
/**
 * Component that displays a numeric input field using the currently active HELIO theme.
 *
 * @category UI
 *
 * @since 1.0.0
 */
export declare function NumberInput(props: NumberInputProps): import("react/jsx-runtime").JSX.Element;
