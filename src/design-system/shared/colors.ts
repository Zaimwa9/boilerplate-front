export interface colorsTypes {
  white: string;
  grey: {
    grey_darken: string;
    grey: string;
    grey_light: string;
    grey_lighten: string;
    grey_mouse: string;
  };
  blue: {
    black: string;
    black_transparent3: string;
    black_transparent4: string;
    black_transparent6: string;
    black_transparent7: string;
    blue_grey40: string;
    blue_grey30: string;
    blue_grey20: string;
    blue_grey10: string;
    blue_grey: string;
    blue_messenger: string;
  };
}

export const colors: colorsTypes = {
  white: "#FFFFFF",
  grey: {
    grey_darken: "#67727D",
    grey: "#818E9C",
    grey_light: "#9AA5B0",
    grey_lighten: "#E2E2E2",
    grey_mouse: "#DFE4EC",
  },
  blue: {
    black: "#001E3F",
    black_transparent3: "rgba(4, 30, 58, 0.3)",
    black_transparent4: "rgba(4, 30, 58, 0.4)",
    black_transparent6: "rgba(4, 30, 58, 0.6)",
    black_transparent7: "rgba(4, 30, 58, 0.7)",
    blue_grey40: "#374E69",
    blue_grey30: "#7C8C9F",
    blue_grey20: "#CFD4DF",
    blue_grey10: "#E6ECF8",
    blue_grey: "#F0F4FB",
    blue_messenger: "#0080FF",
  },
};
