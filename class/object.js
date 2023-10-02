/*

const deleteUser = (userId) => {
    const action = {
        type: "DELETE-USER",
        payload: {
            userId: userId
        },
        //method: function(){}
    }
    return action;
}

const action1 = deleteUser("123132")
const action2 = deleteUser("444444")*/


const userFabric = (name) => {
    const user = {
        name: name,
        site: "it-inc.io",
        dateOfBirth: new Date(1988, 1, 2),
        hello(){
            console.log(`I am ${this.name} from ${this.site}`)
        }

    }
    return user
}

const u1 = userFabric("Dimych")
const u2 = userFabric("Artem")

u1.hello()

