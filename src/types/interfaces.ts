export interface ISource {
    id: string;
    name: string;
    description?: string;
    url?: string;
    category?: string;
    language?: string;
    country?: string;
}

export interface IArticle {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content?: string | null;
}

export interface ISourcesResponse {
    status: string;
    sources: ISource[];
}

export interface INewsResponse {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export type Endpoint = 'sources' | 'everything';

export interface IRequestOptions {
    sources?: string;
    [key: string]: string | undefined;
}

export interface ILoaderOptions {
    apiKey: string;
}

export enum HttpMethod {
    GET = 'GET',
}
export type Callback<T> = (data: T | null) => void;
export type ArticlePreview = Pick<IArticle, 'title' | 'url' | 'description'>;
export type ReadonlySource = Readonly<ISource>;
