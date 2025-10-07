import { cleanup, render, type RenderResult } from "@testing-library/react";

import { Cards } from "@/components/Sections/Blog/cards";
import { zennCollection } from "@/tests/mocks/articles";

vi.mock("@/utils/convert-to-yyyymmdd", () => ({
  convertToYYYYMMDD: () => "2024-09-11",
}));

describe("Cardsコンポーネント", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  describe("articlesの個数が0のとき", () => {
    beforeEach(() => {
      rendered = render(<Cards articles={[]} />);
    });

    test("コンポーネントが正常に表示されること", () => {
      expect(rendered.getByTestId("cards")).toBeInTheDocument();

      rendered.queryAllByTestId("view-card").forEach((element) => {
        expect(element).not.toBeInTheDocument();
      });
    });
  });

  describe("articlesの個数が1のとき", () => {
    beforeEach(() => {
      const articles = zennCollection.slice(0, 1);
      rendered = render(<Cards articles={articles} />);
    });

    test("コンポーネントが正常に表示されること", () => {
      expect(rendered.getByTestId("cards")).toBeInTheDocument();

      rendered.queryAllByTestId("view-card").forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });

    test("カードの個数は1であること", () => {
      expect(rendered.queryAllByTestId("view-card").length).toBe(1);
    });
  });

  describe("articlesのデータのurlプロパティがnullのとき", () => {
    beforeEach(() => {
      const articles = zennCollection.slice(6, 7);
      rendered = render(<Cards articles={articles} />);
    });

    test("コンポーネントが正常に表示されること", () => {
      expect(rendered.getByTestId("cards")).toBeInTheDocument();
      expect(rendered.queryByTestId("view-card")).toBeInTheDocument();
    });

    test("カードのurlは'https://zenn.dev/mitate_gengakuとなっていること", () => {
      expect(
        rendered.getByTestId("view-card").querySelector("a"),
      ).toHaveProperty("href", "https://zenn.dev/mitate_gengaku");
    });
  });

  describe("articlesの個数が7以上のとき", () => {
    beforeEach(() => {
      const articles = zennCollection;
      rendered = render(<Cards articles={articles} />);
    });

    test("コンポーネントが正常に表示されること", () => {
      expect(rendered.getByTestId("cards")).toBeInTheDocument();

      rendered.queryAllByTestId("view-card").forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });

    test("カードは7個表示されること", () => {
      expect(rendered.queryAllByTestId("view-card")).toHaveLength(7);
    });
  });
});
