import type { Namespace } from '../types/namespace';
import type { TextsDef } from '../types/texts';
export type CreateTextsResult<DefType extends TextsDef> = {
    namespace: Namespace;
    texts: DefType;
};
export type MessageKeyOf<D extends TextsDef, T extends CreateTextsResult<D>> = keyof T['texts'];
export declare function createTexts<DefType extends TextsDef>(namespace: Namespace, texts: DefType): CreateTextsResult<DefType>;
