export interface Food {
    id: number;
    desciption: string;
    tags: Array<string>;
    manufacturer: string;
    group: string;
    nutrients: Array<object>;
    portions: Array<object>
}
