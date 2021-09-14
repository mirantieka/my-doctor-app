import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TabItem } from '../../small';
import { colors } from '../../../utils';

export default function BottomNavigator({ state, descriptors, navigation }) {
    return (
        <View  style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
            <TouchableOpacity>
                <TabItem key={index} title={label} onPress={onPress} onLongPress={onLongPress} active={isFocused} />
            </TouchableOpacity>
        );
      })}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 53,
    }
})
