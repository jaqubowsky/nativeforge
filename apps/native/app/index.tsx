import { Button, Icon, Text } from "@repo/ui/components";
import { THEME } from "@repo/ui/lib";
import { Link, Stack } from "expo-router";
import { MoonStarIcon, StarIcon, SunIcon } from "lucide-react-native";
import { useColorScheme } from "nativewind";
import { Image, type ImageStyle, View } from "react-native";

const LOGO = {
  light: require("@/assets/icon.png"),
  dark: require("@/assets/icon.png"),
};

const SCREEN_OPTIONS = {
  light: {
    title: "React Native Reusables",
    headerTransparent: true,
    headerShadowVisible: true,
    headerStyle: { backgroundColor: THEME.light.background },
    headerRight: () => <ThemeToggle />,
  },
  dark: {
    title: "React Native Reusables",
    headerTransparent: true,
    headerShadowVisible: true,
    headerStyle: { backgroundColor: THEME.dark.background },
    headerRight: () => <ThemeToggle />,
  },
};

const IMAGE_STYLE: ImageStyle = {
  height: 76,
  width: 76,
};

export default function Screen() {
  const { colorScheme } = useColorScheme();

  return (
    <>
      <Stack.Screen options={SCREEN_OPTIONS[colorScheme ?? "light"]} />
      <View className="flex-1 items-center justify-center gap-8 p-4">
        <Image
          resizeMode="contain"
          source={LOGO[colorScheme ?? "light"]}
          style={IMAGE_STYLE}
        />
        <View className="gap-2 p-4">
          <Text className="font-mono ios:text-foreground text-muted-foreground text-sm">
            1. Edit <Text variant="code">app/index.tsx</Text> to get started.
          </Text>
          <Text className="font-mono ios:text-foreground text-muted-foreground text-sm">
            2. Save to see your changes instantly.
          </Text>
        </View>
        <View className="flex-row gap-2">
          <Link asChild href="https://reactnativereusables.com">
            <Button variant="destructive">
              <Text>Browse the Docs</Text>
            </Button>
          </Link>
          <Link
            asChild
            href="https://github.com/founded-labs/react-native-reusables"
          >
            <Button variant="ghost">
              <Text>Star the Repo</Text>
              <Icon as={StarIcon} />
            </Button>
          </Link>
        </View>
      </View>
    </>
  );
}

const THEME_ICONS = {
  light: SunIcon,
  dark: MoonStarIcon,
};

function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button
      className="web:mx-4 rounded-full"
      onPressIn={toggleColorScheme}
      size="icon"
      variant="ghost"
    >
      <Icon as={THEME_ICONS[colorScheme ?? "light"]} className="size-5" />
    </Button>
  );
}
