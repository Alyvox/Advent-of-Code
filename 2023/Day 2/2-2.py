import re

input = open("2023/Day 2/2-2.txt")

list = []

for line in input.readlines():
    minGreen = 1
    minRed = 1
    minBlue = 1

    line = line.split(":")
    for hand in line[1].split(";"):

        for value in hand.split(","):
            num = re.findall(r'\d+', value) 

            if "green" in value:
                if int(num[0]) > minGreen:
                    minGreen = int(num[0])
            elif "red" in value:
                if int(num[0]) > minRed:
                    minRed = int(num[0])
            if "blue" in value:
                if int(num[0]) > minBlue:
                    minBlue = int(num[0])

    print(minGreen * minRed * minBlue) 
    list.append(minGreen * minRed * minBlue)
print(sum(list))  
