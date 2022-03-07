/// <reference types="svelte" />

// let's assume the package 'some-component-with-no-types' does't export
// type definitions. In tihs case we need to write our own definitions
// to benefit from strong type-checking

declare module 'some-component-with-no-types' {
	import { SvelteComponentTyped } from 'svelte'

	interface ButtonProps extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['button']> {
		/**
		 * @default "submit"
		 */
		type?: 'submit' | 'cancel'

		/**
		 * @default false
		 */
		primary?: boolean
	}

	// we can export the types and interfaces and use them inside other components
	export interface ButtonEvents {
		click: WindowEventMap['click']
		ready: CustomEvent<number>
	}

	export default class SpecialButton extends SvelteComponentTyped<
		// Props
		ButtonProps,
		// Events
		ButtonEvents,
		// Slots
		{
			default: {}
		}
	> {}
}