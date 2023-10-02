/*
class DeleteUserAction {
    constructor() {
        this.type = "DELETE-USER",
            this.payload = {
                userId: userId
            }
    }
}
const action1 =  new DeleteUserAction("123132")
const action2 = new DeleteUserAction("444444")*/

class User {
    _name = "";
    constructor(name, site, dateOfBirthday) {
        this._name = name; //private variable
        this.site = site;
        this.dateOfBirthday = dateOfBirthday;
    }

    get Name() {
        return this._name
    }
    set Name(value) {
        this._name = value
    }

    hello() {
        console.log(`I am ${this.name} from ${this.site}`)
    }
}


const u1 = new User("Dimych", "it-inc.io", new Date(1988, 1, 2))
const u2 = new User("Artem", "it-inc.io", new Date(1988, 1, 2))


u1.Name = "Yuriy"
console.log(u1.Name)


class Coder extends User {
    constructor(name, site, dateOfBirthday, tech) {
        super(name, site, dateOfBirthday);
        this.tech = tech
    }
    code() {
        console.log(`I am ${this.name}, here is my ${this.tech} code: const sum =(a,b) => a + b `)
    }
}

const coder1 = new Coder("Dimych Coder", "it-incubator", new Date(1988,1,2), "JavaScript")


coder1.code()