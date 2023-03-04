const answer_el = document.getElementById("answer");

function solveMe(){
    answer_el.value=eval(answer_el.value);
}

function display(num){
    answer_el.value+=num;
}

function clearMe(){
    answer_el.value="";
}