import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import ApiInstance from '../../api';

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await ApiInstance.get('/users');
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  const handleCheckboxChange = (id: number) => {
    setSelectedUsers(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(userId => userId !== id)
        : [...prevSelected, id]
    );
  };

  const handleBlock = async () => {
    // Implement blocking logic
    console.log('Block users:', selectedUsers);
  };

  const handleUnblock = async () => {
    // Implement unblocking logic
    console.log('Unblock users:', selectedUsers);
  };

  const handleDelete = async () => {
    // Implement delete logic
    console.log('Delete users:', selectedUsers);
  };

  return (
    <div>
      <h2>User Management</h2>
      <div className="mb-3">
        <Button onClick={handleBlock} variant="danger" className="me-2">Block</Button>
        <Button onClick={handleUnblock} variant="warning" className="me-2">Unblock</Button>
        <Button onClick={handleDelete} variant="secondary">Delete</Button>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={() => {
                  if (selectedUsers.length === users.length) {
                    setSelectedUsers([]);
                  } else {
                    setSelectedUsers(users.map(user => user.id));
                  }
                }}
              />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Last Login</th>
            <th>Registration Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.last_login}</td>
              <td>{user.registration_time}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
