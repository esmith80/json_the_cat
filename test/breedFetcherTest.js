const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    //expect this to pass with valid description matching
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, desc);
      done();
    });
  });
  it('should return an error if an invalid/non-existent breed is passed in', (done) => {
    fetchBreedDescription('xxx', (err) => {
      // this test should return true
      assert.equal(err, "'xxx' is not a breed");
      done();
    });
  });
});