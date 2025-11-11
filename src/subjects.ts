export interface Topic {
  id: string;
  title: string;
  summary: string;
  filename: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  color: string;
  colorDark: string;
  icon: string;
  asTopics: Topic[];
  aLevelTopics: Topic[];
}

export { getSubjects } from './lib/subjects-data';
