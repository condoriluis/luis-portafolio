import { StyleSheet, Text, View } from '@react-pdf/renderer';

import type { Resumen } from '@/src/lib/constants';
import { ConditionalLink } from './conditional-link';
import { Icon, IconText } from './icons';

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 700,
  },
  row: {
    flexDirection: 'row',
  },
  infoContainer: {
    justifyContent: 'space-between',
    marginTop: 4,
    alignItems: 'center',
  },
  company: {
    fontSize: 12,
    fontWeight: 700,
    color: '#4F46E5',
  },
  description: {
    marginTop: 4,
  },
  list: {
    marginTop: 4,
  },
  listItem: {
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

type ExperienceProps = Resumen['work'][0];

export const Experience: React.FC<ExperienceProps> = ({
  name,
  position,
  location,
  dateWork,
  highlights,
}) => {
  return (
    <View style={{ marginBottom: 4 }} wrap={false}>
      <Text style={styles.title}>{position}</Text>
      <View style={[styles.infoContainer, styles.row]}>
        <ConditionalLink url="">
          <Text style={styles.company}>{name}</Text>
        </ConditionalLink>
        <View style={styles.row}>
          <IconText
            icon='location'
            text={`${location}`}
          />
          <View style={{ width: 12 }} />
          <IconText icon='calendar' text={dateWork} />
        </View>
      </View>
      <View style={styles.list}>
        {highlights.map((h, index) => (
          <View key={`${index}-${h}`} style={styles.listItem}>
            <Icon name='dot' size={10} />
            <Text style={{ marginLeft: 4 }}>{h}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
