import { StyleSheet, Text, View } from '@react-pdf/renderer';
import type { Resumen } from '@/src/lib/constants';

const styles = StyleSheet.create({
  item: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
    backgroundColor: '#f3f4f6',
    marginRight: 4,
    marginBottom: 2,
  },
  name: {
    fontSize: 10,
    fontWeight: 'normal',
    color: '#000000',
  },
  level: {
    fontSize: 9,
    color: '#6b7280',
    marginTop: 1,
  },
});

type LanguajeProps = Resumen['languages'][0];

export const Languaje: React.FC<LanguajeProps> = ({ name, level }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.level}>{level}</Text>
  </View>
);
