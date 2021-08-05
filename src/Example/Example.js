import React from 'react';
import {Indicator} from '../lib';

export default function Example() {
    return (
        <div style={{width: "640px", margin: "15px auto", display: "flex"}}>
            <h1>Hola</h1>
            <Indicator style={{width: "300px", margin:"10px"}}
                       stock={20}
                       config={{
                           low: 3,
                           high: 15
                       }}
            />
            <Indicator style={{width: "300px", margin:"10px"}}
                       stock={10}
                       config={{
                           low: 3,
                           high: 15
                       }}
            />
            <Indicator style={{width: "300px", margin:"10px"}}
                       stock={3}
                       config={{
                           low: 3,
                           high: 15
                       }}
            />
        </div>
    )
}