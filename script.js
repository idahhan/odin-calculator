


function add (...args) {
    function reducer (previous, current) {
        return current + previous;
    }
 return args.reduce(reducer, 0);
}



function subtract (a,b) {
 return a-b;
}


function multiply (a,b) {
        return a * b;
}

function divide (a,b) {
    return Math.round((a / b)*100)/100;
}



//build calculator UI

let j=9;

let sign;

function calculator () {

    for (let i=0;i<20;i++) {
    
    let container=document.getElementById("container");

    let div= document.createElement("div");
    container.appendChild(div);


    let button=document.createElement("button");
    let key=div.appendChild(button);
    
    if (i==19) {
        key.classList.add("operator")
        key.id="equal";
        sign=document.createTextNode("=");
        key.appendChild(sign);


    }

    else if (i==3){
        key.classList.add("operator")
        key.id="divide";
        sign=document.createTextNode("÷");
        key.appendChild(sign);

    }
    else if (i==7){
        key.classList.add("operator")
        key.id="multi";
        sign=document.createTextNode("×");
        key.appendChild(sign);

    }

    else if (i==11){
        key.classList.add("operator")
        key.id="subtract";
        sign=document.createTextNode("−");
        key.appendChild(sign);

    }

    else if (i==15){
        key.classList.add("operator")
        sign=document.createTextNode("+");
        key.id="add";
        key.appendChild(sign);

    }
  

    else if (i==1 || i==2){
        key.classList.add("hide")
        clear=document.createTextNode("");
        key.appendChild(clear);    }

    else if (i==0) {
        key.classList.add("specialoperator")
        clear=document.createTextNode("AC");
        key.appendChild(clear);
    }
    else if (i==18 || i==17) {
        key.classList.add("hide")
        clear=document.createTextNode("");
        key.appendChild(clear);

    }
    else {
        key.classList.add("number")
        let text=document.createTextNode(`${j}`);
        key.id=`${j}`;
        key.appendChild(text);
        j--
    }

        
    }

}

calculator();


let displaytext=document.getElementById("displaytext");
let key=document.querySelectorAll(".number");
let operator=document.querySelectorAll(".operator");

let i=0;
let x="";
let numbers;
let func;
let total=0;



function display () {

    key.forEach(element => {

        element.addEventListener("click", (e)=> {

            x= `${x}` + `${e.target.id}`;
            displaytext.innerText=x;


    });
});
}

display();

function calcualte () {


    operator.forEach(element => {

        element.addEventListener("click", (e)=> {

            if (i==0) {
                total=Number(x);
                console.log(total);
                func=e.target.id;
                console.log(func);

                i++
                x="";
            }
            else if (e.target.id == "equal") {
                total= operate(func,total,Number(x));
                displaytext.innerText=total;
            }
            else {
               total= operate(func,total,Number(x));
               console.log(total);
               func=e.target.id;
               console.log(operator);

               x="";
        
            }


        });
    });
}

calcualte();


function operate (func, total, num) {

    if (func == "add") {

        return add(total, num);
    }
    else if (func == "divide") {
        return divide(total, num);

    }
    else if (func == "subtract") {
        return total-num;

    }
    else if (func == "multi") {
        return multiply(total,num);
    }
}

function reset () {

    let specialoperator=document.querySelectorAll(".specialoperator");
    specialoperator.forEach(element => {

        element.addEventListener("click", (e)=> {
            displaytext.innerText="";
            i=0;
            x="";
            total=0;
        



        })
    })

}
reset();

//keyboard 

function display_key () {


        window.addEventListener("keydown", (e)=> {
            x= `${x}` + `${e.key}`;
            displaytext.innerText=x;

    });

}


display_key();
