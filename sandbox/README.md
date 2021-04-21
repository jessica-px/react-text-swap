# Text Swap Examples

A web page for testing and displaying react-text-swap components.

To ease local development, we have a script that allows `examples` to read from a locally generated build, replacing the one downloaded from npm with one we generate locally. This might not feel elegant, but it's far easier to control than `npm link` or using `npm install` locally.

Below are specific instructions on how to use this workflow.

## Initial Setup

Right after cloning, you'll need to run `npm install` and then `npm run build-local`. `build-local` calls a script that will copy the build output into `/examples/node_modules/react-text-swap` automatically, so you never have to do this step by hand.

Then all you need to do is `cd examples` and do `npm run start` and it will start a local development server using the locally built version of react-text-swap.

Note that if you run `npm install` within `examples`, it will re-download the published package from npm. You will need to again run `npm run build-local` in the root directory for `examples` to use the local version.

## During Development

If you make changes to the contents of `/examples`, the development server should automatically reload itself.

If you make changes to the react-text-swap source files contained in `/src`, you will need to run `npm run build-local` to update the bundled files read by `/examples`. The development server should automatically reload itself to reflect those changes.

If you make changes that affect the way the files are generated (adding/deleting/renaming generated files), you will probably also need to kill your development server and run `npm run start` again to see the changes.
