(function() {
    let userService = new AdminUserServiceClient()
    let $createUser
    let $updateUser
    let $usernameFld
    let username = "alice"
    let salary = 123456
    let tenured = true
    const FACULTY = "FACULTY"
    let alice = {
        "username": username,
        "salary": salary,
        "firstName": "Alice",
        lastName: "Wonderland"
    }
    let users = [
        alice,
        {username: "bob"}
    ]
    let grades = [
        89, 78, 90
    ]
    let names = [
        "Alice", "Bob"
    ]
    let h1;


const addUser = () => {
    const user = {
        username: $usernameFld.val()
    }
    $usernameFld.val("")

    userService.createUser(user)
        .then(brandNewUser => {
            users.push(brandNewUser)
            renderUsers()
        })

}




let $staff = jQuery("<h1>Staff</h1>")
let $body = $("body")
$body.append($staff)

let userList = $("#userList")
// let newUser = $("<li>New User</li>")
// userList.append(newUser)
// userList.append("<li>New User 2</li>")
// userList.append("<li>" + users[0].username + "</li>")
// userList.append(`<li>${users[1].username}</li>`)

const deleteUser = (index) => {
    let user = users[index]
    let _id = user._id
    console.log(_id)

    userService.deleteUser(_id)
        .then(response => {
            users.splice(index, 1)
            renderUsers()
        })
}
let currentUser = -1
const editUser = index => {
    const user = users[index];
    const _id = user._id
    currentUser = index
    console.log(_id)
    userService.findUserById(_id)
        .then(user => {
            console.log(user)
            $usernameFld.val(user.username)
        })
}

const renderUsers = () => {
    userList.empty()
    for (let u in users) {
        const user = users[u];

        const $deleteBtn = $("<button>Delete</button>")
        $deleteBtn.click(() => {
            deleteUser(u)
        })

        const $editBtn = $("<button>Edit</button>")
        $editBtn.click(() => {
            editUser(u)
        })

        let $li = $(`<li>${user.username}</li>`)
        $li.append($deleteBtn)
        $li.append($editBtn)

        userList.append($li)
    }
}

const findAllUsers = () => {
    userService.findAllUsers()
        .then(remoteUsers => {
            users = remoteUsers
            renderUsers()
            // findAllUsers(?)
        })
}
findAllUsers()

    const updateUser = () => {

        let user = users[currentUser]

        user.username = $usernameFld.val()

        $usernameFld.val("")

        userService.updateUser(user._id, user)
            .then(brandNewUser => {
                findAllUsers()
            })

    }


    function main() {
        $createUser = $("#createUser")
        $updateUser = $("#updateUser")
        $usernameFld = $("#usernameFld")
        $usernameFld.val("New User 123")
        for(let u = 0; u < users.length; u++) {
            const username = users[u].username
            console.log(username);
        }
        h1 = jQuery("#title")
        // h1.remove()
        h1.html("User Admin")

        $createUser.click(addUser)
        $updateUser.click(updateUser)

    }
    $(main);


})()
