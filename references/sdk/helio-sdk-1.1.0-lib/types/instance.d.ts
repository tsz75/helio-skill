export type DisplayInstance<PropsType extends Record<string, unknown> = Record<string, unknown>> = {
    id: string;
    name?: string | undefined;
    classId: string;
    props: PropsType;
    traitProps?: Record<string, {
        $heTraitId: string;
        version: number;
        props: Record<string, unknown>;
    }>;
};
/**
 * Description of a reference to a `Class` instantiation
 */
export type InstanceRefSchema = {
    $heInstanceId: string;
};
/**
 * Description of a weak reference to a `Class` instantiation.
 *
 * In contrast to an {@link InstanceRefSchema} this will not create a direct
 * relationship between instances but simply *point* to another instance.
 * We do not guarantee that the ref target remains available.
 */
export type InstanceWeakRefSchema = {
    $heWeakInstanceId: string;
};
export declare function isInstanceRef(value: unknown): value is InstanceRefSchema;
/**
 * @internal Internal type that might change without warning and should be treated
 * as opaque.
 */
export type InstanceRefListSchema = Array<InstanceRefSchema>;
export declare function isInstanceRefList(value: unknown): value is InstanceRefListSchema;
