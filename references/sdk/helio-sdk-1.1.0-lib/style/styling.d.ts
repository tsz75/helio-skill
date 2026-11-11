import type { CSSInterpolation } from '@emotion/serialize';
/**
 * Creates dynamic CSS class name.
 *
 * The resulting CSS will automatically be made available when the component using it
 * is rendered.
 *
 * Note that CSS class names are generated and guaranteed to be unique for the given properties.
 *
 * @category CSS
 *
 * @example Apply basic CSS to an element
 * ```tsx
 * // Create CSS definition and bind it to a variable
 * const header = className({ fontSize: 16, fontWeight: bold });
 *
 * function MyComponent() {
 *   // Apply that class name to an element
 *   return <span className={header}>Header</span>
 * }
 * ```
 *
 * @example Use pseudo-classes and descendant selectors
 * ```tsx
 * const list = className({
 *   // Give the entire list a yellow background color
 *   background: 'yellow',
 *
 *   // Apply rules to all direct descendant `li` elements
 *   '> li': {
 *     color: 'blue',
 *
 *     // Apply an underline to a `li` that has `:hover`
 *     ':hover': { textDecoration: 'underline' }
 *   }
 * });
 *
 * function MyComponent() {
 *   return (
 *     <ul className={list}>
 *       <li>Item 1</li>
 *       <li>Item 2</li>
 *       <li>Item 3</li>
 *     </ul>
 *   );
 * }
 * ```
 */
export declare function className(properties: CSSInterpolation): string;
/**
 * Merges multiple {@link className|classNames}
 *
 * @example Combine two class names
 * ```tsx
 * const color = className({ color: 'blue' });
 * const background = className({ background: 'yellow' });
 *
 * function MyComponent() {
 *   return (
 *     <div className={cx(color, background)}>
 *       Colorized
 *     </div>
 *   );
 * }
 * ```
 *
 *
 * @example Conditionally apply classes
 * ```tsx
 * const color = className({ color: 'blue' });
 * const background = className({ background: 'yellow' });
 *
 * function MyComponent(props) {
 *   return (
 *     <div
 *       className={cx(color, {
 *         // Set the background color only if `props.isActive` is `true`
 *         [background]: props.isActive,
 *       })}
 *     >
 *       Colorized
 *     </div>
 *   );
 * }
 * ```
 *
 * @category CSS
 */
export declare function cx(...classNames: (string | undefined | CSSObject)[]): string;
type CSSObject = Record<string, boolean | undefined>;
/**
 * Creates a [CSS keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) animation.
 *
 * Can be applied to an element using a
 * [CSS `animation`](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) property.
 *
 * @see {@link className}
 *
 * @example Apply animation to element
 * ```tsx
 * const scale = keyframes({
 *   'from, to': { transform: 'scale(1)' },
 *   '50%': { transform: 'scale(1.02)' },
 * });
 *
 * const pulse = className({ animation: `${scale} 1s ease infinite` })
 *
 * function MyComponent() {
 *   return (
 *     <div className={pulse}>Pulsing</div>
 *   );
 * }
 * ```
 *
 * @category CSS
 */
export declare function keyframes(frames: Record<string, CSSInterpolation>): string;
export {};
