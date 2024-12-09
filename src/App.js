
import { useState } from 'react';
import './App.css';
//hello commit check
function App() {
  const[name,setName] = useState('');
  const[datetime,setDatetime]=useState('');
  const[description,setDescription]=useState('');
  function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    fetch(url,{
      method:'POST',
      Headers:{'Content-type':'application/json'},
      body: JSON.stringify({name,description,datetime})
    }).then(response=> {
      response.json().then(json=>{
        console.log('result',json);
      });
    });
  }
  return (
    <main>
      <h1>₹40,000<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text" 
          value = {name}
          onChange={ev=> setName(ev.target.value)}
          placeholder='+1000 new Samsung tv'/>
          <input value={datetime} onChange={ev=>setDatetime(ev.target.value)} type="datetime-local"/>
        </div>
        <div className="description">
          <input type="text"value={description} onChange={ev=>setDescription(ev.target.value)}placeholder='description'/>
        </div>
        <button type='submit'>Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">it was time for new TV</div>
          </div>
            <div className="right">
              <div className="price red">-₹15000</div>
              <div className="datetime">2024-4-16 09:30</div>
            
        </div>
      </div>
        <div className="transaction">

          <div className="left">
            <div className="name">Stock profit</div>
            <div className="description">It was time for new TV</div>
            </div>
            <div className="right">
              <div className="price green">+₹10000</div>
              <div className="datetime">2024-4-16 09:30</div>
            
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Laptop</div>
            <div className="description">it was time for new TV</div>
          </div>
            <div className="right">
              <div className="price red">-₹15000</div>
              <div className="datetime">2024-4-16 09:30</div>
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
