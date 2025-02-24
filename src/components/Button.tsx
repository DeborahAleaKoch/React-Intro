import { useState } from "react";

export function Button() {
	const [accordion, setAccordion] = useState<boolean>(false);

	return (
		<>
			<div className='bg-gray-600 text-white py-3 flex justify-between px-4 mt-4 mx-10 '>
				<p>Why is React great?</p>
				<button
					onClick={() => setAccordion((pref) => !pref)}
					className='border-1 bg-gray-300 text-black px-2 cursor-pointer'
				>
					{" "}
					-{" "}
				</button>
			</div>
			<div className='bg-gray-600 text-white pb-3 flex justify-between px-4  mx-10'>
				{accordion && <p className='border-t-2'>Fast learning Curve!</p>}
			</div>
		</>
	);
}
