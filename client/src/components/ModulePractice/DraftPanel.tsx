

type Props = {
  position: 'top-right' | 'bottom-left' | null;
  note: string;
  onChange: (texto: string) => void;
};

export function DraftPanel({ position, note, onChange }: Props) {
  if (!position) return null;

  return (
    <div className={`draft-panel draft-panel-${position}`}>
      <textarea
        className="textarea-draft"
        value={note}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Anote aqui suas ideias seus pensamentos, blocos de consulta, abstrações..."
      />
    </div>
  );
}
