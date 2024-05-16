import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'
const url = "https://jsonplaceholder.typicode.com/todos"
function App() {
  const [db, setDb] = useState([])
  const toggleDB = async () => {
    const fetched = await fetch(url)
    const fetching = await(fetched).json()
    setDb(fetching)
  }
  useEffect(()=>{
    toggleDB();
  }, [])

  return (
    <>
       <div className="container">
        <div className="list">
          {
            db.map(item => {
              return (
                <List key={item.id} {...item} />
              )
            })
          }
        </div>
       </div>
    </>
  )
}

export default App
