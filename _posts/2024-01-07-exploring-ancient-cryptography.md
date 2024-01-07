---
layout: post
title: "Exploring the Ancient Art of Cryptography: The Tale of Mlecchita Vikalpa"
date: 2024-01-07
image: /Images/Mlecchitavikalpa.jpg
---

## Introduction
Mlecchita Vikalpa, an ancient Indian art of secret communication detailed in the Kamasutra, represents a profound chapter in the history of cryptography. This ancient technique, used extensively for covert communication, showcases early sophistication in cryptographic practices.

<p align="center">
  <img src="/blogs/Images/Mlecchitavikalpa.jpg" width="500">
</p>

## Historical Context
The Kamasutra, believed to have been composed between the 1st and 6th centuries AD, references Mlecchita Vikalpa, affirming the prevalence of cryptographic methods in ancient India. The exact date of the Kamasutra's composition is uncertain, but it is supposed that Vatsyayana, the author, lived during this period. The Jayamangala commentary, which dates between the 10th and 13th centuries CE, elaborates on these methods.

## Principles and Techniques in Kamasutra
Later commentators of the Kamasutra, such as Yasodhara in his Jayamangala commentary, describe several cryptographic methods including Kautilya and Muladeviya. These ciphers are primarily substitution ciphers:
- **Kautiliyam**: Involves letter substitutions based on phonetic relations.
- **Muladeviya**: A simplified version of Kautiliyam.

<figure style="text-align:center;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/3rd_or_4th_century_CE_Kamasutra%2C_Vatsyayana%2C_13th-century_Jayamangala_commentary_of_Yashodhara%2C_Bendall_purchase_1885CE_in_Nepal%2C_Sanskrit%2C_Devanagari.jpg" alt="Kamasutra Manuscript" width="500">
  <figcaption>
    Kamasutra Manuscript, 3rd or 4th century CE, Source : Wikipedia
  </figcaption>
</figure>

Other methods for secret communication mentioned include Gudhayojya, Gudhapada, and Gudhavarna. Modern writers on cryptography often refer to these ciphers as Kamasutra cipher or Vatsyayana cipher.

## The Mathematical Angle
The cipher techniques often relied on substitution and transposition methods. For example, in the Muladeviya cipher, a reciprocal set specified in a table was used for encoding messages. This reflects an early understanding of principles akin to modern modular arithmetic used in substitution ciphers.

The cryptographic methods described in the Kautiliya and Muladeviya ciphers are fascinating examples of ancient secret communication techniques. Let's break down how these ciphers work mathematically and explore the Mahabharata reference.

### Kautiliya Cipher

The Kautiliya cipher is a substitution cipher named after Kautilya, the author of the Arthashastra. It works by interchanging vowels, anusvara, spirants, consonants, and conjunct consonants according to a specified table.

<figure style="text-align:center;">
  <img src="https://traefik.io/static/7498f70ad27e17e63eb468c2321baa5c/Skytale.png" alt="Skytale Cipher" width="400">
  <figcaption>
    Kautiliya Cipher
  </figcaption>
</figure>


#### How it works:
- **Substitution Table**: Each character is replaced by another character as per the table. Characters not in the table remain unchanged.
- **Encryption**: To encrypt a message, substitute each letter in the message with its corresponding letter from the table.
- **Decryption**: To decrypt, reverse the process using the same table.

#### Substitution Table:
```markdown
| Plain | Cipher |
|-------|--------|
| a     | kh     |
| ā     | g      |
| i     | gh     |
| ...   | ...    |
| r     | l      |
| l     | y      |
```

*Note: This table is a simplified example. The full table would include all the relevant character substitutions.*

#### Example:
Let's encrypt the word "data" using the Kautiliya cipher:

```markdown
| Plain | d | a | t | a |
|-------|---|---|---|---|
| Cipher| d |kh |gh |kh |
```

So, "data" becomes "dkhghkh".


### Muladeviya Cipher

The Muladeviya cipher, mentioned in Yasodhara's commentary on Kamasutra, also uses a substitution method but has a reciprocal cipher alphabet.

<figure style="text-align:center;">
  <img src="/blogs/Images/hj.webp" width="500">
    <figcaption>
    Meluhan Script
  </figcaption>
</figure>

