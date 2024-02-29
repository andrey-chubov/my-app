import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavProp } from "shared/routes";

export const NavigateToBookAddButton = () => {
  const { navigate } = useNavigation<NavProp<"Books">>();

  const onAddToListPress = () => navigate("AddBook");

  return (
    <Entypo
      name="add-to-list"
      size={24}
      color="black"
      onPress={onAddToListPress}
    />
  );
};
