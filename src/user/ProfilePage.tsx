import {
  Card,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { ChangePasswordForm, UserDetail } from ".";

export const ProfilePage: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Card p="8" my="8" rounded="3xl" border="1px">
        <Tabs size="lg" w="full" isFitted>
          <TabList>
            <Tab>{t("Profile")}</Tab>
            <Tab>{t("Change Password")}</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <UserDetail />
            </TabPanel>
            <TabPanel>
              <ChangePasswordForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Container>
  );
};
