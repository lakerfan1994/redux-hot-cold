import {GENERATE_AURAL_UPDATE, RESTART_GAME, MAKE_GUESS, generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('generateAuralUpdate', () => {
	it('should return the action and all its pieces', () => {
		const action = generateAuralUpdate();
		expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
	});
});

describe('restartGame', () => {
	it('should return the restartGame action intact', () => {
		const correct = 24;
		const action = restartGame(correct);
		expect(action.type).toEqual(RESTART_GAME);
		expect(action.correctAnswer).toEqual(correct);
	});
});

describe('makeGuess', () => {
	it('should return the makeGuess action', () => {
		const attempt = 23;
		const action = makeGuess(attempt);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(attempt);
	})
})