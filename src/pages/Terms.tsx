import Layout from '@/components/Layout';
import { ScrollText, Heart } from 'lucide-react';

export default function Terms() {
  return (
    <Layout>
      <main className="mx-auto max-w-3xl px-4 py-10 prose prose-slate dark:prose-invert">
        {/* PAGE TITLE */}
        <header className="flex items-center gap-3 mb-6">
          <ScrollText className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
          <h1 className="!mb-0">Disclaimer & Credits</h1>
        </header>

        {/* DISCLAIMER SECTION */}
        <section id="disclaimer" className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <ScrollText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h2 className="!mb-0">Disclaimer</h2>
          </div>

          <div className="space-y-5 leading-relaxed">
            <p>
              This website is a very small student project that I created as part of my learning in computer science. It is not a professional platform, not an educational service, and not connected in any way to any school, teacher, or institution. I am only a student who wanted to help myself and other students find study materials more easily. Everything you see here has been made by other people, not by me.
            </p>
            <p>
              All the study materials linked or mentioned on this website belong completely to the original authors, educators, and platforms who created them. None of the content is mine. I have not written, edited, or changed any of it. I have simply collected links to existing resources and organised them by topic and syllabus so that students can save time when studying. My role is only that of a learner who wanted to bring together useful links in one place.
            </p>
            <p>
              This website does not host or distribute any original content. It only provides links that lead directly to the rightful creators’ websites, channels, and pages. The ownership, authorship, and all rights remain entirely with them. They deserve all the recognition, appreciation, and respect for their work. Without them, there would be nothing to show here.
            </p>
            <p>
              This project is fully non-commercial. There is no profit, no selling, and no advertising involved. It is not meant for promotion or business. It exists only as a simple educational tool created with respect for the real teachers and contributors who make learning possible. I do not earn anything from it, and I never will. It is just a part of my learning process and my wish to make studying a little easier for others.
            </p>
            <p>
              If any teacher, creator, or website owner ever wishes that their link or name be removed, changed, or credited in a different way, I will immediately make the adjustment. I do not want to take or use anyone’s work in a way that feels wrong or disrespectful. The entire purpose of this project is to appreciate and guide others toward the amazing work that has already been done by real educators.
            </p>
            <p>
              Everything on this website belongs to them. Nothing belongs to me. This is not my knowledge, not my content, and not my creation. It is only my way of saying thank you to those who have shared so much with the world and have made learning possible for students like me.
            </p>
          </div>
        </section>

        {/* CREDITS SECTION */}
        <section id="credits">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-pink-500 dark:text-pink-400" />
            <h2 className="!mb-0">Credits</h2>
          </div>

          <div className="space-y-5 leading-relaxed">
            <p>
              This section is my way of expressing sincere gratitude to the wonderful teachers, websites, and communities who have created, shared, and maintained the study resources that students everywhere depend on. They are the heart of this project. Every bit of learning, every clear explanation, and every organised note that helps students comes from them.
            </p>
            <p>
              I want to thank them deeply for their hard work, kindness, and generosity in sharing their knowledge freely. They are the real reason this website exists and the real people who deserve credit for everything that students learn from these resources.
            </p>

            <ul className="space-y-3">
              <li>
                <a href="https://www.physicsandmathstutor.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-4">
                  Physics & Maths Tutor
                </a>{' '}
                — A platform that has supported thousands of students with clear, structured, and trustworthy study materials. Their dedication to quality education and student success is truly inspiring.
              </li>
              <li>
                <a href="https://backnotes.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-4">
                  BackNotes
                </a>{' '}
                — A reliable and thoughtful source of well-structured notes and revision guides that make complex subjects easier for students to understand and remember.
              </li>
              <li>
                <a href="https://studywithmehar.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-4">
                  StudyWithMehar
                </a>{' '}
                — A website built with great care and attention to detail, offering clear explanations and guidance that help students approach each subject with confidence.
              </li>
              <li>
                <a href="https://igcsemathssite.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-4">
                  IGCSE Maths
                </a>{' '}
                — A resource that has made mathematics learning simpler, with lessons and examples that reach learners of all levels and backgrounds.
              </li>
              <li>
                <a href="https://rigcse.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-4">
                  RIGCSE
                </a>{' '}
                — A platform that provides accessible, student-friendly material, helping learners prepare for their exams with structure and understanding.
              </li>
              <li>
                <a href="https://www.youtube.com/@sureshgoyal" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-4">
                  Suresh Goyal
                </a>{' '}
                — A remarkable teacher whose Mathematics and Further Mathematics materials have supported and inspired so many students. His generosity in sharing knowledge has helped learners around the world.
              </li>
              <li>
                <a href="https://majidtahir.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-4">
                  CS Majid Tahir
                </a>{' '}
                — A teacher who has made Computer Science easier for students through his detailed notes, lessons, and genuine effort to help others succeed. His clarity and passion for teaching are deeply appreciated.
              </li>
              <li>
                <a href="https://www.rocketrevises.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 font-semibold underline underline-offset-4">
                  Rocket Revise
                </a>{' '}
                — A group that provides practical and high-quality learning resources, helping students review and revise with confidence and focus.
              </li>
            </ul>

            <p>
              To all these educators and to the many others who share their time and knowledge online, thank you. You are the real reason students like me can learn, improve, and achieve more. This project is only a reflection of your work and your kindness.
            </p>
            <p>
              Everything on this website belongs to you. Every word, every idea, every piece of learning material is yours. I am just a student who has put them together to make studying easier. You are the ones who make this possible, and I am endlessly thankful for your work, your time, and your generosity.
            </p>
            <p>
              This website is only a small gesture of gratitude — a way to say thank you for making education open and reachable for everyone.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
