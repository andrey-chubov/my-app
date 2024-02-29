import { ButtonProps, Text, TouchableOpacity } from "react-native";

export const Button = ({ title, color, disabled, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`h-10 p-2.5 rounded-2xl border bg-green-500 ${
        disabled && "bg-red-300"
      }`}
      disabled={disabled}
      {...rest}
    >
      <Text className="text-center uppercase" style={{ color }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
