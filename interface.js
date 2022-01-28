var divContainer = document.getElementById('container')
var images = []
var randomNumber = []

//FUNÇÃO EXECUTADA AO CARREGAR TODO O JAVASCRIPT
document.addEventListener('DOMContentLoaded', () => {
  //RECEBE UM ARRAY DE NÚMEROS ALETÓRIOS DE 0 A 9
  randomNumber = gameShuffle()
  //CHAMADA
  setAdreesImages()
  //CHAMADA
  createDiv()

  let cards = document.querySelectorAll('.card')
  cards.forEach(card => {
    card.addEventListener('click', handleClick)
  })
})

//FUNÇÃO RESPONSÁVEL POR CRIAR TODAS AS DIVS (CARDS)
function createDiv() {
  //QUANTIDADE DE CARTAS QUE SERÃO CRIADAS
  for (let i = 0; i <= 19; i++) {
    //CRIAÇÃO DA DIV PRINCIPAL
    let newDiv = document.createElement('div')
    newDiv.setAttribute('id', images[randomNumber[i]].id)
    newDiv.setAttribute('class', 'card')
    newDiv.style.gridArea = 'a' + i
    //CRIAÇÃO DA DIV FRONTAL
    let divFront = document.createElement('div')
    divFront.setAttribute('class', 'front sqr' + i)
    divFront.style.backgroundColor = '#0d9cfa'
    divFront.innerText = '</>'
    //CRIAÇÃO DA DIV TRASEIRA
    let divBack = document.createElement('div')
    divBack.setAttribute('class', 'back background sqr' + i)
    divBack.style.backgroundImage = 'url(' + images[randomNumber[i]].url + ')'
    //INSERINDO A DIV FRONTAL E A TRASEIRA DENTRO DA DIV PRINCIPAL
    newDiv.appendChild(divBack)
    newDiv.appendChild(divFront)
    divContainer.appendChild(newDiv)
  }
}
//FUNÇÃO UTILIZADA PARA SETAR O ENDEREÇOS DAS IMAGENS E QUAL ID PERTECE A CADA UMA DELAS
function setAdreesImages() {
  images.push({ id: 0, url: 'img/bootstrap.png' })
  images.push({ id: 1, url: 'img/css.png' })
  images.push({ id: 2, url: 'img/electron.png' })
  images.push({ id: 3, url: 'img/firebase.png' })
  images.push({ id: 4, url: 'img/html.png' })
  images.push({ id: 5, url: 'img/javascript.png' })
  images.push({ id: 6, url: 'img/jquery.png' })
  images.push({ id: 7, url: 'img/mongo.png' })
  images.push({ id: 8, url: 'img/node.png' })
  images.push({ id: 9, url: 'img/react.png' })
}

function gameOver() {
  let endPage = document.getElementById('gameOver')
  endPage.style.display = 'flex'
}
