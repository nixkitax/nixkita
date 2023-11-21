"use client";

import React from 'react';

const Card = ({title, excerpt, date}:any) => (
  <div className=" flex w-90 bg-white rounded-xl p-6  my-6 border ">
    <div>
    <p className="font-mono text-s"> {date}</p>
    <h2 className="font-mono text-3xl font-semibold mb-4 pt-2">{title}</h2>
    <p className="font-mono text-gray-600 mb-4">{excerpt}</p>
    </div>
  </div>
);

export default Card;
