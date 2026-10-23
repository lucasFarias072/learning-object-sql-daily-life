

import { Link } from 'react-router-dom'

export function ReturnBtn() {
    return (
        <Link to="/">
        <button style={{
            position: 'fixed', top: '0', left: '0',
            background: 'salmon', color: 'white',
            border: 'black solid 1px', padding: '.25rem 1rem', fontSize: '1rem', cursor: 'pointer'
        }}>⏎ retornar</button></Link>
    )
}
