let listObject = {
        listKey: [],
        name: [],
        listText: [],
        completed: false
    }

    const listTemplate = `<div class="list-item" style="border:1px solid red;">
                    <span>Name: New Thing<span>
                    <ul>
                        <li>test</li>
                    </ul>
                  </div>`;
     

//creates a new list item and stores it in local storage as an object
function createListObj() {
    //get input from the text fields
   let listName =  document.getElementById('list-create-name').value.trim();
   let listContent = document.getElementById('list-create-input').value.trim();
    //store input into listObject and create a key for list Master
    listObject.name.push(listName);
    listObject.listText.push(listContent);
    //set key for new obj to master list 
    listObject.listKey.push(listObject.name.length - 1);
    //console.log(listObject);
    localStorage.setItem('ListObject', JSON.stringify(listObject));
    generateList(listObject.listKey.length - 1);
}

//gets the stringified JSON object from localStorage and parses it. returns the parsed object
function retrieveListObject() {
    let getObj = JSON.parse(localStorage.getItem('ListObject'));
    return getObj;
}

//takes the list item at 'key' position and displays it in html
function generateList(key) {
    const newList = retrieveListObject();
    const container = document.getElementById('test-id');
    const currentKey = key;
    const list = `<div class="list-item" style="border:1px solid red;">
                    <span>Name: ${newList.name[currentKey]}<span>
                    <ul>
                        <li>${newList.listText[currentKey]}</li>
                    </ul>
                  </div>`;
    
    container.innerHTML += list;
    //test Template string
}
//display lists from local storage when page is loaded
function reloadLists() {
    console.log('loaded');
    const currentList = retrieveListObject();
    if (currentList != null) {
        currentList.listKey.forEach((key) => {
            document.getElementById('test-id').innerHTML += `<div id="list-item" style="border: 1px solid red;">name ${currentList.name[key]} stuff ${currentList.listText[key]} </div>`;
        });
    }   
}

//generates the html for the list item
function generateListHTML(key) {
    
}



//for testing. clears the object
function clearListObject() {
    listObject.name = [];
    listObject.listKey = [];
    listObject.listText = [];
    completed = false;
    console.log(listObject);
}

//for testing. clears local storage
function clearLocalStorage() {
    localStorage.clear();
}
