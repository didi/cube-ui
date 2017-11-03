## Post-compile

Post-compile means the npm packages that the application depend on don't need to be compiled before distribution but compiled along with the application's compiling and packaging.

> Notes: For more detailed content about post-compile, see [webpack 应用编译优化之路](https://github.com/DDFE/DDFE-blog/issues/23).

### Background

More and more applications are developed with webpack + babel, and commonly their package management is by npm. With the growing of the number of package dependencies which are also developed with ES2015+ and needs to be compiled before distribution, the final compiled code usually contains a lot of compiling code. Therefore, to eliminate the redundancy, we recommend post-compile.

### Strengths and weaknesses
- Public dependencies can share use and only need one copy. The more important is that you only need to compile once.

### Rules

### The configuration and use of webpack
