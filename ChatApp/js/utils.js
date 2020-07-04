const utils={}
utils.getDataFormDoc = (doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
}
utils.getDataFormDocs = (docs) => {
    return docs.map(utils.getDataFormDoc)
}