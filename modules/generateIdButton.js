export const generateIdButton = () => {
    const ids = []
    for(let i=0; i < 10; i++){
        ids.push(Math.floor(Math.random() * (100 - 1)) + 1)
    }
    return ids
}