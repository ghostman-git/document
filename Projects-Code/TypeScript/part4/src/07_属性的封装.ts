(function () {
    class Person {

        // public 任意位置
        // private 私有属性
        public name: string
        private _age: number

        constructor(name: string, age: number) {
            this.name = name
            this._age = age
        }

        setAge(age: number): void {
            this._age = age
        }

        getAge(): number {
            return this._age
        }

        // typescript 中的get set方法
        get age(): number {
            return this._age;
        }

        set age(value: number) {
            this._age = value;
        }
    }


    class C {
        constructor(public name: string, private _age: number) {
            this.name = name
            this._age = _age
        }

        get age(): number {
            return this._age;
        }

        set age(value: number) {
            this._age = value;
        }
    }

    const p = new Person('孙悟空', 1000);
    p.name = '猪八戒'
    p.age = 33

    p.setAge(3000)
    p.getAge()

    p.age = 4000
    console.log(p.age)

})()