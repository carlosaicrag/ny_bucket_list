# Cryptography 
* Crytography is a way to use algorithms and secret keys to keep information secure.  Today cryptography is synonymous with encrypotion. 

# Encryption
* Process of translating something that's readable into something that looks like nonsense and being able to translate it from a non-readable state back into something that's readable

## Types of encryption 
  * Symmetric 
    * Using one value to determine how to encrypt data 
    * there is one thing that is turning encrypting or decrypting something
  * Asymmetric 
    * This uses two things to encrypt a message.  They are called the public and private keys
    * The public key is shared with anyone wanting to encrypt a message for the recipient.  The private key is used to decrypt the message. 
    * Encrypt with public key, decrypt with private key. 

## When is it appropriate to use encryption?
  * it's appropriate to secure over the wire communication between the client and server. You don't need to translate a password back into human readable form and that's why it's better to use something else for passwords (hashing)

# Hashing
  * hashing is the process of converting a emssage of any length into a short, fixed-length string. Hashed values cannot be translated back to their original input values. 
  * Hashing is deterministic, meanthing that every time you hash the same input, you will receive the same output. 

  ## What is a "salt"
    * salts are used to store unique password digests for every person in your application.  Although people will have the same password, they will not have the same salt and therefore create unique password digests in our backend. If we didn't have the salt there can be a situation where a user can have an exposed password and then a hacker could find all the users with the same password digest and hack into all acounts with the exposed password. 
