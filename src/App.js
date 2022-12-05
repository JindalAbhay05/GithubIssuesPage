import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import fetchData from './utility/fetchData';
import NavBar from './components/Navbar';
import List from './components/List';
import ErrorHandler from './components/ErrorHandler';
import Tip from './components/Tip';
import Footer from './components/Footer';
import {v4} from 'uuid'

function App() {
  const [err, setErr] = useState([])
  const setError=(error)=>{
    let newId = v4()
    setErr([...err,{error,id:newId}])

    setTimeout(()=>{
      
      setErr((newError)=>{
        let newErr = newError.filter((el)=>el.id!==newId)
        return newErr
      })
    },5000)
  }
  return (
    <>
      <NavBar/>
      <div style={{ padding: "30px 100px" }}>
        <List setErr={setError}/>
        <Tip/> 
        <Footer/>
      </div>
      <ErrorHandler err={err}/>
    </>
  );
}

export default App;
