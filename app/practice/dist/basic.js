import { createInterface } from 'readline'
// npm install readline
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})
rl.question('Please input message: ', (line) => {
  console.log(`input message is ${line}`)
  rl.close()
})
