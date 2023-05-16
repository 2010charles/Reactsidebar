// import { Component, useState } from 'react'
import './App.css'
<div className="root"></div>
const List = function({name,descriptioin,link,tittle}){
console.log(name,descriptioin,link,tittle)
  return (
    <div>
      <p className='tittles'>{tittle}</p>
      <div className='names'>{name}</div>
      <div>{descriptioin}</div>
      <div>{link}</div>
    </div>
  )
}


function App () {
  return (
    <div className='header'>
      <h1 className='logo'>Welcome To Our Website Blog </h1>
      <h4>Welcome!</h4>
      <List tittle="Hopping" name="island Hopping Adventures"  descriptioin="welcome to our hopping adventures" link="www//:htpps.index.html"/>
      <List tittle="Race" name="Its Race headlines"  descriptioin="welcome to our Race headlines" link="www//:htpps.index.html"/>
      <List tittle="People X" name="Why X people do X"  descriptioin="welcome to our all people questions" link="www//:htpps.index.html"/>
      <List tittle="Backed" name="Backed by Science"  descriptioin="welcome to our Science adventures" link="www//:htpps.index.html"/>
    </div>
  );

}


export default App;
