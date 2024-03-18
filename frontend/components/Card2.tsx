"use client"
import React from 'react';
import '@/../../styles/card.css' // Import the CSS file for styling

const HalfWidthFullHeightCard = () => {
  return (
    <div className="card2 overflow-y-scroll flex flex-col gap-5 p-10 h-full ">
      <div className="card-content ">
        <h2>This is a Card Element</h2>
        <p>This card occupies half of the page width and full page height.</p>
      </div>
    </div>
  );
};

export default HalfWidthFullHeightCard;
