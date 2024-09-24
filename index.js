let users = [];
let userId = 1;

const form = document.querySelector(".form");
const inputName = document.querySelector(".input1");
const inputSurname = document.querySelector(".input2");
const inputEmail = document.querySelector(".input3");
const inputTel = document.querySelector(".input4");
form.addEventListener("submit", handlerForm);
function handlerForm(event) {
  //   console.log(e.target.value);
  event.preventDefault();
  // console.log(event);
  // const nameValue = event.target.value;
  // console.log(nameValue);
  const user = {
    id: userId++,
    name: inputName.value,
    surname: inputSurname.value,
    email: inputEmail.value,
    tel: inputTel.value,
  };
  users.push(user);
  form.reset();
  console.log(users);
}
users.map((name, surname) => {
  if (name === users[name] && surname === users[surname]) {
    return `${name} ${surname} ${users[tel]}`;
  }
});
console.log(users(John, Rock));
