type MessageKey = string;
type LocaleName = string;
type TranslationValue = string;
type DefaultTranslations = Record<LocaleName, TranslationValue>;
export type TextsDef = Record<MessageKey, DefaultTranslations>;
export type Messages<T extends TextsDef> = keyof T;
export {};
