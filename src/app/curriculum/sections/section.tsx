import { StyleSheet, Text, View } from '@react-pdf/renderer';

type SectionProps = React.PropsWithChildren & {
  title: string;
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 12,
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 700,
    color: '#475569',
    fontSize: 11,
  },
  separator: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#475569',
    marginVertical: 4,
  },
});

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
      {children}
    </View>
  );
};
