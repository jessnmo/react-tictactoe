import styled from 'styled-components';

const Squares = styled.div`
	width: 100px;
	height: 100px;
	border: solid 1px black;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Square = ({
	id,
	square,
	eachSquare,
	setEachSquare,
	move,
	setMove,
	winMessage,
	gameOver,
}) => {
	const handleClick = (e) => {
		//whenever clicked i want to change the empty array
		const clicked =
			e.target.firstChild.classList?.contains('cross') ||
			e.target.firstChild.classList?.contains('circle');

		if (!clicked) {
			//if the square is empty then we can put a cross or circle in, depending on which one to move
			if (move === 'cross') {
				//essentially if it's cross'turn and this square is not clicked, then we want to put a cross there
				e.target.firstChild.classList?.add('cross');
				handleSquareChange('cross'); //we want to add this className to the array
				setMove('circle');
			}
			if (move === 'circle') {
				//essentially if it's cross'turn and this square is not clicked, then we want to put a cross there
				e.target.firstChild.classList?.add('circle');
				handleSquareChange('circle');
				setMove('cross');
			}
		}
	};

	const handleSquareChange = (className) => {
		const nextMove = eachSquare.map((square, index) => {
			if (index === id) {
				return className; //if the index is equal to id of the square, then we want to return the classname, to show in the new array
			} else {
				return square;
			}
		});
		setEachSquare(nextMove);
	}; //getting the array and replacing with the new array (i.e. the one with the className of what we clicked)

	return (
		<Squares
			id={id}
			onClick={!winMessage && !gameOver ? handleClick : undefined}
		>
			<div className={square}></div>
		</Squares>
	);
};

export default Square;
