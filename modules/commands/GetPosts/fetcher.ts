import { SERVER_ENV } from "@/modules/env";
import { GetPosts$Params, GetPosts$Result } from "./typing";

export async function httpGet$GetPosts(path: string, params?: GetPosts$Params) {
  const urlSearchParams = new URLSearchParams(params);
  const response = await fetch(
    SERVER_ENV.WORDPRESS_URL + path + "?" + urlSearchParams.toString(),
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!response.ok) {
    throw new Error("response not ok");
  }
  const text = await response.text();
  const data = JSON.parse(text);
  const result = GetPosts$Result.parse(data);
  return result;
}