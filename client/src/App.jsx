import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/data')
    .then((response) => {
          setData(response.data)
    })
    .catch((error) => {
        console.log('Error', error);
    })
  })

  return (
    <div>
      <h1 className="text-3xl font-bold underline flex justify-center">
      Data 
      </h1>

      <h1 className='flex justify-center mt-4'>Total No. : {data.length}</h1>


      {
        data.map((dat, i) => (
          <div key={dat.id} className='flex justify-center m-5'>
                <h1 className='ml-4'>{dat.occupation}</h1>
                <h1 className='ml-4'>{dat.Experience}</h1>
          </div>
        ))
      }

    </div>
  )
}

export default App