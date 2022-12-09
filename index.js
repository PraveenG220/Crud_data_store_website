var selectedRow = null;
function onFormSubmit(){
  event.preventDefault()

  var formData = readFormData();
  if(selectedRow === null){
    insertNewRecord(formData);
  }
  else{
       updatedRecord(formData);
  }
    resetForm();
}

//retrive the data

function readFormData(){
    var formData = {};
    formData ["productcode"] = document.getElementById("productcode").value;
    formData ["product"] = document.getElementById("product").value;
    formData ["Qty"] = document.getElementById("Qty").value;
    formData ["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//insert the data

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML =data.productcode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML =data.product;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML =data.Qty;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML =data.perPrice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML =`<button onClick = 'onEdit(this)'>Edit</button> <button  onClick = 'onDelete(this)'>Delete</button>`
}

//edit the data

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productcode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Qty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;
}


function updatedRecord(formData){
    selectedRow.cells[0].innerHTML=formData.productcode;
    selectedRow.cells[1].innerHTML=formData.product;
    selectedRow.cells[2].innerHTML=formData.Qty;
    selectedRow.cells[3].innerHTML=formData.perPrice;
}

//delete the data

function onDelete(td){
    if(confirm('Do you want to delete this record')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//reset the data

function resetForm(){
    document.getElementById('productcode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('Qty').value = '';
    document.getElementById('perPrice').value = '';
}