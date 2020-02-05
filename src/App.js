import React, { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count +1)
  const decrement = () => setCount(count -1)

  const increment2 = () => setCount(previousCount =>  previousCount +1)
  const decrement2 = () => setCount(previousCount =>  previousCount -1)

  const reset = () => setCount(0)
  const multiply = () => setCount(previousCount =>  previousCount * 2)
  const devideThree = () => setCount(previousCount =>  {
    if(previousCount%3 === 0) {
      setCount(previousCount/3)
    } else {
      setCount(previousCount)
    }
  })

  return (
    <>
    <div>
      count: {count}
    </div>
    <div>
    <button onClick={decrement}>-1</button>
    <button onClick={increment}>+1</button>
    </div>
    <div>
    <button onClick={decrement2}>-1</button>
    <button onClick={increment2}>+1</button>
    </div>
    <div>
    <button onClick={reset}>Reset</button>
    <button onClick={multiply}>*2</button>
    <button onClick={devideThree}>3の倍数のときだけ3で割る</button>
    </div>
    
    </>
    
  );
}

export default App
