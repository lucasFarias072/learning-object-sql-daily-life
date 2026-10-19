



interface SqlProps {
    word: string
}

export function Sql({word}: SqlProps) {
    return <>
        <span className="native p-sm upper">{word}</span>
    </>
}

