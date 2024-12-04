import { SERVER_ENV } from "@/modules/env";
import { GetCategory$Params, GetCategory$Result } from "./typing";

export async function httpGet$GetCategory(
  path: string,
  params: GetCategory$Params
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
  const result = GetCategory$Result.parse(data);
  return result;
}
