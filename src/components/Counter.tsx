import { useState } from "react";

export function Counter() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className='border-1 flex justify-evenly'>
				<button onClick={() => setCount((pref) => --pref)}>- 1</button>
				<p>{count}</p>
				<button onClick={() => setCount((pref) => ++pref)}>+ 1 </button>
			</div>
		</>
	);
}
