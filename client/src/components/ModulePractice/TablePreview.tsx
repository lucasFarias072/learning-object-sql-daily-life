// import React from 'react';
import type { TableRecord } from '../../types/Containers'

interface TablePreviewProps {
  tableName: string
  fields: string[]
  data: TableRecord[]
}

export function TablePreview({tableName, fields, data}: TablePreviewProps) {
  // console.log("Função do TablePreview")
  // console.log(data)
  return (
        <div className="flex column gap-xsm">
          <h3 className="title-sm table-alias">{tableName}</h3>
          <table className="db mt-1">
            <thead className="db-column">
              <tr>
                {fields.map(field => (
                  field.includes('fk') || field.includes('_x') || field.includes('_y') 
                  ? <th className='fk-th' key={field}>🔑 {field}</th>
                  : <th key={field}>{field}</th>
                ))}
              </tr>
            </thead>
            <tbody className="db-row">
              {data.map((row, index) => (
                <tr key={index}>
                  {fields.map(field => (
                    index % 2 === 0 ? <td className='light' key={field}>{row[field]}</td> : <td className='light-dark' key={field}>{row[field]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  );
}
