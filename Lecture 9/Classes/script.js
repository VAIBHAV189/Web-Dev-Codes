class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        // this.getFirstName = function(){
        //     return this.name.split(' ')[0];
        // }
    }
    getFirstName(){
        return this.name.split(' ')[0];
    }
    getLastName(){
        return this.name.split(' ')[1];
    }
    get LastName(){
        return this.name.split(' ')[1];
    }
    set LastName(value){
        let a = this.name.split(' ');
        a.pop();
        a.push(value);
        this.name=a.join(' ');
    }
    static ageDiff(a,b){
        return a.age-b.age;
    }
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age);
        this.marks = marks;
    }
}

let p = new Person('Harry Potter',18);
let p1 = new Person('Ron Weasley',17);

console.log(Person.ageDiff(p,p1));

let s = new Student('Varun Bajlotra',18,50);

