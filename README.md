Rally-API
=========

Example
-------

```
const Rally = require('rally-api')

const APIKEY = "<somekey>"

Rally.setApiKey(APIKEY)

const options={
    workspace: "/workspace/<refid>",
    project: "/project/<refid>",
    query: "(FormattedID = TC23432)",
    fetch: "true",
    pagesize: "10"
}

let data = Rally.query('TestCase', options)

data.then(d => {
    console.log(d.QueryResult)
```