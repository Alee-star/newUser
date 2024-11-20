import React, { Component } from 'react';

class UserList extends Component {
  render() {
    const { users, removeUser } = this.props;
    return (
      <div>
        <h2>User List</h2>
        <ul id="userList">
          {users.length === 0 ? (
            <p>No Users Found.</p>
          ) : (
            users.map((user, index) => (
                <li key={index} style={{
                    borderLeft: `2px solid ${user.status === 'Active' ? 'green' : 'orangered'}`,
                    padding: '3px',
                    paddingLeft: '20px',
                  }}
                >
                    {user.name}
                    <button onClick={() => removeUser(index)} className='removebtn'>X</button>
                </li>
            ))
          )}
        </ul>
      </div>
    );
  }
}

export default UserList;


