// Tasks
// Make sure to write the code for each task using only bracket notation.
// Task 1: Create a multi-dimensional array with nine books and/or movies of your
// choice.
let favoriteMovies=[
    ["The fidler on the roof","Beutation in Beast","Down Perscope"],
    ["Coco","The Lion King","Walk the line"],
    ["Forrest Gump","Big","Bride and Predegeus"]
];


// Task 2: Access and log all the elements in the array using bracket notation with
// numbers.
console.log(favoriteMovies[0][0]);
console.log(favoriteMovies[0][1]);
console.log(favoriteMovies[0][2]);
console.log(favoriteMovies[1][0]);
console.log(favoriteMovies[1][1]);
console.log(favoriteMovies[1][2]);
console.log(favoriteMovies[2][0]);
console.log(favoriteMovies[2][1]);
console.log(favoriteMovies[2][2]);


// Task 3: Access and log all the elements in the array using bracket notation with
// variables as indices. Use the variables row and item.
for(let row=0; row<favoriteMovies.length; row++){
    for(let item=0; item<favoriteMovies[row].length; item++){
        console.log(favoriteMoves[row][item]);
        
    }
}

// Task 4: Write a loop that prints all the items on the second shelf
let row=1;
for(let i=0; i<favoriteMovies[row].length; i++){
    console.log(favoriteMovies[row][i]); // Coco,The Lion King, Walk the Line
}