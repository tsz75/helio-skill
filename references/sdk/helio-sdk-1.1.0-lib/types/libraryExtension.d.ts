import type { CreateIconResult } from '../functions/createIcon';
import type { CreateActionResult } from './action';
import type { CreateDynamicPropertyResult } from './dynamicProperty';
import type { CreateElementResult } from './element';
export type LibraryExtension = {
    name: string;
    description: string;
    author: string;
    version: string;
    minimumRequiredHelioVersion?: string | undefined;
    elements: Array<CreateElementResult<any>>;
    actions: Array<CreateActionResult<any>>;
    dynamicProperties: Array<CreateDynamicPropertyResult<any>>;
    icons: Array<CreateIconResult>;
};
