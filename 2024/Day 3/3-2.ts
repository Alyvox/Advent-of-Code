import * as fs from 'fs';

const input = fs.readFileSync('./Day 3/input.txt', 'utf-8');

function main(){
  const regex = /(mul\([\d]{1,3},[0-9]{1,3}\))|don't\(\)|do\(\)/g;
  let total = 0;
  let read = true;
  let result;
  while(result = regex.exec(input)){
    if(result[0] === 'do()'){
      read = true
      continue
    } else if(result[0] === "don't()") {
      read = false
      continue
    } else {
      if(read){
        let matches = result[0].match(/\d+/g);
        if(matches){
          total += Number(matches[0]) * Number(matches[1])
        }
      }
    }
  }
  console.log(total);
}

main()