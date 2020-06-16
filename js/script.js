
let stertBtn = document.getElementById('start');
let budgetValue = document.querySelector('.budget-value');
let dayBudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalexpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthsavingsValue = document.querySelector('.monthsavings-value');
let yearsavingsValue = document.querySelector('.yearsavings-value');

// input
let expensesItems = document.getElementsByClassName('expenses-item');
let btn = document.querySelectorAll('button')
let expensesBtn = btn[0];
let optionalExpensesBtn = btn[1];
let countBtn = btn[2];
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
let incomeItom = document.querySelector('.choose-income');
let checkSaiving = document.querySelector('#savings');
let sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');


// start function
let money,	time ;

stertBtn.addEventListener('click', () => {
    
		 time = prompt('Введите дату в формате YYYY-MM-DD', '2020-06-15');		 
		 
		 while( isNaN(money) || money == '' || money === null ){
			money = +prompt("Ваш бюджет на месяц?", '25000');
         }
         
         appData.budget = money;
         appData.timeData = time;
         budgetValue.textContent = money.toFixed();
         let date = new Date(Date.parse(time));
      
         yearValue.value =  date.getFullYear();
         monthValue.value = date.getMonth()+1;
         dayValue.value = date.getDate();
});

// Обязательные расходы ( обработка кнопки УТЫЕРДИТЬ)
expensesBtn.addEventListener('click', () => {
    let sum = 0;
    console.log('lenth : '+ expensesItems.length);

    for (let i=0; i<expensesItems.length; i++){            
          
                let a = expensesItems[i].value;
                let	b = expensesItems[++i].value;
                console.log(a+ ' '+ b);      
				
				if( (typeof(a)) === 'string' && (typeof(a)!= null) && (typeof(b)!= null) &&
					a != '' && b != '' && a.length < 30 ){
                        appData.expenses[a] = b;
                        sum += +b;
				}
				else {
					--i;
				}
        }       
        expensesValue.textContent = sum;        
});


// расчет дополнительных расходов
optionalExpensesBtn.addEventListener('click', () => {
    let sum = '';
    for(let i =0; i<optionalexpensesItem.length; i++){
        let opt = optionalexpensesItem[i].value;
        appData.optionalExpenses[i]= opt;
        sum += ' '+opt;
    }
    optionalexpensesValue.textContent= sum;
});

// расчет дневного бюджета
countBtn.addEventListener('click', () => {
    if (appData.budget != undefined){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
    if (appData.moneyPerDay < 100){
        levelValue.textContent ='За чертой бедности';
    } else if(appData.moneyPerDay >100 && appData.moneyPerDay <2000){
        levelValue.textContent ='Средний уровень дохода';	
    } else if (appData.moneyPerDay >2000){
        levelValue.textContent ='Хороший доход';	
    } else {
        levelValue.textContent ='Все непонятно...';
    }
    
    console.log(appData.budget);
    }
    else{
        alert('Нажмите "НАЧАТЬ РАСЧЕТ"!');
    }

});

// возможный доход
incomeItom.addEventListener('input', () => {
    let item='';
    while (item === '' || item === null){
        
    item = incomeItom.value;
    console.log(item);
    }	
    appData.income = item.split(', ');
    appData.income.sort();	
    incomeValue.textContent = item;  
});

checkSaiving.addEventListener('click', () => {   
    
    if (checkSaiving.checked) {
        appData.savings = true;
    } else
    {
        appData.savings = false;
    }
   console.log ( appData.savings);   
});

sumValue.addEventListener('input', () => {

    let sum = +sumValue.value;
    let per = +percentValue.value;
    if (appData.savings  == true ){
      
        appData.monthIncome = sum/100/12*per;
        appData.yearIncome = sum/100*per;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);       

    }
    console.log(sum);
    console.log(per);
})
percentValue.addEventListener('input', () => {
    let sum = +sumValue.value;
    let per = +percentValue.value;
    if (appData.savings  == true ){
      
        appData.monthIncome = sum/100/12*per;
        appData.yearIncome = sum/100*per;
        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);       

    }
    console.log(sum);
    console.log(per);   
})



let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true	
};


console.log(appData)
