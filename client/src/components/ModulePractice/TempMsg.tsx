

import { useState, useEffect } from 'react';

interface TempMsgProps {
  txtContent: string;
}

export function TempMsg({ txtContent }: TempMsgProps) {
  const [txt, setTxt] = useState(txtContent);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTxt('');
    }, 5000); // 3000ms = 3 segundos

    // Limpa o temporizador se o componente sumir da tela
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={txt ? 'temp-msg-style' : ''}>
      <p>{txt}</p>
    </div>
  );
}