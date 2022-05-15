// npm install readline

import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Please input message: ', (line) => {
  console.log(`input message is ${line}`)
  rl.close()
})
