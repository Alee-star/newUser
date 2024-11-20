import React from "react"

function ButtonToggle() {
    let users = [];
    let statusNow = "addUser" ;

    const makeNew = (one) => {
        statusNow = one;
        renderApp()
    }
    const addUser = () => {
        const input = document.getElementById("userInput")
        const newUser = input.value.trim()
        if(newUser) {
            users.push(newUser)
            input.value = ""
            makeNew("userList")
        }
    }
    const listOfUser = () => {
        const userList = document.getElementById("userList")
        userList.innerHTML = ""
        if(users.length === 0) {
            userList.innerHTML = "<p>No Details Found.</p>"
        }
        else{
            users.forEach((user) => {
                const li = document.createElement("li")
                li.textContent = user
                userList.appendChild(li)
            })
        }
    }

    const renderApp = () => {
        const root = document.getElementById("root");
        root.innerHTML = `
            <div>
                <h1>User App</h1>
                <button id="addUserBtn">Add User</button>
                <button id="userListBtn">User List</button>
            </div>
        `;
    
        if (statusNow === "addUser") {
            root.innerHTML += `
                <div>
                   <input id="userInput" type="text" placeholder="Enter user name" />
                   <button id="createUserBtn">Create User</button>
                </div>
            `;
        } 
        else if (statusNow === "userList") {
            root.innerHTML += `
                <div>
                    <h2>User List</h2>
                    <ul id="userList"></ul>
                 </div>
            `;
            listOfUser();
        }
        document.getElementById("addUserBtn").onclick = () => makeNew("addUser");
        document.getElementById("userListBtn").onclick = () => makeNew("userList");
        const createUserBtn = document.getElementById("createUserBtn");
        if (createUserBtn) createUserBtn.onclick = addUser;
    }
    React.useEffect(() => {
        renderApp();
    }, []);
    
    return <div id="root"></div>;
}
export default ButtonToggle

