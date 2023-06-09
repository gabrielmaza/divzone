
type Props = {
    className?: string;
    children: React.ReactNode;
}

export default function HText({ className, children }: Props) {
    return (
        <h2 className={`basis-3/5 font-montserrat text-3xl font-bold ${className}`}>{children}</h2>
    )
}