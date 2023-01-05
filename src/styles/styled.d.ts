import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      lightBlack: string;
      black: string;
      gray: string;
      blue: string;
      white: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };
  }
}
