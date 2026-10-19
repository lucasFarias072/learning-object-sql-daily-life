

export function requirementShield(value: string): boolean {
  const rawSQL = value.replace(/\s+/g, " ").trim().replace(/;$/, "").toLowerCase()
  const forbiddenSyntax = ['delete', 'update', 'create', 'drop', 'insert']
  const forbade = forbiddenSyntax.some(word => rawSQL.includes(word))
  return rawSQL.includes("select") && rawSQL.includes("from") && !forbade && rawSQL.split(" ").length >= 4
}
