//adding from other laptop
//adding a comment

function addQuestion(selector,question,nextfunc)
{
    const body = document.querySelector(".questions")
    const div = document.createElement('div')
    div.className =selector
    div.innerHTML =question
    body.appendChild(div)
   

    const list = document.querySelector('.'+selector);
    const liitem = document.createElement('input');
    liitem.type="text";
    liitem.id=selector;
    list.appendChild(liitem);
    const but = document.createElement('button');
    but.textContent ='Next';
    list.appendChild(but);
    
    but.onclick = function () {
        nextfunc();
   }
}

function addSummary(selector){
    value = document.getElementById(selector).value;
    
    const table = document.querySelector(".summarybody")
    const tabitem = document.createElement('tr')
    tabitem.innerHTML = "<td> Your "+ selector +" </td> <td> " + value + "</td>";
    table.appendChild(tabitem);
    return value
}



function addIncome(){
    //create div
    
    addQuestion("income","What is your income",addExpenses);
   
    age=addSummary("age");
     
} 

function addExpenses(){
    
   
   addQuestion("expenses","What are your expenses",addSavings); 
   inc=addSummary("income");
   
} 


function addSavings(){
    
    addQuestion("savings","What are your cash savings",TestSavings); 
    exp=addSummary("expenses")
  

    
} 

function TestSavings(){
      
    sav=addSummary("savings")
    
    if (sav<=6*exp){
        const advice = document.querySelector(".advicebox");
        advice.innerHTML = "<p><b> SAVE FIRST BRO</b></p>"

    }
    
} 


//exp = document.querySelector(".exp").value;
  //  console.log("exp", exp)
    
