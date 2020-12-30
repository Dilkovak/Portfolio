import ReactDOM from 'react-dom'
import * as THREE from 'three'
import React, { useEffect } from 'react'
import { Canvas } from 'react-three-fiber'
import { useSprings, a } from 'react-spring/three'


class Template extends React.Component {
    constructor(props) {    
        super(props);    
        this.state = {      
            // parameters to be used in the state here 
        };  
        // If component needs to remember the values use state else use props
    }

    render() {
      return (
          <div></div>
        // return html here
      );
    }
  }