import { useParams, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Topic } from '@/subjects';
import { getSubjects } from '@/subjects';

const subjects = getSubjects();

export default function SubjectPage() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjects.find((s) => s.id === subjectId);

  if (!subject) {
    return <Navigate to="/" replace />;
  }

  const cleanTitle = (title: string) => title.replace(/^ch\d*\s*/i, "");

  const renderTopicCard = (topic: Topic) => (
    <div key={topic.id} className="p-4 rounded-lg border bg-card">
      <h3 className="font-medium mb-2">{cleanTitle(topic.title)}</h3>
      <p className="text-sm text-muted-foreground mb-3">{topic.summary}</p>
      <a
        href={topic.filename}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        title="Opens Google Drive in a new tab"
      >
        Open Notes
      </a>
    </div>
  );

  const renderTopicGrid = (topics: Topic[]) => {
    if (topics.length === 0) {
      return (
        <div className="col-span-full text-center py-8">
          <p className="text-muted-foreground">Resources coming soon.</p>
        </div>
      );
    }
    return topics.map(renderTopicCard);
  };

  // Collect and deduplicate outbound links from visible topics
  const collectLinks = (topics: Topic[]): string[] => {
    const links = topics.map((t) => (t as any).link || (t as any).url || t.filename || (t as any).driveLink)
      .filter((v): v is string => Boolean(v));
    return Array.from(new Set(links));
  };

  const allLinks = Array.from(
    new Set([
      ...collectLinks(subject.asTopics || []),
      ...collectLinks(subject.aLevelTopics || []),
    ])
  );

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-xl p-8 mb-8 text-center"
          style={{ backgroundColor: `hsl(var(--${subject.color.replace('subjects-', '')}))` }}
        >
          {subject.icon && <div className="text-6xl mb-4">{subject.icon}</div>}
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: `hsl(var(--${subject.colorDark.replace('subjects-', '')}))` }}
          >
            {subject.name}
          </h1>
          <p
            className="text-lg font-medium"
            style={{ color: `hsl(var(--${subject.colorDark.replace('subjects-', '')}) / 0.8)` }}
          >
            {subject.code ? `CIE A-Level • Code: ${subject.code}` : 'CIE A-Level'}
          </p>
          <div
            className="mt-4 flex justify-center gap-4 text-sm"
            style={{ color: `hsl(var(--${subject.colorDark.replace('subjects-', '')}) / 0.7)` }}
          >
            <span>{subject.asTopics.length} AS Topics</span>
            <span>•</span>
            <span>{subject.aLevelTopics.length} A-Level Topics</span>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">AS Level</Badge>
                Topics ({subject.asTopics.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderTopicGrid(subject.asTopics)}
            </CardContent>
          </Card>

          {subject.aLevelTopics.length > 0 && subject.id !== 'chemistry' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge>A Level</Badge>
                  Topics ({subject.aLevelTopics.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {renderTopicGrid(subject.aLevelTopics)}
              </CardContent>
            </Card>
          )}
        </div>

        <section className="mt-10 rounded-2xl border border-gray-200 dark:border-white/10 p-6">
          <h3 className="text-lg font-semibold mb-3">Explore these links</h3>
          <p className="mb-3 text-gray-600 dark:text-gray-300 text-sm">
            These trusted websites and educators have created the real study materials linked across this project. 
            Please explore them directly to access the full resources and learn from the original creators.
          </p>
          <ul className="space-y-2">
            <li>
              <a href="https://www.physicsandmathstutor.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:no-underline">
                Physics & Maths Tutor
              </a>
            </li>
            <li>
              <a href="https://backnotes.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:no-underline">
                BackNotes
              </a>
            </li>
            <li>
              <a href="https://studywithmehar.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:no-underline">
                StudyWithMehar
              </a>
            </li>
            <li>
              <a href="https://igcsemathssite.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:no-underline">
                IGCSE Maths
              </a>
            </li>
            <li>
              <a href="https://rigcse.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:no-underline">
                RIGCSE
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@sureshgoyal" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:no-underline">
                Suresh Goyal
              </a>
            </li>
            <li>
              <a href="https://majidtahir.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:no-underline">
                CS Majid Tahir
              </a>
            </li>
            <li>
              <a href="https://www.rocketrevises.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:no-underline">
                Rocket Revise
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
