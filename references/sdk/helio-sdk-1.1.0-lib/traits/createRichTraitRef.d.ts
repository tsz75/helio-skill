import type { RichTrait, RichTraitRef } from '../types/trait';
/**
 * Creates a built-in rich trait descriptor.
 *
 * The returned value doubles as a {@link RichTraitRef} (so it can be placed in an
 * element's `traits` array directly, applying the trait's defaults) and — when a
 * `ConfigType` is provided — carries a `withConfig` method for passing options.
 */
export declare function createRichTraitRef<ConfigType = undefined>(options: {
    /** Well-known trait id. */
    id: RichTraitRef['id'];
    /** Version of optional static config overrides that can be set on the rich trait */
    configVersion: number;
}): RichTrait<ConfigType>;
