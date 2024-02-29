import { bookApi } from "entities/book/api/BookService";
import { useState } from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";

import { Book } from "shared/types/Book";
import { Button } from "shared/ui/button";
import { Input } from "shared/ui/input";

type Props = {
  onNewBookAdded?: (book: Book) => void;
};

export const BookAddForm = ({ onNewBookAdded }: Props) => {
  const [createBook, { error }] = bookApi.useCreateBookMutation();

  if (error) {
    return <Text> Ошибка создания</Text>;
  }

  const [newBook, setNewBook] = useState<Partial<Book>>({
    author: "",
    title: "",
    year_of_publication: 0,
  });

  const validateField =
    !/^(?!\s*$)[-\/'"№., 0-9A-za-zа-яА-Я]+$/.test(newBook.title!.trim()) ||
    !/^(?!\s*$)['". A-za-zа-яА-Я]+$/.test(newBook.author!.trim()) ||
    !newBook.year_of_publication;

  const onAddButtonPress = async () => {
    await createBook(newBook as Book);
    onNewBookAdded && onNewBookAdded(newBook as Book);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="h-60 justify-evenly">
        <Text className="text-xl font-bold text-center">New Book</Text>
        <Text>Название книги:</Text>
        <Input
          placeholder="Enter title"
          value={newBook.title}
          onChangeText={(value: string) =>
            setNewBook((p) => ({ ...p, title: value }))
          }
        />
        <Text>Автор:</Text>
        <Input
          placeholder="Enter author"
          value={newBook.author}
          onChangeText={(value: string) =>
            setNewBook((p) => ({ ...p, author: value }))
          }
        />
        <Text>Год публикации:</Text>
        <Input
          placeholder="Enter year of publication"
          value={newBook.year_of_publication?.toString()}
          onChangeText={(value: string) => {
            const num = +value;
            const year = new Date().getFullYear();
            if (!Number.isNaN(num) && Number(num) <= year && Number(num) > 0) {
              setNewBook((p) => ({ ...p, year_of_publication: +value }));
            }
          }}
        />

        <Button
          onPress={onAddButtonPress}
          title="Add"
          disabled={validateField}
          accessibilityLabel="Add new Book button"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
