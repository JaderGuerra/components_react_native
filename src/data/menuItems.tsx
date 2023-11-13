import { MenuItems } from "../interface/AppInterface";

export const menuItems: MenuItems[] = [
  {
    name: "Animation 101",
    icon: "star",
    component: "Animation101Screen",
  },
  {
    name: "Animation 102",
    icon: "flag",
    component: "Animation102Screen",
  },
  {
    name: "Text input",
    icon: "file-text",
    component: "TextInputScreen",
  },
  {
    name: "Pull To Refresh",
    icon: "refresh",
    component: "PullToRefresh",
  },
  {
    name: "Section List",
    icon: "list",
    component: "CustomSectionList",
  },
  {
    name: "Modal",
    icon: "image",
    component: "ModalScreen",
  },
  {
    name: "Infinite Scroll",
    icon: "arrow-circle-o-down",
    component: "InfiniteScrollScreen",
  },
  {
    name: "Slides Screen",
    icon: "stack-overflow",
    component: "SlidesScreen",
  },
  {
    name: "Theme Screen",
    icon: "flask",
    component: "ChangeThemeScreen",
  },
];