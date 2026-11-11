type WellKnownTraits = 'com.helio-hmi.traits.Page' | 'com.helio-hmi.traits.Widget' | 'com.helio-hmi.traits.Control' | 'com.helio-hmi.traits.BufferedChangesTrait';
export type BasicTraitRef = {
    type: 'basic';
    id: string;
};
export type RichTraitRef<ConfigType = undefined> = {
    type: 'rich';
    id: WellKnownTraits;
    configVersion?: number;
    /**
     * Authoring-time configuration set via {@link RichTrait.withConfig}. Plain,
     * serializable data — unlike props it is not persisted per element and not
     * editable by end users. Absent when the trait is used with its defaults.
     */
    config?: Partial<ConfigType>;
};
export type TraitRef = BasicTraitRef | RichTraitRef<any>;
/**
 * A built-in rich trait. Usable directly as a {@link RichTraitRef} (the trait's
 * defaults apply) and — for traits that declare a config type — configurable via
 * {@link RichTrait.withConfig}. Traits without a config type expose no
 * `withConfig`, so calling it is a compile error.
 */
export type RichTrait<ConfigType = undefined> = RichTraitRef<ConfigType> & ([ConfigType] extends [undefined] ? unknown : {
    /**
     * Returns a configured copy of this trait. The host merges the given
     * options into the trait's defaults; omitted options keep their default.
     */
    withConfig(config: Partial<ConfigType>): RichTraitRef<ConfigType>;
});
export {};
