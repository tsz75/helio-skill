import type { ReactNode } from 'react';
import type { CreateTextsResult, TextsDef } from '../main';
import type { IconRef } from './icon';
import type { MetaReturnType, MetaType } from './meta';
import type { Namespace } from './namespace';
import type { CurrentSchemaValues, PropertyValueType, PropsSchema } from './schema';
import type { ValueReturnType, ValueType } from './values';
/**
 * @inline
 */
export type CreateDynamicPropertyOptions<Schema extends PropsSchema, Texts extends TextsDef = TextsDef> = {
    /**
     * Human-readable name of the dynamic property as it will appear in the
     * HELIO IDE.
     *
     * Note: If no explicit `id` is provided, this value will also be used to
     * create a unique id for the dynamic property.
     *
     * **Changing the name in an extension update will break dynamic property
     * references in existing projects.**
     *
     * If you need to change the name, make sure to provide an `id` with the old
     * name to ensure a smooth migration.
     *
     * @example
     * Migrating dynamic property name.
     * ```tsx
     * {
     *   name: 'New Dynamic Property Name',
     *   id: 'Old Dynamic Property Name',
     *   // ...other `createDynamicProperty` options...
     * }
     * ```
     */
    name: string;
    /**
     * Internal ID of the dynamic property. This uniquely identifies the dynamic
     * property within the extension and should never change. If this property is
     * omitted, the dynamic property will be referenced by its `name`.
     */
    id?: string;
    /**
     * Description of this dynamic property that will appear in the IDE.
     */
    description?: string;
    /**
     * Translation texts used in this dynamic property.
     *
     * @see {@link createTexts}
     */
    texts?: CreateTextsResult<Texts>;
    /**
     * Optional icon to identify this dynamic property in the HELIO IDE.
     *
     * @example
     * ```
     * { name: 'Dinosaur' }
     * ```
     */
    icon?: IconRef;
    /**
     * Optional category for grouping this dynamic property in the HELIO IDE.
     */
    category?: string;
    /**
     * Does this dynamic property support write operations?
     *
     * If set to `false`, elements like inputs will be automatically disabled
     * when receiving values from this dynamic property.
     *
     * Note that a dynamic property might support writing but still want to
     * dynamically enable/disable write access due to other factors. This can be
     * done using the {@link UseDynamic PropertyResult.canWrite | canWrite}
     * property returned from implementation of
     * {@link CreateDynamic PropertyOptions.useDynamic Property}.
     *
     * @see {@link UseDynamic PropertyResult.canWrite}
     */
    writable: boolean;
    /**
     * What kinds of values does this dynamic property provide?
     *
     * This restricts the contexts in which the dynamic property is available. For
     * example, dynamic properties that can produce strings can be used as labels,
     * in outputs, etc.
     *
     * @example
     * Dynamic Property can produce scalar values like strings, numbers, booleans, dates, etc.
     * ```ts
     * ['PrimitiveValue']
     * ```
     *
     * @example
     * Dynamic Property can produce either strings or numbers.
     * ```ts
     * ['String', 'Number']
     * ```
     *
     * @example
     * Dynamic Property can produce image URLs.
     * ```ts
     * ['Image']
     * ```
     *
     * @default ['*']
     */
    valueTypes?: PropertyValueType[];
    /**
     * Schema containing the properties this dynamic property accepts, created
     * using the {@link createPropsSchema} function.
     */
    propsSchema: Schema;
    /**
     * Implementation of this dynamic property.
     *
     * Will be dynamically installed by HELIO as a React hook to allow for data
     * subscription and other scenarios where data changes over time.
     */
    useDynamicProperty(props: CurrentSchemaValues<Schema>): UseDynamicPropertyResult;
};
export type UseDynamicPropertyResult = {
    /**
     * The current type of value that is being returned.
     *
     * This type can change at runtime based on the value the dynamic property
     * is producing.
     *
     * @see {@link values.Number}
     * @see {@link values.Boolean}
     * @see {@link values.String}
     * @see {@link values.Unknown}
     */
    valueType: ValueType;
    /**
     * Current raw dynamic property value.
     *
     * @example 42
     */
    value: unknown;
    /**
     * Optional human-readable dynamic property value.
     *
     * This can include formatting and adjustments based on the current locale or
     * transformations to make the value human-readable.
     *
     * @example "42.00"
     */
    displayValue: string | undefined;
    /**
     * Optional handler for write operations to this dynamic property.
     *
     * Note that the {@link CreateDynamicPropertyOptions.writable} property needs to be
     * set to `true` on the dynamic property.
     *
     * The dynamic property should update its internal `value` optimistically and perform
     * a rollback if value could not be written correctly.
     *
     * @see {@link CreateDynamicPropertyOptions.writable}
     */
    setValue?(
    /**
     * Value requested to be written.
     */
    nextValue: unknown): void;
    /**
     * Can the dynamic property value be read?
     *
     * If this is `undefined`, the current status of the read permission cannot
     * be determined, e.g. when a connection has not been established yet.
     */
    canRead: boolean | undefined;
    /**
     * Can the dynamic property value be written?
     *
     * If this is `undefined`, the current status of the write permission cannot
     * be determined, e.g. when a connection has not been established yet.
     *
     * @see {@link CreateDynamicPropertyOptions.writable}
     */
    canWrite: boolean | undefined;
    /**
     * Optionally, render additional components.
     *
     * Can be used to call `.render()` on other dynamic properties.
     */
    render?(): ReactNode;
    /**
     * Optional set of value metadata.
     *
     * Can be used to include information about units, precision, etc.
     */
    meta?: Record<string, unknown>;
};
export type CreateDynamicPropertyResult<Schema extends PropsSchema> = {
    namespace: Namespace;
    defaultProps: CurrentSchemaValues<Schema>;
} & CreateDynamicPropertyOptions<Schema>;
/**
 * @internal Internal type that might change without warning and should be treated
 * as opaque.
 */
export type DynamicPropertyRef = {
    $heEntityId: string;
    version: number;
    props: {};
};
/**
 * @internal Internal type that might change without warning and should be treated
 * as opaque.
 */
export type DisplayDynamicPropertyRef = {
    $heEntityId: string;
    version: number;
    props: {};
};
export type ResolvedDynamicPropertyOptions = {
    render(): ReactNode;
    setValue(nextValue: unknown): Promise<void>;
};
export type RenderDynamicPropertyChildrenFunction = (options: ResolvedDynamicPropertyOptions) => ReactNode;
export type UseHookDynamicPropertyResult<V extends ValueType, M extends MetaType = MetaType> = {
    canRead: boolean | undefined;
    canWrite: boolean | undefined;
    meta: MetaReturnType<M> | undefined;
    value: ValueReturnType<V> | undefined;
    displayValue: string | undefined;
    setValue(nextValue: ValueReturnType<V>): Promise<void>;
    render(): ReactNode;
};
