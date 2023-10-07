import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import SignIcon from '@/shared/assets/icons/signMark.svg';
import CopyIconNew from '@/shared/assets/icons/copy.svg';
import { Button, ButtonTheme } from '../../deprecated/Button/Button';
import cls from './Code.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;
    const [isCopied, setIsCopied] = useState(false);
    const { t } = useTranslation();

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
    }, [text]);

    setTimeout(() => {
        setIsCopied(false);
    }, 3000);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <pre
                    className={classNames(cls.CodeRedesigned, {}, [className])}
                >
                    <Icon
                        clickable
                        onClick={onCopy}
                        className={cls.copyBtn}
                        Svg={CopyIconNew}
                    />
                    <code>{text}</code>
                </pre>
            }
            off={
                <pre className={classNames(cls.Code, {}, [className])}>
                    <Button
                        onClick={onCopy}
                        className={cls.copyBtn}
                        theme={ButtonTheme.CLEAR}
                    >
                        {isCopied ? (
                            <SignIcon className={cls.signIcon} />
                        ) : (
                            <CopyIcon className={cls.copyIcon} />
                        )}
                    </Button>
                    <code>{text}</code>
                </pre>
            }
        />
    );
});
