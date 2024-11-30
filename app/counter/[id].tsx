import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Pressable } from 'react-native';
import Animated, { SlideInUp } from 'react-native-reanimated';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function CounterScreen() {
	const { id } = useLocalSearchParams();
	const router = useRouter();

	return (
		<Animated.View entering={SlideInUp} style={styles.container}>
			<ThemedView style={styles.header}>
				<ThemedText type='title'>Counter Details</ThemedText>
				<Pressable style={styles.closeButton} onPress={() => router.back()}>
					{/* <IconSymbol name='x' size={24} color='#fff' /> */}
				</Pressable>
			</ThemedView>

			<ThemedView style={styles.content}>
				<ThemedText>Counter ID: {id}</ThemedText>
				{/* Add counter details and controls here */}
			</ThemedView>
		</Animated.View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: '#fff',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 50,
		alignItems: 'center',
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	closeButton: {
		backgroundColor: '#0a7ea4',
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		flex: 1,
		padding: 16,
	},
});
