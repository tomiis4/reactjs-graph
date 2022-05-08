const getItemWidth = (itemWidth, itemHeight) => {
    let mainWidth = Math.sqrt(itemWidth * itemWidth + itemHeight * itemHeight)
    
    return mainWidth
}

export default getItemWidth