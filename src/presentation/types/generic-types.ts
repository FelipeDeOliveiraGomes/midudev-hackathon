export type ChartTypes = 'line' | 'column' | 'bar' | 'pie';

export type HighChartsData = {
    type: ChartTypes;
    data: Array<any>;
    name?: string;
};

export type SetStateType<T = any> = React.Dispatch<React.SetStateAction<T>>;
