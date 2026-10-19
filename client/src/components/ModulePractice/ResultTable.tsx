

interface ResultTableProps {
  data: Record<string, unknown>[] | null;
}

export function ResultTable({ data }: ResultTableProps) {
  
  if (!data || data.length === 0) {
    return <p>Nenhum resultado encontrado.</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <table className="result-table">
      <thead>
        <tr>
          {columns.map((col) => (
            col.includes('fk') || col.includes('_x') || col.includes('_y')
            ? <th className='fk-th' key={col}>🔑 {col}</th> 
            : <th key={col}>{col}</th>
            // <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              i % 2 === 0 
              ? <td className="light" key={col}>{String(row[col])}</td>
              : <td className="light-dark" key={col}>{String(row[col])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// index % 2 === 0 ? <td className='light' key={field}>{row[field]}</td> : <td className='light-dark' key={field}>{row[field]}</td>