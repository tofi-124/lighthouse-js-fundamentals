const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let wh = 0;
while(wh<ingredients.length){
  console.log(ingredients[wh])
  wh++
  }
// Write a for loop that prints out the contents of ingredients:
let fr=0
for(fr ; fr < ingredients.length ; fr++){
  console.log(ingredients[fr])
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
wh -= 1
while(wh<=ingredients.length){
  console.log(ingredients[wh])
  wh--
  if(wh === -1) break
  }