import { NavigationSchema } from "@trampoline/cubes";
import { PostListScreen } from "../screens/PostListScreen";
import { PostDetailScreen } from "../screens/PostDetailScreen";

export const navigationSchema = {
  stack: [{ PostListScreen }, { PostDetailScreen }],
} as const;

navigationSchema as NavigationSchema; // Simply assert it is a NavigationSchema

export type MyAppNavigationSchema = typeof navigationSchema;
