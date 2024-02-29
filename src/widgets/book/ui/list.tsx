import { FlatList, StyleSheet, Text } from "react-native";
import { BookRow } from "entities/book/ui/book-row";
import { Empty } from "shared/ui/empty";
import { Header } from "shared/ui/header";
import { Book } from "shared/types/Book";

interface Props {
  books: Book[];
}

export const BooksListWidget = ({ books }: Props) => {
  return (
    <>
      <Text className="flex py-2 mt-8 text-center font-bold">Каталог книг</Text>
      <FlatList
        ListHeaderComponent={<Header />}
        data={books}
        contentContainerStyle={styles.container}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookRow data={item} key={item.id} />}
        ListEmptyComponent={<Empty desc="No books found" />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "90%",
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
