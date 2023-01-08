const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses_list');
const totalExpensesOutput = document.querySelector('#total_expenses');
const alertControl = document.querySelector('ion-alert-controller');
let totaExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        const alert = document.createElement('ion-alert');
        alert.header = 'Alert';
        alert.subHeader = 'Important message';
        alert.message = 'This is an alert!';
        alert.buttons = ['Okay'];

        // document.body.appendChild(alert);
        // alert.present();
    }

    console.log(enteredReason, enteredAmount);

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ' $' + enteredAmount;
    expensesList.appendChild(newItem);

    totaExpenses += +enteredAmount;
    totalExpensesOutput.textContent = totaExpenses;
    clear();
});
cancelBtn.addEventListener('click', clear);