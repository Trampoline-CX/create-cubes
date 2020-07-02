import { useNav } from "@trampoline/cubes";
import { MyAppNavigationSchema } from "./navigation-schema";

export const useNavigation = () => useNav<MyAppNavigationSchema>();