#### How it works:
- **Reciprocal Substitution Table**: Each character in the alphabet has a corresponding character for substitution.
- **Encryption**: Replace each character in the original message with its counterpart in the cipher alphabet.
- **Decryption**: Use the same table to replace each character in the encrypted message with its original character.

#### Example:
#### Reciprocal Substitution Table:
```markdown
| Plain | Cipher |
|-------|--------|
| a     | kh     |
| k     | g      |
| g     | ṅ      |
| ...   | ...    |
| n     | ṣ      |
| m     | ś      |
```

*Note: This table is a simplified example. The full table would include all the relevant character substitutions.*

#### Example:
Encrypting the word "king" using the Muladeviya cipher:

```markdown
| Plain | k | i | n | g |
|-------|---|---|---|---|
| Cipher| g |ṅ  |ṣ  | ṅ |
```

So, "king" becomes "gṅṣṅ".

### Mahabharata Reference

In the Mahabharata, there's an instance where Vidura uses secret communication to warn Yudhishthira about Duryodhana's plans to burn pandavas in Lakshagraha. Vidura cleverly embeds his warning in a message that seems ordinary to everyone else but is understood by Yudhishthira.
<figure style="text-align:center;">
  <img src="/blogs/Images/laksh.png" alt="Lakshagraha Incident in Mahabharat" width="200">
  <figcaption>
    The Lakshagraha Incident from the Mahabharata
  </figcaption>
</figure>


#### How it might work:
- Vidura could have used a known substitution cipher like Muladeviya to encode his message.
- Since Yudhishthira knew the cipher, he could decode the message and understand the warning, while others perceived it as a normal conversation.

This method highlights the clever use of cryptography in ancient texts, where messages could be concealed in plain sight, understandable only to those who knew the key to the cipher.

#### Example Application

In the Mahabharata, Vidura may have used a known cipher like Muladeviya to secretly communicate with Yudhishthira. For example, if Vidura wanted to encrypt the word "danger" to subtly warn Yudhishthira, it could look like this using Muladeviya:

```markdown
| Plain | d | a | n | g | e | r |
|-------|---|---|---|---|---|---|
| Cipher| d |kh |ṣ  | ṅ | e | r |
```

The word "danger" is transformed into "dkhṣṅer", which would appear as a regular conversation to others but would convey the hidden warning to Yudhishthira.

### In Summary

These ancient ciphers represent the early use of mathematical principles in cryptography. The substitution method, where each character is systematically replaced by another based on a defined rule or table, is a fundamental concept in the field. The use of these techniques in historical contexts like the Mahabharata showcases their practical applications in ancient times.

<figure style="text-align:center;">
  <img src="/blogs/Images/ss.png" alt="Guptadhans Riddle" width="500">
  <figcaption>
    Rabindranaths Guptadhans Riddle
  </figcaption>
</figure>

Even in early litrature works like that of Rabindranath Tagore's "Guptadhan," the story uses cryptography in the form of a secret message that leads to a hidden treasure. This is exemplified by a character deciphering clues to locate this treasure, symbolizing an early representation of cryptographic techniques in literature. The use of cryptography adds a layer of intrigue and illustrates the profound impact of cryptic communication in storytelling [Guptadhan](https://www.englishliterature.info/2021/04/guptadhan-story-rabindranath-tagore.html).


## Timeline of Different Ancient Ciphers
"Mlecchita Vikalpa" and its cryptographic method mentioned in classical Indian texts. It's believed to date back to the 1st to 6th century CE. This method likely involved techniques of word and letter manipulation to encrypt messages, making them incomprehensible to unintended recipients.

The Caesar Cipher, attributed to Julius Caesar, is a substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet. This cipher was used during the 1st century BC.

<figure style="text-align:center;">
  <img src="https://gkaccess.com/wp-content/uploads/2020/01/Caesar_Cipher_GateKeeper_security_compliance_proximity_authentication_2fa_mfa-768x803.jpg" alt="Caesar Cipher" width="200">
  <figcaption>
    Ceaser Cipher Image source: <a href="https://gkaccess.com/wp-content/uploads/2020/01/Caesar_Cipher_GateKeeper_security_compliance_proximity_authentication_2fa_mfa-768x803.jpg">GateKeeper</a>
  </figcaption>
</figure>



