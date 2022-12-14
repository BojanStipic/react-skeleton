import {
  Card,
  Container,
  Icon,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaShieldAlt } from "react-icons/fa";

import { LoginForm, RegistrationForm } from ".";

export const AuthPage = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Card p="8" my="8" rounded="3xl" border="1px">
        <Stack align="center" spacing="4">
          <Icon as={FaShieldAlt} boxSize="20" />
          <Tabs size="lg" w="full" isFitted>
            <TabList>
              <Tab>{t("Log in")}</Tab>
              <Tab>{t("Register")}</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <LoginForm />
              </TabPanel>
              <TabPanel>
                <RegistrationForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
      </Card>
    </Container>
  );
};
