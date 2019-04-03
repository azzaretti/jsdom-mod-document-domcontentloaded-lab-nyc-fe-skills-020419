
document.addEvenetListener("DOMContentLoaded", replaceText)

let div = document.getElementById("hidden-div")

function replaceText(innerDiv){
  innerDiv.innerHTML = "301"
}
