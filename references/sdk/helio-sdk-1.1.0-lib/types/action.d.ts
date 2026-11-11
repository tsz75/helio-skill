import type { ReactNode, RefObject } from 'react';
import type { CreateTextsResult } from '../main';
import type { IconRef } from './icon';
import type { Namespace } from './namespace';
import type { CurrentSchemaValues, PropsSchema } from './schema';
import type { TextsDef } from './texts';
export type ActionRef = {
    $heActionId: string;
    version: number;
    props: {};
};
export type DisplayActionRef = {
    $heActionId: string;
    /** @deprecated Will be removed in future version */
    version: number;
    props: {};
};
/**
 * @inline
 */
export type CreateActionOptions<Schema extends PropsSchema, Texts extends TextsDef = TextsDef> = {
    /**
     * Human-readable name of the action as it will appear in the HELIO IDE.
     *
     * Note: If no explicit `id` is provided, this value will also be used to
     * create a unique id for the action.
     *
     * **Changing the name in an extension update will break action references in
     * existing projects.**
     *
     * If you need to change the name, make sure to provide an `id` with the old
     * name to ensure a smooth migration.
     *
     * @example
     * Migrating action name.
     * ```tsx
     * {
     *   name: 'New Action Name',
     *   id: 'Old Action Name',
     *   // ...other `createAction` options...
     * }
     * ```
     */
    name: string;
    /**
     * Internal ID of the action. This uniquely identifies the action within
     * the extension and should never change. If this property is omitted, the
     * action will be referenced by its `name`.
     */
    id?: string;
    /**
     * Optional icon to identify this action in the HELIO IDE.
     *
     * @example
     * ```
     * { name: 'Dinosaur' }
     * ```
     */
    icon?: IconRef;
    /**
     * Description of this action that will appear in the IDE.
     */
    description?: string;
    /**
     * Translation texts used in this action.
     *
     * @see {@link createTexts}
     */
    texts?: CreateTextsResult<Texts>;
    /**
     * Optional category for grouping this action in the HELIO IDE, such as in the
     * Add Element dialog.
     */
    category?: string;
    /**
     * Schema containing the properties this action accepts, created using the
     * {@link createPropsSchema} function.
     */
    propsSchema: Schema;
    /**
     * Implementation of this action property.
     *
     * Will be dynamically installed by HELIO as a React hook to allow for data
     * subscription and other scenarios where data changes over time.
     */
    useAction: (props: CurrentSchemaValues<Schema>) => CreateActionUseActionResult;
};
export type CreateActionUseActionResult = {
    /**
     * Optionally, render additional components to provide dynamic value updates.
     */
    render?(): ReactNode;
    /**
     * Can the action be called?
     *
     * If this is `undefined`, the current status of the read permission cannot
     * be determined at the moment.
     */
    canCall?: boolean;
    /**
     * Function being called when this action is triggered.
     */
    call(): void | PromiseLike<void>;
};
export type CreateActionResult<Schema extends PropsSchema> = {
    namespace: Namespace;
    defaultProps: CurrentSchemaValues<Schema>;
} & CreateActionOptions<Schema>;
export type UseActionHookResult = {
    ref: RefObject<HTMLElement | null>;
    render(): ReactNode;
    /**
     * Triggers the configured action.
     */
    call(): void;
    /**
     * Can the action be called?
     *
     * If this is `undefined`, the current status of the read permission cannot
     * be determined at the moment.
     */
    canCall: boolean | undefined;
};
