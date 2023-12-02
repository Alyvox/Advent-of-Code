input = open("Day 1/1-2.txt")

list = []

lookup = {
    "one": "one1one",
    "two": "two2two",
    "three": "three3three",
    "four": "four4four",
    "five": "five5five",
    "six": "six6six",
    "seven": "seven7seven",
    "eight": "eight8eight",
    "nine": "nine9nine"

}

for line in input.readlines():
    first = False
    last = False

    for key, value in lookup.items():
        line = line.replace(key, value)

    print(line)
    for char in line:
        if char.isnumeric():
            if not first:
                first = char
            last = char

    list.append(int(first + last))
        

print(list)
print(sum(list))