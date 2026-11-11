import type { ValueReturnType, ValueType } from '../types/values';
export type StorageScopeKind = 'Project' | 'User' | 'Global';
/**
 * @category Hooks
 *
 * @inline
 */
export type UseServerStateOptions = {
    /**
     * Scope in which the value should exist, either `User`, `Global` or `Project`.
     */
    scope: StorageScopeKind;
    /**
     * Optional refresh interval for the value.
     *
     * If set, will automatically perform a refresh every `refreshInterval` milliseconds to keep state
     * in sync with possible other clients looking at the same data. [in ms]
     *
     * @example Refresh Value Every 2s / 2000ms
     * ```ts
     * { refetchInterval: 2000 }
     * ```
     */
    refetchInterval?: number | undefined;
};
/**
 * The current value, or `undefined` while loading.
 *
 * @category Hooks
 */
export type UseServerStorageValue<V extends ValueType> = undefined | ValueReturnType<V>;
/**
 * Callback for writing a new value of `TValue` to the server.
 *
 * @category Hooks
 */
export type UseServerStorageSetValue<V extends ValueType> = (value: ValueReturnType<V>) => void;
/**
 * @category Hooks
 *
 * @inline
 */
export type ServerStateInfo = {
    /**
     * `true` while the value is being fetched from the server.
     */
    loading: boolean;
    /**
     * `true` if the value can currently be set
     */
    canWrite: boolean;
};
/**
 * @inline
 */
export type UseServerStateResult<V extends ValueType> = [
    UseServerStorageValue<V>,
    UseServerStorageSetValue<V>,
    ServerStateInfo
];
/**
 * Stores a JSON value on the server and returns a tuple of the current value and a setter
 * function.
 *
 * The value is validated against the provided schema. If for any reason the value in the server's
 * key value store does not match that schema, the default value is returned instead.
 *
 * @category Hooks
 *
 * @see {@link qualifiedName}
 *
 * @typeParam TValue - Type of the value being stored. Must be serializable to JSON.
 *
 * @throws {} Attempting to set value will fail when using the `User` scope and no user
 *   is currently logged in. Check the `canWrite` option to prevent runtime error.
 *
 * @since 1.0.0
 *
 * @example Persist the Most Important Topic Globally on Server
 * ```tsx
 * function TopicInfo() {
 *   const [topic, setTopic, topicInfo] = useServerState(
 *    qualifiedName(namespace, 'mostImportantTopic')
 *     values.String(),
 *     'Default Topic',
 *     { scope: 'Global' }
 *   );
 *
 *   if (topicInfo.loading) return <div>Loading…</div>;
 *
 *   return (
 *     <div>
 *       <div>Most Important Topic: {topic}</div>
 *
 *       <button onClick={() => setTopic('Topic A')}>Set Topic A</button
 *       <button onClick={() => setTopic('Topic B')}>Set Topic B</button
 *     </div>
 *   );
 * }
 * ```
 *
 * @example Read and Store State for the Current User
 * ```tsx
 * function UserCounter() {
 *   const [value, setValue, { loading, canWrite }] = useServerState(
 *     'value', values.Number(), 0,
 *     { scope: 'User', refetchInterval: 1000 }
 *   );
 *
 *   return (
 *     // Make sure to check `canWrite`: if no user is logged in, `setValue` will
 *     // throw an exception.
 *     <button disabled={!canWrite} onClick={() => setValue((value ?? 0) + 1)}>
 *       Counter: {loading ? '–' : value}
 *     </button>
 *   );
 * }
 * ```
 */
export declare function useServerState<V extends ValueType>(
/**
 * Unique key to identify the state.
 *
 * Must be unique across the library. Consider using {@link qualifiedName} to avoid name
 * collisions.
 *
 * @example
 * 'com.my-company.mostImportantTopic'
 */
key: string, 
/**
 * @example Scalar Value
 * ```ts
 * values.Number()
 * ```
 */
valueType: V, 
/**
 * Default value in cases where no value exists for the given key or the value fails `schema`
 * validation.
 *
 * This ensures that `useServerState` consistently returns a value of type `TValue`.
 */
defaultValue: ValueReturnType<V>, options: UseServerStateOptions): UseServerStateResult<V>;
