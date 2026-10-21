

export function sqlNormalizer(sql: string) {
    return sql.replace(/[(),;]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase()
}
