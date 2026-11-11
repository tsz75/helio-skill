import type { PropsSchema, SchemaDef } from '../types/schema';
export type PropsSchemaBuilder = {
    initial<SchemaType extends SchemaDef>(initialSchema: SchemaType): PropsSchema<SchemaType>;
};
/**
 * Creates a migratable schema of properties to be used in elements, actions or dynamic properties.
 *
 * Schemas can include multiple migrations that will be automatically applied.
 *
 * Migrations can change the schema completely and need to provide a function that turns props of
 * the previous schema into a shape matching the migration schema.
 *
 * Migrations can be chained indefinitely when requirements change.
 *
 * **Note:** Props can be added without a migration if they are optional.
 *
 * @category Functions
 *
 * @since 1.0.0
 *
 * @example Create an initial schema
 * ```ts
 * createPropsSchema().initial({
 *   // Declare a single String property called `foo`.
 *   foo: props.String({
 *     label: 'Foo',
 *     defaultValue: 'bar',
 *     optional: false,
 *   }),
 * });
 * ```
 *
 * @example Declare a props migration
 * ```ts
 *  createPropsSchema()
 *     // The initial schema stays unchanged. This is important to ensure old
 *     // elements etc. can be parsed correctly.
 *     .initial({
 *       foo: props.String({
 *         label: 'Foo',
 *         defaultValue: 'bar',
 *         optional: false,
 *       }),
 *     })
 *     // Declare a new schema version that replaces the `foo` property with a
 *     // property called `bar`.
 *     .migrate(
 *       {
 *         bar: props.String({
 *           label: 'Bar',
 *           defaultValue: 'baz',
 *           optional: false,
 *         }),
 *       },
 *       // When migrating old props, copy over the value of the previous `foo`
 *       // prop into `bar`
 *       (prevProps) => ({ bar: prevProps.foo }),
 *     );
 * ```
 *
 * @see {@link props}
 */
export declare function createPropsSchema(): PropsSchemaBuilder;
