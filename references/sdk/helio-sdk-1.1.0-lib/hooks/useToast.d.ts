import type { ReactNode } from 'react';
type ToastOptions = {
    type?: 'info' | 'success';
    /**
     * If `true`, the toast will automatically disappear after a couple of
     * seconds.
     *
     * @default true
     */
    autoDismiss?: boolean;
    title: ReactNode;
    description?: ReactNode;
    buttons?: ReactNode;
} | {
    type: 'error';
    title: ReactNode;
    description?: ReactNode;
    buttons?: ReactNode;
};
export type UseToastResult = {
    addToast(toast: ToastOptions): void;
};
/**
 * @category Hooks
 *
 * @since 1.0.0
 */
export declare function useToast(): UseToastResult;
export {};
