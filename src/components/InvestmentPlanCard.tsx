import React from 'react';
import { InvestmentPlan } from '../data/boosterContent';
import { Calendar, TrendingUp, ArrowRight } from 'lucide-react';

interface InvestmentPlanCardProps {
  plan: InvestmentPlan;
  onSelectPlan: (planCode: string) => void;
  isApprovedForPublicOffering?: boolean;
}

export const InvestmentPlanCard: React.FC<InvestmentPlanCardProps> = ({
  plan,
  onSelectPlan,
}) => {
  const isExecutive = plan.code === 'C';

  return (
    <div
      className={`relative flex flex-col rounded-2xl transition-all duration-300 h-full ${
        isExecutive
          ? 'bg-gradient-to-b from-[#087A32]/15 via-[#063D20] to-[#032111] text-white border-2 border-[#C5A059] shadow-xl shadow-black/20 lg:-translate-y-2'
          : 'bg-[#063D20] text-white border border-[#087A32]/40 hover:border-[#C5A059]/60 shadow-lg'
      }`}
    >
      {/* Top Badge for Popular / Highlighted Plan */}
      {isExecutive && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#C5A059] via-[#DFBF7C] to-[#C5A059] text-[#032111] text-[11px] font-bold uppercase font-display tracking-wider rounded-full shadow-md whitespace-nowrap z-10">
          Most Inquired Tier
        </div>
      )}

      {/* Card Header */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#087A32] flex items-center justify-center font-display font-bold text-white text-base shadow-sm">
              {plan.code}
            </span>
            <span className="font-display font-bold text-xl uppercase tracking-tight text-white">
              {plan.name}
            </span>
          </div>
          <span className="text-xs uppercase font-semibold tracking-wider text-[#C5A059]">
            {plan.tier}
          </span>
        </div>

        {/* Amount */}
        <div className="mt-4">
          <span className="text-xs text-neutral-300 uppercase tracking-wider block font-medium">
            Investment Capital
          </span>
          <div className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-white tabular-nums mt-0.5">
            {plan.investmentAmountFormatted}
          </div>
        </div>
      </div>

      {/* Card Body & Financial Metrics */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {/* Advertised ROI & Duration */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-black/25 border border-white/5">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-300 mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#24B84A]" />
                <span>Advertised Return</span>
              </div>
              <div className="text-2xl font-bold font-display text-[#24B84A] tabular-nums">
                {plan.advertisedInterestFormatted}
              </div>
              <div className="text-[10px] text-neutral-400">Fixed rate proposal</div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-300 mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Duration</span>
              </div>
              <div className="text-2xl font-bold font-display text-neutral-100 tabular-nums">
                {plan.durationFormatted}
              </div>
              <div className="text-[10px] text-neutral-400">{plan.payoutFrequency}</div>
            </div>
          </div>

          {/* Total Maturity Payout Card */}
          <div className="p-4 rounded-xl bg-black/25 border border-white/10">
            <div className="flex items-end justify-between gap-3">
              <div>
                <span className="font-display font-extrabold uppercase tracking-wider text-xs sm:text-sm text-white block">
                  TOTAL
                </span>
                <div className="font-display font-bold text-xl sm:text-2xl text-[#C5A059] tabular-nums mt-0.5">
                  {plan.advertisedTotalPayoutFormatted}
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider font-medium block">
                  Projected Growth
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#24B84A] tabular-nums block mt-0.5">
                  +₦{(plan.advertisedTotalPayout - plan.investmentAmount).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button: Clean Institutional Banking Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => onSelectPlan(plan.code)}
            className={`w-full py-3.5 px-4 rounded-xl font-display font-bold uppercase text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 ${
              isExecutive
                ? 'bg-gradient-to-r from-[#C5A059] via-[#DFBF7C] to-[#C5A059] text-[#032111] hover:brightness-110 shadow-md focus-visible:ring-[#C5A059]'
                : 'bg-[#087A32] text-white hover:bg-[#0FA847] focus-visible:ring-[#24B84A]'
            }`}
          >
            <span>Inquire About Plan {plan.code}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
