let helloWorld = "Hello World";
console.log(helloWorld)


// interface
/*const user1 = {
  name: "Hayes",
  id: 0,
};
user1.id = '23'*/

interface User {
  name: string
  id: number
}
const user: User = {
  name: 'h',
  id: 122,
}

class UserAccount {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const user2: User = new UserAccount('Java', 23)
const user3 = new UserAccount('Java', 23)


// type
type States = "open" | "closed" | "minimized";
let state: States
state = 'open'
//state = '1'


// 泛型
let a: Array<string>
a = ['1', '23']
