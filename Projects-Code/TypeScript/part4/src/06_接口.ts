(function () {
    type myType = {
        name: string,
        age: number
    }

    const obj: myType = {
        name: '',
        age: 3
    }

    interface myInterface {
        name: string,
        age: number,
    }

    interface myInterface {
        gender: string
    }

    const o: myInterface = {
        name: 'c',
        age: 111,
        gender: '男'
    }

    interface myInter {
        name: string

        syaHello(): string
    }

    // 类实现接口
    class MyClass implements myInter {
        name: string;

        syaHello(): string {
            return "";
        }
    }
})()