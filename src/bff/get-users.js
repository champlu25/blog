export const getUsers = () =>
  fetch("https://localhost:3001/users").then((loadedUsers) =>
    loadedUsers.json()
  );
