

// <span className="blue p-sm upper">join</span>

interface InkProps {
    label: string
    css: string
    padding: string
    slender: boolean
    className?: string
}

export function Ink({label, css, padding, slender, className}: InkProps) {
    const classes = [css, padding, slender ? 'upper' : '', className].filter(Boolean).join(' ')

    return <>
        <span className={classes}>{label}</span>
    </>
}
