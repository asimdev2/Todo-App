const TodoInput=document.querySelector("#todo-input")
const todoContainer=document.querySelector("#todo-container")
const todoBtn=document.querySelector("#todo-btn")
const errorP=document.querySelector("#error-p")

let currUpdateValue;

function error(value){
    const todovalue=value.trim()
    if(!todovalue){
        errorP.innerText="Please Enter a valid Todo"
        errorP.classList.remove("hide")
        errorP.classList.add("error")
        return true
    }
    errorP.classList.add("hide")
    return false
}


function handleAddTodo(){


    if(currUpdateValue){
        currUpdateValue.innerText=TodoInput.value
        currUpdateValue=null
        todoBtn.innerText="Add Todo"
        TodoInput.value=""
        return
    }

    if(error(TodoInput.value)) return

    
    const Div=document.createElement("div")
    Div.classList.add("show")
    const p=document.createElement("p")
    p.innerText=TodoInput.value
    TodoInput.value=""

    const deleteBtn=document.createElement("button")
    deleteBtn.classList.add("all-btn")
    deleteBtn.innerText="Delete"
    const updateBtn=document.createElement("button")
    updateBtn.classList.add("all-btn")
    updateBtn.innerText="Update"
    const doneBtn=document.createElement("button")
    doneBtn.classList.add("all-btn")
    doneBtn.innerText="Done"

    deleteBtn.addEventListener("click",(e)=>{
        Div.remove()
    })

    doneBtn.addEventListener("click",()=>{
        if(doneBtn.innerText==="Redo"){
            doneBtn.innerText="Done"
            p.style.textDecoration="none"
        }else{
        p.style.textDecoration="line-through"
        doneBtn.innerText="Redo"
    }
    })

    updateBtn.addEventListener("click",()=>{
        currUpdateValue=p
        TodoInput.value=p.innerText
        todoBtn.innerText="Update todo"

    })


    Div.append(p)
    Div.append(deleteBtn)
    Div.append(updateBtn)
    Div.append(doneBtn)

    todoContainer.append(Div)

}

todoBtn.addEventListener("click",handleAddTodo)