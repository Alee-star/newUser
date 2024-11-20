import React, { Component } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {   
      users: [],
      showAddUser: true,
      showUserList: false,
    };
  }
  toggleAddUser = () => {
    this.setState({
      showAddUser: true,
      showUserList: false,
    })
  }
  toggleUserList = () => {
    this.setState({ 
      showAddUser: false,
      showUserList: true,                         
    });
  };
  
  addUser = (userName, userStatus) => {
    this.setState((prevState) => ({
      users: [...prevState.users, {name: userName, status: userStatus}],
    }));
  };
  
  removeUser = (index) => {
    const newUsers = [...this.state.users]
    newUsers.splice(index, 1)
    this.setState({users: newUsers})
  }

  render() {
    const { users, showUserList, showAddUser } = this.state;

    return (
      <div className="App">
        <h1>User App</h1>
        <button onClick={this.toggleAddUser}>Add User</button>
        <button onClick={this.toggleUserList}>User List</button>
        {showAddUser && <AddUser addUser={this.addUser}/>}
        {showUserList && <UserList users={users} removeUser={this.removeUser}/>}
      </div>
    );
  }
}

export default App;




