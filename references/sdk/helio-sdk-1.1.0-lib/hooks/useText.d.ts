import type { CreateTextsResult, MessageKeyOf } from '../functions/createTexts';
import type { TextsDef } from '../types/texts';
/**
 * @category Hooks
 *
 * @since 1.0.0
 */
export declare function useText<Texts extends TextsDef, CreatedTexts extends CreateTextsResult<Texts>, Key extends MessageKeyOf<Texts, CreatedTexts>>(texts: CreatedTexts, key: Key, values?: Record<string, string>): string | undefined;
