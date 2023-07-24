import { BaseProps } from '@/typings'
import { twMerge } from 'tailwind-merge'

interface Props extends BaseProps {
    className?: string
}

export default function Box({ children, className }: Props) {
    return (
        <div
            className={twMerge(
                `bg-neutral-900 rounded-lg h-fit w-full`,
                className
            )}
        >
            {children}
        </div>
    )
}
