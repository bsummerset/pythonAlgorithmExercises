# my_array = [0,5,4,3,8,4,0,0,9]
# my_new_array = []
# i = 0
# val = True
# while i < len(my_array):
#     if my_array[i] !=0:
#         my_new_array.append(my_array[i])
#         i += 1
# while val:
#     if len(my_new_array) < len(my_array):
#         my_new_array.append(0)
#     else:
#         val = False
# print(my_new_array)

array1 =[0,9,4,2,5,8,0,9]
array2 = [12,4,5,0,9]
def solution(nums):
    for i in nums:
        if i == 0:
            nums.remove(i)
            nums.append(0)
        return nums
print(nums)