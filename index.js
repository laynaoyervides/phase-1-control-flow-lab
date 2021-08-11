function scuberGreetingForFeet(someValue){
  // Write y 
  let result
  if (someValue <= 400) {
    result = "This one is on me!";
  }
  else if(someValue > 2000 && someValue <= 2500) {
    result = "I will gladly take your thirty bucks.";
  }
  else if (someValue > 2500){
    result = "No can do.";

  }
  return result
}
scuberGreetingForFeet();

function ternaryCheckCity(someOtherValue){
  // here!
  let resultTernary
//  if (city ==="NYC"){resultTernary ="Ok, sounds good.";}
 // else {resultTernary="No go.";}
//start ternary
return someOtherValue === "NYC"? resultTernary = "Ok, sounds good." : resultTernary = "No go."
}


function switchOnCharmFromTip(generosity){
  let resultGenerosity
//  if (generosity >=20){resultGenerosity = " Thank you so much.";} 
//  else if (generosity <20 && generosity >=15){resultGenerosity = "Thank you....";}
//  else {resultGenerosity = "Bye.";}
    switch(generosity){
        case 'generous' : 
            return "Thank you so much."
        case 'not as generous':
            return "Thank you."
        default:
            return "Bye." 
    }
          

}
//"The appropriate amount to tip servers depends on your service. 
//15% is appropriate for average service ; 20% if your server is above average. 
//ou should feel free to tip above 20% if you received excellent service."
//source: https://tableagent.com/article/guide-to-tipping-at-restaurants/#:~:text=The%20appropriate%20amount%20to%20tip,if%20you%20received%20excellent%20service.