import Auth from "../utils/auth";

const retrieveUsers = async () => {
  try {
    const response = await fetch("/auth/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Auth.getToken()}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error("invalid user API response, check network tab!");
    }

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { retrieveUsers };
