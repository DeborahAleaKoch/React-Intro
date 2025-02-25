// import { useState } from "react";

import "./App.css";
import { InputSection } from "./components/InputSection";
import { DayNightChange } from "./components/DayNightShift";
import { Counter } from "./components/Counter";
import { FAQList } from "./components/FAQList";
import BananaBank from "./components/BananaBank";

function App() {
	return (
		<div className='flex flex-col items-center'>
			<FAQList />
			<br />
			<BananaBank />
			<br />
			<InputSection />
			<br />
			<DayNightChange />
			<br />
			<Counter />
			<br />
		</div>
	);
}

export default App;
