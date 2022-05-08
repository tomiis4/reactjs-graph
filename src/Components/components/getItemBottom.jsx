import JsonFile from "../testing/informations.json"

const getItemBottom = (currentId) => {
    let bottomValue = 0
    let myId = 0

    const getBottom = () => {
        const objBottom = JsonFile.filter(item => item.num == myId);  //? get object which contain Id (first 0)
        bottomValue += objBottom[0].endPointHeight //? get height from prev. Id
        myId++
    }
    for(let i =0; i < currentId; i++){  //? repeat action from current id (for each element)
        getBottom()   
    }
    return bottomValue
}

export default getItemBottom