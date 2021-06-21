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
 * Complete the 'searchSuggestions' function below.
 *
 * The function is expected to return a 2D_STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY repository
 *  2. STRING customerQuery
 */

function searchSuggestions(repository, customerQuery) {
    let entry = null;
    let response = [];
    // check if customerQuery < 2 chars, return [] if so
    if(customerQuery.length < 2) {
        return [];
    }
    console.log('repo: ', repository, customerQuery)
    
    // 2: first 2 letters
    let firstTwo = customerQuery.substr(0,2)
    entry = repository.filter(word => word.includes(firstTwo));
    if(entry.length > 2) {
        
    }
    response.push([...entry])
    
    // 3: first 3 letters
    let firstThree = customerQuery.substr(0,3)
    entry = repository.filter(word => word.includes(firstThree))
    response.push([...entry])
    console.log('response: ', response)
    
        // 1: customer query is exact
    entry = repository.filter(word => word.includes(customerQuery))
    response.push([...entry])
    response = response.map(suggestion => {
        if(suggestion.length > 2) {
            suggestion.sort((a,b) => {
                if (a > b) {
                    return 1;
                } else if (a < b) {
                    return -1;
                }
            });
            return suggestion.slice(0,3);
            console.log('suggestion: ', suggestion)
        }
        return suggestion;
    })
    console.log('response ', response)
    return response;
    // return [ ["blahh", "bhell"], ["hehlj", "lkjlk"], ]
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const repositoryCount = parseInt(readLine().trim(), 10);

    let repository = [];

    for (let i = 0; i < repositoryCount; i++) {
        const repositoryItem = readLine();
        repository.push(repositoryItem);
    }

    const customerQuery = readLine();

    const result = searchSuggestions(repository, customerQuery);

    ws.write(result.map(x => x.join(' ')).join('\n') + '\n');

    ws.end();
}
