let books = [
{author:'Thomas Pynchon',title:'Bleeding Edge'},
{author:'Haruki Murakami',title:'1Q84'},
{author:'John D MacDonald',title:'Nightmare in Pink'},
{author:'Ncholas Zakas',title:'Understanding Ecmascript 6'}
]

let book = ''


function authSearch (){
	let aName = document.getElementById ('authorSearch').value
	let name = books.filter((x) => x.author === aName)
	try{
		document.getElementById('result').innerHTML = 'yes we have at least one book by ' + name[0].author
	}

	catch (err){
		document.getElementById('result').innerHTML = 'sorry no books by ' + aName
	}
}

function nameBook(){
//function to get the author and title of the book and return as a object that will be a attribute of the function addBook
	book = { 
		author: document.getElementById ('addBookAuthor').value, title:document.getElementById ('addBookTitle').value 
	}

	return book

}


function addBook (book){

	books.push(book)

}


function showAllBooks () {
	let listItem = document.createElement('li')
	let textnode = document.createTextNode('a book')
	listItem.appendChild(textnode)
	document.getElementById('allTheBooks').appendChild(listItem)
}