import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/sandstone/Panels';
import { Image } from '@enact/sandstone/Image';
import Button from '@enact/sandstone/Button';
import css from './SecondaryPanel.module.less';

const SecondaryPanel = kind({
    name: 'SecondaryPanel',

    render: ({ image, onNext, onPrev, setPanelIndex, ...rest }) => {

        function handleClick() {
            setPanelIndex(0);
        }

        return (
            <Panel {...rest} className={css.secondaryPanel}>
                <Button icon='arrowhookleft' size='small' onClick={handleClick} style={{ zIndex: "15px" }} />
                <div className={css.content}>
                    <Button
                        className={css.navButton}
                        icon="arrowlargeleft"
                        onClick={onPrev}
                        size="small"
                    />
                    <Image className={css.image} src={image} />
                    <Button
                        className={css.navButton}
                        icon="arrowlargeright"
                        onClick={onNext}
                        size="small"
                    />
                </div>
            </Panel>
        );
    }
});

export default SecondaryPanel;