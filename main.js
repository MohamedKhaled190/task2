


var site_name = document.getElementById('site-name')
var site_link = document.getElementById('site-link')
var bookList = []

if(localStorage.getItem("productData") != null){
    bookList = JSON.parse(localStorage.getItem("productData"))
    displarproduct()
}

function addBook(){
    var book ={
        name:site_name.value,
        link:site_link.value,
}
bookList.push(book)
localStorage.setItem('productData', JSON.stringify(bookList))
displarproduct()
}
function displarproduct(){
    var temp = ""
    for(var i = 0; i<bookList.length; i++){
        temp+= `<tr>
        <td>${i + 1}</td>
        <td>${bookList[i].name}</td>              
        <td >
          <a href="${bookList[i].link}" class="btn btn-visit text-light">
              <i class="fa-solid fa-eye pe-2"></i>
              Visit
          </a>
      </td>
      <td>
          <button class="btn btn-delete btn-danger" onclick="deleteb(${i})" type="button">
              <i class="fa-solid fa-trash-can"></i>
             Delete
          </button>
        </td>
    </tr>`
    }
    document.getElementById('tableContent').innerHTML = temp
}
function deleteb(id) {
    bookList.splice(id , 1)
    localStorage.setItem('productData', JSON.stringify(bookList))
    displarproduct()
}


