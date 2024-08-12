import { render, screen } from "@testing-library/react";
import App from "./App";

//テストケースを定義
test("renders learn reack link", () => {
  render(<App />); // コンポーネントを描画
  //   const { debug, baseElement } = render(<App />); // コンポーネントを描画
  //   debug(baseElement);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
