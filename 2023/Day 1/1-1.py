input = open("Day 1/1-1.txt")

list = []

for line in input.readlines():
    first = False
    last = False

    for char in line:
        if char.isnumeric():
            if not first:
                first = char
            last = char

    list.append(int(first + last))

print(list)
print(sum(list))