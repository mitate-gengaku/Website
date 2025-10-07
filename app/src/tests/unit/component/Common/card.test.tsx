import { cleanup, render, type RenderResult } from "@testing-library/react";

import type React from "react";

import { ViewCard } from "@/components/Common/card";

describe("ViewCardコンポーネントのテスト", () => {
  let rendered: RenderResult;

  afterEach(cleanup);

  describe("title, contentだけが渡された場合", () => {
    beforeEach(() => {
      rendered = render(
        <ViewCard
          title="テスト"
          content={<h2 data-testid="test-title">Test</h2>}
        />,
      );
    });
    test("コンポーネントが正常にレンダリングされること", () => {
      expect(rendered.getByTestId("view-card")).toBeInTheDocument();
      expect(rendered.getByTestId("test-title")).toBeInTheDocument();
    });

    test("カードのタイトルが正常に表示されること", () => {
      expect(rendered.getByText("テスト")).toBeInTheDocument();
    });

    test("カードのコンテンツが正常に表示されること", () => {
      expect(rendered.getByText("Test")).toBeInTheDocument();
    });

    test("カードのヘッダーにクラスが適用されること", () => {
      expect(rendered.getByTestId("view-card-header").className).toBe(
        "border-b border-gray-200 gap-0",
      );
    });
  });

  describe("title, content, descriptionが渡された場合", () => {
    beforeEach(() => {
      rendered = render(
        <ViewCard
          title="テスト"
          description="テストの説明です"
          content={<h2 data-testid="test-title">Test</h2>}
        />,
      );
    });

    test("コンポーネントが正常にレンダリングされること", () => {
      expect(rendered.getByTestId("view-card")).toBeInTheDocument();
    });

    test("カードの説明が正常に表示されること", () => {
      expect(rendered.getByText("テストの説明です")).toBeInTheDocument();
    });
  });

  describe("title, content, description, footerが渡された場合", () => {
    beforeEach(() => {
      rendered = render(
        <ViewCard
          title="テスト"
          description="テストの説明です"
          content={<h2 data-testid="test-title">Test</h2>}
          footer={<p data-testid="footer-text">フッターテキスト</p>}
        />,
      );
    });

    test("カードのフッターが正常に表示されること", () => {
      expect(rendered.getByTestId("view-card-footer")).toBeInTheDocument();
      expect(rendered.getByText("フッターテキスト")).toBeInTheDocument();
    });
  });
});
