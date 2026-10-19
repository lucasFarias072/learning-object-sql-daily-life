

type Props = {
  visible: boolean;
  note: string;
  onChange: (texto: string) => void;
};

export function DraftPanel({ visible, note, onChange }: Props) {
  if (!visible) return null;

  return (
    <div className="draft-panel">
      <textarea
        className="textarea-draft"
        value={note}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Anote aqui suas ideias seus pensamentos, blocos de consulta, abstrações..."
      />
    </div>
  );
}
