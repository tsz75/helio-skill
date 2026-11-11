import type { InstanceRefListSchema } from '../types/instance';
import type { ChildrenTypeOptions, DynamicPropertyTypeOptions, NumberTypeOptions, OptionalTypeOptions, PropDescription, TypeOptions } from '../types/schema';
import type { HelioAction, HelioBoolean, HelioChildren, HelioDynamicProperty, HelioEnum, HelioFile, HelioList, HelioNumber, HelioObject, HelioString, HelioType } from './schema';
import { Enum } from './propEnum';
import { List } from './propList';
import { Object } from './propObject';
export type PropertyType = HelioString | HelioNumber | HelioBoolean | HelioEnum | HelioChildren | HelioDynamicProperty | HelioAction | HelioFile | HelioObject | HelioList;
export type PropDef<T extends HelioType, O extends TypeOptions<PropertyType>> = PropDescription<T, O>;
type WithDefaultValue<R extends PropDef<HelioType, TypeOptions<PropertyType>>, DefaultValue> = {
    [key in keyof R]: key extends 'defaultValue' ? DefaultValue : R[key];
};
/**
 * Declares a prop that can hold a string value.
 *
 * Note that this value cannot be translated. If you want a translatable value,
 * use a {@link DynamicProperty} instead.
 *
 * @example Declaring an optional property
 * ```ts
 * {
 *   text: props.String({
 *     label: 'Text',
 *     defaultValue: 'My Text',
 *     optional: true,
 *   })
 * }
 * ```
 */
export declare function String<O extends TypeOptions<HelioString>>(options: O & {
    multiline?: boolean;
}): PropDef<HelioString, O> & {
    multiline: boolean;
};
/**
 * Declares a prop that can hold a numeric value.
 *
 * Note that this value cannot be dynamic. If you want a dynamic value, use a {@link DynamicProperty}.
 *
 * @example Declaring a property
 * ```ts
 * {
 *   numberOfTicks: props.Number({
 *     label: 'Number of Ticks',
 *     defaultValue: 5,
 *   })
 * }
 * ``
 */
export declare function Number<O extends NumberTypeOptions>(options: O): PropDef<HelioNumber, O>;
/**
 * Declares a prop that can hold a boolean value.
 *
 * Note that this value cannot be dynamic. If you want a dynamic value, use a {@link DynamicProperty}.
 *
 * @example Declaring a property
 * ```ts
 * {
 *   showValue: types.Boolean({
 *     label: 'Show Value',
 *     defaultValue: true,
 *   })
 * }
 * ```
 */
export declare function Boolean<O extends TypeOptions<HelioBoolean>>(options: O): PropDef<HelioBoolean, O>;
/**
 * Declares a prop that can hold references to other HELIO instances.
 *
 * Its content is typically handled by working with the HELIO instance tree by adding
 * and re-ordering elements.
 *
 * @example Declaring a property
 * ```ts
 * {
 *   footer: props.Children({
 *     label: 'Footer',
 *   })
 * }
 * ```
 */
export declare function Children(options: ChildrenTypeOptions): WithDefaultValue<PropDef<HelioChildren, TypeOptions<HelioChildren>>, InstanceRefListSchema>;
/**
 * Declares a prop that can hold an DynamicProperty value.
 *
 * DynamicProperty values are dynamic properties that can produce values that change over time.
 * Examples include Data Variables or Translatable Text.
 *
 * @example Declaring a property
 * ```ts
 * props.DynamicProperty({
 *   label: 'Value',
 *   valueType: 'PrimitiveValue',
 *   defaultValue: dynamicProperties.DataVariable(),
 *   optional: false,
 * })
 * ```
 *
 * @example
 * Accepting multiple value types
 * ```ts
 * props.DynamicProperty({
 *   label: 'Value',
 *   valueType: ['NumericValue', 'String'],
 *   defaultValue: dynamicProperties.DataVariable(),
 *   optional: false,
 * })
 * ```
 */
export declare function DynamicProperty<O extends DynamicPropertyTypeOptions<HelioDynamicProperty>>(options: O): PropDef<HelioDynamicProperty, O>;
export declare function Action<O extends TypeOptions<HelioAction>>(options: O): PropDef<HelioAction, O>;
/**
 * Declares a prop that can hold an uploaded file.
 *
 * Note that this value cannot be dynamic. If you want a dynamic value, use
 * a {@link DynamicProperty}.
 *
 * **File references from uploads cannot be accessed directly but must be
 * unwrapped using {@link fileUrl}.**
 *
 * @example Declaring a property
 * ```ts
 * {
 *   file: types.File({
 *     label: 'My File',
 *     optional: true,
 *   })
 * }
 * ```
 */
export declare function File<O extends OptionalTypeOptions<HelioFile>>(options: O): PropDef<HelioFile, O>;
/**
 * Helpers for declaring props in a {@link PropsSchema}
 *
 * Use these for schema declarations using {@link createPropsSchema}.
 *
 * @see {@link String}
 * @see {@link Number}
 * @see {@link Boolean}
 * @see {@link Enum}
 * @see {@link Children}
 * @see {@link DynamicProperty}
 * @see {@link Action}
 * @see {@link File}
 * @see {@link Object}
 * @see {@link List}
 */
export declare const props: {
    String: typeof String;
    Number: typeof Number;
    Boolean: typeof Boolean;
    Enum: typeof Enum;
    Children: typeof Children;
    DynamicProperty: typeof DynamicProperty;
    Action: typeof Action;
    File: typeof File;
    Object: typeof Object;
    List: typeof List;
};
export {};
