import fs from 'fs'

try { 
	const sum = await sumFromFile('./data/nums.txt') 
	console.log(sum) 
} catch(err) { 
	console.error('Error reading file:', err)
}

async function sumFromFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, content) => {
            if (err) {
                reject(err)
                return
            }

            const lines = content.split('\n')
            const numbers = lines.map(line => parseInt(line, 10) || 0) 
            const sum = numbers.reduce((acc, num) => acc + num, 0)

            resolve(sum)
        })
    })
}

