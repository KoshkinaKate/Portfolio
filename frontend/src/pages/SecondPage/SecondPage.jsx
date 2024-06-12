import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './SecondPage.css';

const SecondPage = () => {
  const dinoRef = useRef(null);
  const gameContainerRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const obstacleTimers = useRef([]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    dinoRef.current.style.bottom = '0px';
    const gameContainer = gameContainerRef.current;
    const obstacles = gameContainer.querySelectorAll('.obstacle');
    obstacles.forEach(obstacle => gameContainer.removeChild(obstacle));
    document.addEventListener('keydown', handleKeyDown);
    generateObstacle();
  };

  useEffect(() => {
    if (!gameStarted) return;

    let isJumping = false;
    let gameEnd = false;
    const jumpHeight = 150;
    const fallSpeed = 5;

    const dino = dinoRef.current;

    const jump = () => {
      if (!isJumping) {
        isJumping = true;
        let bottom = parseInt(dino.style.bottom);
        let upInterval = setInterval(() => {
          if (bottom < jumpHeight) {
            bottom += 20;
            dino.style.bottom = `${bottom}px`;
          } else {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
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

    const generateObstacle = () => {
      if (!gameStarted) return;

      let obstaclePosition = 1000;
      let randomTime = Math.random() * 2000 + 1000; // Obstacles appear every 1 to 3 seconds

      const obstacle = document.createElement('div');
      if (!gameEnd) obstacle.classList.add('obstacle');
      gameContainerRef.current.appendChild(obstacle);
      obstacle.style.left = `${obstaclePosition}px`;

      const obstacleTimerId = setInterval(() => {
        if (obstaclePosition > 0 && obstaclePosition < 60 && parseInt(dino.style.bottom) < 60) {
          clearInterval(obstacleTimerId);
          gameEnd = true;
          setGameOver(true);
          setGameStarted(false);
          document.removeEventListener('keydown', handleKeyDown);

          // Remove all obstacles when the game ends
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

      if (!gameEnd) setTimeout(generateObstacle, randomTime);
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 32) {
        jump();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    generateObstacle();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      obstacleTimers.current.forEach(timerId => clearInterval(timerId));
      obstacleTimers.current = [];
    };
  }, [gameStarted]);

  return (
    <div className="SP">
      <NavBar />
      <div className="second-page-container">
        {gameOver ? (
          <div className="game-over">
            {score > 5 ? 
              `Great job! Your score: ${score}. Now it's time to take a look at my portfolio.` : 
              `Oops. You tried! Your score: ${score}. Now it's time to take a look at my portfolio.`
            }
          </div>
        ) : (
          <>
            {!gameStarted && (
              <button className="start-button" onClick={startGame}>
                Start Game
              </button>
            )}
            <div id="game-container" ref={gameContainerRef} style={{ display: gameStarted ? 'block' : 'none' }}>
              <div id="dino" ref={dinoRef} style={{ bottom: '0px' }}></div>
            </div>
            <div className="score" style={{ display: gameStarted ? 'block' : 'none' }}>Score: {score}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default SecondPage;






















