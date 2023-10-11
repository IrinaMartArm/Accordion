import "./App.css";
import { Accordion } from "./components/accordion/Accordion";
import { Title } from "./components/rating/Title";
import {  UnControlRating } from "./components/rating/UnControlRating";
import { OnOff } from "./components/OnOff";
import { Rating } from "./components/rating/Rating";
import { useState } from "react";
import { RatingValueType } from "./components/rating/Rating.tsx"

function App() {
  const [rating, setRating] = useState<RatingValueType>(0)

  return (
    <>
      <div>
        <Title title="This is App Component " />
        <UnControlRating/>
        <Rating value={rating} onClick={setRating}/>
        <Accordion titleValue={"Menu"} />
        <Accordion titleValue={"List"} />
        <OnOff />
        <OnOff />
      </div>
    </>
  );
}

export default App;
