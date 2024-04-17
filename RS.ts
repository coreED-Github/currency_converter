#! /usr/bin/env node

import inquirer from 'inquirer'
const currency:any = {
USD: 1, // base currency
EUR: 0.91,
GBP: 0.76,
INR: 74.57,
PKR: 280,
DZD: 135,
ARS: 869,
AUD: 1.56,
BHD: 0.376,
BDT: 109.6967,
BYN: 3.27,
ZMW: 25.1249,

};

let userAnswer = await inquirer.prompt(
   [ 
    {
name:'from',
message:"Enter from currency",
type:'list',
choices:['USD','EUR','GBP','INR','PKR','DZD','ARS','AUD','BHD','BDT','BYN','ZMW']
},
{
    name:'to',
    message:"Enter to currency",
    type:'list',
    choices:['USD','EUR','GBP','INR','PKR','DZD','ARS','AUD','BHD','BDT','BYN','ZMW']
    },
    {
        name:'amount',
        message:"Enter your amount",
        type:'number',
        }
        ])

        
let fromAmount = currency[userAnswer.from]
let toAmount = currency[userAnswer.to]
let Amount = userAnswer.amount

let baseAmount = Amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount)
