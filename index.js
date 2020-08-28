const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, breedDescription) => {
  if (error) {
    console.log(error);
  } else {
    console.log(breedDescription);
  }
});