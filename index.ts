/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

/*
* Unfortunately, setting a value for "types" means that TypeScript will ignore other global type definitions, 
* including lib: ["dom"]. If you need to add DOM types into your project, add the following triple-slash directives at
*  the top of any TypeScript file in your project.
* */
const server = Bun.serve({
    port: 3000,
    fetch(req) {
        return new Response("Bun!");
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);
console.log(Bun.version)
