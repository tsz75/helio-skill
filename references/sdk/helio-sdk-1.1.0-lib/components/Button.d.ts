import type { MouseEvent, ReactNode, UIEvent } from 'react';
import type { ButtonVariant } from '../enums';
/**
 * @expand
 */
export type ButtonProps = {
    /**
     * Display the button as checked (i.e. pressed in)
     */
    checked?: boolean;
    /** Automatically focus the button when it is rendered to the UI */
    autoFocus?: boolean;
    /** Items to display in the left slot */
    leftItems?: ReactNode;
    /** Items to display in the right slot */
    rightItems?: ReactNode;
    /**
     * Provide an accessible name for screen readers. Use this when the button
     * shows no visible text — e.g. an icon-only button. On a button with
     * visible text, prefer omitting it.
     *
     * @example
     * `Save document`
     */
    ariaLabel?: string;
    onClick?(event?: MouseEvent): void;
    /**
     * Optional CSS class name
     *
     * @see {@link className}
     */
    className?: string;
    /**
     * @default 'secondary'
     */
    variant?: ButtonVariant;
    /**
     * @default false
     */
    destructive?: boolean;
    /**
     * @default false
     */
    disabled?: boolean;
    children?: ReactNode;
    onClick?(event: UIEvent): void;
};
/**
 * Component that displays a clickable button using the currently active HELIO theme.
 *
 * @category UI
 *
 * @since 1.0.0
 */
export declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
