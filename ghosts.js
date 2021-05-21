document.addEventListener('DOMContentLoaded', () => {
 // this displays the score
  const scoreDisplay = document.getElementById('score')
  const width = 28
  let score = 0
  const grid = document.querySelector('.grid')
  //this is making the grid
  const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,4,4,4,4,4,4,4,4,4,4,4,4,1,1,4,4,4,4,4,4,4,4,4,4,4,3,1,
    1,4,1,1,1,1,4,1,1,1,1,1,4,1,1,4,1,1,1,1,1,4,1,1,1,1,4,1,
    1,4,1,1,1,1,4,1,1,1,1,1,4,1,1,4,1,1,1,1,1,4,1,1,1,1,4,1,
    1,4,1,1,1,1,4,1,1,1,1,1,4,1,1,4,1,1,1,1,1,4,1,1,1,1,4,1,
    1,4,4,4,4,4,3,4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,4,4,4,4,4,1,
    1,4,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,4,1,
    1,4,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,4,1,
    1,4,4,4,4,4,4,4,4,4,4,4,4,1,1,4,4,4,4,4,4,4,4,4,4,4,4,1,
    1,1,1,1,1,1,4,1,1,1,1,1,4,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,
    1,1,1,1,1,1,4,1,1,4,4,4,4,4,4,4,4,4,4,1,1,4,1,1,1,1,1,1,
    1,1,1,1,1,1,4,1,1,4,1,1,4,4,4,4,1,1,4,1,1,3,1,1,1,1,1,1,
    1,1,1,1,1,1,4,1,1,4,1,1,4,4,4,4,1,1,4,1,1,4,1,1,1,1,1,1,
    1,1,4,4,4,4,4,4,4,4,1,1,4,4,4,4,1,1,4,1,1,4,4,4,4,4,4,4,
    1,1,1,1,1,1,4,1,1,4,1,1,4,4,4,4,1,1,4,1,1,1,1,4,1,1,1,1,
    1,1,1,1,1,1,4,1,1,4,1,1,4,4,4,4,1,1,4,1,1,1,1,4,4,4,1,1,
    1,1,1,1,1,1,4,1,1,4,4,4,4,4,4,3,4,4,4,1,1,1,1,1,1,4,1,1,
    1,4,4,4,4,4,3,1,1,4,4,4,4,4,4,4,4,4,4,4,1,1,1,4,4,4,4,1,
    1,4,1,1,1,1,4,1,1,1,1,1,1,1,1,4,1,1,1,1,1,4,1,1,1,1,4,1,
    1,4,1,1,1,1,4,1,1,1,1,1,1,1,1,4,1,1,1,1,1,4,1,1,1,1,4,1,
    1,4,4,4,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,4,4,4,1,
    1,1,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,4,1,1,4,1,1,4,1,1,1,
    1,1,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,4,1,1,4,1,1,4,1,1,1,
    1,4,4,4,4,4,4,1,1,4,4,4,4,1,1,4,4,4,3,1,1,4,4,4,4,4,4,1,
    1,4,1,1,1,1,1,1,1,1,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,4,1,
    1,4,1,1,1,1,1,1,1,1,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,4,1,
    1,4,4,4,4,4,4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,4,4,4,4,4,3,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
  ]
// 1 is a wall
// 4 is a blank space
//3 is a greendot
  const squares = []

  //create your board
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement('div')
      grid.appendChild(square)
      squares.push(square)

      //add layout to the board
      if(layout[i] === 0) {
        squares[i].classList.add('pac-dot')
      } else if (layout[i] === 1) {
        squares[i].classList.add('wall')
      }  else if (layout[i] === 3) {
        squares[i].classList.add('power-pellet')
      }
    }
  }
  createBoard()


  //create Characters
  let characterCurrentIndex = 366
  squares[characterCurrentIndex].classList.add('character')
  //get the coordinates of the character on the grid with X and Y axis



  //moves character baised on the key movements
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
        //this is saying that if the charater reaches the end of the maze it will display
        //the score and send them back to the start page
        if (squares[characterCurrentIndex +1] === squares[392]) {
        setTimeout(function(){ alert("Congratulations you have made it to the end of the maze with a score of " + score); window.location.href = "startp.html";}, 0)     

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
    powerPelletEaten()
    checkForGameOver()

  }
  document.addEventListener('keyup', moveCharacter)
  scoreDisplay.innerHTML = score


  //what happens when you eat a green dot, it adds to the score
  function powerPelletEaten() {
    if (squares[characterCurrentIndex].classList.contains('power-pellet')) {
      score +=10
      scoreDisplay.innerHTML = score
      squares[characterCurrentIndex].classList.remove('power-pellet')

    }
  }


  //create ghosts using Constructors
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className
      this.startIndex = startIndex
      this.speed = speed
      this.currentIndex = startIndex
      this.isScared = false
      this.timerId = NaN
    }
  }

  //all my ghosts
  ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
    ]

  //draw my ghosts onto the grid
  ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
    })

  //move the Ghosts randomly
  ghosts.forEach(ghost => moveGhost(ghost))

  function moveGhost(ghost) {
    const directions =  [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {
      //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
      if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
        !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
          //remove the ghosts classes
          squares[ghost.currentIndex].classList.remove(ghost.className)
          squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
          //move into that space
          ghost.currentIndex += direction
          squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      //else find a new random direction ot go in
      } else direction = directions[Math.floor(Math.random() * directions.length)]



    checkForGameOver()
    }, ghost.speed)
  }

  //check for a game over
  function checkForGameOver() {
    if (squares[characterCurrentIndex].classList.contains('ghost')) {
      ghosts.forEach(ghost => clearInterval(ghost.timerId))
      document.removeEventListener('keyup', moveCharacter)
      //opens the pop up message and sends you back to the start
      setTimeout(function(){ alert("You died with a score of " + score); window.location.href = "startp.html";}, 0)     
    }
  }

})
