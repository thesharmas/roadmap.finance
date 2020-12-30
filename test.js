//adding from other laptop
//adding a comment

function addQuestion(selector,question,nextfunc)
{
    const body = document.querySelector(".questions")
    const div = document.createElement('div')
    div.className =selector
    div.innerHTML = "<label>" + question + "</label>"
    body.appendChild(div)
   

    const list = document.querySelector('.'+selector);
    const liitem = document.createElement('input');
    liitem.type="number";
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
    if (value){

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
    return;
}



function addIncome(){
    //create div
    
    age=addSummary("age");
    if (age){
        addQuestion("income","What is your income? ",addExpenses);
    }
    
        
} 

function addExpenses(){
    
    inc=addSummary("income");
   if(inc){
    addQuestion("expenses","What are your expenses? ",addSavings); 
   }
   
} 


function addSavings(){
    exp=addSummary("expenses")
    if(exp){
    addQuestion("savings","What are your cash savings? ",TestSavings); 
    }
  

    
} 

function reStart(){
    const advice = document.querySelector(".advicebox");
     
    const but = document.createElement('button');
    but.textContent ='Restart';
    but.className="restrart";
    advice.appendChild(but);
    but.onclick = function () {
        location.reload();
   }
}

function TestSavings(){
      
    sav=addSummary("savings")
    
    if (sav<=6*exp){
        const advice = document.querySelector(".container2");
        const append = "<div class = advicebox><p><b> SAVE FIRST BRO</b></p></div>"
        advice.insertAdjacentHTML("beforeend",append);
        reStart();
    } else{
    
        const advice = document.querySelector(".container2");
            const append = "<div class = advicebox><p><b> You are doing great. Keep going</b></p></div>"
            advice.insertAdjacentHTML("beforeend",append);
        }
} 


//exp = document.querySelector(".exp").value;
  //  console.log("exp", exp)
    
