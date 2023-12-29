import { FC } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./styles.css";
import { NavigationMenuListProps } from "./navigation-menu-list-types";
import { CaretDownIcon } from "@radix-ui/react-icons";

export const NavigationMenuUK: FC<NavigationMenuListProps> = ({
  navigationItems,
}) => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        {navigationItems.map((item) => (
          <NavigationMenu.Item>
            {item.isSubMenu ? (
              <>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  {item.trigger} <CaretDownIcon className="CaretDown" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                  <ul className="List">
                    {item.content?.map((content) => (
                      <ListItem
                        href={content.href}
                        title={content.text}
                        description={content.description}
                      />
                    ))}
                  </ul>
                </NavigationMenu.Content>{" "}
              </>
            ) : (
              <NavigationMenu.Link
                className="NavigationMenuLink"
                href={item.href}
              >
                {item.trigger}
              </NavigationMenu.Link>
            )}
          </NavigationMenu.Item>
        ))}
        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem: FC<{ href: string; title: string; description: string }> = ({
  href,
  title,
  description,
}) => (
  <li>
    <NavigationMenu.Link asChild>
      <a className="ListItemLink" href={href}>
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{description}</p>
      </a>
    </NavigationMenu.Link>
  </li>
);
