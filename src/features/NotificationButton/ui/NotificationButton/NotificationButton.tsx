import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { NotificationList } from '@/entities/Notification';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import cls from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(
    ({ className }: NotificationButtonProps) => {
        const [isOpen, setIsOpen] = useState(false);
        // const isMobile = useDevice(); // Второй вариант с кастомным хуком без библиотеки

        const onOpenDrawer = useCallback(() => {
            setIsOpen(true);
        }, []);

        const onCloseDrawer = useCallback(() => {
            setIsOpen(false);
        }, []);

        const trigger = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Icon
                        Svg={NotificationIcon}
                        clickable
                        onClick={onOpenDrawer}
                    />
                }
                off={
                    <ButtonDeprecated
                        theme={ButtonTheme.CLEAR}
                        onClick={onOpenDrawer}
                    >
                        <IconDeprecated
                            Svg={NotificationIconDeprecated}
                            inverted
                        />
                    </ButtonDeprecated>
                }
            />
        );

        return (
            <div>
                <BrowserView>
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <Popover
                                className={classNames(
                                    cls.NotificationButton,
                                    {},
                                    [className],
                                )}
                                direction="bottom left"
                                trigger={trigger}
                            >
                                <NotificationList
                                    className={cls.notifications}
                                />
                            </Popover>
                        }
                        off={
                            <PopoverDeprecated
                                className={classNames(
                                    cls.NotificationButton,
                                    {},
                                    [className],
                                )}
                                direction="bottom left"
                                trigger={trigger}
                            >
                                <NotificationList
                                    className={cls.notifications}
                                />
                            </PopoverDeprecated>
                        }
                    />
                </BrowserView>
                <MobileView>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
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
    },
);
