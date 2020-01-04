[randomify - v1.1.0](README.md) › [Globals](globals.md)

# randomify - v1.1.0

# Randomify

![Randomify](https://i.imgur.com/SwD2UAY.png)

> Easy-to-use random string generator.
![Version](https://img.shields.io/npm/v/randomify?color=%23bb0) ![CodeFactor](https://www.codefactor.io/repository/github/TNThacker2015/randomify/badge?style=flat) ![Issues](https://img.shields.io/github/issues/TNThacker2015/randomify)
## Features

-   Simple template tag for generating random strings.
-   Utility functions for generating more random strings.
-   **No** dependencies! Very lightweight.

## Installing

-   NPM: `npm install randomify`
-   Yarn: `yarn add randomify`

## Usage

```js
const { random } = require("randomify");
console.log(random`Hello ${["sir", "ma'am"]}, I would like a ${["cheeseburger", "drink", "pizza", "job"]}.`)
```

## Functions

### random
``random`Picks random elements from arrays. ${["So cool!", "Very cool.]}` ``

> Template literal.
> The placeholders can be either arrays, or any. If it's an array, it will pick a random element from it. If not, it will just insert the placeholder.

### pick
`pick(["yes", "no", 1, 2])`

> Picks a random element from an array.

### randint
`randint(1, 5, false) // randint(min, max, decimals)`

> Returns a random number between the provided minimum and maximum values. If decimals is true, the output will be a random floating point number between min and max instead.

### range
`y`
