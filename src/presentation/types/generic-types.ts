export type ChartTypes = "line" | "column" | "bar" | "pie";

export type HighChartsData = {
    type: ChartTypes;
    data: number[] | number[][];
};
