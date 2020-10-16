# r = 0
# for n in range(1, 1001):
#     a = 3
#     b = 5
#     if n % a == 0 or n % b == 0:
#         r += n
# print(r)

index = 0
count = 0
for i in range(1, 1001):
    if index % 3 == 0 or index % 5 == 0:
        count += index
    index += 1
print(count)