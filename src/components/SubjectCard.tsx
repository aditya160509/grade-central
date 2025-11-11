import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { subjectIcon, subjectPalette } from '@/lib/subject-ui';
import type { Subject } from '@/subjects';

interface SubjectCardProps {
  subject: Subject;
  topicsCount: number;
}

export default function SubjectCard({ subject, topicsCount }: SubjectCardProps) {
  const Icon = subjectIcon[subject.id] ?? subjectIcon['mathematics'];
  const bg = subjectPalette[subject.id] ?? 'from-slate-100 to-white';

  return (
    <Link
      to={`/subject/${subject.id}`}
      aria-label={`${subject.name} with ${topicsCount} topics`}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-2xl"
    >
      <Card
        className={cn(
          'group h-full rounded-2xl border shadow-sm p-6 transition text-slate-900',
          'bg-gradient-to-b',
          bg,
          'hover:-translate-y-1 hover:shadow-lg',
          'dark:border-white/10 dark:bg-white/5 dark:bg-none dark:text-white dark:hover:bg-white/10'
        )}
      >
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/80 p-4 text-primary shadow-inner transition group-hover:bg-white dark:bg-white/10 dark:text-white">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wide text-muted-foreground dark:text-white/70">
              {subject.code || 'CIE'}
            </p>
            <h3 className="text-xl font-semibold">{subject.name}</h3>
            <p className="text-sm text-muted-foreground dark:text-white/80">
              {topicsCount} topics available
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
