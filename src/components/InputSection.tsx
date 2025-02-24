import { useState } from "react";

export function InputSection() {
	const [text1, setText1] = useState("");
	const [text2, setText2] = useState("");
	const [text3, setText3] = useState("");

	function handleChange1(event: React.ChangeEvent<HTMLInputElement>) {
		setText1(event.target.value);
	}

	function handleChange2(event: React.ChangeEvent<HTMLInputElement>) {
		setText2(event.target.value);
	}
	function handleChange3(event: React.ChangeEvent<HTMLInputElement>) {
		setText3(event.target.value);
	}

	return (
		<>
			<input
				value={text1}
				onChange={handleChange1}
				className='border
			'
			/>
			<input
				value={text2}
				onChange={handleChange2}
				className='border
			'
			/>
			<input
				value={text3}
				onChange={handleChange3}
				className='border
			'
			/>
			<p>Vorname:{text1}</p>
			<p>Nachname: {text2}</p>
			<p>Email: {text3}</p>
		</>
	);
}
