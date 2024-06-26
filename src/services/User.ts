import { IMessageData } from "@/common/interfaces/IMessage";

export const fetcherSendMessage = async (id: string, messageData: IMessageData): Promise<unknown> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/properties/${id}`, {
      method: "POST",
      body: JSON.stringify(messageData),
      cache: "no-cache",
    });

    return res.json();
  } catch (err) {
    console.error(err);
    throw new Error("Invalid request send message");
  }
};
