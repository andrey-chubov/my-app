import { FC } from "react";
import { SafeAreaView, View } from "react-native";
import { ScreenProps } from "shared/routes";
import { BookCardWidget } from "widgets/book";

export const BookScreen: FC<ScreenProps<"Book">> = ({ route }) => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <BookCardWidget bookId={route.params.id} />
      </View>
    </SafeAreaView>
  );
};
