export declare const OpaqueFileRef: unique symbol;
/**
 * File Reference.
 *
 * This type should not be accessed directly as the internal structure can
 * change without notice.
 *
 * Use {@link fileUrl} to unwrap the referenced URL.
 *
 * @see {@link fileUrl}
 */
export type OpaqueFileRef = typeof OpaqueFileRef;
