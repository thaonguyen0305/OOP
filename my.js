class Student{
    name;
    age;

    ctor(name,age) {
        this.name = construname;
        this.age = age;
    }

    talk(message) {
        console.log("Toi ten la " + this.name + message);
    }
}

let khanh = new Student("Khanh", 30)
let vu = new Student("Vu", 29) 

khanh.talk(" Xin chao Vu")
vu.talk(' oke Khanh')