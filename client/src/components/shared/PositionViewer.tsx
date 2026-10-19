

import { useCallback, useState } from 'react';

export function PositionViewer({children}: {children: React.ReactNode}) {
    const [y, setTop] = useState(0);
    const [x, setLeft] = useState(0);

    // Esse callback roda automaticamente quando o elemento entra na tela
    const getRect = useCallback((node: HTMLElement | null) => {
        if (node !== null) {
        const { x, y } = node.getBoundingClientRect();
        // console.log('Elemento:', node.getBoundingClientRect());
        
        // Se precisar salvar no estado para usar no HTML:
        setTop(y);
        setLeft(x);
        }
    }, []);

    return (
        <>
            <div ref={getRect} style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
                {children}
                <p>Topo: {y}</p> <p>Esquerda: {x}</p>
            </div>
        </>
    );
}
