export interface PostInterface{
    id: number
    title: string;
    content: string;
}

export interface PostCardInterface {
    post: PostInterface
}

export interface ButtonPropsInterface {
    variant?: any,
    children: string,
    color?: any,
    onClick: () => void;
}