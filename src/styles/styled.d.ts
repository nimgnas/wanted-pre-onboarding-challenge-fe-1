import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      lightBlack: string;
      Black: string;
      gray: string;
      blue: string;
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
