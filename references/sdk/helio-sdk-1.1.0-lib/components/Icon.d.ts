import { type CSSProperties } from 'react';
import type { IconRef } from '../types/icon';
/**
 * @category UI
 *
 * @inline
 */
export type IconProps = IconRef & {
    size: 'S' | 'M' | 'L';
    style?: CSSProperties;
};
/**
 * Displays an icon from the HELIO library.
 *
 * @category UI
 *
 * @since 1.0.0
 */
export declare function Icon(props: IconProps): import("react/jsx-runtime").JSX.Element;
