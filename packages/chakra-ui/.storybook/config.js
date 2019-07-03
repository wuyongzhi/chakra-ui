import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider, useUIMode, UIModeProvider } from "../src/theme";
import CSSReset from "../src/CSSReset";
import { Checkbox, Absolute } from "../src";

function loadStories() {
  require("../stories");
}

const AppProvider = ({ children }) => {
  const { mode, toggle } = useUIMode();
  return (
    <ThemeProvider>
      <CSSReset />
      {children}
      <Absolute bottom="24px" right="24px">
        <Checkbox isChecked={mode === "dark"} onChange={toggle} />
      </Absolute>
    </ThemeProvider>
  );
};

addDecorator(story => (
  <UIModeProvider>
    <AppProvider>{story()}</AppProvider>
  </UIModeProvider>
));

configure(loadStories, module);