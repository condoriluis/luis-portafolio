import { Text, View, Link, StyleSheet } from '@react-pdf/renderer';
import type { Resumen } from '@/src/lib/constants';
import { IconText } from './icons';

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    flexDirection: 'column',
  },
  nameContainer: {
    textAlign: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: '#1f2937',
  },
  subTitle: {
    fontSize: 16,
    color: '#4F46E5',
    fontWeight: 600,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginTop: 2,
  },
  infoItem: {
    marginRight: 12,
  },
  link: {
    textDecoration: 'none',
  },
});

type HeadingProps = {
  info: Resumen['basics'];
};

export const Heading: React.FC<HeadingProps> = ({ info }) => {
  return (
    <View style={styles.container}>

      <View style={styles.nameContainer}>
        <Text style={styles.title}>
          {info.firstName} {info.middleName} {info.lastName}
        </Text>
        <Text style={styles.subTitle}>{info.label}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Link src={`mailto:${info.email}`} style={[styles.link, styles.infoItem]}>
          <IconText icon="at" text={info.email} />
        </Link>
        <Link src={`https://${info.url}`} style={[styles.link, styles.infoItem]}>
          <IconText icon="link" text={info.url} />
        </Link>
        <IconText
          icon="location"
          text={`${info.location.city}, ${info.location.region} ${info.location.countryCode}`}
        />
      </View>
    </View>
  );
};
