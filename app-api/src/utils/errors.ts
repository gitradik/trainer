export interface IErrors {
    message: string;
    errors?: { message: string, path: string }[];
}