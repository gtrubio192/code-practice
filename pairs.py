# cons(a, b) constructs a pair, 
# and car(pair) and cdr(pair) returns the first and last element of that pair. 
# For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
# Given cons, write car and cdr functions

# Possibly a "decorador function" ? 
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

# pair param is a function
def car(pair):
  # first, last = pair
  print(pair())
  # return first

def cdr(pair):
  first, last = pair
  return last

print("CONS: should return ?")
print(cons(3, 4))

# print("CARS: should return 3")
# print(car(cons(3, 4)))

# print("CDR: should return 4")
# print(cdr(cons(3, 4)))