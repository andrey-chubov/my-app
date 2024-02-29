import { useNavigation } from "@react-navigation/native";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavProp } from "shared/routes";
import { Book } from "shared/types/Book";
import { AntDesign } from "@expo/vector-icons";
import { bookApi } from "../api/BookService";
import { Button } from "shared/ui/button";
import { Loading } from "shared/ui/loading";

type BookRowProps = {
  data: Book;
};

export const BookRow = ({ data }: BookRowProps) => {
  const [deleteBook, { isLoading, error, reset }] =
    bookApi.useDeleteBookMutation();
  const { id, title, author } = data;
  const { navigate } = useNavigation<NavProp<"Books">>();
  if (isLoading) return <Loading />;

  if (error) {
    return (
      <View className="flex-1 justify-center h-full w-full gap-4 self-center ">
        <Text className="text-center"> Ошибка удаления книги</Text>
        <Button onPress={reset} title="Назад" />
      </View>
    );
  }

  const onTaskPress = () => navigate("Book", { id });

  const handleDelete = (e: NativeSyntheticEvent<NativeTouchEvent>) => {
    e.stopPropagation();
    deleteBook(data);
  };

  return (
    <TouchableOpacity onPress={onTaskPress}>
      <View className="flex-row items-center h-12 bg-zinc-50 my-2 mx-4 rounded-lg shadow shadow-slate-300 border border-lime-600 p-1">
        <Text
          className="flex-1 text-base border-r text-center pl-1 pr-2 "
          numberOfLines={1}
        >
          {title}
        </Text>
        <Text
          className="flex-1 text-base pr-2 text-center pl-1 "
          numberOfLines={1}
        >
          {author}
        </Text>
        <AntDesign
          name="delete"
          size={24}
          color="black"
          onPress={handleDelete}
        />
      </View>
    </TouchableOpacity>
  );
};
