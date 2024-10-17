import { useState } from "react";

export default function AccordionItem({ qna }) {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion">
      <h3>
        {qna.question}{" "}
        <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
      </h3>
      {show ? <p>{qna.answer}</p> : ""}
    </div>
  );
}


// Agar TRansition lagane ko kahe to line number 11 galat hei kyuki transition tbhi lagta hei jab dom mei add hote time to kuch nhi karna bas ==>
//  <p className={show? 'open' : ''}>{qna.answer}</p> 
//  .answer{
//     max-height: 0;
//     transition: max-height 2s;

//     &.open{
//         max-height: 250px;
//     }
//  }

