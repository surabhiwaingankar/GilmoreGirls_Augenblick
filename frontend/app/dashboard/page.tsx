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
}