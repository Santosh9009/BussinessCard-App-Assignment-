import './index.css';
// import './App.css'
import CreateCard from './components/CreateCard'
import Cards from './components/Cards';
import { useEffect, useState } from 'react';

function App() {
  const [cards, setcards] = useState([]);
  
  useEffect(() => {
    const fetchdata = async()=>{
      const response = await fetch("http://localhost:3000/card/get")
      const result = await response.json()
      setcards(result.cards)
    }
    fetchdata()
  }, [])
  

  return (
    <div className='w-full flex justify-center bg-[#A8DADC]'>
      <div className='flex flex-col items-center w-[80%]'>
        <h1 className='text-5xl m-10 font-semibold'>Bussiness Card</h1>
        <CreateCard></CreateCard>
        <div className='w-full flex flex-col items-start'>
        <h1 className='font-semibold mb-5 text-2xl'>Cards</h1>
        <Cards cards={cards}></Cards>
        </div>
      </div>
    </div>
  )
}

export default App
