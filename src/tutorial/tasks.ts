//   <div class="head">Tasks</div>
//         <form action="submit"  class="miniParent">
//             <input class="form-input" type="text"/>
//             <button class="buttclass" type="submit">Add</button>
//         </form>
//     </div>
//     <ul class="taskList"></ul>

let form = document.querySelector<HTMLFormElement>('.miniParent')
let form_input = document.querySelector<HTMLInputElement>('.form-input')
let tasks_element = document.querySelector<HTMLUListElement>('.taskList')

type Task = {
    description: string,
    isCompleted : boolean
}

function getLocalStorage() : Task[]{
    let tasks = localStorage.getItem('tasks')
    if (tasks) {
        return JSON.parse(tasks)
    }
    return []
}

let tasks: Task[] = getLocalStorage()

tasks.forEach(renderTasks)

function renderTasks(task : Task) : void{
    let li_element = document.createElement('li')
    let task_el = document.createElement('span')
    task_el.textContent = task.description
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = task.isCompleted
    checkbox.addEventListener('change', (event) => {
        task.isCompleted = !task.isCompleted

        saveLocalStorage()
    })
    li_element.appendChild(task_el)
    li_element.appendChild(checkbox)
    tasks_element?.appendChild(li_element)
}

form?.addEventListener('submit', (event) => {
    event.preventDefault()
    if (form_input && form_input.value!="") {
        let description = form_input.value
        form_input.value = ""
        let task : Task = {
            description: description,
            isCompleted : false
        }

        
        //add tasks
        tasks.push(task)

        //save it in local storage
        saveLocalStorage()

        //render the task
        renderTasks(task)

        console.log(tasks)
    }
    else {
    alert('Enter valid description.')
    }
})

function saveLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}


