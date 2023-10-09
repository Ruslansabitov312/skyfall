import { Story } from '@storybook/react';
import { setFeatureFlags } from '@/shared/lib/features';
import { getAllFeatureFlags } from '@/shared/lib/features/lib/setGetFeatures';

export const NewDesignDecorator = (StoreComponent: Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });

    return (
        <div className="app_redesigned">
            <StoreComponent />
        </div>
    );
};
