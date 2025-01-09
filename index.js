const btn = document.getElementById("btn");
const ventanaSuccess = document.getElementById("success");
// Function to add  or remove the error from the fields
function classError(idElement, input, action = "add") {
  if (action === "add") {
    input.style.border = "1px solid red";
    document.getElementById(idElement).classList.add("error--active");
  } else if (
    document.getElementById(idElement).classList.contains("error--active")
  ) {
    input.style.border = "1px solid hsl(186, 15%, 59%)";

    document.getElementById(idElement).classList.remove("error--active");
  }
}

/*Functions to make sure all fiels are correct */
function cName(valor) {
  const regExp = /^[a-zA-Z]+$/;
  if (regExp.test(valor.value)) {
    return true;
  }
  return false;
}

function cEmail(valor) {
  const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regExp.test(valor.value)) {
    return true;
  }
  return false;
}

function cQuery(queries) {
  let seleccionado = false;
  queries.forEach((query) => {
    if (query.checked) {
      seleccionado = true;
    }
  });

  return seleccionado;
}
/* END Functions to make sure all fiels are correct */
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const queries = document.querySelectorAll(".form__query__inputs input");
  const message = document.getElementById("message");
  const consent = document.getElementById("consent");
  if (!cName(firstName)) {
    classError("error-first", firstName);
  } else {
    classError("error-first", firstName, "remove");
  }

  if (!cName(lastName)) {
    classError("error-last", lastName);
  } else {
    classError("error-last", lastName, "remove");
  }

  if (!cEmail(email)) {
    classError("error-email", email);
  } else {
    classError("error-email", email, "remove");
  }

  if (!cQuery(queries)) {
    document.getElementById("error-query").classList.add("error--active");
  } else {
    document.getElementById("error-query").classList.remove("error--active");
  }

  if (message.value.length < 10) {
    classError("error-message", message);
  } else {
    classError("error-message", message, "remove");
  }

  if (!consent.checked) {
    document.getElementById("error-consent").classList.add("error--active");
  } else {
    document.getElementById("error-consent").classList.remove("error--active");
  }

  // if there are not errors then we show the success message

  if (!document.querySelector(".error--active")) {
    ventanaSuccess.classList.add("success__active");
    setTimeout(() => {
      ventanaSuccess.classList.remove("success__active");
    }, 3000);
  }
});
