type HasName = {
  name: string
}

const test: HasName[] = [
  {
    name: 'tojima',
  },
  {
    name: 'tojima',
  },
]

type Family<Parent extends HasName, Child extends HasName> = {
  mother: Parent
  father: Parent
  child: Child
}
// type T1 = Family<number, string> // error

type Animal = {
  name: string
}

type Human = {
  name: string
  age: number
}

const test2: Family<Animal, Human> = {
  mother: {
    name: 'aaa',
  },
  father: {
    name: 'aaa',
  },
  child: {
    name: '',
    age: 0,
  },
}

type T2 = Family<Animal, Human> // ok
type T3 = Family<Human, Animal> // ok

type Family2<Parent extends HasName, Child extends Parent> = {
  mother: Parent
  father: Parent
  child: Child
}

type T4 = Family2<Animal, Human> // ok
// type T5 = Family2<Human, Animal> // error

// optional type
// 型注釈を省略できる
type Animal2 = {
  name: string
}

type Family3<Parent = Animal, Child = Animal> = {
  mother: Parent
  father: Parent
  child: Child
}

type S = Family3<string, string> // basic
type T5 = Family3 // 省略できる<Animal, Animal> と同じ
type U = Family3<number> // // 省略できる<number, Animal> と同じ

const sample: U = {
  mother: 1,
  father: 2,
  child: {
    name: 'test',
  },
}
