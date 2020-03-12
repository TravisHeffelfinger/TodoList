let listObject = {
        listKey: [],
        name: [],
        listText: [],
        completed: false
    }
/* if(document.getElementById('sample3').value == ''){
        document.getElementById('createButton');
}else if (document.getElementById('sample3' != undefined)) {
    document.getElementById('createButton');
}; */

//function submitText() {
/*     document.getElementById("sample3")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("createButton").click();
        document.getElementById('sample3').value == '';
    }
}); */

function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13) {
        document.getElementById('createButton').click();
        document.getElementById('sample3').value="";
        return false;
    }
    return true;
}
    /* if (event.keyCode == 13 && document.getElementById('sample3').onfocus == true){
        document.getElementById('createButton').click(); 
        document.getElementById('sample3').value = '';} */
//}

function checkToEnableButton() {
    if(document.getElementById("sample3").value == "") { 
           document.getElementById('createButton').disabled = true; 
       } else { 
           document.getElementById('createButton').disabled=false;
       }
   }

    function createListObjTest() {
        //get input from the text fields
       let listName =  document.getElementById('sample3').value.trim();
       let listContent = document.getElementById('sample5').value.trim();
        //store input into listObject and create a key for list Master
        listObject.name.push(listName);
        listObject.listText.push(listContent);
        //set key for new obj to master list 
        listObject.listKey.push(listObject.name.length - 1);
        //console.log(listObject);
        localStorage.setItem('ListObject', JSON.stringify(listObject));
        generateList(listObject.listKey.length - 1);
    }

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
    //const container = document.getElementById('page-content');
    const list = `
    <div class="test-card mdl-card mdl-shadow--2dp">
        <div class="mdl-card__title">
            <h2 class="mdl-card__title-text">${newList.name[key]}</h2>
        </div>
        <div class="mdl-card__supporting-text">
            <ul class="demo-list-item mdl-list">
            </ul>
        </div>
        <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="testLiGenerate()">
                New List Item
                </a>
          </div>      
    </div>`; 
    document.getElementsByClassName('page-content')[0].innerHTML += list;
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

function testLiGenerate() {
    let listTemplate = `<li class="mdl-list__item"><span class="mdl-list__item-primary-content">sample Text</span></li>`;
    document.getElementsByClassName('demo-list-item')[0].innerHTML += listTemplate;
}


