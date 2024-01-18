import { TouchableOpacity, View } from "react-native";
import { bottomTabBarStyles } from "../assets/styles/MyStyles.tsx";

// @ts-ignore
function BottomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={bottomTabBarStyles.container}>
      {state.routes.map((route: { key: string | number; name: any; params: any; }, index: any) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={bottomTabBarStyles.tabButton}>
            <View
              style={[
                bottomTabBarStyles.tabButtonIcon,
                { backgroundColor: isFocused ? "#F3F4F6" : "#FFFFFF" }
              ]}
            >
              {options.tabBarIcon({ focused: isFocused })}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomTabBar;
