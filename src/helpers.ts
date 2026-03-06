export const rangeCreator = (start: number, end: number, total: number) => {
    const final = (end * 5) > total ? Math.ceil((total / 5)) : end;
    return Array.from(Array(final + 1).keys()).slice(start)
}
