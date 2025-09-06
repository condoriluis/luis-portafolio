import { Text, View, StyleSheet } from '@react-pdf/renderer';

import type { Resumen } from '@/src/lib/constants';
import { IconText } from './icons';

const styles = StyleSheet.create({
  container: { marginBottom: 8 },
  title: {
    fontSize: 13,
    color: '#4F46E5',
    fontWeight: 700,
  },
  area: { fontStyle: 'italic', marginVertical: 4 },
  info: { flexDirection: 'row', justifyContent: 'space-between' },
});

type EducationProps = Resumen['education'][0];

export const Education: React.FC<EducationProps> = ({
  institution,
  area,
  location,
  endDate,
}) => {
  return (
    <View style={styles.container} wrap={false}>
      <Text style={styles.title}>{institution}</Text>
      <Text style={styles.area}>{area}</Text>
      <View style={styles.info}>
        <IconText icon='location' text={location} />
        <IconText icon='calendar' text={endDate} />
      </View>
    </View>
  );
};
