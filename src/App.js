
import React,{useState, useEffect}  from 'react'

import './leisa.css'

import axios from 'axios'


function App() {

  let url = `http://localhost:4000`

  const [status, setStatus] = useState('status')

  function details(){
    let user = document.getElementById('user').value
    let password = document.getElementById('password').value
    console.log(user, password)

    axios.post(`${url}/login/${user}/${password}`)
    .then(res => {
      console.log(res.data.length)
      if(res.data.length === 1){
        setStatus('logged in successfully')
      } else {
        setStatus('no deal bro')
      }
    })
  }
  
  return (
    <div className='form'>
     KARAN WE ARE HERE<br/>
      <div id='formChecker'>
        <input type='text' id='user' placeholder='username' />
        <input type='text' id='password' placeholder='password' />
        <button onClick={details}>Submit</button>
        {status}
      </div>
    </div>
  );
}

export default App;
