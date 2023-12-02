import re

input = open("2023/Day 2/2-1.txt")

list = []

for line in input.readlines():
    possible = True
    red = 12
    green = 13
    blue = 14

    line = line.split(":")
    for hand in line[1].split(";"):

        for value in hand.split(","):
            num = re.findall(r'\d+', value) 
            if "green" in value and int(num[0]) > green:
                possible = False
            elif "red" in value and int(num[0]) > red:
                possible = False
            elif "blue" in value and int(num[0]) > blue:
                possible = False

    if possible:
        gameId = re.findall(r'\d+', line[0])
        list.append(int(gameId[0]))

print(sum(list))