import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

import { useState } from 'react';
import { Panels } from '@enact/sandstone/Panels';
import data from "../Data/MOCK_DATA.json";
import css from "./App.module.less";

import MainPanel from '../views/MainPanel';
import SecondaryPanel from '../views/SecondaryPanel';

const App = (props) => {
	const [panelIndex, setPanelIndex] = useState(0);
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);

	const handleImageClick = (index) => {
		setSelectedImageIndex(index);
		setPanelIndex(1); // Switch to the SecondaryPanel
	};

	const handleBack = () => {
		setPanelIndex(0); // Switch back to the MainPanel
		setSelectedImageIndex(null);
	};

	const handleNext = () => {
		const nextIndex = (selectedImageIndex + 1) % data.length;
		setSelectedImageIndex(nextIndex);
	};

	const handlePrev = () => {
		const prevIndex = (selectedImageIndex - 1 + data.length) % data.length;
		setSelectedImageIndex(prevIndex);
	};

	return (
		<Panels {...props} index={panelIndex} onBack={handleBack} className={css.body}>
			<MainPanel onImageClick={handleImageClick} />
			<SecondaryPanel
				// The '?' prevents an error if selectedImageIndex is null
				image={data[selectedImageIndex]?.image}
				onNext={handleNext}
				onPrev={handlePrev}
			/>
		</Panels>
	);
};

export default App;
