#Returns the sum of num1 and num2
def add(num1, num2):
    return num1 + num2

def sub(num1, num2):
    return num1 - num2

def mul(num1, num2):
    return num1 * num2

def div(num1, num2):
    return num1 / num2

def main():
    operation = input("What do you want to do (+,-,*,/): ")
    if(operation != "+" and operation != "-" and operation != "*" and operation != "/"):
        #invalid operation
        print("You must enter a valid operation")
    else:
        #Takes the numbers you have written
        var1 = int(input("Enter num1: "))
        var2 = int(input("Enter num2: "))
        #does calculations
        if(operation == "+"):
            print(add(var1, var2))
        elif(operation == "-"):
            print(sub(var1, var2))
        elif(operation == "*"):
            print(mul(var1, var2))
        else:
            print(div(var1, var2))

main()
#runs "main" again
main()
