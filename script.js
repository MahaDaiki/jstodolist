function add(){
    // const input = document.getElementById('newtask');
    const list = document.getElementById('myList');
    const addbtn = document.getElementById('addTaskButton');
    const newTask = document.createElement('li');



    //  newTask.textContent = input.value
    newTask.textContent = "Nouvelle tâche";
     list.appendChild(newTask);
    //  input.value ="";

}

function deletetask(){
    const list = document.getElementById('myList');

    if(list.lastChild){
        list.removeChild(list.lastChild);
    }
}


function highlightfirst() {
    const list = document.getElementById('myList');
    const items = list.getElementsByTagName('li'); 

    if (items.length > 0) {
        for (let i = 0; i < items.length; i++) {
            items[i].style.backgroundColor = ''; 
        }
        items[0].style.backgroundColor = 'yellow';
    }
}