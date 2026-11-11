/**
 * Assert that surrounding code is not reachable. This is useful as fallback in
 * exhaustive if/switch cases with discriminated unions to ensure type safety.
 *
 * @example
 * ```
 * let x: { type: 'num'; value: number } | { type: 'str'; value: string };
 *
 * switch (x.type) {
 *   case 'num': typeof x.value === 'number'; break;
 *   case 'str': typeof x.value === 'string'; break;
 *   default:
 *     assertUnreachable(x.type);
 * }
 *
 * if (x.type === 'num') {}
 * else if (x.type === 'str') {}
 * else assertUnreachable(x.type);
 * ```
 *
 * If new values are added to the discriminated union later, this will generate
 * a type error.
 *
 * @param value Exhausted value
 */
export declare function assertUnreachable(value: never): never;
