import { combineCsvs } from "./combineCsv";

describe("combineCsvs", () => {
    test("returns an empty string for no files", () => {
        expect(combineCsvs([])).toBe("");
    });

    test("prefixes each file with its source and keeps order", () => {
        const out = combineCsvs([
            { name: "a.csv", content: "Table: Table_0\n\nx;y;\n\n\n" },
            { name: "b.csv", content: "1;2;\n" },
        ]);
        expect(out).toBe(
            "Source: a.csv\n\nTable: Table_0\n\nx;y;\n\n\nSource: b.csv\n\n1;2;\n"
        );
    });
});
