import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever free',
      desc: 'Ideal for students and new graduates crafting their first resume.',
      features: ['Access to 5 Free CV Templates', '1 Free Web Portfolio', 'Export to PDF', 'Standard Community Support'],
      highlighted: false,
      cta: 'Get Started Free',
    },
    {
      name: 'Pro Professional',
      price: '$19',
      period: 'one-time purchase',
      desc: 'Everything you need to secure high-paying roles & freelance gigs.',
      features: [
        'All Premium CV & Portfolio Templates',
        'Custom Domain Hosting for Portfolio',
        'Built-in ATS Resume Scanner',
        'Lifetime Updates & Premium Support',
      ],
      highlighted: true,
      cta: 'Unlock Pro Templates',
    },
    {
      name: 'Team & Studio',
      price: '$49',
      period: 'per year',
      desc: 'For teams, agencies, and bootcamps creating multiple showcases.',
      features: [
        'Unlimited Template Downloads',
        'Team Collaboration Workspace',
        'Commercial Usage Rights',
        'Priority 24/7 Developer Support',
      ],
      highlighted: false,
      cta: 'Contact Sales',
    },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Transparent Pricing
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Invest in Your Career Growth
        </h1>
        <p className="text-sm text-slate-600">
          No subscriptions needed for single templates. Clear pricing with zero surprises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all ${
              plan.highlighted
                ? 'border-blue-600 ring-2 ring-blue-600/20 shadow-xl relative'
                : 'border-slate-200 shadow-sm'
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full flex items-center space-x-1">
                <Sparkles className="w-3 h-3" />
                <span>Most Popular</span>
              </div>
            )}

            <div>
              <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
              <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.desc}</p>

              <div className="mt-4 mb-6">
                <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                <span className="text-xs text-slate-500 ml-1.5">{plan.period}</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-start space-x-2.5 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/register"
                className={`w-full block py-2.5 px-4 rounded-xl text-center text-xs font-semibold transition ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
