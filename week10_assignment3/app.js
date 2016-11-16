let books = [
{author:'Thomas Pynchon',title:'Bleeding Edge'},
{author:'Haruki Murakami',title:'1Q84'},
{author:'John D MacDonald',title:'Nightmare in Pink'},
{author:'Ncholas Zakas',title:'Understanding Ecmascript 6'}
]

let result = ''

let book = ''


function authSearch (){
	let aName = document.getElementById ('authorSearch').value.toUpperCase()
	
	try{

		if(aName == "") throw "empty";

		let name = books.filter((x) => x.author.toUpperCase().search(aName) >= 0)

		console.log(name)
		for (let i=0; i<name.length;i++)
		{
			if(i==0){
				
				result = "The author " + name[0].author + " have the following books: " + name[0].title
			}
			else{
				result = result + " and " + name[i].title
			}
		}
		
		if (result === '')
			throw "not found"
		else
			document.getElementById('result').innerHTML = result
	
	}

	catch (err){

		document.getElementById('result').innerHTML = 'sorry no books by ' + aName
	}
}

function listBook(item,index,array){
	console.log(item)
	console.log(index)
	console.log(array[index].author)
	result.innerHTML = "The author " + array[index].author + " has the book  " + array[index].title + "<br /> "

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