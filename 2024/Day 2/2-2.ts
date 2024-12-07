import * as fs from 'fs';

const input = fs.readFileSync('./Day 2/input.txt', 'utf-8');
const lines = input.split(/\r?\n/);

function isSafe(reports: number[]){
  let type: number = 0;// 0 undefined, 1 increasing, 2 decreasing
  for(let i = 1; i < reports.length; i++){
    let difference = reports[i] - reports[i-1];
    if(Math.abs(difference) > 3 || Math.abs(difference) < 1){
      return false;
    }

    if(difference > 0) {
      if(type === 0){
        type = 1;
      } 
      if(type === 2){
        return false;
      }
    } else if (difference < 0 ){
      if(type === 0){
        type = 2;
      } 
      if(type === 1){
        return false;
      }
    }
  }
  return true;
}

function test(reports: number[]){
  if(isSafe(reports)) return true;
  
  for(let i = 0; i < reports.length; i++) {
		const trimmedReport = reports.slice();
		trimmedReport.splice(i, 1);
    if(isSafe(trimmedReport)) return true;
	}
  return false;
}

function main() {
  let safe = 0;

  lines.forEach((line) => {
    const reports: number[] = line.split(/\s+/).map(Number);
    if(test(reports)) safe++;
  });

  console.log(safe);
}

main()