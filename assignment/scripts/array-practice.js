console.log("****** Array Practice *******");

// 1. Creating arrays
console.log("--- 1. Practice creating arrays ---");

// Example: Array of animals
let animalArray = ["fish", "cat", "bird", "dog"];
console.log("Animals are: ", animalArray);

// 1.a. TODO: Make an array with some favorite foods
let myFavoriteFoods = ["Pizza", "Chicken Alfredo", "Pulled Pork", "Smoothies"];

// 1.b. TODO: Log your array of foods to the console with a message, similar
//      to the example above
console.log("My favorite foods are:", myFavoriteFoods);

// 2. Array.length - tells you how many items are in the array
console.log("--- 2. Length of an array ---");

// Example: How many animals are in the array?
console.log("Number of animals:", animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log("Number of Foods:", myFavoriteFoods.length);

// 3. Accessing array items
console.log("--- 3. Accessing items in an array ---");

// Example: Log the first animal from the array using it's array index
console.log("First animal is", animalArray[0]);

// 3.a. TODO: Log the second animal in the array
console.log("Second animal is", animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index
console.log("Last animal is", animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length,
//      instead of the exact index number of the last item

const lastAnimal = animalArray[animalArray.length - 1];
console.log(lastAnimal);

// 4. Adding & Removing Array Items
console.log("--- 4. Adding and removing array items ---");

// Example: Add an animal to the end using Array.push
animalArray.push("penguin");
console.log("Added an animal to end,", animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array

myFavoriteFoods.push("Waffles");
console.log("added a favorite food", myFavoriteFoods);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log("Removed the last animal", removedAnimal);
console.log("The animals are now", animalArray);

// 4.b. TODO: Remove the food at the end of your array &
//      log both the food removed and the updated array
let removedFood = myFavoriteFoods.pop();
console.log("removed the last food item", removedFood);
console.log("the foods are now:", myFavoriteFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift("walrus");
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array

myFavoriteFoods.unshift("Waffles");
console.log("Added a new item at the beginning", myFavoriteFoods);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log("Removed the first animal", removedAnimal);
console.log("The animals are now", animalArray);

// 4.d TODO: Remove the food at the beginning of your array &
//     log both the food removed and the updated array

removedFood = myFavoriteFoods.shift();
console.log("Removed the first item", removedFood);
console.log("My favorite foods are now", myFavoriteFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

const removedFoods = myFavoriteFoods.splice(1, 1, "Waffles");
console.log("removed food", removedFoods);
console.log("My new favorite foods are", myFavoriteFoods);

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

myFavoriteFoods.sort();
myFavoriteFoods.reverse();
console.log(myFavoriteFoods);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

//const foodsString=myFavoriteFoods.toString();
//changed methods

console.log("My favorite foods are", myFavoriteFoods.join(" and "));

// 4.h (STRETCH) TODO: Make a new array that combines
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

const foodAnimals = myFavoriteFoods.concat(animalArray);
console.log("The food and animals combined are", foodAnimals);
