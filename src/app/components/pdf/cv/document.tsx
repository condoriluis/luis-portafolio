import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

import type { Resumen } from '@/src/lib/constants';
import { Heading } from './heading';
import { Section } from './section';
import { Experience } from './experience';
import { Education } from './education';
import { Project } from './project';
import { Skill } from './skill';
import { Languaje } from './languaje';

const styles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingHorizontal: 50,
    fontFamily: 'Ubuntu',
    fontSize: 10,
    paddingBottom: 36,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 4,
  },
  twoColumn: {
    flexDirection: 'row',
  },
  left: {
    flexGrow: 1,
    marginRight: 16,
    width: '55%',
  },
  right: {
    flexGrow: 1,
    width: '40%',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 24,
    left: 0,
    right: 35,
    textAlign: 'right',
    color: '#64748b',
  },
});

type ResumeDocumentProps = {
  resume: Resumen;
};

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({ resume }) => {

  const toTitleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    };
  
  return (
    <Document
      author={`${resume.basics.firstName} ${resume.basics.middleName}`}
      title={`Curriculum Vitae - ${resume.basics.firstName} ${resume.basics.middleName} ${resume.basics.lastName}, ${new Date().getFullYear()}`}
    >
      <Page size='A4' style={styles.page}>
        <Heading info={resume.basics} />

        <Section title='Introducción'>
          <Text>{resume.basics.summary}</Text>
        </Section>

        <Section title='Stack Tecnologías'>
          {resume.skills.map((s, index) => (
            <Skill key={`${index}-${s.name}`} {...s} />
          ))}
        </Section>
        
        <Section title="Experiencia Laboral">
          {resume.work.map((w, index) => (
            <Experience
              key={`${index}-${w.name}`}
              {...w}
              name={toTitleCase(w.name)}
            />
          ))}
        </Section>

        <View style={styles.twoColumn}>
          <View style={styles.left}>

            <Section title='Proyectos'>
              {resume.projects.slice(0, 3).map((p, index) => (
                <Project key={`${index}-${p.title}`} {...p} />
              ))}
            </Section>
            
          </View>
          <View style={styles.right}>

            <Section title='Educación'>
              {resume.education.map((e, index) => (
                <Education key={`${index}-${e.institution}`} {...e} />
              ))}
            </Section>

            <Section title="Idiomas">
              <View style={styles.container}>
                {resume.languages.map((w, index) => (
                  <Languaje key={`${index}-${w.name}`} {...w} name={toTitleCase(w.name)} />
                ))}
              </View>
            </Section>

          </View>
        </View>

        <Text
          fixed
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `Página ${pageNumber} de ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};
