const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, breedDescription) => {
  if (error) {
    console.log(error);
  } else if (!breedDescription.length) {
    console.log(`'${breedName}' is not a breed`);
  } else {
    console.log(breedDescription);
  }
});