import React from "react";
import {
  Screen,
  TopBar,
  Layout,
  Card,
  BodyText,
  useSampleData,
  DrawerMenu,
} from "@trampoline/cubes";
import { useNavigation } from "../navigation/hooks";

export const PostListScreen: React.FC = () => {
  const navigate = useNavigation();
  const posts = useSampleData({
    count: 10,
    generator: (faker) => ({
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraph(),
    }),
  });

  return (
    <Screen>
      <TopBar title="All posts" withDrawerMenu />
      <DrawerMenu
        items={[
          { label: "Newest", icon: "today", selected: true },
          { label: "Favorites", icon: "favorite" },
        ]}
      />
      <Screen.Content paddingY="medium">
        <Layout>
          {posts.map((post) => (
            <Layout.Section key={post.title}>
              <Card
                title={post.title}
                sectioned
                mainActions={[
                  {
                    label: "Read",
                    action: () =>
                      navigate.to("PostDetailScreen", { id: "abc" }),
                  },
                ]}
              >
                <BodyText>{post.description}</BodyText>
              </Card>
            </Layout.Section>
          ))}
        </Layout>
      </Screen.Content>
    </Screen>
  );
};
