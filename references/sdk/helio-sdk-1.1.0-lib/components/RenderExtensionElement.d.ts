import type { CreateElementResult } from '../types/element';
import type { DisplayInstance } from '../types/instance';
import type { CurrentSchemaValues, PropsSchema, SchemaDef } from '../types/schema';
type ChildInstance = {
    element: CreateElementResult<PropsSchema<SchemaDef>>;
    props: Partial<CurrentSchemaValues<PropsSchema<SchemaDef>>>;
    instance: DisplayInstance;
};
export type RenderExtensionElementProps = {
    element: CreateElementResult<any>;
    props?: object;
};
export declare const ChildContext: import("react").Context<Record<string, ChildInstance>>;
/**
 * Simulates rendering of an element in HELIO.
 *
 * @category Components
 * @category Testing
 * @internal Internal component that might change without warning.
 */
export declare function RenderExtensionElement(props: RenderExtensionElementProps): import("react/jsx-runtime").JSX.Element;
export {};
