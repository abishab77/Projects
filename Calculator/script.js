const input = document.querySelector("#input");
function addToDisplay(a) {
  if (a === "c") input.value = "";
  else if (a === "d") {
    if(input.value==="Invalid")
      input.value=""
    else
      {
    let arr = [];
    arr = input.value.split("");
   
    arr.pop();
    input.value = arr.join("").replace(/"/g, "");
      }
  } else input.value += a;
}

function Evaluate() {
  if (eval(input.value)) input.value = eval(input.value);
  else if(eval(input.value)===0)
    input.value=0;
  else input.value = "Invalid";
}
