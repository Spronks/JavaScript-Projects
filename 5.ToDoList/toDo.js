document.getElementById('btnAdd').addEventListener('click', addToList)
function addToList() {
    const input = document.getElementById('input').value 
    if (input){
        const toDoDiv = document.getElementById('toDoList')
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

const toDoDiv = document.getElementById('toDoList')
toDoDiv.addEventListener('click',removeFromList)

function removeFromList(e) {
    const element = e.target
    if(element.classList[0]=='fa') {
        element.parentElement.remove()
    }
}