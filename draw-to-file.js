import fs from 'fs'

drawSquareToFile() 
async function drawSquareToFile() { 
	const str = getSquare(getRandomIntInclusive(3, 20)) 
	await drawToFile(str) 
	setTimeout(drawSquareToFile, 200) 
} 


async function drawToFile(content) {
    fs.appendFile('./data/pic.txt', content, (err) => {
        if (err) throw err
    });
}

function getSquare(size) { 
	var str = '*'.repeat(size) + '\n' 
	for (let i = 0; i < size; i++) { 
		str += '*' + ' '.repeat(size - 2) + '*\n' 
	} 
	str += '*'.repeat(size) + '\n' 
	return str 
}


function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}