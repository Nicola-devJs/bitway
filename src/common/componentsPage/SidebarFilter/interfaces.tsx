export interface IDynamicFilter {
  onChangeDynamicFilter: (filter: Record<string, string | string[]>) => void;
}
