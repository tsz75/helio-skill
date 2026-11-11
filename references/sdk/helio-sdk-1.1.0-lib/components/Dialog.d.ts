import { type ReactNode } from 'react';
import type { IconRef } from '../types/icon';
export type DialogProps = {
    title?: ReactNode;
    icon?: IconRef;
    leftButtons?: ReactNode;
    rightButtons?: ReactNode;
    width?: number;
    /** Called when the user clicks the closing X in the top right corner of the dialog. */
    onClose?(): void;
    children: ReactNode;
};
/**
 * @category Components
 *
 * @since 1.0.0
 */
export declare function Dialog(props: DialogProps): import("react/jsx-runtime").JSX.Element;
