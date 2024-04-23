document.addEventListener("DOMContentLoaded", function () {
  const newPasswordButton = document.querySelector(".new-password-button");
  const insertContainer = document.querySelector(".insert-container");

  newPasswordButton.addEventListener("click", function () {
    insertContainer.style.display = "flex";
  });

  const cancelButton = document.querySelector(".cancel-button");
  cancelButton.addEventListener("click", function () {
    insertContainer.style.display = "none";
  });

  const doneButton = document.querySelector(".done-button");
  doneButton.addEventListener("click", function () {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;

    fetch("/Password-Manager/insert-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Password saved successfully");
          insertContainer.style.display = "none";
          loadPasswords();
        } else {
          console.error("Error saving password:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error saving password:", error);
      });
  });

  function loadPasswords() {
    fetch("/Password-Manager/get-data")
      .then((response) => response.json())
      .then((data) => {
        const passwordsContainer = document.getElementById(
          "passwords-container"
        );
        passwordsContainer.innerHTML = "";

        data.names.forEach((name) => {
          const passwordElement = document.createElement("div");
          passwordElement.className = "password";
          passwordElement.textContent = name;
          passwordsContainer.appendChild(passwordElement);
        });

        data.emails.forEach((email) => {
          const passwordElement = document.createElement("div");
          passwordElement.className = "password";
          passwordElement.textContent = email;
          passwordsContainer.appendChild(passwordElement);
        });

        data.passwords.forEach((password) => {
          const passwordElement = document.createElement("div");
          passwordElement.className = "password";
          passwordElement.textContent = password;
          passwordsContainer.appendChild(passwordElement);
        });
      })
      .catch((error) => {
        console.error("Error loading passwords:", error);
      });
  }

  loadPasswords();
});
