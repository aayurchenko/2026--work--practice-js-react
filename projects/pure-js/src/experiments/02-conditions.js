const age = parseInt(prompt("Введите ваш возраст"));
const hasTicket = prompt("У вас есть билет? (да/нет)") === "да";
const isBanned = false; // Предположим, что пользователь не забанен

let accessMessage;

if (isBanned) {
  accessMessage = "Доступ запрещён";
} else if (age < 18) {
  accessMessage = "Недостаточный возраст";
} else if (!hasTicket) {
  accessMessage = "Необходимо купить билет";
} else {
  accessMessage = "Доступ разрешён";
}

console.log(accessMessage);
const ticketType = prompt("Введите тип билета (standard/vip):");

if (accessMessage === "Доступ разрешён" && ticketType === "vip") {
  console.log("Добро пожаловать в VIP-зону");
}

const ageStatus = age >= 18 ? "Совершеннолетний" : "Несовершеннолетний";
console.log(ageStatus);