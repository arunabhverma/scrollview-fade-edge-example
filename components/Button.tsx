import { ViewStyle, StyleProp, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { PressableScale } from "./PressableScale";
import { Text } from "react-native";

type ButtonProps = {
	title: string;
	style?: StyleProp<ViewStyle>;
	active?: boolean;
	onPress: () => void;
};

export const Button: React.FC<ButtonProps> = (props) => {
	const { title, style, active, onPress } = props;
	const theme = useTheme();
	return (
		<PressableScale
			onPress={onPress}
			style={[
				styles.buttonStyle,
				{
					backgroundColor: theme.colors.card,
					borderColor: theme.colors.border,
				},
				active && { backgroundColor: theme.colors.primary },
				style,
			]}
		>
			<Text style={[styles.buttonText, { color: theme.colors.text }]}>
				{title}
			</Text>
		</PressableScale>
	);
};
const styles = StyleSheet.create({
	buttonText: {
		fontSize: 16,
		fontWeight: "600",
	},
	buttonStyle: {
		paddingVertical: 5,
		paddingHorizontal: 15,
		borderRadius: 30,
		minWidth: 20,
		alignItems: "center",
		borderWidth: 1,
	},
});
