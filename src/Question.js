import React,{useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({title,info}) => {
  
  const [showInfo, setShowInfo] = useState(false);


  return (
    <>
      <main className="w-4/5 lg:w-3/5 p-5 mx-auto">
        <section className="shadow row">
          <div className="border-b tab">
            <div className="border-l-2 border-transparent relative">
              <header
                className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label"
                
              >
                <span className="text-cyan-900 font-bold  text-sm">
                  {title}
                </span>
                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                  <button
                    onClick={() => setShowInfo(!showInfo)}
                    className="h-24 w-24"
                  >
                    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </button>
                </div>
              </header>
              <div className="tab-content">
                <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                  {showInfo && <p>{info}</p>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

 
export default Question;