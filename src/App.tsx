import "./App.css";
import { Title } from "./components/rating/Title";
import {  UnControlRating } from "./components/rating/UnControlRating";
import { OnOff } from "./components/onOf/OnOff.tsx";
import { Rating } from "./components/rating/Rating";
import { useState } from "react";
import { RatingValueType } from "./components/rating/Rating.tsx"
import { ControleAccordion } from "./components/accordion/ControleAccordion.tsx";
import { UnControleAccordion } from "./components/accordion/UnControlAccordion.tsx";
import { UnControlOnOff } from "./components/onOf/UnControlOnOf.tsx";

function App() {
  const [rating, setRating] = useState<RatingValueType>(0)
  let [on, setOn] = useState(false)
  let [collapsed, setCollapsed] = useState(true)

  return (
    <>
      <div>
        <Title title="This is App Component " />
        <UnControlRating/>
        <Rating value={rating} onClick={setRating}/>
        <UnControleAccordion titleValue={"List"} />
        <ControleAccordion titleValue={"List"} collapsed={collapsed} setCollapsed={()=>setCollapsed(!collapsed)}/>
        <UnControlOnOff />
        <OnOff on={on} onClick={setOn}/>
      </div>
    </>
  );
}

export default App;
