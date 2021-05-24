export interface IErrorListItem {
    message: string;
    path: string;
}

export interface IErrors {
    message: string;
    errors?: IErrorListItem[];
}