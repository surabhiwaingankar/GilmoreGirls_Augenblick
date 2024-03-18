import { useState, useRef, useEffect } from "react";
import Nav from "@/components/Navbar";
import  Card  from "@/components/Card";
import Card2 from "@/components/Card2";
import { GLOBAL_VARIABLE_SATISFIED } from '@/../config';
import { GLOBAL_VARIABLE_NOT_SATISFIED } from '@/../config';
export default function Dashboard(){
    return (
        <div>
          <div>
            <Nav />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Card />
            <Card2 />
          </div>
        </div>
      );
    const mappedArray1 = GLOBAL_VARIABLE_SATISFIED.map((innerArray, index) => {
        const userString = `User ${index + 1}`;
        
        // Return an object containing the user string and the inner array
        return {
            user: userString,
            innerArray: innerArray
        };
    });

    const mappedArray2 = GLOBAL_VARIABLE_NOT_SATISFIED.map((innerArray, index) => {
        const userString = `User ${index + 1}`;
        
        // Return an object containing the user string and the inner array
        return {
            user: userString,
            innerArray: innerArray
        };
    });
    
    console.log(mappedArray1);
    
    console.log(mappedArray2);
        return(
            <div>
            <div>
                <Nav/>
            </div>
            <div >
                <Card mappedArray={mappedArray1}/>
                <Card2 mappedArray={mappedArray2}/>
            </div>
            
            </div>
    
        )
}