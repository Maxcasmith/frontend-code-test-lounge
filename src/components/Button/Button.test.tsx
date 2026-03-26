// Button.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("does not invoke onClick when disabled", async () => {
    const onClick = vi.fn().mockResolvedValue(undefined);
    render(
      <Button variant="primary" size="medium" onClick={onClick} disabled>
        Click me
      </Button>,
    );

    await userEvent.click(screen.getByRole("button"));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("shows a spinner and disables the button while the async action is pending", async () => {
    let resolve: () => void;
    const onClick = vi.fn(
      () =>
        new Promise<void>((res) => {
          resolve = res;
        }),
    );

    render(
      <Button variant="primary" size="medium" onClick={onClick}>
        Submit
      </Button>,
    );

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(
      screen.getByRole("status", { name: /loading/i }),
    ).toBeInTheDocument();
    expect(button).toBeDisabled();

    resolve!();
    await vi.waitFor(() => {
      expect(
        screen.queryByRole("status", { name: /loading/i }),
      ).not.toBeInTheDocument();
      expect(button).not.toBeDisabled();
    });
  });

  it("prevents a second click from firing onClick while a previous click is still pending", async () => {
    let resolve: () => void;
    const onClick = vi.fn(
      () =>
        new Promise<void>((res) => {
          resolve = res;
        }),
    );

    render(
      <Button variant="primary" size="medium" onClick={onClick}>
        Submit
      </Button>,
    );

    const button = screen.getByRole("button");

    await userEvent.click(button);
    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);

    resolve!();
  });
});
