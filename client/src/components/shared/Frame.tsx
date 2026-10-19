

import { Ink } from "./Ink"
import { Paint } from "./Paint";

interface FrameProps {
    cmd: string;
    label: string;
}

export function Frame({cmd, label}: FrameProps) {

    // Palavra em cacha alta
    if (cmd === 'u') {
        return <>
            <Ink label={label} css='' padding='' slender={true}/>
        </>
    }
    else if (cmd === '!u') {
        return <>
            <Ink label={label} css='' padding='' slender={false}/>
        </>
    }

    // Aqua
    else if (cmd === 'pool i !u') {
        return <>
            <Ink label={label} css='pool' padding='p-sm' slender={false}/>
        </>
    } else if (cmd === 'pool p !u') {
        return <>
            <Paint label={label} css='pool' padding='p-mid' slender={false}/>
        </>
    } else if (cmd === 'pool i u') {
        return <>
            <Ink label={label} css='pool' padding='p-sm' slender={true}/>
        </>
    } 

    // Blue
    else if (cmd === 'blue i !u') {
        return <>
            <Ink label={label} css='blue' padding='p-sm' slender={false}/>
        </>
    } else if (cmd === 'blue p !u') {
        return <>
            <Paint label={label} css='blue' padding='p-mid' slender={false}/>
        </>
    } else if (cmd === 'blue i u') {
        return <>
            <Ink label={label} css='blue' padding='p-sm' slender={true}/>
        </>
    } 

    // Cream
    else if (cmd === 'cream i !u') {
        return <>
            <Ink label={label} css='cream' padding='p-sm' slender={false}/>
        </>
    } else if (cmd === 'cream p !u') {
        return <>
            <Paint label={label} css='cream' padding='p-mid' slender={false}/>
        </>
    } else if (cmd === 'cream i u') {
        return <>
            <Ink label={label} css='cream' padding='p-sm' slender={true}/>
        </>
    } 
    
    // Dark blue
    else if (cmd === 'd-blue i !u') {
        return <>
            <Ink label={label} css='d-blue' padding='p-sm' slender={false}/>
        </>
    } else if (cmd === 'd-blue p !u') {
        return <>
            <Paint label={label} css='d-blue' padding='p-mid' slender={false}/>
        </>
    } else if (cmd === 'd-blue i u') {
        return <>
            <Ink label={label} css='d-blue' padding='p-sm' slender={true}/>
        </>
    } 

    // Dark cyan
    else if (cmd === 'd-cyan i !u') {
        return <>
            <Ink label={label} css='d-cyan' padding='p-sm' slender={false}/>
        </>
    } else if (cmd === 'd-cyan p !u') {
        return <>
            <Paint label={label} css='d-cyan' padding='p-mid' slender={false}/>
        </>
    } else if (cmd === 'd-cyan i u') {
        return <>
            <Ink label={label} css='d-cyan' padding='p-sm' slender={true}/>
        </>
    } 

    // Pink
    else if (cmd === 'pk i !u') {
        return <>
            <Ink label={label} css='pk' padding='p-sm' slender={false}/>
        </>
    } else if (cmd === 'pk p !u') {
        return <>
            <Paint label={label} css='pk' padding='p-mid' slender={false}/>
        </>
    } else if (cmd === 'pk i u') {
        return <>
            <Ink label={label} css='pk' padding='p-sm' slender={true}/>
        </>
    } 

    // Purple
    else if (cmd === 'ppl i !u') {
        return <>
            <Ink label={label} css='ppl' padding='p-sm' slender={false}/>
        </>
    } else if (cmd === 'ppl p !u') {
        return <>
            <Paint label={label} css='ppl' padding='p-mid' slender={false}/>
        </>
    } else if (cmd === 'ppl i u') {
        return <>
            <Ink label={label} css='ppl' padding='p-sm' slender={true}/>
        </>
    } 

    // Red
    else if (cmd === 'red i !u') {
        return <>
            <Ink label={label} css='red' padding='p-sm' slender={false}/>
        </>
    } else if (cmd === 'red p !u') {
        return <>
            <Paint label={label} css='red' padding='p-mid' slender={false}/>
        </>
    } else if (cmd === 'red i u') {
        return <>
            <Ink label={label} css='red' padding='p-sm' slender={true}/>
        </>
    } 

    // Shine
    else if (cmd === 'shine i !u') {
        return <>
            <Ink label={label} css='shine' padding='p-sm' slender={false}/>
        </>
    } else if (cmd === 'shine p !u') {
        return <>
            <h3 className="shine p-mid">{label}</h3>
        </>
    } else if (cmd === 'shine i u') {
        return <>
            <Ink label={label} css='shine' padding='p-sm' slender={true}/>
        </>
    } 
    
    // Yellow
    else if (cmd === 'ylw i !u') {
        return <>
            <Ink label={label} css='ylw' padding='p-sm' slender={false}/>
        </>
    } else if (cmd === 'ylw p !u') {
        return <>
            <Paint label={label} css='ylw' padding='p-mid' slender={false}/>
        </>
    } else if (cmd === 'ylw i u') {
        return <>
            <Ink label={label} css='ylw' padding='p-sm' slender={true}/>
        </>
    } 

    else if (cmd === 'ui') {
        return <>
            <Ink label={label} css='mixed' padding='p-sm' slender={true}/>
        </>
    } 
    else if (cmd === 'p !u') {
        return <>
            <Ink label={label} css='mixed' padding='p-mid' slender={false}/>
        </>
    } else if (cmd === 'p u') {
        return <>
            <Ink label={label} css='mixed' padding='p-mid' slender={true}/>
        </>
    } else if (cmd === 'i u') {
        return <>
            <Ink label={label} css='mixed' padding='p-sm' slender={true}/>
        </>
    }
    
    // Often used
    return <>
        <Ink label={label} css='mixed' padding='p-sm' slender={false}/>
    </>
}
