my_number = 7703745

def seven_count(number):
    number_of_sevens = 0
    n = abs(number)
    while n > 0:
        remainder = n % 10
        if remainder == 7:
            number_of_sevens += 1
        n = (n - remainder)/10
    return number_of_sevens

print(seven_count(my_number))