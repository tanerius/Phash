# Phash
Javascript HashTag Manipulator

Installation

Include the javascript file in your html.


API:

Phash.setHash(key,value)
Sets the value of a given key. If it doesnt exist it is created. Setting the value to empty string disables the key.

Phash.getHash(key)
REturns the current value of a given key. If the key doesn't exist returns false

Phash.getArrayOfHashes()
Returns a hash map of all key->value pairs 

Phash.clearHashes()
Clears all hash entries in the URL

Phash.getHashCount()
Returns a non negative number indicating the number of keys within the hash of the current URL
