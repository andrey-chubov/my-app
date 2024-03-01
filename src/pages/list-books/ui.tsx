import { bookApi } from "entities/book/api/BookService";
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScreenProps } from "shared/routes";
import { Button } from "shared/ui/button";
import { Loading } from "shared/ui/loading";
import { BooksListWidget, BooksFooterWidget } from "widgets/book";

export const BooksScreen: FC<ScreenProps<"Books">> = () => {
  const { isLoading, error, data, refetch } = bookApi.useFetchAllBooksQuery(10);

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <View className="flex-1 justify-center h-full w-full gap-4 self-center ">
        <Text className="text-center"> Ошибка загрузки данных</Text>
        <Button onPress={refetch} title="Обновить" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <BooksListWidget books={data?.rows ?? []} />
      <BooksFooterWidget />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
