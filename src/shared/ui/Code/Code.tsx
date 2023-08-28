import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import SignIcon from '@/shared/assets/icons/signMark.svg';
import { Button, ButtonTheme } from '../Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;
    const [isCopied, setIsCopied] = useState(false);

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
        setIsCopied(true);
    }, [text]);

    setTimeout(() => {
        setIsCopied(false);
    }, 3000);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                {isCopied ? (
                    <SignIcon className={cls.signIcon} />
                ) : (
                    <CopyIcon className={cls.copyIcon} />
                )}
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
