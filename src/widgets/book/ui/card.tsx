import { bookApi } from "entities/book/api/BookService";
import { BookCard } from "entities/book/ui/book-card";
import { View, Text } from "react-native";
import { Loading } from "shared/ui/loading";

type Props = {
  bookId: number;
};

export const BookCardWidget = ({ bookId }: Props) => {
  const { isLoading, error, data: book } = bookApi.useGetBookByIdQuery(bookId);

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <View className="flex-row justify-center  ">
        <Text> Ошибка загрузки книги</Text>
      </View>
    );
  }

  return (
    <View className="justify-around items-center h-full w-full py-6 px-2 bg-zinc-50 rounded-2xl shadow-lg">
      <BookCard book={book} />
    </View>
  );
};
