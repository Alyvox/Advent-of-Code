import * as fs from 'fs';

const input = fs.readFileSync('./Day 3/input.txt', 'utf-8');

function main(){
  const regex = /(mul\([0-9]{1,3},[\d]{1,3}\))/g;
  let total = 0;
  let result;
  while(result = regex.exec(input)){
    let matches = result[0].match(/\d+/g);
    if(matches){
      total += Number(matches[0]) * Number(matches[1]);
    }
  }
  console.log(total);
}

main()