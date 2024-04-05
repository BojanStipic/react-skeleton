import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { ElementType, FC, ReactNode } from "react";

export type NavButtonProps = ButtonProps & {
  to: string;
  icon: ElementType;
  children: ReactNode;
};

export const NavButton: FC<NavButtonProps> = ({
  to,
  icon,
  children,
  ...rest
}) => {
  const match = useMatchRoute()({ to });

  return (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    <Button as={Link} to={to} colorScheme={match ? "brand" : "gray"} {...rest}>
      <Icon as={icon} mr={2} fontSize="2xl" />
      {children}
    </Button>
  );
};
