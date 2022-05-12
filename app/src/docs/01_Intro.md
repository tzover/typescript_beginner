# TypeScript

> Microsoft が開発した AltJS の一種　\
> 静的型システムを持った言語（静的型付け言語） \
> TypeScript はコンパイラ（tsc）を所有しており、プログラムに対する型チェックを行える

<br>

## JavaScript に対する静的型付け

<br>

- 型注釈

```
const str: string = "Hello"
```

- 型推論

```
const str = "Hello"
```

> 上記はどちらも正常に動作する。（TypeScript -> 型推論\*型注釈） \
> TypeScript is a strongly typed programming language that builds on JavaScript, <br>giving you better tooling at any scale. <br> "TypeScript は、JavaScript に基づいて構築された強い型のプログラミング言語であり、<br>あらゆる規模でより優れたツールを提供します。"

<br>

## 静的型付けのメリット

<br>

- 型安全性

> コンパイルエラーの要因は構文エラーと型エラー

- ドキュメント化と入力補完

> TypeScript で記述することでコードの可読性が向上したり、言語補完が効き、開発速度の向上に繋がる

<br>

## コンパイラの役割

<br>

- 型チェック
- トランスパイル

> TypeScript のソースコードを JavaScript のソースコードに変換（トランスパイル）すること \
> ソースコードから CPU が理解できる機械語に変換することがベーシックなコンパイル \
> しかし、あるプログラミング言語から他のプログラミング言語に変換することを全般コンパイルと呼ぶ場合もあるため \
> TypeScript をブラウザが理解できる JavaScript に変換することをコンパイルと呼ぶのもおかしくない。
> トランスパイル時には ECMA のバージョンを指定できるため、TypeScriptno バージョンが最新であっても少し古い JavaScript に変換したりできる。

# TypeScript の開発環境

> Node.js のバージョンは偶数の major version が安定版

## 環境の構築と Node.js version の確認

```
docker-compose up -d
docker-compose exec app bash
node -v // Node.jsのversion
npm -v // npm のversion
```
