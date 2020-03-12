/*let listObject = {
        listKey: [],
        name: [],
        listContent: {
            numberOfItems: [],
            listText: [],
            isComplete: false
        },
        completed: false
    } */
   
let listObject = {
    listKey: [],
    lists:[]
}

//creates a new list item and stores it in local storage as an object
function createListObj() {
    let listName =  document.getElementById('list-create-name').value.trim(); //get input from the text fields
    let listContent = document.getElementById('list-create-input').value.trim();
    if(listObject.lists.name.indexOf(listName) === -1) {
        listObject.lists.name.push(listName); 
    }
    listObject.lists.listItems.push(listContent);
    listObject.listKey.push(listObject.lists.name.length - 1); //set key for new obj to master list 
    localStorage.setItem('ListObject', JSON.stringify(listObject));
    generateList(listObject.lists.name.length - 1, retrieveListObject());
    console.log(listObject);
}

//gets the stringified JSON object from localStorage and parses it. returns the parsed object
function retrieveListObject() {
    let getObj = JSON.parse(localStorage.getItem('ListObject'));
    return getObj;
}

//takes the list item at 'key' position and displays it in html
function generateList(key, obj) {
    document.getElementsByTagName('main')[0].innerHTML += `<div class="container easyToSee list-item-container">
    <div class="container easyToSee list-name-container">
        <h4 class="easyToSee list-name">${obj.lists.name[key]}</h4>
    </div>
    <div class="container easyToSee list-content-container">
        <div class="list-content-area easyToSee">
            <ul class="list-ul">
            </ul>
        </div>
        <button>Remove list</button>
    </div>
</div>`;
generateListElements(obj);
}

//display lists from local storage when page is loaded
function reloadLists() {
    const currentList = retrieveListObject();
    if (currentList != null) {
        currentList.lists.name.forEach((name) =>
            {
                let count = 0;
                generateList(count, currentList)
                count <= currentList.lists.name.length-1 ? count++ : console.log('?'); 
        });
        console.log('loaded');
    }     
}

function generateListElements(obj) {
    if(obj.lists.listItems != null){
        let nameIndex = obj.lists.name.length-1;
        obj.lists.listItems.forEach(item => {
            let count = 0;
            document.getElementsByClassName('list-ul')[count].innerHTML += `<li class"list-text">${item}</li>`
            count++;
            if(count == nameIndex) {
                console.log('it worked?');
            }
        }); 
    }
}

//for testing. clears the object
function clearListObject() {
    listObject.lists.name = [];
    listObject.listKey = [];
    listObject.lists.listItems = [];
    completed = false;
    console.log(listObject);
}

//for testing. clears local storage
function clearLocalStorage() {
    localStorage.clear();
}

