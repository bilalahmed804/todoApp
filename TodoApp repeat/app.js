function addButton (){
    var input = document.getElementById('todoInput')
  
    if(input.value){
    var list = document.getElementById('listItem');
    var listElement = document.createElement("li");
    var addElement =document.createTextNode(input.value);
    
    listElement.appendChild(addElement);
//****************delelte************* */

var deleteBtn = document.createElement("button")
deleteBtn.setAttribute("class","buttonBox01")
deleteBtn.setAttribute("id", "num01")

var delBtnText = document.createTextNode('Delete');

deleteBtn.appendChild(delBtnText);

listElement.appendChild(deleteBtn)

deleteBtn.setAttribute("onclick" , "delTodo(this)")



//**************Edit button************ */
var editBtn = document.createElement("button")
editBtn.setAttribute("class","buttonBox01")

var editBtnText = document.createTextNode('Edit');

editBtn.appendChild(editBtnText);

listElement.appendChild(editBtn)

list.appendChild(listElement);

editBtn.setAttribute("onclick" , "editTodo(this)")

console.log(listElement);
input.value =  " " ;
}
else{
    alert("Enter Task")
}

}
function deletetodo(){
    
    var list = document.getElementById('listItem');

    list.remove();
}

function delTodo(a){
    console.log(a.parentNode.remove());
}

function editTodo(e){
    var currentli = e.parentNode.firstChild.nodeValue;
    var inputField = prompt("Enter updated value", currentli)
    e.parentNode.firstChild.nodeValue = inputField
}


