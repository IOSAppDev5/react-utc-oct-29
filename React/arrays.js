var numbers = [1,2,3,4,5];

var squares = numbers.map((item, index) => 
{
    console.log(item , index); 
    return item * item
});

//console.log(numbers);
console.log(squares);

