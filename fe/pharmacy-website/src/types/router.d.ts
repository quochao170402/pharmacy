export interface RouteConfig {
  path: string;
  label: string;
  icon?: ReactNode;
  component?: ReactNode;
  children?: RouteConfig[];
}
