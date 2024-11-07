// components/Loader.js
import React from 'react';

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        width={200}
        alt="Loading..."
        src="https://miro.medium.com/v2/resize:fit:882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
      />
    </div>
  );
}
