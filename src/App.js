import logo from './logo.svg';
import './App.css';
import Products from './components/NewProduct/NewProduct';
import NewProduct from './components/Products/Products';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="App">
      <h4>CRUD - using RTK Query</h4>
      <Products input={input} setInput={setInput}></Products>
      <NewProduct input={input} setInput={setInput}></NewProduct>
    </div>
  );
}

export default App;
