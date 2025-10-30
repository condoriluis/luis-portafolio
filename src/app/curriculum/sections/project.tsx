import { StyleSheet, Text, View, Link } from '@react-pdf/renderer';
import type { Resumen } from '@/src/lib/constants';

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: '#4F46E5',
    fontWeight: 700,
  },
  description: {
    marginTop: 4,
    fontSize: 10,
    color: '#4b5563',
  },
  link: {
    textDecoration: 'none',
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 4,
  },
  badge: {
    backgroundColor: '#f3f4f6',
    color: '#000000',
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginRight: 4,
    marginBottom: 2,
    fontSize: 9,
    fontWeight: 'normal',
  },
});

type ProjectProps = Resumen['projects'][0];

export const Project: React.FC<ProjectProps> = ({
  title,
  description,
  link,
  video,
  github,
  categories,
}) => {
  const href = github || link || video;

  return (
    <View wrap={false} style={{ marginBottom: 6 }}>
      {href ? (
        <Link src={href} style={styles.link}>
          <Text style={styles.title}>{title}</Text>
        </Link>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}

      <Text style={styles.description}>{description}</Text>

      {categories.length > 0 && (
        <View style={styles.badgesContainer}>
          {categories.map((c) => (
            <Text key={c} style={styles.badge}>
              {c}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};
