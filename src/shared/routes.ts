import type {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
	Books: undefined;
	Book: { id: number };
	AddBook: undefined;
};

export type ScreenProps<Screen extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, Screen>;

export type NavProp<Screen extends keyof RootStackParamList> =
	NativeStackNavigationProp<RootStackParamList, Screen>;