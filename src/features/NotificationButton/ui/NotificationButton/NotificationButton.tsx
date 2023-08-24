import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { NotificationList } from 'entities/Notification';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { AnimationProvider } from 'shared/lib/components/AnimationProvider';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(({ className }: NotificationButtonProps) => {
    const [isOpen, setIsOpen] = useState(false);
    // const isMobile = useDevice(); // Второй вариант с кастомным хуком без библиотеки

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationButton, {}, [className])}
                    direction="bottom left"
                    trigger={trigger}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>
    );

    // return (
    //     <div>
    //         {
    //             isMobile ? (
    //                 <>
    //                     {trigger}
    //                     <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
    //                         <NotificationList />
    //                     </Drawer>
    //                 </>
    //             ) : (
    //                 <Popover
    //                     className={classNames(cls.NotificationButton, {}, [className])}
    //                     direction="bottom left"
    //                     trigger={trigger}
    //                 >
    //                     <NotificationList className={cls.notifications} />
    //                 </Popover>
    //             )
    //         }
    //     </div>
    // );
});