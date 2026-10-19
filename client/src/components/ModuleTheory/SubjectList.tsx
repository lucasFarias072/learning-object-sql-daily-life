

import { Link } from 'react-router-dom'
import { subjects } from '../../data/subjects'

export function SubjectList() {
    return (
        <div className="win h100 flex column go-center gap-xsm area">
            <h1 className="generic-title">📘 Assuntos SQL</h1>
            <div className="flex column go-center gap-xsm mt-1">
                {subjects.map(subject => (
                    <Link key={subject.slug} to={`/teorico/${subject.slug}`} className="module">
                        <div className='flex column go-center gap-sm'>
                            <p style={{fontSize: "1.5rem"}}>📖</p>
                            <p>{subject.title}</p>
                        </div>
                         
                    </Link>
                ))}
            </div>
        </div>
    )
}