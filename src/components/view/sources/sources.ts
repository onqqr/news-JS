import { ISource } from '../../../types/interfaces';
import './sources.css';

class Sources {
    public draw(data: Readonly<ISource[]>): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: ISource) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources') as HTMLElement;
        const wrap = document.querySelector('.sources-wrap') as HTMLElement;

        sources.append(fragment);

        const updateFades = (): void => {
            const maxScroll = sources.scrollWidth - sources.clientWidth;
            const left = sources.scrollLeft;

            wrap.classList.toggle('has-left', left > 1);
            wrap.classList.toggle('has-right', left < maxScroll - 1);
        };

        sources.addEventListener('scroll', updateFades);
        window.addEventListener('resize', updateFades);
        updateFades();
    }
}

export default Sources;
