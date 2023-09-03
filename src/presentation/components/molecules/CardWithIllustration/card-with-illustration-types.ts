export type CardWithIllustrationColors =
    | 'soft-green'
    | 'soft-blue'
    | 'soft-yellow'
    | 'soft-red';

export type CardWithIllustrationParams = {
    children: React.ReactNode;
    illustration: React.ReactNode;
    backgroundColor: CardWithIllustrationColors;
    title: string;
    callToAction?: string;
    action?: () => void;
    direction?: 'to-rigth' | 'to-left';
};
