import { Link } from 'react-router-dom'
import '../../assets/styles/index-area.css'

export function Home() {
    return (
        <div id="index-area" className="win h100 flex column go-center gap-xsm area hidden">
            <div id="index-area-components" className="flex column go-center">
                <img id="logo-oa" src="./logo-b.png" alt=""/>
                <div className="flex column go-center gap-sm mt-1">
                    <Link to="/teorico" className="module w15"><span className='font-s2'>📖</span> Módulo Teórico</Link>
                    <Link to="/pratico" className="module w15"><span className='font-s2'>🧠</span> Módulo Prático</Link>
                    <Link to="/leitura" className="module w15 emphasis"><span className='font-s2'>👀</span> Módulo Leia</Link>
                </div>
            </div>
        </div>
    )
}