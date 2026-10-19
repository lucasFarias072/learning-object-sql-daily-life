

export type SubjectSlug =
  | 'join'
  // | 'filtros-compostos'
  | 'aggregate'
  | 'subconsultas'
  | 'case-when'
  // | 'funcoes-escalares'
  // | 'conjuntos'

export interface Subject {
  slug: SubjectSlug
  title: string
}

export const subjects: Subject[] = [
  { slug: 'join', title: 'JOIN' },
  // { slug: 'filtros-compostos', title: 'Filtros compostos' },
  { slug: 'aggregate', title: 'Funções agregadoras + GROUP BY' }, // Agregação e GROUP BY/HAVING
  { slug: 'subconsultas', title: 'Subconsultas' },
  { slug: 'case-when', title: 'CASE WHEN' },
  // { slug: 'funcoes-escalares', title: 'Funções escalares' },
  // { slug: 'conjuntos', title: 'Conjuntos (DISTINCT)' },
]
