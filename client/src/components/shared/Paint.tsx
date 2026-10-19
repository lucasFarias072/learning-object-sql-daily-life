

interface PaintProps {
    label: string
    css: string
    padding: string
    slender: boolean
}

export function Paint({label, css, padding, slender}: PaintProps) {
    return <>
        <p className={slender ? `${css} ${padding} upper` : `${css} ${padding}`}>{label}</p>
    </>
}
