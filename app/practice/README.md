# Create environment for practice

```
mkdir practice
cd practice
npm init --yes
npm install typesctipt @types/node
npx tsc --init
```

## modified tsconfig.json

```
  "target": "es2020",
  "module": "esnext",
  "moduleResolution: "node",
  "outDir": "./dist",
},
"include": ["./src/**/*.ts"]
```

## create gitignore

```
./dist
```

## create sample file and start compile

- ./src/index.ts

```
const msg = "Hello"
console.log(msg)
```

- compile

```
npx tsc
node dist/index.js
```
