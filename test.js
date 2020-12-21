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
    but.className=selector+"button";
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
    
    //Remove button from previous step
    butsel = "."+ selector+"button"
    element = document.querySelector(butsel)
    element.parentNode.removeChild(element)

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
        const advice = document.querySelector(".container2");
        const append = "<div class = advicebox><p><b> SAVE FIRST BRO</b></p></div>"
        advice.insertAdjacentHTML("beforeend",append);
    }
    
} 


//exp = document.querySelector(".exp").value;
  //  console.log("exp", exp)
    
