import { Text, View } from "react-native";

export const Header = () => {
  return (
    <View
      className="flex-row items-center h-12 bg-zinc-50 
      my-2 mx-4 rounded-lg shadow shadow-slate-300 
      border border-cyan-600"
    >
      <Text className="flex-1 text-base border-r  text-center ">Title</Text>
      <Text className="flex-1 text-base  pr-6  text-center ">Author</Text>
    </View>
  );
};
