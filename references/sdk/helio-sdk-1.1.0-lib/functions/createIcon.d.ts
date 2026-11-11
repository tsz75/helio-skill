import type { ComponentType, SVGProps } from 'react';
import type { Namespace } from '../types/namespace';
export type IconSize = 'S' | 'M' | 'L';
export type IconComponentProps = {
    size: IconSize;
};
/**
 * @inline
 */
export type CreateIconOptions = {
    /**
     * Human-readable name for this icon.
     *
     * Will be shown in the IDE icon selector.
     */
    name: string;
    /**
     * Optional description text for this icon.
     *
     * Will be shown in the IDE icon selector and can be used to improve
     * discoverability through search.
     */
    description?: string;
    /**
     * Group name this icon should appear under in the IDE.
     */
    category: string;
    /**
     * The React component rendering the icon.
     *
     * To include SVG icons, import them directly.
     *
     * ```tsx
     * import icon from './myIcon.svg'
     * ```
     */
    Icon: ComponentType<IconComponentProps & SVGProps<SVGSVGElement>>;
};
export type CreateIconResult = {
    namespace: Namespace;
} & CreateIconOptions;
/**
 * Creates a HELIO icon.
 *
 * Icons should be SVGs and included using `import`.
 *
 * @category Functions
 *
 * @since 1.0.0
 *
 * @example Usage
 * ```tsx
 * import CircleIcon from './Circle.svg';
 *
 * const namespace = createNamespace({ name: 'foo.bar' });
 *
 * const icon = createIcon(namespace, {
 *   name: 'Circle',
 *   description: 'A Roundish Shape',
 *   category: 'My Extension Icons',
 *   Icon: CircleIcon,
 * });
 * ```
 *
 * @example Define multiple svgs optimized for different sizes
 * ```tsx
 * import CircleIconS from './CircleS.svg';
 * import CircleIconM from './CircleM.svg';
 * import CircleIconL from './CircleL.svg';
 *
 * const namespace = createNamespace({ name: 'foo.bar' });
 *
 * const icon = createIcon(namespace, {
 *   name: 'Circle',
 *   description: 'A Roundish Shape',
 *   category: 'My Extension Icons',
 *   Icon(props) {
 *     switch (props.size) {
 *       case 'S':
 *         return <CircleIconS />;
 *       case 'M':
 *         return <CircleIconM />;
 *       case 'L':
 *         return <CircleIconL />;
 *     }
 *   },
 * });
 * ```
 */
export declare function createIcon(
/**
 * Namespace for uniquely addressing this element.
 *
 * @see {@link createNamespace}
 */
namespace: Namespace, options: CreateIconOptions): CreateIconResult;
