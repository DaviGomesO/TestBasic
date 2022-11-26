import { useState } from 'react'; //hook de estado
import './style.css'
function Counter() {
  let [
    count, // estado reativo
    setCount, //altera o estado
  ] = useState(0);

  return (
    <div>
      <button className="btn btn-count" onClick={() => setCount(count + 1)}> Contador: {count} </button>
      <button className="btn btn-reset" onClick={() => setCount(0)}> Reset </button>
    </div>
  );
}

export default Counter;