

// <span className="blue p-sm upper">join</span>

interface InkProps {
    label: string
    css: string
    padding: string
    slender: boolean
}

export function Ink({label, css, padding, slender}: InkProps) {
    return <>
        <span className={slender ? `${css} ${padding} upper` : `${css} ${padding}`}>{label}</span>
    </>
}
