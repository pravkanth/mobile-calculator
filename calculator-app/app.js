const displayVal = document.getElementById('display-val');
let userEnter = '';

function displayContent(){
    if(userEnter.length == 0){
        userEnter = '0'
    }
    displayVal.textContent = userEnter
}
function calculate(val){
    if(userEnter[0] == '0'){
        userEnter = userEnter.slice(1,userEnter.length)
    }
    userEnter+=val
   displayContent() 
}
function submit(){
    try {
        userEnter = eval(userEnter).toString()
        displayContent()
        }
        catch(err) {
        alert("Please enter right value")
        }
}
function backSpace(){
    console.log(userEnter);
    userEnter = userEnter.slice(0,userEnter.length-1)
    displayContent()
}
function clearVal(){
    userEnter = '0'
    displayContent()
}
