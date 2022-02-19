module.exports = function toReadable (number) {  
    base = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourteen",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "forty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety"
    };
    
    if(number>=0 && number<100){
        return belowHundred(number)
    }else if(number>=100 && number<1000){
        return aboveHundred(number)
    }
}
    
    
function belowHundred(number){
    if(!(base[number] === undefined)){
        return base[number]
    }else {
        const firstPart = Math.floor(number/10)*10;
        const secondPart = number%10
        return `${base[firstPart]} ${base[secondPart]}`
    }
}

function aboveHundred(number){
    const firstPart = Math.floor(number/100);
    const secondPart = belowHundred(number - firstPart*100);
    if(number%100 ===0){
        return `${base[firstPart]} hundred`
    }else {            
        return `${base[firstPart]} hundred ${secondPart}`
    }
    
}
