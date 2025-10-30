import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { Icon } from './icons';

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 4,
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

const softSkills = [
  'Trabajo en equipo',
  'Resolución de problemas',
  'Comunicación efectiva',
  'Responsabilidad',
  'Aprendizaje continuo',
  'Adaptabilidad',
];

export const SoftSkills: React.FC = () => {
  return (
    <View style={{ marginBottom: 0 }} wrap={false}>
      <View style={styles.list}>
        {softSkills.map((skill, index) => (
          <View key={`${index}-${skill}`} style={styles.listItem}>
            <Icon name="dot" size={10} />
            <Text style={{ marginLeft: 4 }}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
