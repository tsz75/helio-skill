import type { CreateTextsResult, MessageKeyOf } from '../functions/createTexts';
import type { TextsDef } from '../types/texts';
export type RenderTextProps<Texts extends TextsDef, CreatedTexts extends CreateTextsResult<Texts>, Key extends MessageKeyOf<Texts, CreatedTexts>> = {
    texts: CreatedTexts;
    message: Key;
    values?: Record<string, string>;
};
/**
 * @category Components
 *
 * @since 1.0.0
 */
export declare function RenderText<Texts extends TextsDef, CreatedTexts extends CreateTextsResult<Texts>, Key extends MessageKeyOf<Texts, CreatedTexts>>(props: RenderTextProps<Texts, CreatedTexts, Key>): import("react/jsx-runtime").JSX.Element;
