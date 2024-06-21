document.addEventListener("DOMContentLoaded", function () {
  const tomboll = document.querySelectorAll(".tomboll");
  const display = document.getElementById("display");

  tomboll.forEach((button) => {
    button.addEventListener("click", function () {
      const value = button.textContent;

      if (value === "=") {
        try {
          display.value = eval(display.value.replace("x", "*").replace(":", "/"));
        } catch {
          display.value = "error";
        }
        return;
      }
      if (value === "C") {
        display.value = "";
        return;
      }
      display.value += value;
    });
  });
});
