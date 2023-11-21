/*
Objetivo: dado uma matrix e uma entrada contendo a quantidade de numeros distindos necessarios, dizer quantos arrays dessa matrix sera necessario para completar a quantidade de numeros distindos pedidos

*/

const testCase = {
    differentNumNeeded: 5,
    matrix: [[ 3,12, 29],[0]]
}

const checkValidity = (qRequiredKeys, managersKeys) => {
    let quantityKeys = 0
    for(let i = 0; i < managersKeys.length; i++){
        quantityKeys += managersKeys[i].length
    }
    if( quantityKeys < qRequiredKeys){
        return false
    }
    console.log(assalto(qRequiredKeys, managersKeys))
}


const assalto = (qRequiredKeys, managersKeys) => {
    const countAppearances = {}
    let distinctNumbers = 0
    let numberManagers = 1
    for(let i = 0; i < managersKeys.length; i++){
        for(let j = 0; j < managersKeys[i].length; j++){
            if(countAppearances[managersKeys[i][j]] === undefined){
                distinctNumbers += 1
            }
            if(distinctNumbers === qRequiredKeys){
                return numberManagers
            }
        }
        numberManagers +=1
    }
    return "ASSALTO MAL SUCEDIGO"

}
checkValidity(testCase.differentNumNeeded, testCase.matrix)