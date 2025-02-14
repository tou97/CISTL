import { colorsTuple, createTheme } from "@mantine/core";

export const minimal_theme = createTheme({
  colors: {
    offwhite: colorsTuple("#FDFAF1"),
    sky: colorsTuple("#90B7BB"),
    wood: colorsTuple("#A58870"),
    olive: colorsTuple("#657060"),
    berry: colorsTuple("#A57071"),
  },
  fontFamily: "HK Grotesk, sans-serif",
  headings: { fontFamily: "Adobe Garamond Pro, serif" },
});

export const modern_theme = createTheme({
  colors: {
    strength: colorsTuple("#FF5100"),
    truth: colorsTuple("#005CB9"),
    joy: colorsTuple("#EED215"),
    black: colorsTuple("#000000"),
  },
});
