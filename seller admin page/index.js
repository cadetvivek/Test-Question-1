let expenses = JSON.parse(localStorage.getItem('expenses'))||[];
//get element
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list')

// function to render expenses 
function renderExpenses(){
    expenseList.innerHTML=''

    // reder each expence 
    expenses.forEach((expense,index)=>{
        const li = document.createElement('li');
        li.innerHTML=`<span>${expense.amount}-${expense.description}-${expense.category} </span>
         <span class ="delete-btn" onclick="deleteExpense(${index})">Delete</spane> `;
         expenseList.appendChild(li)
    });
}
// function to add
function addExpense(e){
    e.preventDefault();

    // get value

    const amount = document.getElementById('expense').value
    const description = document.getElementById('description').value
    const category = document.getElementById('category').value


    // create new expense object

    const expence={
        amount,
        description,
        category
    }

    //add expense to expeases array
    expenses.push(expence)

    // update local storage
    localStorage.setItem('expenses',JSON.stringify(expenses))

    // clear input feild
    expenseForm.reset()
    //Render expenses
    renderExpenses()
}

// function to delete expense 
function deleteExpense(index){
    expenses.splice(index,1)

    // update local storage
    localStorage.setItem('expenses',JSON.stringify(expenses))

    // Render expenses
    renderExpenses()
}
// Event listner for form submission
expenseForm.addEventListener('submit',addExpense)
renderExpenses()