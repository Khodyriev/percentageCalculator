# percentageCalculator
The advantage of this function is - if you have a result of percentage integer's sum 101% or 99% (as a result of some error in rounding) - this function will correct it and you always get 100% in sum.

The function 'percentageCalculator' takes as a single parameter an object with such scheme:

{<br>
    parameterName_1: numericValueOfParameter_1,<br>
    parameterName_2: numericValueOfParameter_2,<br>
    parameterName_3: numericValueOfParameter_3,<br>
    ........................................<br>
    parameterName_n: numericValueOfParameter_n<br>
}

and, as a result, returns an object:

{<br>
    parameterName_1: percentageOfParameter_1,<br>
    parameterName_2: percentageOfParameter_2,<br>
    parameterName_3: percentageOfParameter_3,<br>
    ........................................<br>
    parameterName_n: percentageOfParameter_n<br>
}

Values of percentages are rounded to integers.

The advantage of this function is - if you have a result of percentage integer's sum 101% or 99%
(as a result of some error in rounding) - this function will correct it and you always get 100% in sum.

Of course, you should be sure, that the sum of all parameters (from 1 to n) is one piece - 100%.

object for example:

{<br>
    red: 9,<br>
    green: 2,<br>
    blue: 3<br>
}

result:

{<br>
    "red": "64%",<br>
    "green": "14%",<br>
    "blue": "22%"<br>
}
