import * as fs from 'fs';

const input = fs.readFileSync('./Day 1/input.txt', 'utf-8');
const lines = input.split(/\r?\n/);

function main(){
  const leftList: number[] = [];
  const rightList: number[] = [];
  let distance = 0
  
  lines.forEach((line) => {
    const list = line.split(/\s+/).map(Number);
    leftList.push(list[0]);
    rightList.push(list[1]);
  });
  leftList.sort();
  rightList.sort();

  for(let i = 0; i < lines.length; i++){
    distance += Math.abs(leftList[i] - rightList[i]);
  }

  console.log(distance);
}

main()