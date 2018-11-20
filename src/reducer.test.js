import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('reducer', () => {
	const guess1 = 1;
	const guess2 = 34; 
	const guess3 = 50;
	const guess4 = 75;
	const guess5 = 99;
	const trashGuess = 'LAbron James in LA!'

	it('should give me the initial state if i do not pass a state into the parameter', () => {
		const state = reducer(undefined, {type: '_LEBRONJAMES'});
		expect(state).toEqual({
			guesses: [],
    		feedback: 'Make your guess!',
   			auralStatus: '',
    		correctAnswer: 24
		});
	});

	it('should return the same current state if a state is passed into the state parameter', () => {
		const currentState = {};
		const reducedState = reducer(currentState, {type: '_LONZOBALL'});
		expect(reducedState).toEqual(currentState);
	});

	describe('restartGame action', () => {
		it('should create a fresh state with a new game', () => {
			const dummyState = {};
			const newState = reducer(dummyState, restartGame(guess3));
			expect(newState).toEqual({
				 guesses: [],
            	feedback: 'Make your guess!',
           		auralStatus: '',
           		 correctAnswer: guess3
			});
		})
	})

	describe('makeGuess action', () => {
		it('should return feedback asking for a valid number if anything not a number is entered', () => {
			const dummyState = {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 24
       		 };

       		 const newState = reducer(dummyState, makeGuess(trashGuess));
       		 expect(newState.feedback).toEqual('Please enter a valid number.');
       		 expect(newState.guesses).toEqual([NaN]);
		});

		it('should return accurate feedback stating the proximity of the number to the correct answer', () => {
			const dummyState = {
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: 24
       		 };		

       		 const newState = reducer(dummyState, makeGuess(guess2));
       		 expect(newState.feedback).toEqual("You're Warm.");
       		 expect(newState.guesses).toEqual([34]);
       	})
	})
})