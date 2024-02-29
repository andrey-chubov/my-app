import { ReactNode } from "react";
import { View } from "react-native";

type Props = {
  actionItem?: ReactNode;
};

export const BooksListFooter = ({ actionItem }: Props) => {
  return (
    <View className="flex-row justify-end py-2 px-6 border-t border-neutral-100">
      {actionItem}
    </View>
  );
};
