const _ = require("lodash"); 

const data = [
    {word:"a",score:1},
    {word:"b",score:2},
    {word:"c",score:3},
    {word:"d",score:4},
];

function processData(data){
    const list = data.slice(0,2).map(x => x.word);
    console.log(list);
}

processData(data);