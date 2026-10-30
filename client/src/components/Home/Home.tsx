import { Link } from 'react-router-dom'
import '../../assets/styles/index-area.css'

export function Home() {
    return (
        <div id="index-area" className="win h100 flex column go-center gap-xsm area hidden">
            <div id="index-area-components" className="flex column go-center">
                <img id="logo-oa" src="./logo-b.png" alt=""/>
                <nav>
                    <div className="flex column go-center gap-sm mt-1">
                        <ul className='flex column gap-sm'>
                            <li className="module w15">
                                <Link className='d-block' to="/teorico" >
                                <span className='font-s2'>📖</span> 
                                <span>Módulo Teórico</span>
                                </Link>
                            </li>
                            <li className="module w15">
                                <Link className='d-block' to="/pratico" >
                                <span className='font-s2'>🧠</span> 
                                <span>Módulo Prático</span>
                                </Link>
                            </li>
                            <li className="module w15 emphasis">
                                <Link className='d-block' to="/leitura" >
                                <span className='font-s2'>👀</span> 
                                <span>Módulo Leia</span>
                                </Link>
                            </li>
                            {/* <li><Link to="/teorico" className="module w15"><span className='font-s2'>📖</span> Módulo Teórico</Link></li> */}
                            {/* <li><Link to="/pratico" className="module w15"><span className='font-s2'>🧠</span> Módulo Prático</Link></li> */}
                            {/* <li><Link to="/leitura" className="module w15 emphasis"><span className='font-s2'>👀</span> Módulo Leia</Link></li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}