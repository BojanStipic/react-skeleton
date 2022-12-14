import { Button, ButtonProps, Icon } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export type NavButtonProps = ButtonProps & {
  to: string;
  icon: ElementType;
  children: ReactNode;
};

export const NavButton = ({ to, icon, children, ...rest }: NavButtonProps) => {
  const match = useMatch(useResolvedPath(to).pathname);

  return (
    <Button as={Link} to={to} colorScheme={match ? "brand" : "gray"} {...rest}>
      <Icon as={icon} mr={2} fontSize="2xl" />
      {children}
    </Button>
  );
};
