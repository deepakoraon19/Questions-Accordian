import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ques,ans}) => {

  const[show,setShow] = useState(false)

  // console.log(ques, ans)
  return <article className='question'>
    <header>
      <h4>{ques}</h4>
      {show?<><AiOutlinePlus onClick={()=>setShow(false)} /> <span>{ans}</span></>:<AiOutlineMinus onClick={()=>setShow(true)} />}
    </header>
  </article>;
};

export default Question;
