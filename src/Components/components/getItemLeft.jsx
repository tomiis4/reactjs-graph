import JsonFile from "../testing/informations.json"


const getItemLeft = (currentId) => {
    let leftValue = 0
    let myId = 0

    const getBottom = () => {
        const objBottom = JsonFile.filter(item => item.num == myId);  //? get object which contain Id (first 0)
        leftValue += objBottom[0].endPointWidth //? get width from prev. Id
        myId++
    }
    for(let i =0; i < currentId; i++){  //? repeat action from current id (for each element)
        getBottom()   
    }
    return leftValue
}

export default getItemLeft