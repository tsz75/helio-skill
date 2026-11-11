import type { ReactNode } from 'react';
import type { InstanceRefListSchema } from '../types/instance';
export type RenderChildRoutesProps = {
    instances: InstanceRefListSchema;
    defaultRoute?: ReactNode;
};
/**
 * @category Components
 *
 * @since 1.0.0
 *
 * @example Render routes for all child pages
 * ```tsx
 * <RenderChildRoutes
 *   instances={props.children}
 *   defaultRoute={<div>Displayed when no routes match</div>}
 * />
 * ```
 */
export declare function RenderChildRoutes(props: RenderChildRoutesProps): ReactNode;
