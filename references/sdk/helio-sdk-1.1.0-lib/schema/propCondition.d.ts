import type { PropCondition } from '../types/schema';
/**
 * Declares a condition that matches while the referenced sibling prop holds
 * exactly the given value.
 *
 * @example Only display a prop while `mode` is `'static'`
 * ```ts
 * {
 *   staticValue: props.String({
 *     label: 'Value',
 *     optional: false,
 *     defaultValue: '',
 *     visibleIf: condition.propEquals('mode', 'static'),
 *   }),
 * }
 * ```
 */
export declare function propEquals(prop: string, equals: string | number | boolean | undefined): PropCondition;
/**
 * Declares a condition that matches while the referenced sibling prop holds
 * any value other than the given one.
 *
 * @example Only allow editing a prop while `size` is not `'Fixed'`
 * ```ts
 * {
 *   customHeight: props.Number({
 *     label: 'Height',
 *     optional: false,
 *     defaultValue: 0,
 *     enabledIf: condition.propNotEquals('size', 'Fixed'),
 *   }),
 * }
 * ```
 */
export declare function propNotEquals(prop: string, notEquals: string | number | boolean | undefined): PropCondition;
/**
 * Declares a condition that matches while the referenced sibling prop holds
 * one of the given values.
 *
 * @example Only display a prop while `placement` is `'left'` or `'right'`
 * ```ts
 * {
 *   width: props.Number({
 *     label: 'Width',
 *     optional: false,
 *     defaultValue: 320,
 *     visibleIf: condition.propOneOf('placement', ['left', 'right']),
 *   }),
 * }
 * ```
 */
export declare function propOneOf(prop: string, oneOf: ReadonlyArray<string | number>): PropCondition;
/**
 * Declares a condition that matches while the referenced sibling prop holds
 * none of the given values.
 *
 * @example Only display a prop while `placement` is neither `'top'` nor `'bottom'`
 * ```ts
 * {
 *   width: props.Number({
 *     label: 'Width',
 *     optional: false,
 *     defaultValue: 320,
 *     visibleIf: condition.propNotOneOf('placement', ['top', 'bottom']),
 *   }),
 * }
 * ```
 */
export declare function propNotOneOf(prop: string, notOneOf: ReadonlyArray<string | number>): PropCondition;
/**
 * Helpers for declaring `visibleIf`/`enabledIf` conditions on props in a
 * {@link PropsSchema}.
 *
 * Conditions reference a sibling prop on the same schema level and are
 * evaluated against its current value in the IDE.
 *
 * @see {@link propEquals}
 * @see {@link propNotEquals}
 * @see {@link propOneOf}
 * @see {@link propNotOneOf}
 */
export declare const condition: {
    propEquals: typeof propEquals;
    propNotEquals: typeof propNotEquals;
    propOneOf: typeof propOneOf;
    propNotOneOf: typeof propNotOneOf;
};
