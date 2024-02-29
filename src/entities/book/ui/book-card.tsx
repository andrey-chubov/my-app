import { Text, View } from "react-native";
import { Book } from "../../../shared/types/Book";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Input } from "shared/ui/input";
import { bookApi } from "../api/BookService";
import { Button } from "shared/ui/button";

type Props = {
  book?: Book;
};

export const BookCard = ({ book }: Props) => {
  if (!book) return null;
  const [saveBook, { error, reset }] = bookApi.useUpdateBookMutation();

  const [editable, setEditable] = useState(false);
  const { id, title, author, year_of_publication } = book;
  const [updateBook, setUpdateBook] = useState<Partial<Book>>({
    author: book.author,
    title: book.title,
    year_of_publication: book.year_of_publication,
  });

  const handleSave = async () => {
    saveBook({ ...updateBook, id: id } as Book);
    setEditable(false);
  };
  const handleEdit = () => {
    setEditable(true);
  };

  if (editable) {
    return (
      <>
        <View className="flex-row justify-center  ">
          <Text className="text-2xl font-semibold mx-5 ">Book#{id}</Text>
          <Feather name="save" size={24} color="black" onPress={handleSave} />
        </View>
        <Input
          className="text-lg break-words text-center text"
          value={updateBook.title}
          onChangeText={(value: string) =>
            setUpdateBook((p) => ({ ...p, title: value }))
          }
        />
        <View className="flex  ">
          <Text className="text-xl  text-center">Автор:</Text>
          <Input
            className="text-lg break-words text-center text"
            value={updateBook.author}
            onChangeText={(value: string) =>
              setUpdateBook((p) => ({ ...p, author: value }))
            }
          />
        </View>
        <View className="flex  ">
          <Text className="text-xl  text-center">Год издания:</Text>
          <Input
            className="text-lg break-words text-center text"
            value={updateBook.year_of_publication?.toString()}
            onChangeText={(value: string) => {
              const num = +value;
              const year = new Date().getFullYear();
              if (!Number.isNaN(num) && Number(num) < year && Number(num) >= 0) {
                setUpdateBook((p) => ({ ...p, year_of_publication: +value }));
              }
            }}
          />
        </View>
      </>
    );
  }

  return (
    <>
      {Boolean(error) ? (
        <View className="flex justify-center gap-4  ">
          <Text> Ошибка обновления книги</Text>
          <Button title="Назад" onPress={reset} />
        </View>
      ) : (
        <>
          <View className="flex-row justify-center  ">
            <Text className="text-2xl font-semibold mx-5 ">Book#{id}</Text>
            <AntDesign
              name="edit"
              size={24}
              color="black"
              onPress={handleEdit}
            />
          </View>

          <Text className="text-lg break-words text-center text">{title}</Text>
          <View className="flex  ">
            <Text className="text-xl  text-center">Автор:</Text>
            <Text className="text-lg break-words text-center text">
              {author}
            </Text>
          </View>
          <View className="flex  ">
            <Text className="text-xl  text-center">Год издания:</Text>
            <Text className="text-lg break-words text-center text">
              {year_of_publication}
            </Text>
          </View>
        </>
      )}
    </>
  );
};
