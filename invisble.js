document.addEventListener('DOMContentLoaded', () => {

  const scoreDisplay = document.getElementById('score')
  const width = 28
  let score = 0
  const grid = document.querySelector('.grid')
  const layout = [
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
    2,4,4,4,4,4,4,4,4,4,4,4,4,2,2,4,4,4,4,4,4,4,4,4,4,4,4,2,
    2,4,2,2,2,2,4,2,2,2,2,2,4,2,2,4,2,2,2,2,2,4,2,2,2,2,4,2,
    2,4,2,2,2,2,4,2,2,2,2,2,4,2,2,4,2,2,2,2,2,4,2,2,2,2,4,2,
    2,4,2,2,2,2,4,2,2,2,2,2,4,2,2,4,2,2,2,2,2,4,2,2,2,2,4,2,
    2,4,4,4,4,4,4,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,4,4,4,4,2,
    2,4,2,2,2,2,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,2,2,2,2,4,2,
    2,4,2,2,2,2,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,2,2,2,2,4,2,
    2,4,4,4,4,4,5,4,4,4,4,4,4,2,2,4,4,4,4,4,4,4,4,4,4,4,4,2,
    2,2,2,2,2,2,4,2,2,2,2,2,4,2,2,2,2,2,2,2,2,4,2,2,2,2,2,2,
    2,2,2,2,2,2,4,2,2,4,4,4,4,4,4,4,4,4,4,2,2,4,2,2,2,2,2,2,
    2,2,2,2,2,2,4,2,2,4,2,2,2,4,4,2,2,2,4,2,2,4,2,2,2,2,2,2,
    1,1,1,1,1,2,4,2,2,4,2,2,2,4,4,2,2,2,4,2,2,4,2,2,2,1,1,1,
    1,1,4,4,4,4,5,4,4,4,2,2,2,5,4,2,2,2,4,2,2,4,4,4,4,4,4,4,
    1,1,1,1,1,2,4,2,2,4,2,2,4,4,4,4,2,2,4,2,2,2,2,2,2,1,1,1,
    2,2,2,2,2,2,4,2,2,4,2,2,2,2,2,2,2,2,4,2,2,2,2,2,2,2,2,2,
    2,2,2,2,2,2,4,2,2,4,4,4,4,4,4,4,4,4,4,2,2,2,2,2,2,2,2,2,
    2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,
    2,4,2,2,2,2,4,2,2,2,2,2,4,2,2,4,2,2,2,2,2,4,2,2,2,2,4,2,
    2,4,2,2,2,2,4,2,2,2,2,2,4,2,2,4,2,2,2,2,2,4,2,2,2,2,4,2,
    2,4,4,4,2,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,2,4,4,4,2,
    2,2,2,4,2,2,4,2,2,4,2,2,2,2,2,2,2,2,4,2,2,4,2,2,4,2,2,2,
    2,2,2,4,2,2,4,2,2,4,2,2,2,2,2,2,2,2,4,2,2,4,2,2,4,2,2,2,
    2,4,4,4,4,4,4,2,2,4,4,4,4,2,2,4,4,4,4,2,2,4,4,4,4,4,4,2,
    2,4,2,2,2,2,2,2,2,2,2,2,4,2,2,4,2,2,2,2,2,2,2,2,2,2,4,2,
    2,4,2,2,2,2,2,2,2,2,2,2,4,2,2,4,2,2,2,2,2,2,2,2,2,2,4,2,
    2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2



  ]
  // 1 - wall
  // 4 - empty

  const squares = []

  //create your board
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)

      //add layout to the board
      
       if (layout[i] === 1) {
        squares[i].classList.add('wall')
       } else if (layout[i] === 2) {
          squares[i].classList.add('ghost-lair')
        } else if (layout[i] === 3) {
          squares[i].classList.add('weck')
        }
        else if (layout[i] === 5) {
          squares[i].classList.add('power-pellet')
        }
    }
  }
  createBoard()


  //create Characters
  //draw pacman onto the board
  let characterCurrentIndex = 366
  squares[characterCurrentIndex].classList.add('character')
  //get the coordinates of pacman on the grid with X and Y axis
  function getCoordinates(index) {
    return [index % width, Math.floor(index / width)]
  }

  // console.log(getCoordinates(characterCurrentIndex))

  //move pacman
  function moveCharacter(e) {
    squares[characterCurrentIndex].classList.remove('character')
    switch(e.keyCode) {
      case 37:
        if(
          characterCurrentIndex % width !== 0 &&
          !squares[characterCurrentIndex -1].classList.contains('wall') &&
          !squares[characterCurrentIndex -1].classList.contains('ghost-lair')
          )
          characterCurrentIndex -= 1
        if (squares[characterCurrentIndex -1] === squares[363]) {
          window.location.href = "startp.html";
          characterCurrentIndex = 391
        }
        break
      case 38:
        if(
          characterCurrentIndex - width >= 0 &&
          !squares[characterCurrentIndex -width].classList.contains('wall') &&
          !squares[characterCurrentIndex -width].classList.contains('ghost-lair')
          ) 
          characterCurrentIndex -= width
        break
      case 39:
        if(
          characterCurrentIndex % width < width - 1 &&
          !squares[characterCurrentIndex +1].classList.contains('wall') &&
          !squares[characterCurrentIndex +1].classList.contains('ghost-lair')
        )
        characterCurrentIndex += 1
        if (squares[characterCurrentIndex +1] === squares[392]) {
          window.location.href = "startp.html";
          characterCurrentIndex = 364
        }
        break
      case 40:
        if (
          characterCurrentIndex + width < width * width &&
          !squares[characterCurrentIndex +width].classList.contains('wall') &&
          !squares[characterCurrentIndex +width].classList.contains('ghost-lair')
        )
        characterCurrentIndex += width
        break
    }
    squares[characterCurrentIndex].classList.add('character')
    squares[characterCurrentIndex].classList.add('weck')
    powerPelletEaten()

  }
  document.addEventListener('keyup', moveCharacter)
  scoreDisplay.innerHTML = score

  function powerPelletEaten() {
    if (squares[characterCurrentIndex].classList.contains('power-pellet')) {
      score +=10
      scoreDisplay.innerHTML = score
      squares[characterCurrentIndex].classList.remove('power-pellet')

    }
  }




})