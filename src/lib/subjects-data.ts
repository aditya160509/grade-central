import type { Subject, Topic } from '../subjects'

import accounting from '../data/accounting.json'
import biology from '../data/biology.json'
import businessStudies from '../data/business-studies.json'
import chemistry from '../data/chemistry.json'
import computerScience from '../data/computer-science.json'
import economics from '../data/economics.json'
import furtherMathematics from '../data/further-mathematics.json'
import mathematics from '../data/mathematics.json'
import physics from '../data/physics.json'
import psychology from '../data/psychology.json'
import sociology from '../data/sociology.json'

// JSON shape: { subject: string, files: Array<{ title: string, link: string }> }
type JsonShape = { subject: string; files: Array<{ title: string; link: string }> }

// Accept only proper Google Drive view links and keep order
function isValidDriveViewLink(url: string): boolean {
  if (!url || typeof url !== 'string') return false
  const u = url.trim()
  // allow both shared view and file view; reject direct download patterns
  const isDrive = u.startsWith('https://drive.google.com/')
  const forbids = u.includes('export=download') || u.includes('uc?export=download')
  return isDrive && !forbids
}

function toSlug(s: string): string {
  return s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')
}

function toSubject(id: string, json: JsonShape): Subject {
  const asTopics: Topic[] = json.files
    .filter(f => isValidDriveViewLink(f.link))
    .map((f) => ({
      id: toSlug(f.title),
      title: f.title,
      summary: 'Open notes on Google Drive',
      filename: f.link
    }))

  return {
    id,
    name: json.subject,
    code: '',
    color: `subjects-${id}`,
    colorDark: `subjects-${id}-dark`,
    icon: '',
    asTopics,
    aLevelTopics: [] // leave empty to hide Chemistry A Level
  }
}

export function getSubjects(): Subject[] {
  const all = [
    toSubject('accounting', accounting as JsonShape),
    toSubject('biology', biology as JsonShape),
    toSubject('business-studies', businessStudies as JsonShape),
    toSubject('chemistry', chemistry as JsonShape),
    toSubject('computer-science', computerScience as JsonShape),
    toSubject('economics', economics as JsonShape),
    toSubject('further-mathematics', furtherMathematics as JsonShape),
    toSubject('mathematics', mathematics as JsonShape),
    toSubject('physics', physics as JsonShape),
    toSubject('psychology', psychology as JsonShape),
    toSubject('sociology', sociology as JsonShape)
  ]
  return all.filter((s) => s.id !== 'sociology')
}
