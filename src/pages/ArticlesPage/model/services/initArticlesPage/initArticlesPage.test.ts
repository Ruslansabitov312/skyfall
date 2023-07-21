import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success when not inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalled();
    });

    test('fail when already inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalled();
    });
});
