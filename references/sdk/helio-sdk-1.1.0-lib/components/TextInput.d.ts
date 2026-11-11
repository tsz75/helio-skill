import { type CSSProperties, type FocusEvent, type ReactNode } from 'react';
/**
 * @category UI
 *
 * @inline
 */
export type TextInputProps = {
    value?: string | undefined;
    defaultValue?: string | undefined;
    placeholder?: string | undefined;
    /**
     * Provide an accessible name for screen readers. Use this when the input
     * has no visible label — e.g. a filter field marked only by a
     * magnifying-glass icon. A `placeholder` alone does not name the input.
     *
     * @example
     * `Filter messages`
     */
    ariaLabel?: string | undefined;
    disabled?: boolean | undefined;
    invalid?: boolean | undefined;
    readOnly?: boolean | undefined;
    autoFocus?: boolean | undefined;
    type?: React.HTMLInputTypeAttribute | undefined;
    style?: CSSProperties | undefined;
    leftItems?: ReactNode | undefined;
    rightItems?: ReactNode | undefined;
    onChange(nextValue: string): void;
    onFocus?(event: FocusEvent): void;
    onBlur?(event: FocusEvent): void;
};
/**
 * Component that displays a text input field using the currently active HELIO theme.
 *
 * @category UI
 *
 * @since 1.0.0
 */
export declare function TextInput(props: TextInputProps): import("react/jsx-runtime").JSX.Element;
