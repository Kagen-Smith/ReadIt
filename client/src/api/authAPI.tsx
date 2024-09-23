import { UserLogin } from "../interfaces/userLogin.tsx";

const login = async (userInfo: UserLogin) => {
  console.log(userInfo); // Check if it has username and password
  const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
  });
  
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};

export { login };
// auth api