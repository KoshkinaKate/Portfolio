import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import dinoGif from '../../assets/pictures/dino.gif';
import './SecondPage.css';

const SecondPage = () => {
  const dinoRef = useRef(null); // Reference to the dino element
  const gameContainerRef = useRef(null); // Reference to the game container element
  const [gameStarted, setGameStarted] = useState(false); // State to track if the game has started
  const [gameOver, setGameOver] = useState(false); // State to track if the game is over
  const [score, setScore] = useState(0); // State to track the score
  const obstacleTimers = useRef([]); // Reference to store obstacle timers

  // -------------------------------Function to start the game
  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    dinoRef.current.style.bottom = '0px'; // Reset dino position
    const gameContainer = gameContainerRef.current;
    const obstacles = gameContainer.querySelectorAll('.obstacle');
    obstacles.forEach(obstacle => gameContainer.removeChild(obstacle)); // Remove existing obstacles
    document.addEventListener('keydown', handleKeyDown); // Add keydown event listener
    generateObstacle(); // Generate the first obstacle
  };

  // -------------------------------- Function to handle keydown event
  const handleKeyDown = (e) => {
    if (e.keyCode === 32) jump(); // Call jump function if spacebar is pressed
  };

  // ---------------------------------Function to make the dino jump
  const jump = () => {
    const dino = dinoRef.current;
    if (!dino) return;

    let isJumping = false;
    let bottom = parseInt(dino.style.bottom);
    const jumpHeight = 200; // Maximum height of the jump
    const fallSpeed = 5; // Speed at which the dino falls

    if (!isJumping) {
      isJumping = true;
      const upInterval = setInterval(() => {
        if (bottom < jumpHeight) {
          bottom += 20;
          dino.style.bottom = `${bottom}px`;
        } else {
          clearInterval(upInterval);
          const downInterval = setInterval(() => {
            if (bottom > 0) {
              bottom -= fallSpeed;
              dino.style.bottom = `${bottom}px`;
            } else {
              clearInterval(downInterval);
              isJumping = false;
            }
          }, 20);
        }
      }, 20);
    }
  };

  // ---------------------- Function to generate obstacles
  const generateObstacle = () => {
    if (!gameStarted) return;

    let obstaclePosition = 1000;
    const randomTime = Math.random() * 2000 + 1000; // Random time between 1 to 3 seconds

    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    gameContainerRef.current.appendChild(obstacle);
    obstacle.style.left = `${obstaclePosition}px`;

    const obstacleTimerId = setInterval(() => {
      const dino = dinoRef.current;
      if (obstaclePosition > 0 && obstaclePosition < 60 && parseInt(dino.style.bottom) < 60) {
        clearInterval(obstacleTimerId);
        setGameOver(true);
        setGameStarted(false);
        document.removeEventListener('keydown', handleKeyDown);

        const gameContainer = gameContainerRef.current;
        const obstacles = gameContainer.querySelectorAll('.obstacle');
        obstacles.forEach(obstacle => gameContainer.removeChild(obstacle));
      }

      obstaclePosition -= 5;
      obstacle.style.left = `${obstaclePosition}px`;

      if (obstaclePosition <= 0) {
        clearInterval(obstacleTimerId);
        gameContainerRef.current.removeChild(obstacle);
        setScore(score => score + 1);
      }
    }, 20);

    obstacleTimers.current.push(obstacleTimerId);

    if (!gameOver) setTimeout(generateObstacle, randomTime);
  };

  // -------------------------Effect hook to handle keydown event and obstacle generation
  useEffect(() => {
    if (gameStarted) {
      document.addEventListener('keydown', handleKeyDown);
      generateObstacle();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      obstacleTimers.current.forEach(timerId => clearInterval(timerId));
      obstacleTimers.current = [];
    };
  }, [gameStarted]);

  return (
    <div className="SP">
      <div className="second-page-container">
        {gameOver ? (
          <div className="game-over">
            {score >= 5 ? (
              <>
                <span>Great job! Your score: {score}.</span>
                <div className="result"><Link to="/projects" className="result">Now it's time to take a look at my portfolio</Link></div>
              </>
            ) : (
              <>
                <span>Oops, you've taken a shot! Your score: {score}.</span>
                <div className="result"><Link to="/projects" className="result">Now it's time to take a look at my portfolio</Link></div>
              </>
            )}
          </div>
        ) : (
          <>
            {!gameStarted && (
              <button className="start-button" onClick={startGame}>
                Start Game
              </button>
            )}
            <div className="instructions" style={{ display: gameStarted ? 'block' : 'none' }}>
              Help the kitty escape! Press the spacebar to jump over the obstacles.
            </div>
            <div className="game-container" ref={gameContainerRef} style={{ display: gameStarted ? 'block' : 'none' }}>
              <div id="dino" ref={dinoRef} style={{ bottom: '0px', backgroundImage: `url(${dinoGif})` }}></div>
            </div>
            <div className="score" style={{ display: gameStarted ? 'block' : 'none' }}>Score: {score}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default SecondPage;





