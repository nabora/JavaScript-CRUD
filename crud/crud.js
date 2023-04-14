var selectedRow = null;

//show alerts
function showAlert(message, className){
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//Clear All Fields
function clearFields(){
  document.querySelector("#id").value = "";
  document.querySelector("#firstName").value = "";
  document.querySelector("#lastName").value = "";
}

// Add Data
document.querySelector("#student-form").addEventListener("submit", (e) =>{
  e.preventDefault();
  
//Get Form Values
  const id = document.querySelector("#id").value;
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;

  //Validate
  if(id == "" || lastName == "" || lastName == ""){
    showAlert("Please fill in the fields", "danger");
  }
  else{
    if(selectedRow == null){
      const list = document.querySelector("#student-list");
      const row = document.createElement("tr");

      row.innerHTML = `

            <td>${id}</td>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
      `;

      list.appendChild(row);
      selectedRow = null;
      showAlert("Student Added", "success");
    }
    else{
      selectedRow.Children[0].textContent = id;
      selectedRow.Children[1].textContent = firstName;
      selectedRow.Children[2].textContent = lastName;
      selectedRow = null;
      showAlert("Student Info Edited", "info");
    }
    clearFields();
  }
});


// Edit Data

document.querySelector("#student-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")){
    selectedRow = target.parentElement.parentElement;
    document.querySelector("#id").value =selectedRow.Children[0].textContent;
    document.querySelector("#firstName").value = selectedRow.Children[1].textContent;
    document.querySelector("#lastName").value = selectedRow.Children[2].textContent;
  }

});

//Delete Data
document.querySelector("#student-list").addEventListener("click", (e) =>{
  target = e.target;
  if(target.classList.contains("delete")){
    target.parentElement.parentElement.remove();
    showAlert("Student Data Deleted", "danger");
  }
});

