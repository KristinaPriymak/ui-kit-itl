import { FC } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { NavigationMenuItemProps } from "./navigation-menu-item-types";

export const NavigationMenuItemUK: FC<NavigationMenuItemProps> = ({
  trigger,
  content,
}) => {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Trigger>{trigger}</NavigationMenu.Trigger>
      <NavigationMenu.Content>{content}</NavigationMenu.Content>
    </NavigationMenu.Item>
  );
};
