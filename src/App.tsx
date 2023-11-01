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
import {Select} from "./components/select/Select.tsx";

export type ItemsType = {
  title: string
  value: string
}
function App() {
  const [rating, setRating] = useState<RatingValueType>(0)
  const [on, setOn] = useState(false)
  const [collapsed, setCollapsed] = useState(true)
  const items = [
    {value: '1', title: 'Minsk'},
    {value: '2', title: 'Moskov'},
    {value: '3', title: 'Erevan'},
  ]
  return (
    <>
      <div>
        <Title title="This is App Component " />
        <UnControlRating/>
        <Rating value={rating} onClick={setRating}/>
        <UnControleAccordion titleValue={"List"} />
        <ControleAccordion titleValue={"List"} collapsed={collapsed} onClick={()=>setCollapsed(!collapsed)} items={['ira', 'Suren']}/>
        <UnControlOnOff />
        <OnOff on={on} onClick={setOn}/>
        <Select value={''} items={items} />
      </div>
    </>
  );
}



export default App;
