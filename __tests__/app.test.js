import {handleSubmit} from '../src/client/js/app'
import {init} from '../src/client/js/app'

// Checking if a valid handleSubmit Function exists
test('handleSubmit function exists', () => {
    expect(handleSubmit).toBeDefined();
});

// Checking if a valid init Function exists
test('init function exists', () => {
    expect(init).toBeDefined();
});