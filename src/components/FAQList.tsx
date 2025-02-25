import faq from "../data";
import { FAQListItem } from "./FAQListItem";

export const FAQList: React.FC = () => {
	const items = faq;

	return (
		<div className='w-full'>
			{items.map((item) => (
				<FAQListItem item={item} key={item.answer} />
			))}
		</div>
	);
};
