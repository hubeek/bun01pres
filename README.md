# 01pres

Node js vervanger

klachten over Node js
- single threaded
- callbacks
- concurrency
- Limited standard Libs
- CPU perfomant tasks
- Memory consumption
- debugging
- gemopper over update cycle en deprecation

Node js gebouwd op V8 engine

Bun op de Safari engine
Safarie voordelen:
- batterij
- performance webkit
- security
- ES6 and beyond support
- cross-platform
- kleiner en sneller
- voor de browser
-

V8 is meer geoptimaliseerd voor de server-side java execution(!)



https://github.com/oven-sh/bun

## What is Bun?

> **​​Bun is still under development.** Use it to speed up your development workflows or run simpler production code in resource-constrained environments like serverless functions. We're working on more complete Node.js compatibility and integration with existing frameworks. Join the [Discord](https://bun.sh/discord) and watch the [GitHub repository](https://github.com/oven-sh/bun) to keep tabs on future releases.

Bun is an all-in-one toolkit for JavaScript and TypeScript apps. It ships as a single executable called `bun​`.

At its core is the _Bun runtime_, a fast JavaScript runtime designed as a drop-in replacement for Node.js. It's written in Zig and powered by JavaScriptCore under the hood, dramatically reducing startup times and memory usage.

## Install

Bun supports Linux (x64 & arm64) and macOS (x64 & Apple Silicon).

> **Linux users** — Kernel version 5.6 or higher is strongly recommended, but the minimum is 5.1.
>
> **Windows users** — Bun does not currently provide a native Windows build. We're working on this; progress can be tracked at [this issue](https://github.com/oven-sh/bun/issues/43). In the meantime, use one of the installation methods below for Windows Subsystem for Linux.

```shell
# with install script (recommended)
curl -fsSL https://bun.sh/install | bash

# with npm
npm install -g bun

# with Homebrew
brew tap oven-sh/bun
brew install bun

# with Docker
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun
```

bun gebruikt templates
- bun init
- bun create

## bun init

.gitignore
.idea
README.md
bun.lockb
index.ts
node_modules
package.json
pb
tsconfig.json

package.json
```json
{  
  "name": "01pres",  
  "module": "index.ts",  
  "type": "module",  
  "devDependencies": {  
    "bun-types": "latest"  
  },  
  "peerDependencies": {  
    "typescript": "^5.0.0"  
  }  
}
```
index.ts
```ts
console.log("Hello via Bun!");
```

To install dependencies:

```bash  
bun install  
```  

To run:

```bash  
bun run index.ts  
```

## bun run
### [`--watch`](https://bun.sh/docs/cli/run#watch)

To run a file in watch mode, use the `--watch` flag.

```
bun --watch run index.tsx
```
### scripts
```json
{
  // ... other fields
  "scripts": {
    "clean": "rm -rf dist && echo 'Done.'",
    "dev": "bun server.ts"
  }
}

```
```ts
bun run clean
bun run dev
```
## [Run tests](https://bun.sh/docs/cli/test#run-tests)

```
bun test
```

Tests are written in JavaScript or TypeScript with a Jest-like API. Refer to [Writing tests](https://bun.sh/docs/test/writing) for full documentation.

math.test.ts

```
import { expect, test } from "bun:test";

test("2 + 2", () => {
  expect(2 + 2).toBe(4);
});
```

The runner recursively searches the working directory for files that match the following patterns:

- `*.test.{js|jsx|ts|tsx}`
- `*_test.{js|jsx|ts|tsx}`
- `*.spec.{js|jsx|ts|tsx}`
- `*_spec.{js|jsx|ts|tsx}`

You can filter the set of _test files_ to run by passing additional positional arguments to `bun test`. Any test file with a path that matches one of the filters will run. Commonly, these filters will be file or directory names; glob patterns are not yet supported.
