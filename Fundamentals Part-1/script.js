/** 
Values and Variables
1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).
2. Log their values to the console.
*/
let country = "India";
let continent = "Asia";
let population = 14;
console.log(country);
console.log(continent);
console.log(population);


/**
Data Types
1. Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. 
Also declare a variable language, but don't assign it any value yet.
2. Log the types of isIsland, population, country and language to the console.
*/
let isIsland = false;
let language;
console.log(typeof(isIsland));
console.log(typeof(country));
console.log(typeof(language));


/** 
let, const and var
1. Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
3.Try to change one of the changed variables now, and observe what happens.
*/
language = "Kannada";
const COUNTRY = "India";
const CONTINENT = "Asia";
const ISISLAND = false;

/**
Basic Operators
1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console.
3. Finland has a population of 6 million. Does your country have more people than Finland?
4. The average population of a country is 33 million people. Does you country have less people than the average country?
5. Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
 */

let halfPopulation = population/2;
console.log(halfPopulation)
console.log(population+1)
console.log(6>population)
console.log(population<33)

const description = COUNTRY + " is in " + CONTINENT + ", and its " + population + " million people speak " + language;
console.log(description)

/**
Strings and Template Literals: can be used as regular strings and also used for declaring multiple line strings.
Recreate the description variable from the last assignment, this time using the template literal syntax.
 */
const new_description = `${COUNTRY} is in ${CONTINENT}, and its ${population} million people speak ${language}😊`
console.log(new_description)

/**
Type Conversion and Coercion
Predict the result of these 5 operations without executing them:
 */
console.log('9' - '5'); // -> 4?
console.log('19' - '13' + '17'); // -> 617?
console.log('19' - '13' + 17); // -> 23?
console.log('123' < 57); // -> false?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143?
