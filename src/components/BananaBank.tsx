import { useState } from "react";

const BananaBank = () => {
	const [kontoStand, setKontoStand] = useState(0);
	const [inputValue, setInputValue] = useState("");

	//funtion für den abbuchungs-button
	function handleAbbuchen() {
		if (kontoStand < Number(inputValue)) {
			window.alert(
				`Ihr Guthaben ist nicht ausreichend für die Abbuchung folgender Summe ${inputValue}€`
			);
			return;
		}
		setKontoStand((prev) => prev - Number(inputValue));
	}

	return (
		<div className='border-1 flex flex-col items-center bg-slate-400 mx-4 w-1/2 '>
			<h1 className='text-6xl text-rose-200 m-5'>Mein Girokonto</h1>
			<p className='border-2 border-rose-300 px-24 py-8 rounded m-5 text-4xl bg-slate-100'>
				{kontoStand}
			</p>
			<input
				type='number'
				placeholder='Betrag in €'
				value={inputValue}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					setInputValue(event.target.value)
				}
				className='border-1 text-right rounded mb-5 bg-slate-100 pr-2 py-2 '
			/>
			<div className='flex gap-5 mb-6'>
				<button
					onClick={() => setKontoStand((prev) => prev + Number(inputValue))}
					className='border-2 border-rose-300 rounded-3xl bg-slate-400 px-5 py-2 cursor-pointer hover:bg-rose-200'
				>
					Einzahlen
				</button>
				<button
					onClick={handleAbbuchen}
					className={`border-2 border-rose-300 rounded-3xl bg-slate-400 px-5 py-2 ${
						kontoStand < Number(inputValue)
							? "hover:bg-rose-700 cursor-not-allowed"
							: "hover:bg-rose-200 cursor-pointer"
					}`}
				>
					Auszahlen
				</button>
			</div>
		</div>
	);
};

export default BananaBank;
