/*
function DeleteUserAction(userId) {
    this.type = "DELETE-USER";
    this.payload = {
        userId: userId
    }

}

const action1 =  new DeleteUserAction("123132")
const action2 = new DeleteUserAction("444444")
*/


function User(name, site, dateOfBirthday) {
    this.name = name;
    this.site = site;
    this.dateOfBirthday = dateOfBirthday;
}

hello = function () {
    console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User("Dimych", "it-inc.io", new Date(1988,1,2))
const u2 = new User("Artem", "it-inc.io", new Date(1988,1,2))