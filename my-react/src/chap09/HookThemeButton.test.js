import HookThemeButton from "../chap07/HookThemeButton";
import MyThemeProvider from "../chap07/MyThemeProvider";
import { render, screen, waitFor } from "@testing-library/react";
import useEvent from "@testing-library/user-event";

test("HookThemeButton test", async () => {
  const ev = useEvent.setup();
  render(<HookThemeButton />, { wrapper: MyThemeProvider });
  const btn = screen.getByRole("button");
  ev.click(btn);
  await waitFor(() => expect(btn).toHaveTextContent("dark"));
});
