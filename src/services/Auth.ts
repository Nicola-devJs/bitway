import { IAuthUser, ICreateUser, IUserResponse } from "@/common/interfaces/IAuth";

export const fetcherAuthLogin = async (body: IAuthUser): Promise<IUserResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_AUTH}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw res.status;
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Неверный логин или пароль " + err);
  }
};

export const fetcherAuthCreate = async (body: ICreateUser): Promise<IUserResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_AUTH}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw res.status;
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request create User");
  }
};

export const fetcherAuthForgot = async (body: { email: string }): Promise<{ status: string }> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_AUTH}/forgot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw res.status;
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request forgot password");
  }
};

export const fetcherAuthOTP = async (body: { code: string }): Promise<{ status: string }> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_AUTH}/otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw res.status;
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request code");
  }
};

export const fetcherAuthChangePassword = async (body: {
  password: string;
  email: string;
}): Promise<{ status: string }> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_AUTH}/changePassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      throw res.status;
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request change password");
  }
};

export const fetcherAuthMe = async (token: string): Promise<IUserResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_AUTH}/me`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw res;
    }

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Неверный логин или пароль " + err);
  }
};
