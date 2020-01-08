# reading-time-estimator-promisse
Package to estimate the reading time from a text. Promisse based. Medium's like.

## Usage

```
const ReadingTime = require("reading-time-estimator-promisse")

ReadingTime(`Ours was the first revolution in the history of mankind that truly reversed the course 
of government, and with three little words: “We the people.” “We the people” tell the government 
what to do, it doesn’t tell us. “We the people” are the driver, the government is the car. 
And we decide where it should go, and by what route, and how fast. Almost all the world’s 
constitutions are documents in which governments tell the people what their privileges are. 
Our Constitution is a document in which “We the people” tell the government what it is allowed to do.
 “We the people” are fee. This belief has been the underlying basis for everything 
 I’ve tried to do these past eight years.`)
    .then(console.log) // { inMinutes: 0, inSeconds: 46, wordsCounted: 122 }
    .catch(console.log)
```

## Install

```
npm install reading-time-estimator-promisse
```
