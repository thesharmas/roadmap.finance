//adding from other laptop
//adding a comment

function addIncome(){
    const list = document.querySelector('.income');
    list.innerHTML ="What is your income? "
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
    
