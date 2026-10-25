import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CareerTipsPage() {
  const articles = [
    {
      title: 'How to Build a Portfolio that Grabs Tech Recruiters in 10 Seconds',
      category: 'Portfolio Strategy',
      readTime: '4 min read',
      summary: 'Recruiters spend under 30 seconds scanning your site. Discover how hero sections, live demo links, and clean UI double response rates.',
    },
    {
      title: '7 ATS Resume Mistakes That Get You Silently Filtered Out',
      category: 'CV Optimization',
      readTime: '6 min read',
      summary: 'Formatting columns incorrectly or using low-contrast icons can cause ATS parsers to drop your experience. Here is the bulletproof guide.',
    },
    {
      title: 'Designing Bento-Grid Portfolios: Why They Work So Well in 2025',
      category: 'UI/UX Design',
      readTime: '5 min read',
      summary: 'Explore why modular card architectures make project showcases easier to digest on both mobile phones and 4K displays.',
    },
    {
      title: 'From Junior to Senior: What Companies Really Look for on GitHub',
      category: 'Engineering',
      readTime: '7 min read',
      summary: 'Code quality, README documentation, commit discipline, and architecture decisions tell a much richer story than raw commit streaks.',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200">
        <div className="max-w-2xl">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
            Career Playbook
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Career Tips & Blueprint
          </h1>
          <p className="text-slate-600 text-sm mt-2">
            Actionable strategies written by senior hiring managers and engineers to supercharge your application workflow.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {articles.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-300 hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-2 text-xs mb-3">
                <span className="font-semibold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  {item.category}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">{item.readTime}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-base leading-snug hover:text-amber-600 transition cursor-pointer">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
              <span className="text-slate-500">Read full article</span>
              <ArrowRight className="w-4 h-4 text-amber-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
