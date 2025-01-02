import { generateDate } from "./generate-date";

export const addUser = (login, password) => fetch('https:localhost:3001/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
        login: regLogin,
        password: password,
        registed_at: generateDate(),
        role_id: 2,
    }),
});