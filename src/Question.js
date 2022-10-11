import React from 'react'
 
const Question = ({title,info}) => {
  return (
    <div>
      <div className="border">
        {title}
        <button className="bg-orange-600">btn</button>
        <div>{info}</div>
      </div>
    </div>
  );
}

 
export default Question;