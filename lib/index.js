
let apikey

const BASE_URI="https://rally1.rallydev.com/slm/webservice/v2.0/"
const Rally = {

    setApiKey: (key) => {
        apikey = key
    },

    /**
     * method
     * is the parent type to query children for
     *
     * options
     *
     * workspace, project, query, pagesize, fetch
     * others can be found on https://rally1.rallydev.com/slm/doc/webservice/
     */

    query: (method, options) => {
        const params = new URLSearchParams(options)
        return fetch(BASE_URI + method + "?" + params, {
            headers: {
                zsessionid: apikey
            },
        })
            .then(data => data.json())
    },

    create: (method, options) => {
        return fetch(BASE_URI + method + "/create", {
            method: 'POST',

            headers: {
                zsessionid: apikey
            },

            body: JSON.stringify(options)
        })
            .then(data => data.json())
    }
}

module.exports = Rally