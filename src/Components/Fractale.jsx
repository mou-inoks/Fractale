import React from 'react'
import './Fractale.css'
import { Component } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';


class Fractale extends Component {
    constructor(props){
        super(props);
        this.state = {
          points: [],
          firstPoint: null,
          nextPoint: null
        } 
      };
      render(){
          console.log("Ici c'est salim",this.props.points)
    return (<>
    <div className='Fractale'>
    <h1>Fractale</h1>
    <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
        <TransformComponent>
            <svg>
            {this.props.points.map((point, i) => {
                if(i === this.props.points.length -1)
                    return <>
                            <line x1={this.props.points[i].x}  y1={this.props.points[i].y} x2={this.props.points[0].x} y2={this.props.points[0].y} ></line>
                    </>
                    
                    return <>
                    <line x1={this.props.points[i].x} y1={this.props.points[i].y} x2={this.props.points[i + 1].x} y2={this.props.points[i+1].y} ></line>
                </>
                
                })}
            </svg>
        </TransformComponent>
    </TransformWrapper>
    
    </div>
    
    </>
    )
}
}

export default Fractale