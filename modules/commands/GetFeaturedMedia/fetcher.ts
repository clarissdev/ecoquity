import { SERVER_ENV } from "@/modules/env";
import { GetFeaturedMedia$Params, GetFeaturedMedia$Result } from "./typing";

export async function httpGet$GetFeaturedMedia(
  path: string,
  params: GetFeaturedMedia$Params
) {
  const response = await fetch(
    SERVER_ENV.WORDPRESS_URL + path + "/" + params.id,
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
  const result = GetFeaturedMedia$Result.parse(data);
  return result;
}
