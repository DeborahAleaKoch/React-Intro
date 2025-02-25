import { useState } from "react";
import { FAQItem } from "../data";

interface Props {
	item: FAQItem;
}

export const FAQListItem: React.FunctionComponent<Props> = ({ item }) => {
	const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
	const [innerAccordionOpen, setInnerAccordionOpen] = useState<boolean>(false);

	return (
		<>
			<div className='bg-gray-600 text-white py-3 flex justify-between px-4 mt-4 mx-10 border-b-pink-100 border-b-2 '>
				<p>{item.question}</p>
				<button
					onClick={() => setAccordionOpen((previousValue) => !previousValue)}
					className='border-1 bg-gray-300 text-black px-2 cursor-pointer'
				>
					-
				</button>
			</div>
			<div className='bg-gray-600 text-white px-4 mx-10'>
				{accordionOpen === true && (
					<p>
						<div className='flex justify-between py-2'>
							{item.answer}

							<button
								onClick={() =>
									setInnerAccordionOpen((previousValue) => !previousValue)
								}
								className='border-1 bg-gray-300 text-black px-2 cursor-pointer'
							>
								-
							</button>
						</div>

						{innerAccordionOpen && (
							<p className='text-rose-200 py-3'>{item.answerLong}</p>
						)}
					</p>
				)}
			</div>
		</>
	);
};
