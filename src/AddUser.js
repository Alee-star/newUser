import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userStatus: 'Active'
    };
  }

  handleInputChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleStatusChange = (event) => {
    this.setState({ userStatus: event.target.value })
  }

  handleSubmit = () => {
    const { userName, userStatus } = this.state;
    if (userName.trim() !== '') {
      this.props.addUser(userName, userStatus); 
      this.setState({ userName: '' , userStatus: 'Active'}); 
    }
  };

  render() {
    const { userName, userStatus } = this.state
    const isButtonDisabled = userName.trim() === '';
    return (
      <div>
        <input type="text" placeholder="Enter user name" value={this.state.userName} onChange={this.handleInputChange}/>
        <div className='status'>
            <label htmlFor='userStatus'>User Status: </label>
            <select id='userStatus' value={userStatus} onChange={this.handleStatusChange}>
                <option value="Active">Active</option>
                <option value="Deactive">Deactive</option>
            </select>
        </div>
        <button onClick={this.handleSubmit} disabled={isButtonDisabled} style={{
            backgroundColor: isButtonDisabled ? '#ccc' : '#28a745',
            cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
            width: '85%'
        }}>Create User</button>
      </div>
    );
  }
}

export default AddUser;

