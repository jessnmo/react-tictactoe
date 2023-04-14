import Square from './components/Square';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Holder = styled.div`
	margin: 0;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	flex-direction: column;
`;

const Board = styled.div`
	width: 300px;
	height: 300px;
	display: flex;
	flex-wrap: wrap;
	border: solid 1px black;
`;

const App = () => {
	const [eachSquare, setEachSquare] = useState([
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
	]); //inside the board we have 9 squares, we will use this to map out the squares

	const [move, setMove] = useState('cross');
	const [winMessage, setWinMessage] = useState(null);
	const [gameOver, setGameOver] = useState(false);

	const message = 'Move Next: ' + move;
	console.log(eachSquare);

	useEffect(() => {
		const checkWhoWins = () => {
			const winningCombination = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6],
			];

			winningCombination.forEach((array) => {
				let crossWin = array.every((square) => eachSquare[square] === 'cross');
				//to check every square, within the original array, open it up and pass through the one we clicked
				if (crossWin) {
					setWinMessage('Game Over, Cross Wins');
					setGameOver(true);
					return;
				}
			});

			winningCombination.forEach((array) => {
				let circleWin = array.every(
					(square) => eachSquare[square] === 'circle'
				);
				//to check every square, within the original array, open it up and pass through the one we clicked
				if (circleWin) {
					setWinMessage('Game Over, Circle Wins');
					setGameOver(true);
					return;
				}
			});
		};

		checkWhoWins();
	}, [eachSquare]);

	return (
		<Holder>
			<Board>
				{eachSquare.map((square, index) => (
					<Square
						key={index}
						id={index}
						square={square}
						eachSquare={eachSquare}
						setEachSquare={setEachSquare}
						move={move}
						setMove={setMove}
						winMessage={winMessage}
						gameOver={gameOver}
					></Square>
				))}
			</Board>
			<p>{winMessage || message}</p>
		</Holder>
	);
};

export default App;
