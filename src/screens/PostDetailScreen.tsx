import React from "react";
import { DisplayText, Screen, TopBar } from "@trampoline/cubes";

export interface PostDetailScreenProps {
  id: string;
}

export const PostDetailScreen: React.FC<PostDetailScreenProps> = ({ id }) => (
  <Screen>
    <TopBar title="Transaction Detail" />
    <Screen.Content padding="medium">
      <DisplayText>ID: {id}</DisplayText>
    </Screen.Content>
  </Screen>
);
