import { afterEach, describe, expect, it, vi } from "vitest";

const ORIGINAL_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;

afterEach(() => {
  vi.resetModules();
  if (ORIGINAL_BASE_PATH === undefined) delete process.env.NEXT_PUBLIC_BASE_PATH;
  else process.env.NEXT_PUBLIC_BASE_PATH = ORIGINAL_BASE_PATH;
});

describe("withBasePath", () => {
  it("defaults to root-relative paths when no env var is set", async () => {
    delete process.env.NEXT_PUBLIC_BASE_PATH;
    const { BASE_PATH, withBasePath } = await import("./base-path");
    expect(BASE_PATH).toBe("");
    expect(withBasePath("/api/agents")).toBe("/api/agents");
  });

  it("strips a trailing slash from NEXT_PUBLIC_BASE_PATH", async () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "/lq-codeserver01/proxy/3000/";
    const { BASE_PATH, withBasePath } = await import("./base-path");
    expect(BASE_PATH).toBe("/lq-codeserver01/proxy/3000");
    expect(withBasePath("/api/agents")).toBe("/lq-codeserver01/proxy/3000/api/agents");
  });
});
