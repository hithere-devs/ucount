import { StyleSheet, Pressable, FlatList } from 'react-native';
import { Link } from 'expo-router';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';

// Temporary mock data
const MOCK_COUNTERS = [
	{ id: '1', name: 'Daily Steps', value: 5000, type: 'number' },
	{ id: '2', name: 'Coffee Budget', value: 25.5, type: 'money' },
	{ id: '3', name: 'Weight Track', value: 65.5, type: 'weight' },
];

type CounterDisplayProps = {
	value: number;
	type: 'number' | 'money' | 'weight';
	size: 'small' | 'large';
};

export default function HomeScreen() {
	const renderCounter = ({
		item,
		index,
	}: {
		item: {
			id: string;
			name: string;
			type: string;
			value: any;
		};
		index: any;
	}) => (
		<Animated.View
			entering={FadeInUp.delay(index * 100)}
			style={styles.counterCard}
		>
			<Link href={`/counter/${item.id}`} asChild>
				<Pressable style={styles.cardContent}>
					<ThemedText type='title'>{item.name}</ThemedText>
					<ThemedText type='subtitle'>
						{item.type === 'money' ? `$${item.value}` : item.value}
					</ThemedText>
				</Pressable>
			</Link>
		</Animated.View>
	);

	return (
		<ThemedView style={styles.container}>
			<ThemedView style={styles.header}>
				<ThemedText type='title'>My Counters</ThemedText>
				<Link href='/new-counter' asChild>
					<Pressable style={styles.addButton}>
						<IconSymbol name='plus' size={24} color='#fff' />
					</Pressable>
				</Link>
			</ThemedView>

			<FlatList
				data={MOCK_COUNTERS}
				renderItem={renderCounter}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.list}
			/>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
	},
	addButton: {
		backgroundColor: '#0a7ea4',
		width: 40,
		height: 40,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	list: {
		gap: 16,
	},
	counterCard: {
		backgroundColor: '#fff',
		borderRadius: 12,
		padding: 16,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	cardContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
