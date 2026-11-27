/**
 * Concatenate several processed CSV outputs into one text document.
 *
 * Each input is { name, content }. The Lambda emits free-form, semicolon
 * separated table blocks (not a uniform header + rows), so files are not
 * merged column-wise. Each file's content is kept intact and preceded by a
 * "Source: <name>" line so rows can be traced back to their file.
 */
export function combineCsvs(files) {
    return files
        .map(({ name, content }) => `Source: ${name}\n\n${String(content).replace(/\s+$/, "")}\n`)
        .join("\n\n");
}
