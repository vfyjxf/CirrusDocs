import DefaultTheme from "vitepress/theme";
import FileTree from "./components/FileTree.vue";
import "./style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("FileTree", FileTree);
  },
};
