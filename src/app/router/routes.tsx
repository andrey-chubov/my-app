import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddBookScreen } from "pages/add-book";
import { BooksScreen } from "pages/list-books";
import { BookScreen } from "pages/view-book-details";

import { RootStackParamList } from "shared/routes";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Routing = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Books">
        <RootStack.Screen
          name="Books"
          component={BooksScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen name="Book" component={BookScreen} />
        <RootStack.Group
          screenOptions={{
            presentation: "transparentModal",
            headerShown: false,
          }}
        >
          <RootStack.Screen name="AddBook" component={AddBookScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
