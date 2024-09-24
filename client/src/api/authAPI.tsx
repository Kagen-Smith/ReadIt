/**
 * Logs in a user with the provided credentials.
 *
 * @param {UserLogin} userInfo - The user's login information, including username and password.
 * @returns {Promise<any>} A promise that resolves to the response data if the login is successful.
 * @throws {Error} Throws an error if the network response is not ok.
 */

import { UserLogin } from "../interfaces/userLogin.tsx";

export const login = async (userInfo: UserLogin) => {
  console.log(userInfo);
  const response = await fetch("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfo),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data;
};
