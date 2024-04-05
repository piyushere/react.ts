import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { User, addUser, userSelector } from '../store/userSlice';
import './user.css';
function UserPage() {
  const [users, setUsers] = useState<Array<User>>([]);
  const [newUserName, setNewUserName] = useState<string>('');
  const [newUserEmail, setNewUserEmail] = useState<string>('');
  const selectedUsers = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setUsers(selectedUsers);
    return () => {
      console.log('component unmounting...');
    };
  }, [selectedUsers]);
  function handleAddUser() {
    const newUser = {
      id: (users.length + 1).toString(),
      name: newUserName,
      email: newUserEmail,
    };
    dispatch(addUser(newUser));
  }
  return (
    <div>
      {users.map((user) => (
        <li key={user.id}>
          {user.id} | {user.name} | {user.email}
        </li>
      ))}
      <div>
        <input
          type="text"
          placeholder="Name"
          aria-label="name"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Email"
          aria-label="email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
        ></input>
        <button type="submit" className="btn" onClick={handleAddUser}>
          Add
        </button>
      </div>
    </div>
  );
}
export default UserPage;
