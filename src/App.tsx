import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { Title } from "./components/rating/Title";
import {  UnControlRating } from "./components/rating/UnControlRating";
import { OnOff } from "./components/OnOff";
import { Rating } from "./components/rating/Rating";
import { useState } from "react";
import { RatingValueType } from "./components/rating/Rating.tsx"
import { Accordion2 } from "./components/accordion/Accordion2.tsx";

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
        <Accordion titleValue={"Menu"} />
        <Accordion titleValue={"List"} />
        <Accordion2 titleValue={"List"} collapsed={collapsed} setCollapsed={()=>setCollapsed(!collapsed)}/>
        <OnOff on={on} setOn={setOn}/>
        {/* <OnOff /> */}
      </div>
    </>
  );
}

export default App;
