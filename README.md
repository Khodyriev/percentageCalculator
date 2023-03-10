# percentageCalculator
The advantage of this function is - if you have a result of percentage integer's sum 101% or 99% (as a result of some error in rounding) - this function will correct it and you always get 100% in sum.

The function 'percentageCalculator' takes as a single parameter an object with such scheme:

{\n
    parameterName_1: numericValueOfParameter_1,<br>
    parameterName_2: numericValueOfParameter_2,<br>
    parameterName_3: numericValueOfParameter_3,<br>
    ........................................<br>
    parameterName_n: numericValueOfParameter_n<br>
}\n

and, as a result, returns an object:

{
    parameterName_1: percentageOfParameter_1,
    parameterName_2: percentageOfParameter_2,
    parameterName_3: percentageOfParameter_3,
    ........................................
    parameterName_n: percentageOfParameter_n
}

Values of percentages are rounded to integers.

The advantage of this function is - if you have a result of percentage integer's sum 101% or 99%
(as a result of some error in rounding) - this function will correct it and you always get 100% in sum.

Of course, you should be sure, that the sum of all parameters (from 1 to n) is one piece - 100%.
*/

/*
object for example:
{
    red: 9,
    green: 2,
    blue: 3
}

result:
{
    "red": "64%",
    "green": "14%",
    "blue": "22%"
}
