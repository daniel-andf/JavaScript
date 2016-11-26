document.getElementById('login').value=''
document.getElementById('password').value=''

let books = [
{cod:1,author:'Thomas Pynchon',title:'Bleeding Edge',genre:'Drama',copies:3,card:[]},
{cod:2,author:'Haruki Murakami',title:'1Q84',genre:'Sci-Fi',copies:4,card:[]},
{cod:3,author:'John D MacDonald',title:'Nightmare in Pink',genre:'Horror',copies:1,card:[12345]},
{cod:4,author:'Ncholas Zakas',title:'Understanding Ecmascript 6',genre:'Mystery',copies:2,card:[]}
]

let users = [
{login:'daniel',password:'wmdd',card:12345}
]

let result = ''
let result2 = ''

let book = ''

function newUser() {

	document.getElementById('newuser').style.display = 'initial'
	document.getElementById('logon').style.display = 'none'
	document.getElementById('newlogin').value = ''
	document.getElementById('newpassword').value = ''
}

function createUser(){

	let user = {
		login: document.getElementById('newlogin').value ,password: document.getElementById('newpassword').value,card: Math.floor((Math.random() * 100000) + 1)
	}

	users.push(user)
	document.getElementById('newuser').style.display = 'none'
	document.getElementById('logon').style.display = 'initial'

	document.getElementById('result3').innerHTML = 'Your user has been created'	
}

function loginLibrary(){
	let login = document.getElementById('login').value
	let password = document.getElementById('password').value
	let loginCheck = false

	document.getElementById('titleSearch').value = ''
	document.getElementById('genreSearch').value = ''
	document.getElementById('result').value=''
	document.getElementById('result2').value=''
	document.getElementById('result3').value=''

	for (let i=0; i<users.length;i++)
	{
		if(login==users[i].login && password==users[i].password){
			document.getElementById('logged').style.display = 'initial'
			document.getElementById('logon').style.display = 'none'
			document.getElementById('welcome').innerHTML = `Welcome to the Library, ${users[i].login}, Library ID: ${users[i].card}`
			document.getElementById('card').value=users[i].card
			loginCheck=true
			break;
		}
	}

	if(loginCheck==false)
		document.getElementById('result').innerHTML = 'Your login/password are not in our database. Please try again'	

}

function logOut(){

	document.getElementById('login').value=''
	document.getElementById('password').value=''

	let list = document.getElementById('allTheBooks')
	while(list.hasChildNodes()){
		list.removeChild(list.firstChild)
	}

	let list2 = document.getElementById('booksborrowed')
	while(list2.hasChildNodes()){
		list2.removeChild(list2.firstChild)
	}
	document.getElementById('logged').style.display = 'none'
	document.getElementById('newuser').style.display = 'none'
	document.getElementById('borrowbooks').style.display = 'none'
	document.getElementById('result').innerHTML=''
	document.getElementById('result2').innerHTML=''
	document.getElementById('result3').innerHTML=''
	document.getElementById('logon').style.display = 'initial'
}

function bookSearch(){
	let aTitle = document.getElementById ('titleSearch').value.toUpperCase()
	let aGenre = document.getElementById ('genreSearch').value.toUpperCase()
	let name = ''
	
	result = ''
	result2 = ''

	document.getElementById('result').innerHTML=''
	document.getElementById('result2').innerHTML=''
	
	
	try{

		if(aTitle == '' && aGenre == '') {
			throw 'empty'
		}
		else if (aTitle != '' && aGenre == ''){
			name = books.filter((x) => x.title.toUpperCase().search(aTitle) >= 0)
		}
		else if (aTitle == '' && aGenre != '')
		{
			name = books.filter((x) => x.genre.toUpperCase().search(aGenre) >= 0)
		}

		else 
		{
			name = books.filter((x) => (x.genre.toUpperCase().search(aGenre) >= 0 && x.title.toUpperCase().search(aTitle) >= 0))

		}
		
		for (let i=0; i<name.length;i++)
		{
			if(name[i].copies>0){
				if(i==0){
					
					result = `We selected the following books that are available for rent: ${name[0].title}(Author: ${name[0].author}, Genre:${name[0].genre}) `
				}
				else{
					result = `${result} and ${name[i].title}(Author: ${name[i].author}, Genre:${name[i].genre}) `
				}
			}
			else{
				if(i==0){
					
					result2 = `We have the following books but, unfortunately they are not available for rent: ${name[0].title} (Author: ${name[0].author}, Genre:${name[0].genre}) `
				}
				else{
					result2 = `${result} and ${name[i].title}(Author: ${name[i].author}, Genre:${name[i].genre}) `
				}
			}
		}
		
		
		if (result === '' && result2 === '')
			throw 'not found'
		else{
			document.getElementById('result').innerHTML = result
			document.getElementById('result2').innerHTML = result2
		}

	}

	catch (err){
		if (err === 'empty')
			document.getElementById('result').innerHTML = 'Please, type the name of the title and/or genre' + aTitle
		else if(aTitle != ''){
			let errMsg = 'Sorry! No books by ' + aTitle
			
			if(aGenre !='')
				errMsg = errMsg + ' and genre ' + aGenre
			
			document.getElementById('result').innerHTML = errMsg
		}
		else
			document.getElementById('result').innerHTML = 'Sorry! No books by genre ' + aGenre
	}
}


function showAllBooks () {

	for (let i=0; i<books.length;i++)
	{
		if(books[i].copies>0){
			let listItem = document.createElement('li')
			let textnode = document.createTextNode(`Book: ${books[i].title}, Author: ${books[i].author}. Copies available: ${books[i].copies}`)
			let checkBox = document.createElement('input')

			checkBox.type = 'checkbox'
			checkBox.name = 'book'
			checkBox.value = books[i].cod

			listItem.appendChild(checkBox)
			listItem.appendChild(textnode)
			document.getElementById('allTheBooks').appendChild(listItem)
			document.getElementById('borrowbooks').style.display='initial'
		}
	}
}

function borrowBook(){
	var borrowedBooks = document.querySelectorAll('input[name="book"	]:checked')
	

	for(let i=0;i<books.length;i++){
		for(let j=0;j<borrowedBooks.length;j++){
			if(books[i].cod == borrowedBooks[j].value){

				books[i].copies--
				books[i].card.push(document.getElementById('card').value)
				let listItem = document.createElement('li')
				let textnode = document.createTextNode(`The book: ${books[i].title} was successfully borrowed`)

				listItem.appendChild(textnode)
				document.getElementById('booksborrowed').appendChild(listItem)


			}
		}
	}
	let list = document.getElementById('allTheBooks')
	while(list.hasChildNodes()){
		list.removeChild(list.firstChild)
	}

	showAllBooks()

}