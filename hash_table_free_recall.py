class HashTable:

    def __init__(self, size):
        self.size = size
        self.hashTable = [[] for _ in range(size)]

    def __str__(self):
        return self.hashTable + ""
	
    def setVal(self, key, val):
        hashKey = hash(key)%self.size
        row = self.hashTable[hashKey]
        found = False

        for index, item in enumerate(row):
            itemKey, itemVal = item
            if itemKey == key:
                found = True
                break

        if found:
            row[index] = (key, val)
        else:
            row.append((key,val))

    def getVal(self, key):
        hashKey = hash(key)%self.size
        row = self.hashTable[hashKey]
        found =  False

        for index, item in enumerate(row):
            itemKey, itemVal = item
            if itemKey == key:
                found = True
            break

        if found: 
            rowKey, rowVal = row[index]  
            # return itemVal
            return 'Record found. Value for {key} is {rowVal}'
        else:
            return 'Record not found'

    def deleteVal(self, key):
        hashKey = hash(key)%self.size
        row = self.hashTable[hashKey]
        found = False

        for index, item in enumerate(row):
            itemKey, itemVal = item
            if itemKey == key:
                found = True
                break

        if found:
            row.pop(index)
        else:
            return "Record not found nor deleted"


hash_table = HashTable(20)
hash_table.setVal("blah", "a value")
print(hash_table)


	


