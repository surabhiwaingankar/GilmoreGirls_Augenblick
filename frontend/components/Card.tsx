"use client"
import React from 'react';
import '@/../../styles/card.css' // Import the CSS file for styling

const HalfWidthFullHeightCard = (props: { mappedArray1: any[]; }) => {
  return (
    <div className="card2 overflow-y-scroll flex flex-col gap-5 p-10 h-full">
      <div className="card-content">
        {props.mappedArray1.map((item, outerIndex) => (
          <div key={outerIndex}>
            <h2>{item.user}</h2>
            {item.innerArray.map((message: { sender: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; message: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }, innerIndex: number) => (
              <div key={`${outerIndex}-${innerIndex}`} className={innerIndex % 2 === 0 ? 'user-message' : 'ai-message'}>
                <p>{message.sender}: {message.message}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};  

export default HalfWidthFullHeightCard;
