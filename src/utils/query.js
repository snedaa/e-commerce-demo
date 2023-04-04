export function createQuery(url,query) {
    let result = url + "?"
    

     const limit = query.limit
     const skip = query.skip
     const search = query.search

    if (limit != undefined) {
        result += "limit=" + query.limit + "&"
    }
    if (skip != undefined) {
        result += "skip=" + query.skip + "&"
    }

    return result.substring(0,result.length -1)
}
