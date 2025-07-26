import { VirtualGridList } from '@enact/sandstone/VirtualList';
import ImageItem from '@enact/sandstone/ImageItem';
import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/sandstone/Panels';
import data from "../Data/MOCK_DATA.json";
import ri from '@enact/ui/resolution';
import css from './MainPanel.module.less';

const MainPanel = kind({
	name: 'MainPanel',

	propTypes: {
		onImageClick: 'function' // Expect a function to be passed in
	},

	render: ({ onImageClick, ...rest }) => {
		const imageItem = ({ index, ...itemRest }) => {
			const { image } = data[index];

			return (
				<ImageItem
					{...itemRest}
					src={image}
					className={css.rounded}
					style={{ padding: '.25rem' }}
					// Call the passed-in function with the item's index
					onClick={() => onImageClick(index)}
				/>
			);
		};

		return (
			<Panel {...rest}>
				<Header title="Photo Gallery" noCloseButton type="compact" className={css.header} />
				<VirtualGridList
					dataSize={data.length}
					itemRenderer={imageItem}
					itemSize={{
						minWidth: ri.scale(300),
						minHeight: ri.scale(200)
					}}
					spacing={ri.scale(10)}
				/>
			</Panel>
		);
	}
});

export default MainPanel;