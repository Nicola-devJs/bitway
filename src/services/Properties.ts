import { IPropertyCard, IResponseProperties, IResponseProperty } from "@/common/interfaces/property/property";

type FetcherAllPropertysType = { page?: number; limit?: number } | void;

// TODO Убрать no-cash поставить revalidate

export const fetcherAllPropertys = async (): Promise<IResponseProperties> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/properties`, { cache: "no-cache" });

    return res.json();
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request get all Propertys");
  }
};

export const fetcherOneProperty = async (id: string): Promise<IResponseProperty> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/properties/${id}`, { cache: "no-cache" });

    return res.json();
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request get one Property");
  }
};
