

let taskbox = document.getElementById('taskbox')

let todoitems = document.getElementById('todoitems')

taskbox.addEventListener('keyup',

function(event){

    if(event.key == "Enter"){
        addItem(this.value)
        this.value =""
    }
})
 
const addItem = (taskbox) =>{

    const listItem = document.createElement('li')
    listItem.innerHTML = `
    ${taskbox}
    <i class="fa-solid fa-trash"></i>`

    todoitems.appendChild(listItem)

    listItem.addEventListener('click',
            function(){
                this.classList.toggle('complete')
            })

    listItem.querySelector("i").addEventListener('click',function(){
        listItem.remove()
    })

}
    
   