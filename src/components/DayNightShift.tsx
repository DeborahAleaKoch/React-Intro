import { useState } from "react";

export function DayNightChange() {
	const [isDay, setIsDay] = useState<boolean>(true);
	const day: string = "Day";
	const night: string = "Night";

	return (
		<>
			<div className=' border-2 mx-28 w-full'>
				<div
					className={`${
						isDay ? "bg-rose-100" : "bg-slate-800"
					} flex flex-col justify-center items-center`}
				>
					<h1
						className={`${
							isDay ? "text-black" : " text-rose-100"
						} text-center m-10`}
					>
						{isDay ? day : night}
					</h1>
					<button
						onClick={() => setIsDay((pref) => !pref)}
						className={`${
							isDay ? "text-blck" : "text-rose-100"
						} border-1 rounded p-3 mb-28 basis-2 w-1/9`}
					>
						Change to {!isDay ? day : night}
					</button>
				</div>
			</div>
		</>
	);
}