The fact that "Mlecchita Vikalpa" predates the Caesar Cipher by several centuries suggests that ancient Indian scholars were pioneers in the field of cryptography. Their understanding of linguistic structures and symbolic communication could have laid early foundations for cryptographic methods.

However, due to limited historical records, the direct influence of "Mlecchita Vikalpa" on later Western cryptographic techniques like the Caesar Cipher is not clearly documented. Nonetheless, it stands as an important testament to the sophistication of ancient Indian science and its potential contributions to the field of cryptography.

While the Caesar Cipher is often cited as one of the earliest known systems of cryptography in the Western world, "Mlecchita Vikalpa" from ancient India predates it and represents an equally significant achievement in the early history of cryptography. This highlights the global and diverse contributions to the development of cryptographic techniques throughout history.

### Early Cryptography Timeline

| Civilization  | Time Period       | Cryptographic Method                       | Purpose/Notes                                 |
|---------------|-------------------|--------------------------------------------|-----------------------------------------------|
| Egypt         | Circa 1900 BC     | Non-standard hieroglyphs                    | Used for mystery, intrigue, or amusement      |
| Mesopotamia   | Circa 1500 BC     | Encryption of clay tablets                  | To protect commercial secrets (pottery glaze recipe) |
| Hebrew        | 600-500 BC        | Monoalphabetic substitution ciphers (Atbash)| General use                                   |
| India         | 400 BC - 200 AD   | Mlecchita Vikalpa                           | Communication between lovers; likely a simple substitution cipher |
| Egypt (Greek) | 100s BCE to 400s CE | Cypher script in Magical Papyri             | Each volume contains a number of spells and rituals.|
| Greece        | 7th century BCE          | Scytale transposition cipher                | Used by Spartan military; purpose unclear     |
| Greece        | 2nd Century BCE          | Steganography and Polybius Square            | Concealing messages; Polybius Square developed by Polybius |
| Rome          | 100 BC           | Caesar cipher and variations                | General use                                   |

### Rational Interpretation of the Data
1. **Cultural Spread and Diversity**: The early use of cryptography can be traced back to various ancient civilizations, each developing unique methods for secret communication or data protection.

2. **Purpose and Evolution**: Initially, cryptography was used for purposes like amusement or mystery (as in Egypt), or to protect trade secrets (Mesopotamia). Over time, its application evolved to include military and personal communication.

3. **Method Complexity**: The methods range from simple non-standard symbol use (Egypt) to more complex systems like the Caesar cipher (Rome). This progression indicates a growing sophistication in cryptographic techniques.

4. **Possible Influences**: While it's difficult to establish direct influences between these cultures in the development of cryptography, the parallel evolution suggests a universal human interest in secure communication.

5. **Steganography vs. Cryptography**: The Greek use of steganography (concealing the existence of a message) differs from cryptography (concealing the meaning of a message), indicating an early understanding of different aspects of secure communication.

6. **Military and Personal Use**: The use of cryptography evolved from commercial and amusement purposes to more strategic applications in military and intimate communication (e.g., Spartan military, communication between lovers in India).

This table and interpretation underscore the global and ancient roots of cryptography, highlighting its importance across different cultures and periods.


## Breaking Mlecchita Vikalpa
To break both the Kautiliya and Muladeviya ciphers, which are substitution ciphers, one would typically use frequency analysis or a known-plaintext attack if some part of the original text is known. However, since these are ancient ciphers and their full substitution tables might not be fully known or standardized, we will assume a simplified version of these tables for demonstration.

Let's write Python code to decrypt messages encrypted with these ciphers. We'll first define the simplified substitution tables and then write functions for decryption.

### Kautiliya Cipher

For the Kautiliya cipher, we'll need to reverse the substitution process. Let's assume a simplified substitution table and write a decryption function.

### Muladeviya Cipher

Similarly, for the Muladeviya cipher, since it's a reciprocal cipher, the decryption process is the same as encryption. We'll use the same table to decrypt the message.

Let's implement these in Python.

