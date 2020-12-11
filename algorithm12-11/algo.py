# // 1. From an unsorted array of numbers 1 to 100 excluding one number, how
# // would you find the missing number?
# // 2. From an unsorted array, check whether there are any two numbers that
# // will sum up to any given number (example: ([1,5,7,8,4,3,9] ,6) returns
# // true & ([1,5,7,8,4,3,9] , 3) returns false)
# // 3. Return the lowest index at which a value should be inserted into an array
# // once it has been sorted. (example: ([1,2,3,5], 1.5) should return 1
# // because it's greater than 1 (index 0) and less than 2 (index 1).
# // 4. Write an algorithm that returns the reverse of a given word. For example, boat returns taob.

# //***************************************EXERCISES************************************************* */

# // 1.
array = [2, 99,4, 3, 62, 6,7, 90,9, 10, 11, 12, 20, 14, 15, 16,17, 18, 19, 13, 21, 22, 29, 24, 25,26, 27, 28, 23, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 48, 41, 43, 44, 45, 46, 47, 42, 49, 50, 51, 52, 53, 54, 59, 56, 57, 58, 55, 60, 61, 5, 63, 69, 65, 70, 67, 68, 64, 66, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 8, 91, 94, 93, 92, 95, 96, 100, 98, 1, 97]

array.sort()
# print (array)
n = 1

for el in array:
    if n == el:
        n += 1
    else:
        print(n)
        break
