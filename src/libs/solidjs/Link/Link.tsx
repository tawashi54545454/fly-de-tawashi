import styles from "./link.module.scss";
import "../../../styles/global.scss";
import type { Component, JSX } from "solid-js";
import { splitProps } from "solid-js";
import { combineClassList } from "../combineClassList.ts";

interface LinkProps extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  darkMode?: boolean;
}

export const Link: Component<LinkProps> = (props: LinkProps) => {
  const [local, rest] = splitProps(props, [
    "darkMode",
    "children",
    "class",
    "classList",
  ]);
  return (
    <a
      classList={combineClassList(
        local.class,
        {
          [styles.link]: true,
          [styles["dark-mode"]]: local.darkMode,
        },
        local.classList,
      )}
      {...rest}
    >
      {local.children}
    </a>
  );
};
