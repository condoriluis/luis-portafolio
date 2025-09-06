import { Text } from '@react-pdf/renderer';

import type { Resumen } from '@/src/lib/constants';

type SkillProps = Resumen['skills'][0];

export const Skill: React.FC<SkillProps> = ({ name, keywords }) => {
  return (
    <Text style={{ paddingVertical: 1 }}>
      <Text style={{ fontWeight: 700 }}>{name}: </Text>
      <Text>{keywords.map((k) => k.name).join(', ')}</Text>
    </Text>
  );
};
