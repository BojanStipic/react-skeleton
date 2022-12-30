import {
  Divider,
  Flex,
  Heading,
  Icon,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { FaIdBadge, FaUserCircle } from "react-icons/fa";

import { useAuthenticatedUser } from "../../auth";

export const UserDetail: FC = () => {
  const { t } = useTranslation();
  const { data: user, isLoading } = useAuthenticatedUser();

  return (
    <Stack spacing="4">
      <Heading>{t("Your profile")}:</Heading>
      <Divider my="4" />
      <SkeletonText isLoaded={!isLoading}>
        {user?.email ? (
          <Flex alignItems="center">
            <Icon as={FaUserCircle} boxSize={8} mr="1" />
            {user.email}
          </Flex>
        ) : null}
      </SkeletonText>
      <SkeletonText isLoaded={!isLoading}>
        {user?.name || user?.lastName ? (
          <Flex alignItems="center">
            <Icon as={FaIdBadge} boxSize={8} mr="1" />
            {user.name} {user.lastName}
          </Flex>
        ) : null}
      </SkeletonText>
    </Stack>
  );
};
