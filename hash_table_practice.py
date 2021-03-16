class HashTable:

  def __init__(self, size):
    self.size = size
    self.hashTable = self.createTable()

  def createTable(self):
    return [[] for _ in range(self.size)]

  def set_val(self, key, value):
    # find_hash is a function of repeated code in all major hash tasks
    results = self.find_hash(key, value)
    foundKey = results['foundKey']
    bucket = results['bucket']

    if foundKey:
      index = results['index']
      bucket[index] = (key, value)
    else:
      bucket.append((key, value))

  def get_val(self, key):
    results = self.find_hash(key, "")
    foundKey = results['foundKey']
    bucket = results['bucket']

    if foundKey:
      index = results['index']
      return bucket[index]
    else: 
      return "Key not found"

  def delete_val(self, key):
    results = self.find_hash(key, "")
    foundKey = results['foundKey']
    bucket = results['bucket']

    if foundKey:
      index = results['index']
      return bucket.pop(index)
    else: 
      return "Key not found"

  def __str__(self):
    return "".join(str(item) for item in self.hashTable)

  # find_hash is a function of repeated code in all major hash tasks
  def find_hash(self, key, value):
    hashVal = hash(key)%self.size
    bucket = self.hashTable[hashVal]
    foundKey = False

    for index, record in enumerate(bucket):
      recordKey, recordValue = record
      if recordKey == key:
        foundKey = True
        break

    if foundKey:
      return {'foundKey': foundKey, 'bucket': bucket, 'index': index}
    else:
      return {'foundKey': foundKey, 'bucket': bucket}

hashTable = HashTable(6)
hashTable.set_val("blah@email.com","some info 1")
hashTable.set_val("hey@email.com","some infon 34")
hashTable.set_val("meee@email.com","some info 34")
hashTable.set_val("meee@email.com","some info 999")
hashTable.set_val("cactus@email.com","some info 666")
print(hashTable)

print(hashTable.get_val("hey@email.com"))
print(hashTable.delete_val("hey@email.com"))
print(hashTable)
