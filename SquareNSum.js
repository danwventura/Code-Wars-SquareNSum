
var int_array = [2,3,4];
var totalSum = 0;
var number_here = document.getElementById("number_here");
function squareSum (someArray)
{
  for (i=0; i<int_array.length;i++)
  {
    totalSum += Math.pow(int_array[i],2)
  }
  console.log(totalSum);
  number_here.innerHTML = totalSum;
}

squareSum(int_array);