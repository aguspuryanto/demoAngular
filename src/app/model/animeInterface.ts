export interface AnimeInterface {
    id: number;
    iconUrl: string;
    name: string;
    description: string;
    type: string;     // whether a series/movie/OVA.
    status: string;
    comments: string[];
    source: string;
    operator: string;
    lift: string;
    subscribe: string;
  }