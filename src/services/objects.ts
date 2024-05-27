import { IResponseProperties } from "@/common/interfaces/object/property";

type FetcherAllObjectsType = { page: number; limit?: number };

export const fetcherAllObjects =
  ({ page, limit = 10 }: FetcherAllObjectsType) =>
  async (): Promise<IResponseProperties> => {
    const res = await fetch(`http://localhost:8000/properties?_page=${page + 1}&_per_page=${limit}`);

    return res.json();
  };
