import AccordionItem from "./item";
import data from "../data.json";

export default function Accordion() {
  return (
    <div>
      <h1>FAQ's</h1>
      {data.faqs.map((obj, index) => {
        return <AccordionItem key={index} qna={obj} />;
      })}
    </div>
  );
}

// Accordion 2 ( When bydefault 1 accordion is open & if we click on other, previous open closed and if i click on open accordion, then it will also close )

// const Accordion = () => {
//   const [openedKeys, setOpenedKeys] = useState(0);

//   const handleKeys = (key) => {
//     setOpenedKeys((prev) => {
//       if (prev === key) {
//         return -1;
//       }
//       return key;
//     });
//   };

//   return (
//     <div className="accordion-wrapper">
//       {data.faqs.map((res, index) => {
//         return (
//           <AccordionItem
//             isOpen={openedKeys === index}
//             setIsOpen={() => handleKeys(index)}
//             item={res}
//             key={index}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default Accordion;



// Accordion 3 ( When bydefault 1 accordion is open & if we click on other, then others can also open )
// const Accordion = () => {
//   const [openedKeys, setOpenedKeys] = useState([0]);

//   const handleKeys = useCallback((key) => {
//     setOpenedKeys((prev) => {
//       if (prev.includes(key)) {
//         const updatedKeys = prev.filter((prevKey) => prevKey != key);
//         return updatedKeys;
//       }
//       return [...prev, key];
//     });
//   }, []);

//   return (
//     <div className="accordion-wrapper">
//       {data.faqs.map((res, index) => {
//         return (
//           <AccordionItem
//             isOpen={openedKeys.includes(index)}
//             setIsOpen={() => handleKeys(index)}
//             item={res}
//             key={index}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default Accordion;
