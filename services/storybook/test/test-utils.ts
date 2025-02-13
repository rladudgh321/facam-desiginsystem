import { cleanup, render } from "@testing-library/react";
import { afterEach } from "vitest";
import { ReactElement } from 'react';

import "@testing-library/jest-dom";

import * as globalStorybookConfig from "../.storybook/preview";

import { setProjectAnnotations } from "@storybook/react";

// @ts-ignore
setProjectAnnotations(globalStorybookConfig);


afterEach(() => {
  cleanup();
});

function customRender(ui: ReactElement, options = {}) {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

// override render export
export { customRender as render };