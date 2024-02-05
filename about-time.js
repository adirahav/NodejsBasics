import fs from 'fs'
import ms from 'ms'

var lines = readFile('./data/times.txt')

const regexPattern = /ms\((.*?), ({.*})\)/

lines.forEach((line, index) => {
    const match = line.match(regexPattern)

    if (match) {
        const time = match[1].trim()
        const isLong = match[2].includes('true')
        console.log(ms(eval(time), { long: isLong }))
    } else {
        console.error('No match found.')
    }
})


function readFile(path) {
    const content = fs.readFileSync(path, 'utf8')
    const lines = content.split('\n')
    return lines
}