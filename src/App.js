import React, { useEffect, useState } from 'react';

const App = props => {

  const [state, setState] = useState(props)
  const {name, price} = state

  useEffect(() => {
    console.log('effect')
  }) 

  const renderPeriod = () => {
    console.log('render')
    return '。'
  }

  return (
    <>
     <p>現在の{name}は、{price}です{renderPeriod()}</p>
     <button onClick={()=>setState({...state, price: price + 1})}>+1</button>
     <button onClick={()=>setState({...state, price: price - 1})}>-1</button>
     <button onClick={()=>setState(props)}>Reset</button>
     <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
    </>
  );
};

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
