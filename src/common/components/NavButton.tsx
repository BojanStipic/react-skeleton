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
    <Button as={Link} to={to} colorScheme={match ? "brand" : "gray"} {...rest}>
      <Icon as={icon} mr={2} fontSize="2xl" />
      {children}
    </Button>
  );
};
