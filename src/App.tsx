import './App.css'
import { Accordion } from './components/accordion/Accordion'
import { Title } from './components/Title'
import { Rating } from './components/Rating'
import { OnOff } from './components/OnOff'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Title title='This is App Component '/>
        {/* <Rating value={3}/> */}
        <Accordion titleValue={'Menu'}/>
        <Accordion titleValue={'List'}/>
        {/* <Rating value={4}/> */}
        <OnOff/>
        <OnOff/>
      </div>
    </>
  )
}

export default App
