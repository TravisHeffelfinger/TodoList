let listObject = {
    name: '',
    key: '',
    listContent: []
}
// Creation of List and Task Item, stores in a 2d array, stores in localStorage;
/* function enterTestData(){
    createListAsPassed('test2','testtext');
    createListAsPassed('test2','testchanged');
    createListAsPassed('test3','testtext');
    if(listObject.length <= 0) {
    listObject = [['test2','testtext'],['test3','testtext']];
    }
}
 */
/* function createListAsPassed(name, data) {
    let listName = name.trim();
    let listInfo = data.trim();  
   for(let i = 0; i < listObject.length; i++){
        if (listObject[i][0] === listName) {
            listObject[i][1] = listInfo;
            console.log('if ' + listObject[i]);

        } else {
            console.log('else ' + listObject[i]);
            listObject.unshift([listName, listInfo]);
            localStorage.setItem(listName, listInfo);
        }
   } 
  // setListInformation(listObject.length, listName, listInfo);
   document.getElementById('list-create-name').value = '';
   document.getElementById('list-create-input').value= ''; 
}*/

function createList() {
    let listName = document.getElementById('list-create-name').value.trim();
    let listInfo = document.getElementById('list-create-input').value.trim();
   document.getElementById('list-create-name').value = '';
   document.getElementById('list-create-input').value= ''; 

}
/* function setListInformation(arraylength, name, info){
    let indexOfList = arraylength;
    
} */

/* function checkSame(nameToCheck) {
    if (listObject === nameToCheck) {
        console.log('same');
    } else {
     listObject.unshift([nameToCheck, localStorage.getItem(nameToCheck)]);
    }
} */

//takes the list object and retrieves the key. Displays the 
function displayListObject(object) {
    if (object != null){
        
    } else {
  let test = localStorage.getItem(listObject[0][0]);
   console.log(test);
   console.log(listObject);
    }
}

function setInput() {
    testInput = document.getElementById('test-input-text').value;
    localStorage.setItem(`${testInput}Name`, testInput);
}

function displayInput() {
  let displayData = localStorage.getItem(`Name`);
  document.getElementById('test-input-label').innerText = displayData;
}

function removeLocalStorage() {
    localStorage.clear();
}

function logListObject() {
    console.log(listObject);
}