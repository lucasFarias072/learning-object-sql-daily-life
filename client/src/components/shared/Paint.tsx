

interface PaintProps {
    label: string
    css: string
    padding: string
    slender: boolean
    className?: string
}

export function Paint({label, css, padding, slender, className}: PaintProps) {
    const classes = [css, padding, slender ? 'upper' : '', className].filter(Boolean).join(' ')

    return <>
        <p className={classes}>{label}</p>
    </>
}
