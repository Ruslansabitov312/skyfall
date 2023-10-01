import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
    const { className } = props;
    const {
        onChangeSort,
        onChangeType,
        sort,
        type,
        onChangeSearch,
        search,
        onChangeOrder,
        order,
    } = useArticleFilters();

    return (
        <ArticlesFilters
            className={className}
            sort={sort}
            order={order}
            type={type}
            search={search}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
            onChangeType={onChangeType}
            onChangeSearch={onChangeSearch}
        />
    );
});
