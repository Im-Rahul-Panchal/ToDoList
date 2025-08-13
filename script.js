const inputBox  = document.getElementById('inputBox')
const listContainer  = document.getElementById('listContainer') 
const button = document.getElementsByTagName('button')[0]

function addTask(){
    if(inputBox.value === ""){
        alert("Please enter a task")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}
button.addEventListener('click', addTask) 



listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')  // it will remove class if already there and add class if not there
        saveData()
    }
    else if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})


//save Data in local storage
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}

// Display data
function displayData(){
    listContainer.innerHTML = localStorage.getItem('data')
}

displayData()