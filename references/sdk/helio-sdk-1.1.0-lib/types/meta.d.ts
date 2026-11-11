type SignDisplay = 'auto' | 'never' | 'always' | 'exceptZero';
type DataVariableType = 'Unknown' | 'Boolean' | 'Float' | 'Integer' | 'String' | 'DateTime' | 'Date' | 'Time' | 'Duration' | 'JSON' | 'Array' | 'Object' | 'TranslationKey' | 'IcuMessage';
type NumberFormat = {
    signDisplay?: SignDisplay | undefined;
    useGrouping?: boolean | undefined;
    minimumIntegerDigits?: number | undefined;
    minimumFractionDigits?: number | undefined;
    maximumFractionDigits?: number | undefined;
    minimumSignificantDigits?: number | undefined;
    maximumSignificantDigits?: number | undefined;
};
export type DataVariableStatus = 'Good' | 'Warning' | 'Critical' | 'Noteworthy' | 'Unknown';
export type DataVariableRange = {
    status: DataVariableStatus;
    lowerBound?: number | undefined;
    upperBound?: number | undefined;
};
export type DataVariableScaling = {
    factor: number;
    offset: number;
    baseUnit?: string | undefined;
};
export type DataVariableMeta = {
    type: DataVariableType;
    elementType?: DataVariableType | unknown | undefined;
    unit?: string | undefined;
    baseUnit?: string | undefined;
    description?: string | undefined;
    numberFormat?: NumberFormat | undefined;
    ranges?: Array<DataVariableRange> | undefined;
    minValue?: number | undefined;
    maxValue?: number | undefined;
    scaling?: DataVariableScaling | undefined;
};
export type MetaTypeDataVariable = {
    type: 'DataVariable';
};
export type MetaTypeDataUnknown = {
    type: 'Unknown';
};
export type MetaType = MetaTypeDataVariable | MetaTypeDataUnknown;
export type ReturnTypeMap = {
    DataVariable: DataVariableMeta;
    Unknown: unknown;
};
export type MetaReturnType<T extends MetaType> = T extends {
    type: infer K;
} ? K extends keyof ReturnTypeMap ? ReturnTypeMap[K] : unknown : unknown;
export {};
