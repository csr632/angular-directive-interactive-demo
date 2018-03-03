# discussion blog
* https://segmentfault.com/a/1190000013473028 (Chinese)

****
below instructions are from: https://github.com/csr632/angular-aot-demo-with-ngc-webpack

# learn angular aot with ngc and webpack
A minified project to learn Angular5 aot with `ngc`(Angular compiler cli) and webpack. Also demonstrate how to import 3rd lib such as jQuery.

similar to https://github.com/csr632/angular-aot-demo-with-ngc-rollup, but this project use webpack instead of rollup, so **lazy loading Angular module** is possible.

# feature
This project use `ngc` to generate compiled Angular code **and write it to disk**, and then bundle the js code from disk. This make you be able to **observe the code generate by angular compiler**, and even **edit it** to see the difference! I think it is really helpful to understand & play with the "low-level machine code" of Angular.
> If you just want a minimum configuration to start building your own components to play with the ngc output, switch to [mini](https://github.com/csr632/angular-aot-demo-with-ngc-webpack/tree/mini) branch.

## command explain:
> If you don't care how is the bundle generated and served, just use `npm run dev` and everything will be watched and updated properly.

1. `npm run compile`: use `ngc`(angular compiler cli) to compile the "angular syntax" into js code(the "low-level machine code"). You can observe the output in `compile_output/`.
2. `npm run compile:watch`: same as `npm run compile`, except this command will also listen for source files' change and emit latest compiled `.js` code.
3. `npm run webpack`: pack the whole application(including application code, angular framework, 3rd lib) into several bundles, based on the `webpack.config.js`. Note that the **output** of `ngc` is (part of) the **input** of webpack, so you must have finished `npm run compile[:watch]` before running this command.
4. `npm run serve`: first, bundle the whole application(similar to `npm run webpack` but will emit files into **memory instead of disk** and listen for source files' change). Then, serve the emitted files **from memory**. You must have finished `npm run compile[:watch]` before running this command (while `npm run webpack` is not required).
5. `npm run clean`: clean `dist/*`, `compile_output/*`.
6. `npm run aot`: `npm run clean && npm run compile && npm run webpack`.
7. `npm run dev`: bundle and serve the application. This command will listen for source files' change as well as ngc outputs' change. So you can edit these two things and the served bundle will update immediately.

## emit control
* [skipMetadataEmit](https://angular.io/guide/aot-compiler#skipmetadataemit) in `tsconfig.json` determine whether or not **Angular Compiler** emit `.metadata.json` files.
* [skipTemplateCodegen](https://angular.io/guide/aot-compiler#skiptemplatecodegen) in `tsconfig.json` determine whether or not **Angular Compiler** emit `.ngfactory.js` and `.ngstyle.js` files.
* `declaration` in `tsconfig.json` determine whether or not **TypeScript Compiler** emit `.d.ts` definition files.
* `sourceMap` in `tsconfig.json` determine whether or not **TypeScript Compiler** emit `.js.map` sourcemap files.
