var selectedRow = null 

function onFormSubmit(){
  /*  if(validate()){*/
var formData = readFormData();
if(selectedRow == null)
insertNewRecord(formData);
else
updateRecord(formData);
resetForm();
/*}*/
}
function readFormData(){
    var formData = {};
    formData["BookName"] = document.getElementById("BookName").value;
    formData["author"] = document.getElementById("author").value;
    formData["type"] = document.getElementById("type").value;
    formData["category"] = document.getElementById("category").value;
    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("BookList").getElementsByTagName('tbody')[0];
    var newRow = table .insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.BookName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.author;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.type;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.category;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML =`<a onClick="onEdit(this)">Edit </a>
                      <a onClick="onDelete(this)">Delete</a>`;  // '' "" `` prefer to use 3rd one to have them all in under one quote
}

function resetForm() {
    document.getElementById("BookName").value ="";
    document.getElementById("author").value ="";
    document.getElementById("type").value ="";
    document.getElementById("category").value ="";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("BookName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("author").value = selectedRow.cells[1].innerHTML;
    document.getElementById("type").value = selectedRow.cells[2].innerHTML;
    document.getElementById("category").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.BookName;
    selectedRow.cells[1].innerHTML = formData.author;
    selectedRow.cells[2].innerHTML = formData.type;
    selectedRow.cells[3].innerHTML = formData.category;
}

function onDelete(td) {
    if (confirm('Are you sure you want to delete this record?')){
    row = td.parentElement.parentElement;
    document.getElementById("BookList").deleteRow(row.rowIndex);
    resetForm();
}
}
/*
function validate(){
    isValid = true;
    if (document.getElementById("BookName").value == ""){
        isValid = false;
        document.getElementById("BookNameValidationError").classList.remove("hide");
    }else{
        isValid = true;
    if (!document.getElementById("BookNameValidationError").classList.contain("hide"))
        document.getElementById("BookNameValidationError").classList.add("hide");
    }
    return isValid;
}
*/