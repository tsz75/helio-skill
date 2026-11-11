import { type ReactNode } from 'react';
import type { DisplayInstance, InstanceRefListSchema, InstanceRefSchema } from '../types/instance';
export type RenderInstancesRenderOptions = {
    /** Unique key (for React) */
    key: string;
    /** Instance reference */
    instanceRef: InstanceRefSchema;
    /** Resolved instance */
    instance: DisplayInstance;
    /** Index in list of _visible_ instances (0-based) */
    index: number;
    render(): ReactNode;
};
export type RenderInstancesOptions = {
    /** Unique key (for React) */
    key: string;
    /** Instance reference */
    instanceRef: InstanceRefSchema;
    /** Resolved instance */
    instance: DisplayInstance;
    /** Index in list of _visible_ instances (0-based) */
    index: number;
    /** Renders the instance. */
    render(): React.ReactNode;
};
export type RenderInstancesRenderProps = {
    /**
     * List of visible instances. This includes any repeated instances along with
     * a `render()` callback to render.
     */
    visibleInstances: Array<RenderInstancesOptions>;
};
/**
 * @inline
 */
export type RenderInstanceProps = {
    instance: InstanceRefSchema;
    render?(options: RenderInstancesRenderOptions): ReactNode;
};
/**
 * Renders an instance with a given instance id.
 *
 * Prefer using {@link RenderInstances} where possible. Working with raw
 * instance IDs is an advanced use case and can lead to unwanted behavior.
 *
 * If the instance has a Display Condition applied, this render might be
 * skipped at runtime.
 *
 * Use {@link Children} to declare props that contain other instances.
 *
 * @category Components
 *
 * @since 1.0.0
 */
export declare function RenderInstance(props: RenderInstanceProps): import("react/jsx-runtime").JSX.Element;
/**
 * @inline
 */
export type RenderInstancesProps = {
    /**
     * List of instances to render.
     *
     * Use {@link Children} to declare props that contain other instances.
     */
    instances: InstanceRefListSchema;
    /**
     * Limit the maximum number of visible instances that should be rendered.
     */
    limit?: number;
    /**
     * Can be used to customize rendering of each instance.
     *
     * `render` will be called for each _visible_ instance.
     *
     * @example
     * Render instances as a `<ul>`.
     * ```tsx
     * function MyComponent(props) {
     *   return (
     *     <ul>
     *       <RenderInstances
     *         instances={props.children}
     *         render={(options) => <li key={options.key}>{options.render()}</li>}
     *       />
     *     </ul>
     *   );
     * }
     * ```
     */
    render?(options: RenderInstancesRenderOptions): ReactNode;
    /**
     * Can be used to customize rendering of the list entirely.
     *
     * @example
     * Render instances including the total count of visible elements.
     * ```tsx
     * function MyComponent(props) {
     *   return (
     *     <RenderInstances instances={props.children}>
     *       {(options) => (
     *         <Fragment>
     *           <div>{options.visibleInstances.length} Entries</div>
     *
     *           <ul>
     *             {options.visibleInstances.map((item) => (
     *               <li>{item.render()}</li>
     *             ))}
     *           </ul>
     *         </Fragment>
     *       )}
     *     </RenderInstances>
     *   );
     * }
     * ```
     */
    children?: (props: RenderInstancesRenderProps) => React.ReactNode;
};
/**
 * Renders a list of instances.
 *
 * Instances that have Display Conditions applied might be skipped during
 * rendering.
 *
 * Note that this means that it is not safe to use indices from the input list
 * of instances during later render steps as the rendered list might have gaps
 * and indices can become out of sync.
 *
 * Use {@link Children} to declare props that contain other instances.
 *
 * @category Components
 *
 * @since 1.0.0
 */
export declare function RenderInstances(props: RenderInstancesProps): import("react/jsx-runtime").JSX.Element;
