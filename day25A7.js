// 7 Check for 'land' in the countries array
const countries = ['Finland', 'Ireland', 'Iceland'];
const countriesWithLand = countries.filter(country => country.includes('land'));

if (countriesWithLand.length > 0) {
  console.log(countriesWithLand);
} else {
  console.log('All these countries are without land');
}
