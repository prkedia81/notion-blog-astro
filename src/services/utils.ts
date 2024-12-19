import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export async function retryRequest(
  func: () => Promise<any>,
  retries = 3,
  delay = 1000
) {
  try {
    return await func();
  } catch (error: any) {
    if (retries > 0 && error.status === 429) {
      console.warn(`Rate limit hit. Retrying in ${delay} ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return retryRequest(func, retries - 1, delay * 2); // Exponential backoff
    } else {
      throw error;
    }
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
