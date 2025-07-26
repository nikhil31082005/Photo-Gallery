import kind from '@enact/core/kind';
import { Panel, Header } from '@enact/sandstone/Panels';
import { Image } from '@enact/sandstone/Image';
import Button from '@enact/sandstone/Button';
import css from './SecondaryPanel.module.less';

const SecondaryPanel = kind({
    name: 'SecondaryPanel',

    propTypes: {
        image: 'string',
        onNext: 'function',
        onPrev: 'function'
    },

    render: ({ image, onNext, onPrev, ...rest }) => {

        return (
            <Panel {...rest} className={css.secondaryPanel}>
                <Header noCloseButton title="Image Preview" type="compact" className={css.header} />
                <div className={css.content}>
                    <Button
                        className={css.navButton}
                        icon="arrowlargeleft"
                        onClick={onPrev}
                        size="large"
                    />
                    <Image className={css.image} src={image} />
                    <Button
                        className={css.navButton}
                        icon="arrowlargeright"
                        onClick={onNext}
                        size="large"
                    />
                </div>
            </Panel>
        );
    }
});

export default SecondaryPanel;