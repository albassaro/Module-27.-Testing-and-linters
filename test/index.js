import fetch from "node-fetch";

export const response = await fetch("https://api.github.com/users/skillfactory");

export const data = await response.json();

console.log("Информация о пользователе: ", data);

