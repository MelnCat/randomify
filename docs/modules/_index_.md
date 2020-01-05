[randomify - v1.1.2](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# External module: "index"

## Index

### Functions

* [join](_index_.md#const-join)
* [pick](_index_.md#const-pick)
* [randint](_index_.md#const-randint)
* [random](_index_.md#const-random)
* [range](_index_.md#const-range)

## Functions

### `Const` join

▸ **join**<**T**>(`array`: T[], `separator`: string | function): *undefined | string*

Defined in index.ts:6

Join an array with a function or string.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`array` | T[] | - | The array to be joined. |
`separator` | string &#124; function | "," | The separator to be put inbetween the elements in the array. Can be a string or a function.  |

**Returns:** *undefined | string*

___

### `Const` pick

▸ **pick**<**T**>(`array`: T[]): *T*

Defined in index.ts:17

```ts
console.log(pick(["Console log!", "Console message!"]))
```
Pick a random element from an array.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | T[] | The array that the element is going to be picked from.  |

**Returns:** *T*

___

### `Const` randint

▸ **randint**(`min`: number, `max`: number, `decimals`: boolean): *number*

Defined in index.ts:37

```ts
randint(1, 5) // 1, 2, 3, 4
randint(1, 5, true) // Any float between 1 and 5.
```
Returns a random integer from min to max, but never reaching max.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`min` | number | - | The minimum value. |
`max` | number | - | The maximum value. |
`decimals` | boolean | false | Whether to have decimals in the output.  |

**Returns:** *number*

___

### `Const` random

▸ **random**(`strings`: TemplateStringsArray, ...`added`: any[]): *undefined | string*

Defined in index.ts:26

```ts
random`It is currently ${["daytime", "nighttime", "afternoon"]}. It's time to ${["work", "exercise", "eat"]}!`
```
A template literal tag that chooses random elements from its placeholders.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`strings` | TemplateStringsArray | The strings from the template literal. |
`...added` | any[] | The placeholders. They can be either "any" or an array. If it's an array, it will pick a random element from it.  |

**Returns:** *undefined | string*

___

### `Const` range

▸ **range**(`min`: number, `max`: number): *any[]*

Defined in index.ts:46

```ts
range(1, 7) // [1, 2, 3, 4, 5, 6]
```
Gets a list with values ranging from the min value to max value, excluding the max value.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`min` | number | The minimum value. |
`max` | number | The maximum value.  |

**Returns:** *any[]*
