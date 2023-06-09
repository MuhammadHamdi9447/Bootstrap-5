var productNameInput = document.getElementById("productNameInput")
var productPriceInput = document.getElementById("productPriceInput")
var productCategoryInput = document.getElementById("productCategoryInput")
var productdecInput = document.getElementById("productdecInput")
var btnUpdate= document.getElementById('btnUpdate')
var btnAdd = document.getElementById('btnAdd')
var btnNew = document.getElementById("btnNew")
let tmp;
let mood = 'create'
 var productContainer;
if(localStorage.getItem('myProducts') != null){
    productContainer= JSON.parse(localStorage.getItem('myProducts'))
    displayProduct(productContainer)
}else{
    productContainer =[]
  }
function addProduct(){
     product = {
        name:productNameInput.value,
        price:productPriceInput.value,
        category: productCategoryInput.value,
        dec : productdecInput.value
     }
    
        productContainer.push(product)
        displayProduct(productContainer)
        localStorage.setItem('myProducts', JSON.stringify(productContainer))
            clearInput()
  
       
     
 
}

function clearInput(){
    product = {
        name:productNameInput.value   ="",
        price:productPriceInput.value ="",
        category: productCategoryInput.value="",
        dec : productdecInput.value=""
     }
}

function displayProduct(list){
    var cartoona = ``
    for(i=0;i<list.length;i++){
        cartoona+=`
        <tr>
                <td>${i+1}</td>
                <td>${list[i].name}</td>
                <td>${list[i].price}</td>
                <td>${list[i].category}</td>
                <td>${list[i].dec}</td>
                <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning">Update </button></td>
                <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete </button></td>

            </tr>
        `
        document.getElementById("tbodyProduct").innerHTML=cartoona
    }
}
function searchProduct(searchTerm){
    var searchResult = []
    for(i=0 ; i<productContainer.length; i++){
        if(productContainer[i].name.toLowerCase().includes(searchTerm)== true){
            searchResult.push(productContainer[i])
           
        }
    }
    displayProduct(searchResult)
}
searchProduct("")

function deleteProduct(productIndex){
    productContainer.splice(productIndex,1)
    localStorage.setItem('myProducts', JSON.stringify(productContainer))
    displayProduct(productContainer)
}


function updateProduct(indexProduct){
    productNameInput.value = productContainer[indexProduct].name
    productPriceInput.value = productContainer[indexProduct].price
    productCategoryInput.value = productContainer[indexProduct].category
    productdecInput.value = productContainer[indexProduct].dec

    btnAdd.classList.add('d-none')
    btnUpdate.classList.remove('d-none')
     tmp=indexProduct
}
function newUpdata(){ 
    let newPoduct={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        dec:productdecInput.value
    }
    productContainer[tmp]=newPoduct
    displayProduct(productContainer)
}

