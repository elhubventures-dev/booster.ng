/**
 * Centralized Booster Brand & Investment Configuration Data
 * Separating business data, promotional copy, and investment plan models
 * from presentation components.
 */

import abujaLocationImage from '../assets/images/booster_abuja_location_1792702156088.jpg';
import portHarcourtLocationImage from '../assets/images/booster_portharcourt_location_1792702156341.jpg';
import lagosLocationImage from '../assets/images/booster_lagos_location_1792702156142.jpg';

export interface InvestmentPlan {
  id: string;
  code: 'A' | 'B' | 'C' | 'D' | 'E';
  name: string;
  tier: string;
  investmentAmount: number;
  investmentAmountFormatted: string;
  durationMonths: number;
  durationFormatted: string;
  advertisedInterestRate: number;
  advertisedInterestFormatted: string;
  advertisedTotalPayout: number;
  advertisedTotalPayoutFormatted: string;
  payoutFrequency: string;
  keyHighlight: string;
  recommendedFor: string;
  isPopular?: boolean;
}

export interface LocationProject {
  id: string;
  city: string;
  state: string;
  regionTag: string;
  description: string;
  focusArea: string;
  status: string;
  image: string;
  altText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactPhone {
  id: string;
  label: string;
  display: string;
  /** Digits only, country code included (for tel: and wa.me links) */
  e164: string;
}

export interface BoosterConfig {
  brandName: string;
  officialDomain: string;
  sponsorName: string;
  sponsorWebsite: string;
  contactEmail: string;
  contactPhones: ContactPhone[];
  primaryCurrency: string;
  currencySymbol: string;
  primaryMarket: string;
  currentPhase: string;
  /**
   * Publication status setting:
   * When false, plans display transparent "Preliminary Marketing Concept" badges
   * and require verified legal approval prior to any public capital solicitation.
   */
  isApprovedForPublicOffering: boolean;
  publicationStatusNotice: string;
  headlineFlyerDiscrepancyNote: string;
}

export const BOOSTER_CONFIG: BoosterConfig = {
  brandName: 'BOOSTER',
  officialDomain: 'https://booster.ng',
  sponsorName: 'Beyond Borders Real Estate Limited',
  sponsorWebsite: 'https://beyondborders.ng/',
  contactEmail: 'invest@booster.ng',
  contactPhones: [
    {
      id: 'line-1',
      label: 'Enquiry Line 1',
      display: '+2349028497393',
      e164: '2349028497393',
    },
    {
      id: 'line-2',
      label: 'Enquiry Line 2',
      display: '+2348149344813',
      e164: '2348149344813',
    },
  ],
  primaryCurrency: 'NGN',
  currencySymbol: '₦',
  primaryMarket: 'Nigeria',
  currentPhase: 'Phase 1: Brand & Informational Launch',
  isApprovedForPublicOffering: false,
  publicationStatusNotice:
    'PRELIMINARY PRESENTATION FIGURES: The figures displayed below represent client-provided promotional plan proposals currently undergoing formal financial, contractual, and legal due diligence before commercial launch. No funds are currently solicited or accepted on this website.',
  headlineFlyerDiscrepancyNote:
    'AUDIT DISCREPANCY NOTE: The promotional marketing flyer advertises returns of "up to 54% per annum" in promotional text, whereas the structured investment plan table (Plans A through E) specifies a maximum advertised return of 48% (Plan E). This inconsistency has been logged for corporate resolution and must not be altered arbitrarily without formal approval.',
};

export const INVESTMENT_PLANS: InvestmentPlan[] = [
  {
    id: 'plan-a',
    code: 'A',
    name: 'Plan A',
    tier: 'Entry Land Banking',
    investmentAmount: 10_000_000,
    investmentAmountFormatted: '₦10,000,000',
    durationMonths: 12,
    durationFormatted: '12 months',
    advertisedInterestRate: 30,
    advertisedInterestFormatted: '30%',
    advertisedTotalPayout: 13_000_000,
    advertisedTotalPayoutFormatted: '₦13,000,000',
    payoutFrequency: 'At Maturity (12 Months)',
    keyHighlight: '₦3,000,000 Projected Growth',
    recommendedFor: 'Emerging individual investors beginning land banking allocations.',
  },
  {
    id: 'plan-b',
    code: 'B',
    name: 'Plan B',
    tier: 'Growth Land Banking',
    investmentAmount: 20_000_000,
    investmentAmountFormatted: '₦20,000,000',
    durationMonths: 12,
    durationFormatted: '12 months',
    advertisedInterestRate: 30,
    advertisedInterestFormatted: '30%',
    advertisedTotalPayout: 26_000_000,
    advertisedTotalPayoutFormatted: '₦26,000,000',
    payoutFrequency: 'At Maturity (12 Months)',
    keyHighlight: '₦6,000,000 Projected Growth',
    recommendedFor: 'Experienced private investors scaling property portfolio exposure.',
  },
  {
    id: 'plan-c',
    code: 'C',
    name: 'Plan C',
    tier: 'Executive Land Banking',
    investmentAmount: 50_000_000,
    investmentAmountFormatted: '₦50,000,000',
    durationMonths: 12,
    durationFormatted: '12 months',
    advertisedInterestRate: 36,
    advertisedInterestFormatted: '36%',
    advertisedTotalPayout: 68_000_000,
    advertisedTotalPayoutFormatted: '₦68,000,000',
    payoutFrequency: 'At Maturity (12 Months)',
    keyHighlight: '₦18,000,000 Projected Growth',
    recommendedFor: 'High-net-worth individuals and corporate treasury funds.',
    isPopular: true,
  },
  {
    id: 'plan-d',
    code: 'D',
    name: 'Plan D',
    tier: 'Institutional Prime',
    investmentAmount: 100_000_000,
    investmentAmountFormatted: '₦100,000,000',
    durationMonths: 12,
    durationFormatted: '12 months',
    advertisedInterestRate: 42,
    advertisedInterestFormatted: '42%',
    advertisedTotalPayout: 142_000_000,
    advertisedTotalPayoutFormatted: '₦142,000,000',
    payoutFrequency: 'At Maturity (12 Months)',
    keyHighlight: '₦42,000,000 Projected Growth',
    recommendedFor: 'Commercial asset managers and multi-family investment offices.',
  },
  {
    id: 'plan-e',
    code: 'E',
    name: 'Plan E',
    tier: 'Syndicate Capital',
    investmentAmount: 500_000_000,
    investmentAmountFormatted: '₦500,000,000',
    durationMonths: 12,
    durationFormatted: '12 months',
    advertisedInterestRate: 48,
    advertisedInterestFormatted: '48%',
    advertisedTotalPayout: 740_000_000,
    advertisedTotalPayoutFormatted: '₦740,000,000',
    payoutFrequency: 'At Maturity (12 Months)',
    keyHighlight: '₦240,000,000 Projected Growth',
    recommendedFor: 'Major private equity partnerships and institutional syndicates.',
  },
];

export const WHY_BOOSTER_POINTS = [
  {
    id: 'focus',
    number: '01',
    title: 'Real Estate Focus',
    description:
      'Booster concentrates exclusively on prime real estate assets and strategic land banking corridors across Nigeria, aligning investment capital with tangible, long-term property fundamentals.',
    accent: 'Real Property Foundations',
  },
  {
    id: 'structure',
    number: '02',
    title: 'Structured Information',
    description:
      'We believe in absolute operational clarity. Every proposed plan is accompanied by defined timelines, target maturity profiles, explicit parameters, and unambiguous risk disclosures.',
    accent: 'Unambiguous Terms',
  },
  {
    id: 'records',
    number: '03',
    title: 'Documentation and Records',
    description:
      'Structured legal agreements, verifiable deeds of assignment, and institutional custody practices are being built into the Booster foundation to protect investor confidence.',
    accent: 'Verified Documentation',
  },
  {
    id: 'support',
    number: '04',
    title: 'Customer Support',
    description:
      'Direct, human-led relationship management. Our advisory desk provides prospective participants with transparent information, scheduling, and direct communication with sponsor representatives.',
    accent: 'Dedicated Relationship Desk',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    name: 'DISCOVER',
    subtitle: 'Explore the Model',
    description:
      'Learn about Booster, our relationship with sponsor Beyond Borders Real Estate Limited, and the fundamental mechanics of Nigerian strategic land banking.',
    status: 'Available Now',
    isCurrentPhase: true,
  },
  {
    step: '02',
    name: 'REVIEW',
    subtitle: 'Examine Terms & Disclosures',
    description:
      'Carefully inspect prospective plan structures, expected timelines, full risk disclosures, and draft contractual frameworks before making any commitments.',
    status: 'Available Now',
    isCurrentPhase: true,
  },
  {
    step: '03',
    name: 'VERIFY',
    subtitle: 'Investor Eligibility (Future)',
    description:
      'Complete statutory Know-Your-Customer (KYC), investor accreditation, and identity checks once secure registration workflows launch in Phase 2.',
    status: 'Planned for Phase 2',
    isCurrentPhase: false,
  },
  {
    step: '04',
    name: 'PROCEED',
    subtitle: 'Approved Execution (Future)',
    description:
      'Execute legally binding investment deeds and transfer funds through licensed banking channels once institutional and regulatory protocols are finalized.',
    status: 'Planned for Phase 2',
    isCurrentPhase: false,
  },
];

export const PROJECT_LOCATIONS: LocationProject[] = [
  {
    id: 'abuja',
    city: 'Abuja',
    state: 'Federal Capital Territory',
    regionTag: 'National Capital Hub',
    description:
      'Strategic growth corridors across the FCT exhibiting robust infrastructure expansion, diplomatic demand, and steady real estate capital appreciation.',
    focusArea: 'Strategic Land Parcels & Diplomatic Hubs',
    status: 'Proposed Corridor (Subject to Final Inventory)',
    image: abujaLocationImage,
    altText: 'Modern urban view of Abuja Federal Capital Territory Nigeria with central commercial towers',
  },
  {
    id: 'portharcourt',
    city: 'Port Harcourt',
    state: 'Rivers State',
    regionTag: 'South-South Economic Centre',
    description:
      'Prime industrial, commercial, and residential growth sectors across Greater Port Harcourt, supported by sustained commercial energy sector activity.',
    focusArea: 'Prime Commercial Corridors & Planned Residential',
    status: 'Proposed Corridor (Subject to Final Inventory)',
    image: portHarcourtLocationImage,
    altText: 'Contemporary planned real estate development in Port Harcourt Rivers State Nigeria',
  },
  {
    id: 'lagos',
    city: 'Lagos',
    state: 'Lagos State',
    regionTag: 'Commercial & Maritime Metropolis',
    description:
      'High-velocity property development zones along the Lekki-Epe expressway and waterfront commercial axes driving West Africa’s premier private capital market.',
    focusArea: 'Waterfront & High-Growth Expansion Zones',
    status: 'Proposed Corridor (Subject to Final Inventory)',
    image: lagosLocationImage,
    altText: 'Twilight panoramic skyline of Lagos Nigeria featuring waterfront real estate towers',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is Booster?',
    answer:
      'Booster is a dedicated real estate investment brand proudly sponsored by Beyond Borders Real Estate Limited. The brand was established to develop structured digital and land banking opportunities in high-growth Nigerian property markets.',
  },
  {
    id: 'faq-2',
    question: 'What is land banking?',
    answer:
      'Land banking is a real estate investment strategy where capital is deployed to acquire strategic tracts of undeveloped or developing land in path-of-growth corridors. Investors hold these parcels as infrastructure, urbanization, and commercial demand drive substantial capital appreciation over time.',
  },
  {
    id: 'faq-3',
    question: 'What investment plans are presented by Booster?',
    answer:
      'Booster is currently preparing five structured promotional land banking plans: Plan A (₦10M), Plan B (₦20M), Plan C (₦50M), Plan D (₦100M), and Plan E (₦500M), each with a standard 12-month tenure. These plans represent proposed business models currently undergoing legal and financial structuring.',
  },
  {
    id: 'faq-4',
    question: 'How can I learn about the applicable investment terms?',
    answer:
      'Detailed investment documentation, term sheets, deeds of agreement, and risk disclosures are provided through direct consultation with our advisory team. You can reach out directly via invest@booster.ng or through the contact inquiry form on this website.',
  },
  {
    id: 'faq-5',
    question: 'Who can contact Booster?',
    answer:
      'Individual investors, diaspora professionals, institutional asset managers, family offices, and corporate treasuries interested in learning about Nigerian real estate growth opportunities are welcome to contact our team.',
  },
  {
    id: 'faq-6',
    question: 'How can I get in touch with the team?',
    answer:
      'You can reach our corporate investment desk by calling or messaging +2349028497393 or +2348149344813 on WhatsApp, emailing invest@booster.ng, using the Contact section below, or visiting our sponsor’s corporate portal at https://beyondborders.ng/.',
  },
  {
    id: 'faq-7',
    question: 'Is the online investment platform currently accepting investments?',
    answer:
      'No. In this Phase 1 release, the Booster website is strictly an informational and brand preview platform. No live transactions, bank deposits, card payments, or investor accounts are currently processed. Live participation will only be enabled after regulatory, banking, and legal frameworks have been formally ratified.',
  },
];
