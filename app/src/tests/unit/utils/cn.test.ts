// 一時的にモックを解除する
vi.unmock("@/utils/cn");

import { cleanup } from "@testing-library/react";

import { cn } from "@/utils/cn";

describe("cn汎用関数", () => {
  afterEach(cleanup);

  test("単一のクラスを返すこと", () => {
    expect(cn("bg-red-500")).toEqual("bg-red-500");
  });

  test("複数のクラスを渡すとクラス名を結合すること", () => {
    expect(cn("text-red-500", "bg-red-500")).toEqual("text-red-500 bg-red-500");
  });

  test("undefinedとnullは無視されること", () => {
    expect(cn("bg-red-500", null, undefined)).toEqual("bg-red-500");
  });

  test("配列形式のクラス名を渡しても結合すること", () => {
    expect(cn(["text-red-500", "bg-blue-500"])).toEqual(
      "text-red-500 bg-blue-500",
    );
  });

  test("オブジェクト形式のクラス名を渡しても結合すること", () => {
    expect(
      cn({
        "text-red-500": true,
        "bg-blue-500": false,
        "p-4": true,
      }),
    ).toEqual("text-red-500 p-4");
  });

  test("複数の引数タイプを混在させるても結合すること", () => {
    expect(
      cn(
        "base-class",
        ["array-class-1", "array-class-2"],
        { "object-class": true, "false-class": false },
        undefined,
        "final-class",
      ),
    ).toEqual(
      "base-class array-class-1 array-class-2 object-class final-class",
    );
  });
});
