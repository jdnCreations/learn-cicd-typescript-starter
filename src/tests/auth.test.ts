import { describe, expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";
import { IncomingHttpHeaders } from "http";

describe("auth", () => {
  test("invalid authorization header", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "hello",
    };
    expect(getAPIKey(headers)).toBe(null);
  });
  test("no authorization header", () => {
    const headers: IncomingHttpHeaders = {};
    expect(getAPIKey(headers)).toBe(null);
  });

  test("apikey", () => {
    const headers: IncomingHttpHeaders = {
      authorization: "ApiKey Bobby",
    };
    expect(getAPIKey(headers)).toBe("Boby");
  });
});
