import CoolEmoji from '../illustrations/002-cool.png';
import SadEmoji from '../illustrations/003-sad.png';
import SmilingEmoji from '../illustrations/004-smiling.png';
import PartyEmoji from '../illustrations/005-party.png';
import ThinkingEmoji from '../illustrations/007-thinking.png';
import LoveFaceEmoji from '../illustrations/love-face-emoji.png';
import MoneyEmoji from '../illustrations/money-emoji.png';
import EyesEmoji from '../illustrations/eyes.png';
import ExplosionEmoji from '../illustrations/001-explosion.png';
import SleepingEmoji from '../illustrations/002-sleeping.png';

export type AvailableEmojis =
    | 'cool'
    | 'sad'
    | 'smile'
    | 'party'
    | 'thinking'
    | 'loveFace'
    | 'moneyFace'
    | 'eyes'
    | 'explosion'
    | 'sleeping';

export const EmojiMapper: Record<AvailableEmojis, any> = {
    cool: CoolEmoji,
    loveFace: LoveFaceEmoji,
    moneyFace: MoneyEmoji,
    party: PartyEmoji,
    sad: SadEmoji,
    smile: SmilingEmoji,
    thinking: ThinkingEmoji,
    eyes: EyesEmoji,
    explosion: ExplosionEmoji,
    sleeping: SleepingEmoji,
};
