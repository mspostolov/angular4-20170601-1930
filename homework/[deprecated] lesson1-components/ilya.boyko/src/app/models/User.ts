
interface User {
  name: string;
  surname: string;
  gender: 'male' | 'feemale';
  birthday: Date;
  address: string;
  email: string;
}

export default User;