

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'foo' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY codeList
 *  2. STRING_ARRAY shoppingCart
 */

function foo(codeList, shoppingCart) {
    console.log('shopping ', shoppingCart)
    console.log('code ', codeList[0])
    let winner = false;
    let pt1 = 0;
    let pt2 = 0;
    
    for(let i = 0; i < shoppingCart.length && !winner; i++) {
        let code = codeList[i].split(' ');
        console.log('for code ', code)
        // if theres a match
        // step thru codeList
        if(shoppingCart[i] === code[i]) {
            // get X fruits of code
            let clump = shoppingCart.slice(i, code.length);
            for(let j = 0; j < code.length; j++) {
                if(clump[j] !== code[j]) {
                    return 0;
                }
            }
        }
    }
    return winner ? 1 : 0;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const codeListCount = parseInt(readLine().trim(), 10);

    let codeList = [];

    for (let i = 0; i < codeListCount; i++) {
        const codeListItem = readLine();
        codeList.push(codeListItem);
    }

    const shoppingCartCount = parseInt(readLine().trim(), 10);

    let shoppingCart = [];

    for (let i = 0; i < shoppingCartCount; i++) {
        const shoppingCartItem = readLine();
        shoppingCart.push(shoppingCartItem);
    }

    const result = foo(codeList, shoppingCart);

    ws.write(result + '\n');

    ws.end();
}
