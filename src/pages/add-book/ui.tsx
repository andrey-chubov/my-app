import { useNavigation } from "@react-navigation/native";
import { BookAddForm } from "features";
import { FC } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import { NavProp, ScreenProps } from "shared/routes";
import { Modal } from "shared/ui/modal";

export const AddBookScreen: FC<ScreenProps<"AddBook">> = ({ route }) => {
  const { goBack } = useNavigation<NavProp<"AddBook">>();
  const behavior = Platform.OS === "ios" ? "padding" : "height";

  return (
    <KeyboardAvoidingView behavior={behavior} className="flex-1">
      <Modal onBackdropPress={goBack}>
        <BookAddForm onNewBookAdded={goBack} />
      </Modal>
    </KeyboardAvoidingView>
  );
};
