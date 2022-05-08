import {useEffect, useState} from 'react'
import "./style.css"
import JsonFile from "./testing/informations.json"

import getItemAngle from "./components/getItemAngle"
import getItemWidth from "./components/getItemWidth"
import getItemBottom from "./components/getItemBottom"
import getItemLeft from "./components/getItemLeft"

export default function Graph() {
    const heightPoint = 45
    const widthPoint = 100

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
                {
                    JsonFile.map (item => {
                        return(
                            <div 
                                className="graph-item" 
                                key={item.id}
                                style={{
                                    height:  `${getItemWidth((widthPoint * item.endPointWidth), (item.endPointHeight * heightPoint))}px`,
                                    transform: `rotateZ(${getItemAngle((widthPoint * item.endPointWidth), (item.endPointHeight * heightPoint))}deg)`,
                                    bottom: `${getItemBottom(item.num) * heightPoint}px`,
                                    left: `${getItemLeft(item.num) * widthPoint}px`,
                                }}
                            >
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}