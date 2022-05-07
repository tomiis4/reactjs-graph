import {useEffect, useState} from 'react'
import "./style.css"

import getItemAngle from "./components/getItemAngle"
import getItemWidth from "./components/getItemWidth"

export default function Graph() {

    const heightPoint = 45
    const widthPoint = 100

    const items = {
        startPointHeight: "0%",
        startPointWidth: "0%",
        
        endPointHeight: heightPoint * 3,
        endPointWidth: widthPoint * 1.5
    }

    const secondItem = {
        startPointHeight: "0%",
        startPointWidth: "0%",
        
        endPointHeight: heightPoint * 1,
        endPointWidth: widthPoint * 2
    }

    const thirdItem = {
        startPointHeight: "0%",
        startPointWidth: "0%",
        
        endPointHeight: heightPoint * 3,
        endPointWidth: widthPoint * 0.5
    }


    const lineStyle = {
        height:  `${getItemWidth(items.endPointWidth, items.endPointHeight)}px`,
        transformOrigin:  "bottom",
        transform: `rotate(${getItemAngle(items.endPointWidth, items.endPointHeight)}deg) translateX(-100%)`
    }


    const secondStyle = {
        height:  `${getItemWidth(secondItem.endPointWidth, secondItem.endPointHeight)}px`,
        left: `${items.endPointWidth - 8}px`,
        bottom: `${items.endPointHeight }px`,
        transformOrigin:  "bottom",
        transform: `rotateZ(${getItemAngle(secondItem.endPointWidth, secondItem.endPointHeight)}deg)`
    }


    const thirdStyle = {
        height:  `${getItemWidth(thirdItem.endPointWidth, thirdItem.endPointHeight)}px`,
        left: `${(secondItem.endPointWidth + items.endPointWidth) - 10}px`,
        bottom: `${secondItem.endPointHeight + items.endPointHeight}px`,
        transformOrigin:  "bottom",
        transform: `rotateZ(${getItemAngle(thirdItem.endPointWidth, thirdItem.endPointHeight)}deg)`
    }


    return (
        <div className="graph-container">
            <div className="graph-bottom-text">
                <h3 id="bottom-0">0</h3>
                <h3 id="bottom-1">1st</h3>
                <h3 id="bottom-2">2nd</h3>
                <h3 id="bottom-3">3rd</h3>
                <h3 id="bottom-4">4th</h3>
                <h3 id="bottom-5">5th</h3>
                <h3 id="bottom-6">6th</h3>
                <h3 id="bottom-7">7th</h3>
                <h3 id="bottom-8">8th</h3>
                <h3 id="bottom-9">9th</h3>
                <h3 id="bottom-10">10th</h3>
            </div>
            <div className="graph-left-text">
                <h3 id="left-7">7.</h3>
                <h3 id="left-6">6.</h3>
                <h3 id="left-5">5.</h3>
                <h3 id="left-4">4.</h3>
                <h3 id="left-3">3.</h3>
                <h3 id="left-2">2.</h3>
                <h3 id="left-1">1.</h3>
                <h3 id="left-,">0</h3>
            </div>
            <div className="graph-items-container">
                <div className="graph-item" style={lineStyle}></div>
                <div  className="graph-item" style={secondStyle}></div>
                <div  className="graph-item" style={thirdStyle}></div>
            </div>
        </div>
    )
}
