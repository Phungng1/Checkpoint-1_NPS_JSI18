/* Trac nghiem
1 D 2C 3B 4A 5B 6D 7D 8C
*/

///Bai 9
let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100]

let n = m.filter(
    (item) => item % 1 === 0
)
console.log(n);
let mSquared = m.map(item => item ** 2)
console.log(mSquared);



///Bai 10
let arr1 = " High knowedge, high return"
let arr2 =  arr1.split(" ")
arr2.shift()
console.log(arr2);


///Bai 11
class People {
    constructor(name, age, address) {
        this._name = name
        this._age = age
        this._address = address
    }
    setName(newName) {
        this._name = newName
    }
    setAge(newAge) {
        this._age = newAge
    }
    setAddress(newAddress) {
        this._address = newAddress
    }

    get() {
        return this._name + " " + this._age + " " + this._address
    }
}

let Phong = new People("Phong", 17, "323")
console.log(Phong.get());
Phong.setAge(16)
console.log(Phong.get());


class Students extends People {
    constructor(name, age, address, id, math, physical, chemistry) {
        super(name, age, address)
        this._id = id
        this._math = math
        this._physical = physical
        this._chemistry = chemistry
    }
    get() {
        return this._name + " " + this._age + " " + this._address + " " + this._id + " " + this._math + " " + this._physical + " " + this._chemistry
    }
    setID(newID) {
        this._id = newID
    }
    setMath(newMath) {
        this._math = newMath
    }
    setPhysical(newPhysical) {
        this._physical = newPhysical
    }
    setChemistry(newChem) {
        this._chemistry = newChem
    }
    GPA(){
        let GPA = (this._chemistry + this._math + this._physical)/3
        return GPA 
    }
}

let M = new Students("M", 13, 123, 123456, 9.5, 10, 7)
M.setAge(15)
console.log(M.get());
M.setChemistry(10)
console.log(M.get());
console.log(M.GPA());



//Bai 12
class Shape {
    constructor(length, width){
        this._length = length
        this._width = width
    }

}
class Triangle extends Shape{
    constructor(length, width){
        super(length, width)
    }
    area(){
        let a = this._length * this._width /2
        return a
    }
}
class Rectangle extends Shape{
    constructor(length, width){
        super(length, width)
    }
    area(){
        let a = this._length * this._width 
        return a
    }
}

let A = new Triangle(2,3)
console.log(A.area());
let B = new Rectangle(3,4)
console.log(B.area());


///Bai 13
class Animal {
    constructor(name, age, other){
        this._name = name
        this._age = age
        this._other = other
    }
    set_value_Name(newName){
        this._name = newName
    }
    set_value_Age(newAge){
        this._age = newAge
    }
    set_value_Other(newOther){
        this._other = newOther
    }
    message(){
        return "Name:" + " " + this._name + " it is " + this._age + " years old" + " and it is" + this._other
    }
}
let Zebra = new Animal("Dolphin", 4, "black and white")
let Dolphin = new Animal("Zebra", 5, "grey")
console.log(Zebra.message());
///Bai 14

