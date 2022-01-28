var countClick = 0
var lastCard
var winner = 0
//FUNÇÃO UTILIZADA PARA CRIAR UM ARRAY DE NÚMEROS RANDOMICOS DE 0 A 10
function gameShuffle() {
  //VAIRAVEL INICIALIZADA COM -1, DEVIDO O NÚMERO NÃO FAZER PARTE DO RANGE DE TRABALHO
  let arrayRandom = [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1
  ]
  //VERIFICAR SE NÃO POSSUI MAIS DE DOIS NÚMEROS IGUAIS NO ARRAY
  let isEqual = 0
  //PERMITEOU BLOQUEA A INSERÇÃO DO NÚMERO GERADO
  let condition = false
  //QUANTIDADE DE ESPAÇOS NO ARRAY
  for (let i = 0; i <= 19; i++) {
    do {
      condition = false
      isEqual = 0
      //GERAR NÚMEROS ALEATORIOS DE 0 A 10
      let currentlyNumber = Math.floor(Math.random() * 10)
      //PERCORER TODO O ARRAY
      arrayRandom.forEach(campo => {
        //CONDIÇÃO ? TRUE : FALSE
        campo == currentlyNumber ? isEqual++ : 0
      })

      isEqual < 2 ? (arrayRandom[i] = currentlyNumber) : (condition = true)
      //ENQUANTO A QUANTIDADE DE NÚMEROS IGUAIS FOR MAIOR QUE 2
    } while (condition == true)
  }

  return arrayRandom
}

function handleClick() {
  countClick += 1
  this.classList.add('flip')

  if (countClick < 2) {
    lastCard = this
  } else {
    if (this.id == lastCard.id) {
      setTimeout(() => {
        isWin()
      }, 300)
    } else {
      setTimeout(() => {
        this.classList.remove('flip')
        lastCard.classList.remove('flip')
      }, 700)
    }
    countClick = 0
  }
}

function isWin() {
  winner++
  winner == 10 ? gameOver() : 0
}
