
def get_day(day, is_leap):
    
    daysList = [31,28,31,30,31,30,31,31,30,31,30,31]

    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    if is_leap == True:
        daysList[1] = 29
        
    total = 0;
    i = 0;
    
    while total < day and i < 12:
        total += daysList[i]
        i += 1
    total -= daysList[i-1]
    date = day - total
        
    return str(months[i-1]) + ", " + str(date)


print(get_day(15, False) ) #"January, 15")
print(get_day(41, False) ) #"February, 10")
print(get_day(59, False) ) #"February, 28")
print(get_day(60, False) ) #"March, 1")
print(get_day(60, True)  ) #"February, 29")
print(get_day(365, False)) # "December, 31")
print(get_day(366, True) ) #"December, 31")
