const day = parseInt(process.argv[2])

if (day % 3 === 0) {
    console.log('あなたは神経質な性格です')
} else if (day % 3 === 1) {
    console.log('あなたはまじめな性格です')
} else if (day % 3 === 2) {
    console.log('あなたはさっぱりした性格です')
}