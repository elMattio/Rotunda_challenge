# Description

Each folder contains the solution to the excercise described in its name and some tests.
You can execute de code and its tests by running "node url-parser/index.js" and "node zoo-excercise/index.js"

# Excercises

## Zoo Exercise

We are building a zoo inside a computer. Each animal species in our zoo has lots
of different, particular, behaviors, but all animals talk to each other in a similar
way. Specifically, they all implement a speak method, the output of which is the
arbitrary input string interspersed with an "animal sound" that is particular to that
type of animal. For example, the lion's speak function behaves like so:
> lion.speak( "I'm a lion" );
< "I'm roar a roar lion roar"
The tiger's speak function behaves similarly but with a different sound:
> tiger.speak( "Lions suck" );
< "Lions grrr suck grrr"
Please write logic and classes to support our zoo in JavaScript with attention to
code structure and readability.

## Url parser

We need some logic that extracts the variable parts of a url into a hash. The keys
of the extract hash will be the "names" of the variable parts of a url, and the
values of the hash will be the values. We will be supplied with:
1. A url format string, which describes the format of a url. A url format string
can contain constant parts and variable parts, in any order, where "parts"
of a url are separated with "/". All variable parts begin with a colon. Here is
an example of such a url format string:
'/:version/api/:collection/:id'
2. A particular url instance that is guaranteed to have the format given by
the url format string. It may also contain url parameters. For example,
given the example url format string above, the url instance might be:
'/6/api/listings/3?sort=desc&limit=10'
Given this example url format string and url instance, the hash we want that
maps all the variable parts of the url instance to their values would look like this:
{
version: 6,
collection: 'listings',
id: 3,
sort: 'desc',
limit: 10
}
Please implement a solution to this problem in JavaScript with attention to code
structure and readability. Feel free to use low-level libraries like Lodash.