import './App.css'
import { Accordion } from './components/accordion/Accordion'
import { Title } from './components/Title'
import { Rating } from './components/Rating'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Title title='This is App Component '/>
        <Rating value={3}/>
        <Accordion titleValue={'Menu'} collapsed={false}/>
        <Accordion titleValue={'List'} collapsed={false}/>
        <Rating value={4}/>
      </div>
    </>
  )
}

export default App
