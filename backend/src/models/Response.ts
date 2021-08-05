export interface Response {
    aggregators: any;
    offset: number;
    pagination: { previous: string | null; next: string };
    results: Array<any>;
    size: number;
    total: number;
  }
  