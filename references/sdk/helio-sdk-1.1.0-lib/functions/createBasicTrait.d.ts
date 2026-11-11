import type { Namespace } from '../types/namespace';
import type { BasicTraitRef } from '../types/trait';
type CreateTraitOptions = {
    name: string;
};
/**
 * Creates a new trait in the given namespace.
 *
 * Traits control nesting behavior in HELIO.
 *
 * An element can be inserted as another one's child if its traits are
 * included in the corresponding `allowedTraits` of a {@link props.Children}
 * prop.
 *
 * @category Traits
 *
 * @since 1.0.0
 *
 * @example
 * Creating a traits hierarchy
 * ```tsx
 * const ns = createNamespace({ name: 'com.my-company' });
 *
 * // Declare a trait to distinguish specific elements as valid children.
 * const childTrait = createBasicTrait(ns, { name: 'controlChild' });
 *
 * const parentElement = createElement(ns, {
 *   name: 'My Parent Control',
 *   description: 'Control with Children',
 *   traits: [traits.Control],
 *   propsSchema: createPropsSchema().initial({
 *     children: props.Children({
 *       label: 'Children',
 *       icon: { name: 'Default' },
 *
 *       // Allow only elements with `childTrait` to be added to this element.
 *       allowedTraits: [childTrait],
 *     }),
 *   }),
 *   Component(props) {
 *     return (
 *       <div>
 *         Parent Control
 *
 *         <RenderInstances instances={props.children} />
 *       </div>
 *     );
 *   },
 * });
 *
 * const childElement = createElement(ns, {
 *   name: 'My Child Control',
 *   description: 'Child Control',
 *   traits: [
 *     traits.Control,
 *     // Mark this element with `childTrait` so that it is available to be added
 *     // as a child of `parentElement`.
 *     childTrait,
 *   ],
 *   propsSchema: createPropsSchema().initial({}),
 *   Component() {
 *     return <div>Child Control</div>;
 *   },
 * });
 * ```
 *
 * @see {@link Element.traits}
 * @see {@link props.Children}
 */
export declare function createBasicTrait(namespace: Namespace, options: CreateTraitOptions): BasicTraitRef;
export {};
