import formatCurrency from "../scripts/utils/money.js";


console.log('test suite : formatCurrnecy ')

console.log('converts cents into dollars')

if(formatCurrency(2095) === '20.95'){
    console.log('paas')
}else{
    console.log('failed')
}


console.log('works with 0')

if(formatCurrency(0) === '0.00'){
    console.log('paas')
} else{
    console.log('failed')
}

console.log('rounds up to the nearest cent')

if(formatCurrency(2000.5) === '20.01'){
    console.log('paas')
} else{
    console.log('failed')
}