```python

kautiliya_table = {'a': 'kh', 'ā': 'g', 'i': 'gh', 'r': 'l', 'l': 'y'}
muladeviya_table = {'a': 'kh', 'k': 'g', 'g': 'ṅ', 'n': 'ṣ', 'm': 'ś'}

def decrypt_kautiliya(cipher_text, table):

    reversed_table = {v: k for k, v in table.items()}

    plain_text = ""
    i = 0
    while i < len(cipher_text):
        if cipher_text[i:i+2] in reversed_table:
            plain_text += reversed_table[cipher_text[i:i+2]]
            i += 2
        else:
            plain_text += cipher_text[i]
            i += 1
    return plain_text

def decrypt_muladeviya(cipher_text, table):
    plain_text = ""
    for char in cipher_text:
        plain_text += table.get(char, char) 
    return plain_text

cipher_text_kautiliya = "dkhghkh"
cipher_text_muladeviya = "gṅṣṅ"

decrypted_kautiliya = decrypt_kautiliya(cipher_text_kautiliya, kautiliya_table)
decrypted_muladeviya = decrypt_muladeviya(cipher_text_muladeviya, muladeviya_table)

decrypted_kautiliya, decrypted_muladeviya
```

This code will decrypt the provided examples using the simplified substitution tables. In a real-world scenario, the full substitution table would be needed for accurate decryption. The approach here demonstrates the basic principle of reversing the substitution cipher.

## Conclusion
As we conclude our exploration of "Mlecchita Vikalpa" and its counterparts in the ancient world of cryptography, we are left with a profound appreciation for the ingenuity and sophistication of early cryptographers. These methods, emerging from the intellectual epicenters of ancient civilizations, not only served practical purposes in their time but also laid the groundwork for the complex cryptographic systems we rely on today.

"Mlecchita Vikalpa", a gem from the annals of the Kamasutra, stands as a testament to the advanced understanding of secret communication in ancient India. Its use, intricately detailed in historical texts, reflects a nuanced approach to language and symbol manipulation. The Kautiliya and Muladeviya ciphers, with their substitution techniques, illustrate the mathematical foresight of their creators. These methods, although ancient, resonate with the principles of modern-day encryption.

The journey through these cryptographic methods, from the Mahabharata's subtle messages to the complex tables of the Kautiliya and Muladeviya ciphers, highlights the timeless relevance of cryptography. The ancient craft of encoding messages has evolved over millennia, yet the core objective remains unchanged - to protect information from unintended eyes.

Breaking down these ciphers, with the help of modern technology like Python, not only connects us to our historical roots but also underscores the evolutionary trajectory of cryptographic techniques. While today's encryption algorithms are vastly more complex, the fundamental principles of substitution and transposition seen in these ancient methods still echo in modern cryptography.

In summary, "Mlecchita Vikalpa" and its contemporaries are not mere relics of the past; they are the cornerstones of cryptographic history. They remind us of humanity's enduring quest for privacy and secure communication, a quest that has transcended ages and continues to be a pivotal aspect of our digital era. As we delve deeper into the realms of cyber security and digital encryption, acknowledging and understanding our cryptographic heritage becomes not only a nod to history but a crucial step in appreciating the depth and breadth of this ever-evolving field.

## References
- ANIL BARAN GANGULY(1979). Fine Arts In Ancient India. Retrieved from Google Books.
- [Wikipedia's page on Mlecchita Vikalpa](https://en.wikipedia.org/wiki/Mlecchita_vikalpa)
- [Historical Substitution Ciphers](https://www.researchgate.net/publication/353768193_HISTORICAL_SUBSTITUTION_CIPHERS_THE_PIGPEN_CIPHER_THE_MLECCHITA_VIKALPA_CIPHER_AND_THE_MULABHADRA_CIPHER)

- Kalyanaraman, S. (2017). *Explaining the rationale of Mlecchita Vikalpa as Meluhha cipher*. Retrieved from Academia.edu: [Explaining the rationale of Mlecchita Vikalpa as Meluhha cipher](https://www.academia.edu/32333078/Explaining_the_rationale_of_Mlecchita_vikalpa_as_Meluhha_cipher)

- Kapoor, S. K. (2005). *Learn Vedic Mathematics*. Delhi: Pitambar Publishing. Retrieved from Google Books: [Learn Vedic Mathematics](https://books.google.co.in/books?id=dw7NhcImr1oC&q=muladeviya&pg=PA169&redir_esc=y#v=onepage&q=muladeviya&f=false)

-  [English Literature Info about Guptadhan by Rabindranath Tagore](https://www.englishliterature.info/2021/04/guptadhan-story-rabindranath-tagore.html)

-