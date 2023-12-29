/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import * as Popover from "@radix-ui/react-popover";

import { PopoverUKProps } from "./popover-uk-types";

import styles from "./popover-uk.module.scss";

export const PopoverUK: FC<PopoverUKProps> = ({
  defaultOpen = false,
  side = "bottom",
  sideOffset = 0,
  modal = true,
  align = "center",
  alignOffset = 0,
  avoidCollisions = true,
  collisionBoundary = [],
  collisionPadding = 0,
  hideWhenDetached = true,
  arrowWidth = 16,
  arrowHeight = 8,
  asChildArrow = false,
  customArrow,
  triggerTitle,
  children,
  disabledOutside = false
}) => {

  const onInteractOutside = (event: any) => {
    if (!disabledOutside) return;
    event.preventDefault()
    console.log('do ypo want to close popover?')
  }

  return (
    <Popover.Root defaultOpen={defaultOpen} modal={modal}>
      <Popover.Trigger className={styles.popoverTrigger}>
        {triggerTitle}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={styles.popoverContent}
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          avoidCollisions={avoidCollisions}
          collisionBoundary={collisionBoundary}
          collisionPadding={collisionPadding}
          hideWhenDetached={hideWhenDetached}
          onInteractOutside={(event) => onInteractOutside(event)}
        >
          {children}
          <Popover.Arrow
            className={styles.popoverArrow}
            width={arrowWidth}
            height={arrowHeight}
            asChild={asChildArrow}
          >
            {customArrow}
          </Popover.Arrow>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
