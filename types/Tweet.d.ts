export interface Tweet {
    id: string;
    author: {
      name: string;
      handle: string;
      avatar?: string;
      verified?: boolean;
    };
    content: string;
    date: string;
  }
  