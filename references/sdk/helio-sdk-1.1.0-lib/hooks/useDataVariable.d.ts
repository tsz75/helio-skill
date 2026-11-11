import type { DisplayDynamicPropertyRef } from '../types/dynamicProperty';
import type { DataVariableMeta, DataVariableStatus } from '../types/meta';
import type { ValueReturnType, ValueType } from '../types/values';
export type UseDataVariableOptions<V extends ValueType> = {
    /**
     * Optional schema to validate the possible types of _value_ we expect the
     * dynamic property to produce. Whenever a value does not match this schema, the
     * dynamic property's `value` property will become `undefined`.
     *
     * @example Basic Usage
     * ```tsx
     *   const title = useDynamicProperty(props.title, { valueSchema: values.String() });
     * ```
     */
    valueType?: V;
};
type BaseResult<V extends ValueType> = {
    /**
     * Dynamic property meta information if any exists. This will always match the
     * provided `metaSchema`.
     * If no `metaSchema` is specified, `meta` will be `undefined`.
     * If the current metadata does not match the given `metaSchema`, the
     * dynamic property's `meta` will become undefined.
     */
    meta: DataVariableMeta | undefined;
    /**
     * Can the dynamic property value be read?
     * If this is `undefined`, the current status of the read permission cannot
     * be determined, e.g. when backend connection has not been established yet.
     */
    canRead: boolean | undefined;
    /**
     * Can the dynamic property value be written?
     * If this is `undefined`, the current status of the write permission cannot
     * be determined, e.g. when backend connection has not been established yet.
     */
    canWrite: boolean | undefined;
    /**
     * Render the component required for the dynamicProperty to update its internal
     * state at runtime. This must be included in the return value of a
     * component using the dynamicProperty.
     */
    render(): React.ReactNode;
    /**
     * Update the dynamic property's value. This might be a no-op on some dynamic
     * properties that are not writable. If writing requires specific permissions,
     * these need to be checked explicitly.
     *
     * @param nextValue
     */
    setValue(
    /**
     * Value that should be written back to the dynamic property
     */
    nextValue: ValueReturnType<V>): Promise<void>;
};
type Formatted = {
    /**
     * Formatted value including unit (if present)
     */
    display: string | undefined;
    /**
     * Formatted value without unit
     */
    unitless: string | undefined;
};
type RangeBound = {
    /**
     * The raw unformatted variable value.
     *
     * Can be used in calculations. When displaying values to the user, you
     * should prefer to use `.formatted`.
     */
    raw: number;
    /**
     * Relative value between 0–1.
     */
    relative: number | undefined;
    /**
     * Value, formatted with correct number format, enums and translations
     * applied. Should be used when displaying values to the user.
     */
    formatted: Formatted;
};
export type DataVariableDisplayRange = {
    status: DataVariableStatus;
    lowerBound: RangeBound;
    upperBound: RangeBound;
};
export type UseDataVariableHookResult<V extends ValueType> = {
    value: {
        /**
         * The raw unformatted variable value.
         *
         * Can be used in calculations. When displaying values to the user, you
         * should prefer to use `.formatted`.
         */
        raw: ValueReturnType<V> | undefined;
        /**
         * Relative value between 0–1.
         *
         * Only available for numeric values that have set minima and maxima.
         */
        relative: number | undefined;
        /**
         * Value, formatted with correct number format, enums and translations
         * applied. Should be used when displaying values to the user.
         */
        formatted: Formatted;
        /**
         * Value, formatted with correct number format and enums but without
         * translations applied. Can for example be used when directly working with
         * underlying enum values.
         */
        untranslated: Formatted;
    };
    minValue: {
        /**
         * The raw unformatted variable value.
         *
         * Can be used in calculations. When displaying values to the user, you
         * should prefer to use `.formatted`.
         */
        raw: number | undefined;
        /**
         * Value, formatted with correct number format, enums and translations
         * applied. Should be used when displaying values to the user.
         */
        formatted: Formatted;
    };
    maxValue: {
        /**
         * The raw unformatted variable value.
         *
         * Can be used in calculations. When displaying values to the user, you
         * should prefer to use `.formatted`.
         */
        raw: number | undefined;
        /**
         * Value, formatted with correct number format, enums and translations
         * applied. Should be used when displaying values to the user.
         */
        formatted: Formatted;
    };
    /**
     * Variable unit (if present)
     */
    unit: string | undefined;
    /**
     * Variable status if affected by ranges, otherwise `undefined`.
     */
    status: DataVariableStatus | undefined;
    ranges: Array<DataVariableDisplayRange> | undefined;
    /**
     * Format a given value using this variable's meta data
     */
    formatValue(value: number): Formatted;
} & BaseResult<V>;
/**
 * Prepares a dynamic property that is expected to result in a Data Variable.
 *
 * @category Hooks
 *
 * @since 1.0.0
 */
export declare function useDataVariable<V extends ValueType>(dynamicPropertyRef: DisplayDynamicPropertyRef | undefined, options?: UseDataVariableOptions<V>): UseDataVariableHookResult<V>;
export {};
