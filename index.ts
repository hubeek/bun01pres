/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

function timelapsed(endTime) {
    const milliseconds = Math.floor(endTime /1e6)

    package
    return milliseconds/1000;
}

function longLoop() {
    const dl = Bun.nanoseconds()
    console.log("start")
    const length = 1000000000
    for (let i = 0;i < length; i++ ) {
        const x1 = Math.random()
    }
    console.log("end")
    const timeTaken = timelapsed(Bun.nanoseconds(dl))
    console.log(`time taken ${timeTaken}s`)
}
longLoop()
