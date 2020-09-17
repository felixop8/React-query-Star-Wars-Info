import React, {useState} from 'react'
import { ReactQueryDevtools } from 'react-query-devtools'
import Navbar from './components/NavBar'
import People from './components/People'
import Planets from './components/Planets'

function App() {

  const [page, setPage] = useState('planets');

  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} page={page}/>
        <div className='content'>
        {page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
