import React from 'react';
import { useState } from 'react';
import './styles.css';

const Counter = (props) => {
	return (
		<div>
			<span>Contador</span>
			<h2>{props.count}</h2>
		</div>
	);
}

const Counter2 = (props) => {
	return (
		<div>
			<span>Salto</span>
			<h2>{props.count2}</h2>
		</div>
	); 
}

const App = () => {
	const [count, setCount] = useState(0);

	const [count2, setCount2] = useState(0);
	alert("El contador solo inicia cuando se pone el salto en 1.");
	return (
	<>
		<h1>Contador</h1>
		<section>
			<div>
				<Counter count = {count}/>
				<div>
				<button onClick={() => setCount(count + count2)}>+1</button>
				<button onClick={() => setCount(count - count2)}>-1</button>
				<button onClick={() => setCount(0)}>Reset</button>
				</div>
			</div>
			<div>
				<Counter2 count2 = {count2}/>
				<div>
					<button onClick={() => setCount2(count2 + 1)}>+1</button>
					<button onClick={() => setCount2(count2 - 1)}>-1</button>
					<button onClick={() => setCount2(0)}>Reset</button>
				</div>
			</div>
		</section>
	</>
	);
}

export default App;