import { Center, CenterProps, Heading, Icon } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaHammer } from "react-icons/fa";

export type UnderConstructionProps = CenterProps;

export const UnderConstruction = (props: UnderConstructionProps) => {
  const { t } = useTranslation();

  return (
    <Center {...props}>
      <Icon as={FaHammer} boxSize="20" mr={4} />
      <Heading whiteSpace="nowrap">{t("Under construction…")}</Heading>
    </Center>
  );
};
