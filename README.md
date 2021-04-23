# React Text Swap

A lightweight React component for text swapping animations. No dependencies aside from `react@^17.0.2` and `react-dom@^17.0.2` (as peer dependencies -- if your project already uses React, this won't re-install it). Animations are CSS-based.

**View Live Examples Here**

## Installation

`npm install react-text-swap`

or

`yarn add react-text-swap`

## Usage

Import the `<TextSwap>` component with the following:
`import TextSwap from "react-text-swap";`

It takes the following props:

| prop name      | type     | required | default   | description                                                                                                                            |
|----------------|----------|----------|-----------|----------------------------------------------------------------------------------------------------------------------------------------|
| strings        | string[] | yes      | undefined | The strings rendered by the component, which "swaps" between them.                                                                     |
| seconds        | number   | no       | 2         | The number of seconds that each animation loop should last.                                                                            |
| animationType  | string   | no       | "fade"    | The type of animation to be used. Options are: `"fade"`, `"slideUp"`, `"slideDown"`, or `"blur"`                                       |
| fixedWidthInPx | number   | no       | undefined | If used, the rendered text will be wrapped in an inline-block `<span>` and assigned a `width` of the given value.                      |
| fixedAlign     | string   | no       | "center"  | When `fixedWidthInPx` is used, this prop is assigned to the `text-align` style field. Options are: `"center"`, `"left"`, and `"right"`. |

**View Live Examples Here**
