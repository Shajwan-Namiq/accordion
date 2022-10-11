 
import './App.css';
import react, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';



function App() {

    const [questions, setQuestions] = useState(data);

 

  return (
    <>
      <div className="container mb-20">
        <h3 className="flex justify-center p-10 font-bold text-xl text-[#000000]">
          Questions And Answers About Login
        </h3>
        <section>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </>
  );
}

export default App;
