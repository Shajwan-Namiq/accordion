 
import './App.css';
import react, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';



function App() {

    const [questions, setQuestions] = useState(data);

 

  return (
    <>
     
        <div className="container">
          <h3 className='flex justify-center p-10 font-bold text-lg text-pink-900'>
            Questions and Answers About Login</h3>
          <section className="info">
            {questions.map((question) => {
              return (
                <SingleQuestion key={question.id} {...question}/> 
              );
            })}
          </section>
        </div>
       
    </>
  );
}

export default App;
