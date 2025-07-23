import fs from "node:fs";
import fsp from "node:fs/promises";

import radixColors from "@radix-ui/colors";
import { rimraf } from "rimraf";

// Clean up dist
await rimraf("./dist");

const themes = [
  {
    grayScale: "mauve",
    accentColor: "violet",
  },
  {
    grayScale: "slate",
    accentColor: "indigo",
  },
  {
    grayScale: "olive",
    accentColor: "grass",
  },
];

await fsp.mkdir("./dist");

for (const theme of themes) {
  const writer = fs.createWriteStream(
    `./dist/${theme.grayScale}-${theme.accentColor}.css`,
  );
  writer.write(":root {\n");
  // Color Tokens
  for (let step = 1; step <= 12; step++) {
    const lightColor =
      radixColors[theme.grayScale][`${theme.grayScale}${step}`];
    const darkColor =
      radixColors[`${theme.grayScale}Dark`][`${theme.grayScale}${step}`];
    writer.write(`  --app-${step}: light-dark(${lightColor},${darkColor});\n`);
  }
  for (let step = 1; step <= 12; step++) {
    const lightColor =
      radixColors[theme.accentColor][`${theme.accentColor}${step}`];
    const darkColor =
      radixColors[`${theme.accentColor}Dark`][`${theme.accentColor}${step}`];
    writer.write(
      `  --accent-${step}: light-dark(${lightColor},${darkColor});\n`,
    );
  }

  writer.write("\n");
  // Semantic Tokens
  writer.write("  --app-bg: white;\n");
  writer.write(
    `  --app-bg-dark: color-mix(in oklab, ${radixColors[`${theme.grayScale}Dark`][`${theme.grayScale}1`]} 90%, transparent);\n`,
  );
  writer.write("}\n");
  writer.close();
}
