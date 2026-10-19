

import { type ReactNode }  from 'react';

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, title, onClose, children }: ModalProps) {

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose} draggable='true'
      style={
        { zIndex: 1, position: 'fixed', top: '0', left: '0', height: '100vh', width: '100vw'}
      }
    >
      <div className="modal-content flex column gap-xsm" 
        style={
          { 
            background: 'linear-gradient(15deg, #D1FAE5, rgb(233, 245, 223), rgb(70, 140, 230))', border: '#222 solid 1px', borderRadius: '.3rem',  
            margin: '.3rem 0 0 .3rem', padding: '.7rem', maxWidth: '90vw', maxHeight: '85vh'
          }
        } 
        onClick={(event) => event.stopPropagation()}
      >
        <header className="modal-header">
          <div className='flex row gap-lg'>
              <h2>{title}</h2>
              <button id="modal-closure" type="button" onClick={onClose} aria-label="Fechar">×</button>
          </div>
        </header>
        <div className="modal-body" style={{ overflow: 'auto', maxHeight: 'calc(85vh - 3rem)' }}>{children}</div>
      </div>
    </div>
  );
}
