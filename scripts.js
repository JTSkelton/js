//Function with ForEach

function convertToRoman(number) {
  const toNine = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]; 
  const toHundred = ["", "X" ,"XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const toThousand = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const toFourThousand = ["", "M", "MM", "MMM"];
  let numberArray = number.toString().split("").reverse();
  let finalArray = [];
  if (number > 3999){
    return "Not A Valid Number"
  }
    numberArray.forEach(function(num, index){
      if (index === 3) {
      finalArray.push(toFourThousand[num]);
      }
      else if (index === 2){
      finalArray.push(toThousand[num]);
      }
      else if (index === 1){
      finalArray.push(toHundred[num]);
      }
      else if (index === 0){
      finalArray.push(toNine[num]);
      }
      return finalArray;
    });
    return finalArray.reverse().join("");
  }
  convertToRoman(3999)

  //Function with For Loop
  
  function convertToRoman2(number) {
  const toNine = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]; 
  const toHundred = ["", "X" ,"XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const toThousand = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const toFourThousand = ["", "M", "MM", "MMM"];
  let numberArray = number.toString().split("").reverse();
  let finalArray = [];
  if (number > 3999){
    return "Not a valid Number"
  }
    for (i = 0; i <= numberArray.length; i++)
      if (i === 3) {
      finalArray.push(toFourThousand[numberArray[i]]);
      }
      else if (i === 2){
      finalArray.push(toThousand[numberArray[i]]);
      }
      else if (i === 1){
      finalArray.push(toHundred[numberArray[i]]);
      }
      else if (i === 0){
      finalArray.push(toNine[numberArray[i]]);
      }
  return finalArray.reverse().join("");
  }
  convertToRoman2(3999);
  