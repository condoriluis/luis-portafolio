import { Text, View, Link, StyleSheet, Image } from '@react-pdf/renderer';
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
  titleSmall: {
    fontSize: 20,
    fontWeight: 700,
    color: '#1f2937',
  },
  subTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
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
  withImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 45,
    borderWidth: 1.2,
    borderColor: '#4F46E5',
    padding: 1,
    
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    objectFit: 'cover',
  },
});

type HeadingProps = {
  info: Resumen['basics'];
  showImage?: boolean;
};

export const Heading: React.FC<HeadingProps> = ({ info, showImage = false }) => {
  const nameStyle = showImage ? styles.titleSmall : styles.title;

  const nameAndLabel = showImage ? (
    <View style={{ flexDirection: 'column' }}>

      <Text style={nameStyle}>
        {info.firstName} {info.middleName} {info.lastName}
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 2, marginBottom: 5, marginRight: 12 }}>
        <Text style={styles.subTitle}>{info.label}</Text>
      </View>
    </View>
  ) : (
    <View style={styles.nameContainer}>
      <Text style={nameStyle}>
        {info.firstName} {info.middleName} {info.lastName}
      </Text>
      <Text style={styles.subTitle}>{info.label}</Text>
    </View>
  );

  const content = (
    <View style={styles.container}>
      {nameAndLabel}

      <View style={styles.infoContainer}>
        <Link src={`mailto:${info.email}`} style={[styles.link, styles.infoItem]}>
          <IconText icon="at" text={info.email} />
        </Link>

        <Link src={`tel:${info.phone}`} style={[styles.link, styles.infoItem]}>
          <IconText icon="phone" text={info.phone} />
        </Link>

        <Link src={`https://${info.url}`} style={[styles.link, styles.infoItem]}>
          <IconText icon="link" text={info.url} />
        </Link>

        {!showImage && (
          <IconText
            icon="location"
            text={`${info.location.city}, ${info.location.region}`}
          />
        )}

      </View>
    </View>
  );

  if (showImage) {
    return (
      <View style={styles.withImageContainer}>
        {content}
        <View style={styles.imageContainer}>
          <Image
            src={info.image}
            style={styles.image}
          />
        </View>
      </View>
    );
  }

  return content;
};
