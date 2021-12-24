document.getElementById('btnAdd').addEventListener('click', addToList)
const toDoDiv = document.getElementById('toDoList')

// Inside our ul, each time the add button is pressed, we'll create a parent div(newToDoItem)
// that will include 2 child elements,
// a li(toDoName) which will be the thing to do and
// a trash icon(deleteBtn) which we'll use to delete the parent div.
// toDoDiv --> newToDoItem --> toDoName
//                         --> deleteBtn
function addToList() {
    const input = document.getElementById('input').value 
    if (input){    
        const newToDoItem = document.createElement('div')
        const toDoName = document.createElement('li')
        toDoName.innerHTML = input
        const deleteBtn = document.createElement('i')
        deleteBtn.classList.add('fa')
        deleteBtn.classList.add('fa-trash-o')
    
        newToDoItem.appendChild(toDoName) 
        newToDoItem.appendChild(deleteBtn)
    
        toDoDiv.appendChild(newToDoItem) 
    }
}

toDoDiv.addEventListener('click',removeFromList)

// if we click on the trash icon only -and not in the whole area- 
// the parent div that includes the li and the icon will be removed.
function removeFromList(e) {
    const element = e.target
    if(element.classList[0]=='fa') {
        element.parentElement.remove()
    }
}