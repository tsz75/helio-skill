import type { MinimumRequiredHelioVersion } from '../minimumRequiredHelioVersion';
import type { CreateActionResult } from '../types/action';
import type { CreateDynamicPropertyResult } from '../types/dynamicProperty';
import type { CreateElementResult } from '../types/element';
import type { LibraryExtension } from '../types/libraryExtension';
import type { CreateIconResult } from './createIcon';
/**
 * @inline
 */
export type CreateLibraryExtensionOptions = {
    /**
     * User-facing name for this extension
     *
     * Will be shown in the IDE
     *
     * @example
     *   'My Extension'
     */
    name: string;
    /**
     * User-facing description for this extension
     *
     * Will be shown in the IDE
     *
     * @example
     *   'Adds a set of custom control to HELIO'
     */
    description: string;
    /**
     * Author name for this extension
     *
     * Will be shown in the IDE
     *
     * @example
     *   'My Company'
     */
    author: string;
    /**
     * Minimum required HELIO version.
     *
     * This is always enforced by the TypeScript type to match the SDK's required version.
     *
     * **Warning:** Ignoring the type will lead to unexpected behavior at runtime.
     */
    minimumRequiredHelioVersion: MinimumRequiredHelioVersion;
    /**
     * Version number for this extension
     *
     * Must follow semantic versioning/semver specification, i.e.
     *   `MAJOR.MINOR.PATCH`.
     *
     * @example
     *   '1.9.2'
     *
     * @see {@link https://semver.org|Semantic Versioning Specification}
     */
    version: string;
    elements?: Array<CreateElementResult<any>>;
    dynamicProperties?: Array<CreateDynamicPropertyResult<any>>;
    actions?: Array<CreateActionResult<any>>;
    icons?: Array<CreateIconResult>;
};
type CreateLibraryExtensionResult = {
    get library(): LibraryExtension;
};
/**
 * Creates a HELIO library extension.
 *
 * Extensions can hold multiple elements, actions and dynamic properties. When imported into
 * a HELIO project these will be added to the library and can be accessed like items from the
 * HELIO core.
 *
 * @category Functions
 *
 * @example Create a library
 * ```ts
 *   const ns = createNamespace({ name: 'com.my-company' });
 *
 *   const extension = createLibraryExtension({
 *     name: 'My Extension',
 *     description: 'Adds a set of custom control to HELIO',
 *     version: '1.0.0',
 *     author: 'My Company',
 *     minimumRequiredHelioVersion: '26.2.0',
 *     elements: [customButton, customInput],
 *   });
 * ```
 */
export declare function createLibraryExtension(options: CreateLibraryExtensionOptions): CreateLibraryExtensionResult;
export {};
