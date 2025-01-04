// 전역적으로 설정할 때 여기에서 설정하라
import "@fastcampus/themes/themes.css";
import "./style.css";
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    rootAttributesTooltip: true,
    rootAttributes: [
      {
        root: "body",
        attribute: "class",
        defaultState: {
          name: "light",
          value: "theme-light",
        },
        states: [
          {
            name: "dark",
            value: "theme-dark",
          },
        ],
      },
    ],
  },
};

const initTheme = () => {
  const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)")
  const isDarkTheme = mediaQueryList.matches;

  if (isDarkTheme) {
    document.body.classList.add("theme-dark");
  }
  mediaQueryList.addEventListener("change", (e) => {
    if(e.matches) {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
  })
}

initTheme();

export default preview;