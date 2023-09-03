import {
    EmojiMapper,
    AvailableEmojis,
} from '@/presentation/assets/utils/emoji-mapper';

import './label-with-emoji.scss';

type LabelWithEmojiParams = {
    children: React.ReactNode;
    emoji: AvailableEmojis;
};

const LabelWithEmoji: React.FC<LabelWithEmojiParams> = ({
    children,
    emoji,
}: LabelWithEmojiParams) => {
    return (
        <div className="label-with-emoji">
            <span>{children}</span>
            <div className="label-with-emoji__emoji-container">
                <img
                    className="label-with-emoji__emoji"
                    src={EmojiMapper[emoji]}
                />
            </div>
        </div>
    );
};

export default LabelWithEmoji;
