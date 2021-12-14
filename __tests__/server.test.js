import {createGeonameURL} from '../src/server/server'

// Checking if a valid handleSubmit Function exists
test('createGeonameURL function exists', () => {
    expect(createGeonameURL).toBeDefined();
});