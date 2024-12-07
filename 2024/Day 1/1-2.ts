import * as fs from 'fs';

const input = fs.readFileSync('./Day 1/input.txt', 'utf-8');
const lines = input.split(/\r?\n/);

function main(){
  const leftList: number[] = [];
  const rightList: number[] = [];
  let similiarity = 0

  lines.forEach((line) => {
    const list = line.split(/\s+/).map(Number);
    leftList.push(list[0]);
    rightList.push(list[1]);
  });
  leftList.sort();
  rightList.sort();
  leftList.forEach((item)=> {
    const count = rightList.filter((v) => (v === item)).length;
    similiarity += item * count;
  });

  console.log(similiarity);
}

main()