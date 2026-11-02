import { INewsResponse, ISourcesResponse } from '../../types/interfaces';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: INewsResponse | null): void {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    public drawSources(data: ISourcesResponse | null): void {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
