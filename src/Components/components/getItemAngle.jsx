const getItemAngle = (itemHeight, itemWidth) => {
    let sum = itemHeight / itemWidth
    let sum2=Math.atan(sum);
    let mainAngle =sum2*180 / Math.PI;    

    return mainAngle
}

export default getItemAngle