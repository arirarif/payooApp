// 1: Event handler nibo
// 2: check pin
// 3: get amount
// 4: get current balance
// 5: get amount + current = updated amount
// 6: current + update = total

// add money to the account
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    // get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;

    // get the pin number provided
    const pinNumberInput = document.getElementById("input-pin-number").value;

    // validate the pin number
    if (pinNumberInput === "1234") {
      console.log("adding money to your account");

      //   4: get the current balance
      const balance = document.getElementById("account-balance").innerText;

      // 5: add addMoneyInput with balance
      // const newBalance = balance + addMoneyInput
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);

      //   Update the balance
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      console.log("pin is not correct");
    }
  });
