import type { SchemaDef, PropsSchema, Values } from '../types/schema';
export declare function schemaDefaults(schema: SchemaDef): Record<string, unknown>;
export declare function defaultValues<Schema extends SchemaDef, T extends PropsSchema<Schema>>(schema: T): Values<Schema>;
