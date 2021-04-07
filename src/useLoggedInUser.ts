import { User } from './UserModel';

export const useLoggedInUser = () => {
  const user = localStorage.getItem('user');

  return user ? (JSON.parse(user) as User) : null;
};
