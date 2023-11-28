// ****** SELECT ITEMS **********
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-Btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID ="";
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener('click', clearItems)
// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value !== '' && !editFlag) {
        const element = document.createElement('article');
        // add class to element
        element.classList.add('grocery-item');
        // add id to element
        let attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
          const deleteBtn = element.querySelector('.delete-btn');
          const editBtn = element.querySelector('.edit-btn');
          deleteBtn.addEventListener('click', deleteItem);
          editBtn.addEventListener('click', editItem);
        // append child
        list.appendChild(element);
        // display alert
        displayAlert('item added to the cart', 'success');
        // show container
        container.classList.add('show-container');
        // add to locat storage
        addToLocalStorage(id, value);
        // clear items
        function clearItems(){
            const items = document.querySelectorAll('.grocery-item');
            if (items.length > 0) {
                items.forEach( function (item){
                    list.removeChild(item);
                });
            }
            container.classList.remove("show-container");
            displayAlert('empty list', 'danger');
            // localStorage.removeItem('list');
        }

        // delete function
        function deleteItem() {
            const element = e.currentTarget.parentElement.parentElement;
            const id = element.dataset.id;
            list.removeChild(element);
            if (list.children.length === 0){
                container.classList.remove('show-container');
            }
            displayAlert('item removed', 'danger');
            setBackToDefault();
            // remove from local storage
            // removeFromLocalStorage(id);
        }
        // edit function
        function editItem() {
            const element = e.currentTarget.parentElement.parentElement;
            // set edit item
            editElement = e.currentTarget.parentElement.previousElementSibling;
            // set form value
            grocery.value = editElement.innerHTML;
            editFlag = true;
            editID = element.dataset.id;
            submitBtn.textContent = 'edit';
        }
        // set back to default
        setBackToDefault();
    } else if (value !== "" && editFlag){
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        // edit local storage
    } else {
        displayAlert("please enter value", "danger");
    }
}
// display alert function
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add (`alert-${action}`);

    // remove alert after 1 sec
    setTimeout(function () {
      alert.textContent = "";
      alert.classList.remove(`alert-${action}`);
    }, 1000);
}
// set back to default
function setBackToDefault(){
   grocery.value = "";
   editFalg = false;
   editID ="";
   submitBtn.textContent = "submit";
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
console.log('added to local storage');
}
function removeFromLocalStorage(id){

}
// ****** SETUP ITEMS **********



// delete



// adding conditionals to a component
function Item (name, isPacked) {
    if (isPacked) {return 
      <li className = "item">{name}  ✔</li>;
    } return <li className = "item">{name}</li>;
  }
  
  export default function PackingList () {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item is Packed = {true}
          name = "Space suit" 
          />
  
          <Item is Packed = {true}
          name = "Helment with a golden leaf" />
  
          <Item isPacked = {false}
          name = "photo of Tam" 
          />"
        </ul>
      </section>
    )
  }
  
  // the conditional statement in React can also be written with  (ternary) operator (? :)
  
  return (
    <li className = "item">
      {isPacked ? name + " ✔" : name}
    </li>
  );

  import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});




import inquirer from "inquirer";

inquirer
  .prompt([
    {
       message: "Type in your URL:",
       name: "URL" 
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



  /* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/