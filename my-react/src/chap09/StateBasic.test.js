import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StateBaisc from "../chap03/StateBasic";

test("StateBasic Test", async () => {
  const ev = userEvent.setup(); //userEventオブジェクトを生成
  render(<StateBaisc init={0} />);
  // 操作対象の要素を取得
  const btn = screen.getByRole("button", { name: "カウント" });
  const cnt = screen.getByText(/クリック/);
  // ボタンをクリック
  ev.click(btn);
  await waitFor(() => {
    expect(cnt).toHaveTextContent("1回");
  });
});
