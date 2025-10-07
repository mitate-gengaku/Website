import { cleanup } from "@testing-library/react";

import { convertToYYYYMMDD } from "@/utils/convert-to-yyyymmdd";

describe("convertToYYYYMMDD", () => {
  afterEach(cleanup);
  describe("日付を渡した状態", () => {
    test("日付オブジェクトをYYYY-MM-DD形式に変換できること", () => {
      const date = new Date("1996-08-19");
      const result = convertToYYYYMMDD(date);

      expect(result).toBe("1996-08-19");
    });

    test("一桁の日付の場合は0が付与されること", () => {
      const date = new Date("1996-08-09");
      const result = convertToYYYYMMDD(date);

      expect(result).toBe("1996-08-09");
    });

    test("うるう年の場合も変換できること", () => {
      const date = new Date("2024-02-29");
      const result = convertToYYYYMMDD(date);

      expect(result).toBe("2024-02-29");
    });
  });

  describe("異常データを渡した場合", () => {
    test("nullが渡された場合、Invalid Dateが返ること", () => {
      const result = convertToYYYYMMDD(null);

      expect(result).toBeTruthy();
    });

    test("無効な日付オブジェクトが渡された場合、Invalid Dateが返ること", () => {
      const date = new Date("invalid-date");
      const result = convertToYYYYMMDD(date);

      expect(typeof result).toBe("string");
      expect(result).toBe("Invalid Date");
    });
  });
});
