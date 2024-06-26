import {
  IFavoriteProperty,
  IPropertyCard,
  IResponseProperties,
  IResponseProperty,
} from "@/common/interfaces/property/property";

type FetcherAllPropertysType = { page?: number; limit?: number } | void;

// TODO Убрать no-cash поставить revalidate

export const fetcherAllPropertys = async (params = ""): Promise<IResponseProperties> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/properties?${params}`, { cache: "no-cache" });

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

export const fetcherSwitchFavourite = async (property: IPropertyCard, token: string): Promise<IFavoriteProperty> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/properties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(property),
      cache: "no-cache",
    });

    return res.json();
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request get one Property");
  }
};

export const fetcherGetAllFavourite = async (token?: string): Promise<IResponseProperties> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/me/favourites`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },

      cache: "no-cache",
    });

    return res.json();
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request get one Property");
  }
};
