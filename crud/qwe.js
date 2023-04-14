// Sample array of data
var data = [
    { id: 1, name: "John", email: "john@example.com" },
    { id: 2, name: "Jane", email: "jane@example.com" },
    { id: 3, name: "Bob", email: "bob@example.com" },
  ];
  
  // Function to display data in table
  function displayData() {
    var tableBody = document.getElementById("data");
    tableBody.innerHTML = "";
  
    for (var i = 0; i < data.length; i++) {
      var row = tableBody.insertRow(i);
      var idCell = row.insertCell(0);
      var nameCell = row.insertCell(1);
      var emailCell = row.insertCell(2);
  
      idCell.innerHTML = data[i].id;
      nameCell.innerHTML = data[i].name;
      emailCell.innerHTML = data[i].email;
  
      row.addEventListener("click", function() {
        // Highlight selected row
        var rows = document.querySelectorAll("#data tr");
        for (var j = 0; j < rows.length; j++) {
          rows[j].classList.remove("selected");
        }
        this.classList.add("selected");
  
        // Fill form with selected data
        var id = this.cells[0].innerHTML;
        var name = this.cells[1].innerHTML;
        var email = this.cells[2].innerHTML;
  
        document.getElementById("id").value = id;
        document.getElementById("name").value = name;
        document.getElementById("email").value = email;
      });
    }
  }
  
  // Function to add new data
  function addData() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    // Check if data with the same ID already exists
    var existingData = data.find(function(item) {
      return item.id == id;
    });
  
    if (existingData) {
      alert("Data with the same ID already exists");
    } else {
      data.push({ id: id, name: name, email: email });
      displayData();
    }
  }
  
  // Function to edit existing data
  function editData() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
  
    // Find index of data with the same ID
    var index = data.findIndex(function(item) {
      return item.id == id;
    });
  
    if (index == -1) {
      alert("Data not found");
    } else {
      data[index].name = name;
      data[index].email = email;
      displayData();
    }
  }
  
  // Function to delete existing data
  function deleteData() {
    var id = document.getElementById("id").value;
  
    // Find index of data with the same ID
    var index = data.findIndex(function(item) {
      return item.id == id;
    });
  
    if (index == -1) {
      alert("Data not found");
    } else {
      data.splice(index, 1);
      displayData();
    }
  }
  
  // Display data on page load
  displayData();
