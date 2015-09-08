# Cryptosquare

##### A classic method for composing secret messages. (9/8/15)

#### By Logan Wu

## Description

The spaces and punctuation are removed from the English text and the characters are written into a square (or rectangle) and the entire message is downcased.

## Specs
* Spaces are removed.
* Punctuations are removed.
* Entire string is down-cased.
* Outputs the characters into a square or rectangle.
* If the message is a length that creates a perfect square (e.g. 4, 9, 16, 25, 36, etc), use that number of columns.
* If the message doesn't fit neatly into a square, choose the number of columns that corresponds to the smallest square that is larger than the number of characters in the message.
* The coded message is obtained by reading down the columns going left to right.
* Output the encoded text in groups of five letters.

## Setup

* Clone the project using the link provided on Github.
* Run composer install in Terminal from the project root folder.

## Technologies Used

HTML, CSS, JavaScript, jQuery, Mocha and Chai for testing

### Legal

Copyright (c) 2015 **Logan Wu**

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
