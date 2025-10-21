import { Document, Page, Text, View } from '@react-pdf/renderer';

import type { Resumen } from '@/src/lib/constants';
import { styles } from './styles/pdfStyles';
import { Heading } from './sections/heading';
import { Section } from './sections/section';
import { Experience } from './sections/experience';
import { Education } from './sections/education';
import { Project } from './sections/project';
import { Skill } from './sections/skill';
import { Languaje } from './sections/languaje';

import { registerPdfFonts } from './utils/fonts';
import { Watermark } from './watermark';

registerPdfFonts();

type ResumeDocumentProps = {
  resumen: Resumen;
};

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({ resumen }) => {

  const toTitleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    };
  
  return (
    <Document
      author={`${resumen.basics.firstName} ${resumen.basics.middleName}`}
      title={`Curriculum Vitae - ${resumen.basics.firstName} ${resumen.basics.middleName} ${resumen.basics.lastName}, ${new Date().getFullYear()}`}
    >
      <Page size='A4' style={styles.page}>
        <Heading info={resumen.basics} />

        <Section title='Introducción'>
          <Text>{resumen.basics.summary}</Text>
        </Section>

        <Section title='Stack Tecnologías'>
          {resumen.skills.map((s, index) => (
            <Skill key={`${index}-${s.name}`} {...s} />
          ))}
        </Section>
        
        <Section title="Experiencia Laboral">
          {resumen.work.map((w, index) => (
            <Experience
              key={`${index}-${w.name}`}
              {...w}
              name={toTitleCase(w.name)}
            />
          ))}
        </Section>

        <Section title='Proyectos'>
          {resumen.projects.slice(0, 6).map((p, index) => (
            <Project key={`${index}-${p.title}`} {...p} />
          ))}
        </Section>

        <Section title='Educación'>
          {resumen.education.map((e, index) => (
            <Education key={`${index}-${e.institution}`} {...e} />
          ))}
        </Section>

        <Section title="Idiomas">
          <View style={styles.container}>
            {resumen.languages.map((w, index) => (
              <Languaje key={`${index}-${w.name}`} {...w} name={toTitleCase(w.name)} />
            ))}
          </View>
        </Section>

        {/* <View style={styles.twoColumn}>
          <View style={styles.left}>

            <Section title='Proyectos'>
              {resumen.projects.slice(0, 5).map((p, index) => (
                <Project key={`${index}-${p.title}`} {...p} />
              ))}
            </Section>
            
          </View>
          <View style={styles.right}>

            <Section title='Educación'>
              {resumen.education.map((e, index) => (
                <Education key={`${index}-${e.institution}`} {...e} />
              ))}
            </Section>

            <Section title="Idiomas">
              <View style={styles.container}>
                {resumen.languages.map((w, index) => (
                  <Languaje key={`${index}-${w.name}`} {...w} name={toTitleCase(w.name)} />
                ))}
              </View>
            </Section>

          </View>
        </View> */}

        {/* <Watermark /> */}

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
