import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Category from './Category';
import Header from './Header'
import Home from './Home'

function App() {

  return (
   
    <div className="App">
  
      <Router>
      <Header />
        <Switch>
        <Route path="/furniture">
            <Home 
              title="Exclusive furniture on cheap price"
              subtitle="Make your house a home with our wide collection of beautiful furniture"
               image="https://shop-redq.vercel.app/_next/static/images/furniture-1653225bd210688946d20a4b28cf8b0e.png"/>
            <Category />
          </Route>
          <Route path="/clothing">
            <Home 
              title="Shop your designer dresses"
              subtitle="Ready to wear dresses tailored for you from online. Hurry up while stock lasts"
              image="https://shop-redq.vercel.app/_next/static/images/cloths-bc740630f228713e4bb0de8a7bffce22.png"/>
            <Category />
          </Route>
          <Route path="/medicine">
            <Home 
              title="Your medication, delivered"
              subtitle="Say goodbye to all your healthcare worries with us"
              image="https://shop-redq.vercel.app/_next/static/images/medicine-6e8ebb087020b94d3aeae59c5c51744f.png"/>
            <Category />
          </Route>
          <Route path="/makeup">
            <Home 
              title="Branded & imported makeups"
              subtitle="Easiest and cheapest way to get your branded & imported makeups"
              image="https://shop-redq.vercel.app/_next/static/images/makeup-d35970108639dd1b5ea1af732250c450.png"/>
            <Category />
          </Route>
          <Route path="/grocery">
            <Home 
              title="Groceries Delivered in 90 Minute"
              subtitle="Get your healthy foods & snacks delivered at your doorsteps all day everyday"
              image="https://shop-redq.vercel.app/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png"/>
            <Category />
          </Route>
          <Route path="/">
            <Home 
              title="Groceries Delivered in 90 Minute"
              subtitle="Get your healthy foods & snacks delivered at your doorsteps all day everyday"
              image="https://shop-redq.vercel.app/_next/static/images/grocery-f1565ac25de02b9295dccc2da13004ab.png"/>
            <Category />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
