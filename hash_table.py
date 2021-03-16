
class HashTable:

    def __init__(self,size):
        self.size = size
        self.hash_table = self.create_buckets()

    def create_buckets(self): 
        return [[] for _ in range(self.size)]

    def get_hash(self, key):
        h = 0
        for char in key:
            h += ord(char)
        print(h%self.size)
        return h

    # Insert and update items
    def set_val(self, key, value):
        hashed_key = self.get_hash(key)%self.size
        bucket = self.hash_table[hashed_key]
        found_key = False

        for index, record in enumerate(bucket):
            record_key, record_value = record
            if record_key == key:
                found_key = True
                break
        # if key exists, update it with new value
        if found_key:
            bucket[index] = (key, value)
        #else, add new entry
        else:
            bucket.append((key, value))
        
    
    # Search for and return values
    def get_val(self, key):
        hashed_key = self.get_hash(key)%self.size
        bucket = self.hash_table[hashed_key]
        found_key = False

        for index, record in enumerate(bucket):
            record_key, record_value = record
            if record_key == key:
                found_key = True
                break

        if found_key:
            return record_value
        else: 
            return "No record found with that email address"

    def delete_val(self, key):
        hashed_key = self.get_hash(key)%self.size
        bucket = self.hash_table[hashed_key]
        found_key = False

        for index, record in enumerate(bucket):
            record_key, record_value = record
            if record_key == key:
                found_key = True
                break

        if found_key:
            bucket.pop(index)
        else: 
            return "No record found with that email address"

    def __str__(self):
        return "".join(str(item) for item in self.hash_table)



hash_table = HashTable(16)
hash_table.set_val('gabe@gmail.com', 'some value 666')
hash_table.set_val('bob@gmail.com', 'some value 2')
hash_table.set_val('sam@gmail.com', 'some value 44')
hash_table.set_val('alli@gmail.com', 'some value 77')

print(hash_table)
print(hash_table.get_val("sam@gmail.com"))
hash_table.delete_val("sam@gmail.com")
print(hash_table.get_val("sam@gmail.com"))
print(hash_table)
