const input = document.querySelector("input");
const addUserButton = document.querySelector("button");
const detailsContainer = document.querySelector(".details");
const form = document.querySelector("form");
const name = document.querySelector("input[type=text]");
const email = document.querySelector("input[type=email]");
const password = document.querySelector("input[type=password]");
const submit = document.querySelector("input[type=submit]");

console.log(submit);
// addUserButton.onclick = () => {
//     fetch("http://localhost:3001/addUser", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             id: Date.now(),
//             name: input.value,
//         }),
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             displayUser();
//         });
//     input.value = "";
// };

// function displayUser() {
//     let section = "";
//     fetch("http://localhost:3001/displayUser")
//         .then((res) => res.json())
//         .then((data) => {
//             data.forEach((element) => {
//                 section = `<section><h6>${element.id}</h6><h5>${element.name}</h5></section>`;
//             });
//             detailsContainer.insertAdjacentHTML("beforeend", section);
//         });
// }
// function displayUser1() {
//     let section = "";
//     fetch("http://localhost:3001/displayUser")
//         .then((res) => res.json())
//         .then((data) => {
//             data.forEach((element, index) => {
//                 section += `<section><h6>${element.id}</h6><h5>${element.name}</h5></section>`;
//             });
//             detailsContainer.insertAdjacentHTML("beforeend", section);
//         });
// }

submit.onclick = () => {
    let out = "";
    fetch("http://localhost:3001/createuser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            password: password.value,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
};
