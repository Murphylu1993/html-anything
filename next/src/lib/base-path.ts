export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

/** Prefix an app-internal root-relative path for stripped-prefix reverse proxies. */
export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
