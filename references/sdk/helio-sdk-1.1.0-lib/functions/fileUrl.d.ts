import type { OpaqueFileRef } from '../types/file';
/**
 * Returns the URL from an {@link OpaqueFileRef}.
 *
 * This automatically adds the correct base path for the current runtime.
 *
 * The resulting URL will be absolute, with leading slash `/` at the start.
 */
export declare function fileUrl(fileRef: OpaqueFileRef): string;
export declare function fileUrl(fileRef: undefined): undefined;
export declare function fileUrl(fileRef: OpaqueFileRef | undefined): string | undefined;
