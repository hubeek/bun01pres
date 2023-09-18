function timelapsed(hrtime) {
    const seconds = hrtime[0]
    const milliseconds = Math.floor(hrtime[1]/1e6)

    let formattedTime = `${seconds}.${milliseconds}s`

    return formattedTime;

}

function longLoop() {
    const dl = process.hrtime()
    console.log("start")
    const length = 1000000000
    for (let i = 0;i < length; i++ ) {
        const x1 = Math.random()
    }
    console.log("end")
    const timeTaken = timelapsed(process.hrtime(dl)) // helper func timelapsed
    console.log(`time taken ${timeTaken}`)
}
longLoop()
