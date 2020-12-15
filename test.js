//adding from other laptop
//adding a comment

function addIncome(){
    //create div
    const body = document.querySelector("body")
    const div = document.createElement('div')
    div.className ="income"
    div.innerHTML ="What is your income? "
    body.appendChild(div)

    const list = document.querySelector('.income');
    const liitem = document.createElement('input');
    liitem.type="text";
    liitem.className="inc"
    list.appendChild(liitem);
    const but = document.createElement('button');
    but.textContent ='Next';
    list.appendChild(but);
    age = document.getElementById("age").value;
    console.log("age = ",age);
    but.onclick = function () {
         addExpenses();
    }

} 

function addExpenses(){
    const body = document.querySelector("body")
    const div = document.createElement('div')
    div.className ="expenses"
    body.appendChild(div)

       
    inc = document.querySelector(".inc").value;
    console.log("inc = ",inc);

    const list = document.querySelector('.expenses');
    list.innerHTML ="What are your expenses? "
    const liitem = document.createElement('input');
    liitem.className="exp";
    liitem.type="text";
    list.appendChild(liitem);
    const but = document.createElement('button');
    but.textContent ='Next';
    list.appendChild(but);
    but.onclick = function () {
        addSavings();
    }

} 


function addSavings(){
    const body = document.querySelector("body")
    const div = document.createElement('div')
    div.className ="savings"
    body.appendChild(div)
    
    
    
    exp = document.querySelector(".exp").value;
    console.log("exp", exp)

    const list = document.querySelector('.savings');
    list.innerHTML ="What are your Savings? "
    const liitem = document.createElement('input');
    liitem.className="sav";
    liitem.type="text";
    list.appendChild(liitem);
    const but = document.createElement('button');
    but.textContent ='Next';
    list.appendChild(but);
    but.onclick = function () {
        TestSavings();
    }

} 

function TestSavings(){
    sav = document.querySelector(".sav").value;
    console.log("sav", exp)

    if (sav<=6*exp){
        alert("stop and save first")
    }
    
} 


//exp = document.querySelector(".exp").value;
  //  console.log("exp", exp)
    
