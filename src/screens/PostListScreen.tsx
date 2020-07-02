import React from "react";
import {
  Screen,
  TopBar,
  Layout,
  Card,
  BodyText,
  useNav,
} from "@trampoline/cubes";
import { useNavigation } from "../navigation/hooks";

export const PostListScreen: React.FC = () => {
  const navigate = useNavigation();

  return (
    <Screen>
      <TopBar iconStart="none" />
      <Screen.Content paddingY="medium">
        <Layout>
          <Layout.Section>
            <Card
              title="A cool post"
              sectioned
              mainActions={[
                {
                  label: "Read",
                  action: () => navigate.to("PostDetailScreen", { id: "abc" }),
                },
              ]}
            >
              <BodyText>
                This blog post has some really cool content...
              </BodyText>
            </Card>
          </Layout.Section>
        </Layout>
      </Screen.Content>
    </Screen>
  );
};
