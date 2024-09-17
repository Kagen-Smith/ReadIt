import { UserLogin } from "../interfaces/userLogin.tsx";

const login = async (userInfo: UserLogin) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo),
  });
  const data = await response.json();
  return data;
}



export { login };
// auth api