

import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-tomorrow.css"; // tema escuro; troque se quiser outro
import { Modal } from "../shared/Modal"; // ajuste o caminho pro seu Modal.tsx

interface QueryPreviewModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  query: string;
}

export default function QueryPreviewModal({ isOpen, title, onClose, query }: QueryPreviewModalProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isOpen && codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [isOpen, query]);

  if (!isOpen) return null;

  return (
    <Modal open={isOpen} title={title} onClose={onClose}>
      <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
        <code ref={codeRef} className="language-sql">
          {query !== '' ? query : 'Nenhuma consulta SQL foi executada neste cenário ainda.'}
        </code>
      </pre>
    </Modal>
  );
}
