import { IPropertyCard, IResponseProperties } from "@/common/interfaces/property/property";

type FetcherAllPropertysType = { page?: number; limit?: number } | void;

export const fetcherAllPropertys = async (): Promise<IPropertyCard[]> => {
  try {
    const res = await fetch(`http://localhost:8000/properties`);

    return res.json();
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request get all Propertys");
  }
};

export const fetcherAllPropertysWithPagination = async (
  params: FetcherAllPropertysType
): Promise<IResponseProperties> => {
  try {
    const res = await fetch(
      `http://localhost:8000/properties?_page=${params?.page || 1}&_per_page=${params?.limit || 10}`
    );

    return res.json();
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request get all Propertys");
  }
};

export const fetcherOneProperty = async (id: string): Promise<IPropertyCard> => {
  try {
    const res = await fetch(`http://localhost:8000/properties/${id}`, { cache: "no-cache" });

    return res.json();
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request get one Property");
  }
};
