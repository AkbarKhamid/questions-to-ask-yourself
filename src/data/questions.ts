export interface Question {
  id: string;
  title: string;
  description: string;
  category: "career" | "relationships" | "lifestyle" | "finance";
  questions: {
    text: string;
    type:
      | "scale"
      | "boolean"
      | "text"
      | "single"
      | "multi"
      | "rating"
      | "likert";
    options?: string[];
  }[];
}

export const questions: Question[] = [
  {
    id: "freelance-transition",
    title: "Should I Quit My Corporate Job to Freelance?",
    description: "Evaluate if freelancing is the right career move for you",
    category: "career",
    questions: [
      {
        text: "How comfortable are you with financial uncertainty?",
        type: "scale",
      },
      {
        text: "Do you have enough savings to cover 6 months of expenses?",
        type: "boolean",
      },
      {
        text: "How strong is your professional network?",
        type: "scale",
      },
      {
        text: "Do you have existing clients or leads?",
        type: "boolean",
      },
      {
        text: "What skills can you offer as a freelancer?",
        type: "text",
      },
      {
        text: "How experienced are you in your field?",
        type: "scale",
      },
      {
        text: "Do you have a dedicated workspace at home?",
        type: "boolean",
      },
      {
        text: "How well do you manage time independently?",
        type: "scale",
      },
      {
        text: "Are you comfortable with self-promotion and marketing?",
        type: "scale",
      },
      {
        text: "What's your plan for healthcare and benefits?",
        type: "text",
      },
    ],
  },
  {
    id: "restaurant-business",
    title: "Should I Start a Restaurant Business?",
    description: "Assess your readiness to enter the restaurant industry",
    category: "career",
    questions: [
      {
        text: "Do you have prior restaurant or business management experience?",
        type: "boolean",
      },
      {
        text: "How much capital do you have available to invest?",
        type: "scale",
      },
      {
        text: "Are you prepared to work long hours including weekends?",
        type: "boolean",
      },
      {
        text: "What's your understanding of local food regulations?",
        type: "scale",
      },
      {
        text: "Describe your restaurant concept and target market",
        type: "text",
      },
      {
        text: "Have you conducted market research in your area?",
        type: "boolean",
      },
      {
        text: "How strong is your supplier network?",
        type: "scale",
      },
      {
        text: "Do you have experience managing staff?",
        type: "boolean",
      },
      {
        text: "How well do you handle high-stress situations?",
        type: "scale",
      },
      {
        text: "What makes your restaurant concept unique?",
        type: "text",
      },
    ],
  },
  {
    id: "work-life-balance",
    title: "Should I Accept a Lower-Paying Job with Better Work-Life Balance?",
    description: "Evaluate the trade-off between salary and quality of life",
    category: "career",
    questions: [
      {
        text: "How much salary reduction can you comfortably handle?",
        type: "scale",
      },
      {
        text: "How is your current work affecting your well-being?",
        type: "scale",
      },
      {
        text: "Do you have financial obligations that require your current salary?",
        type: "boolean",
      },
      {
        text: "What would you do with the extra free time?",
        type: "text",
      },
      {
        text: "How important is career advancement to you?",
        type: "scale",
      },
      {
        text: "Do you have a financial safety net?",
        type: "boolean",
      },
      {
        text: "How does your family feel about this change?",
        type: "text",
      },
      {
        text: "Are there opportunities for growth in the new role?",
        type: "boolean",
      },
      {
        text: "How would this affect your long-term career goals?",
        type: "text",
      },
      {
        text: "What aspects of work-life balance matter most to you?",
        type: "text",
      },
    ],
  },
  {
    id: "tech-to-teaching",
    title: "Should I Switch from Tech to Teaching?",
    description: "Evaluate your transition from technology to education",
    category: "career",
    questions: [
      {
        text: "How passionate are you about educating others?",
        type: "scale",
      },
      {
        text: "Are you willing to pursue additional education certifications?",
        type: "boolean",
      },
      {
        text: "Can you manage with a potential salary decrease?",
        type: "boolean",
      },
      {
        text: "What subject areas would you want to teach?",
        type: "text",
      },
      {
        text: "How well do you communicate complex concepts?",
        type: "scale",
      },
      {
        text: "Have you had any teaching or mentoring experience?",
        type: "boolean",
      },
      {
        text: "Are you prepared for the different work schedule?",
        type: "boolean",
      },
      {
        text: "How do you handle classroom management challenges?",
        type: "scale",
      },
      {
        text: "What age group would you prefer to teach?",
        type: "text",
      },
      {
        text: "How would you incorporate your tech background in teaching?",
        type: "text",
      },
    ],
  },
  {
    id: "law-degree",
    title: "Should I Pursue a Law Degree Mid-Career?",
    description: "Assess the implications of starting law school mid-career",
    category: "career",
    questions: [
      {
        text: "Can you commit 3-4 years to full-time study?",
        type: "boolean",
      },
      {
        text: "How comfortable are you taking on student debt?",
        type: "scale",
      },
      {
        text: "What area of law interests you most?",
        type: "text",
      },
      {
        text: "Have you researched law school requirements?",
        type: "boolean",
      },
      {
        text: "How well do you handle intensive studying?",
        type: "scale",
      },
      {
        text: "Have you taken any legal courses before?",
        type: "boolean",
      },
      {
        text: "Are you prepared for the LSAT?",
        type: "scale",
      },
      {
        text: "How would this affect your family life?",
        type: "text",
      },
      {
        text: "What's your post-law school career plan?",
        type: "text",
      },
      {
        text: "Have you connected with any practicing lawyers?",
        type: "boolean",
      },
    ],
  },
  {
    id: "startup-move",
    title: "Should I Leave a Stable Job for a Startup?",
    description: "Evaluate the risks and rewards of joining a startup",
    category: "career",
    questions: [
      {
        text: "How risk-tolerant are you with your career?",
        type: "scale",
      },
      {
        text: "Do you believe in the startup's product/mission?",
        type: "scale",
      },
      {
        text: "Are you comfortable with equity over salary?",
        type: "boolean",
      },
      {
        text: "What excites you most about the startup opportunity?",
        type: "text",
      },
      {
        text: "How stable is the startup's funding?",
        type: "scale",
      },
      {
        text: "Do you believe in the founding team?",
        type: "scale",
      },
      {
        text: "Have you researched the market potential?",
        type: "boolean",
      },
      {
        text: "What's the startup's runway and burn rate?",
        type: "text",
      },
      {
        text: "How would you handle startup failure?",
        type: "text",
      },
      {
        text: "Are you ready for an ambiguous role?",
        type: "boolean",
      },
    ],
  },
  {
    id: "remote-to-office",
    title: "Should I Move from Remote Work Back to Office?",
    description: "Assess the impact of returning to office-based work",
    category: "career",
    questions: [
      {
        text: "How much would commuting affect your daily life?",
        type: "scale",
      },
      {
        text: "Do you miss in-person collaboration?",
        type: "scale",
      },
      {
        text: "Would office presence improve your career prospects?",
        type: "boolean",
      },
      {
        text: "What concerns you most about returning to the office?",
        type: "text",
      },
      {
        text: "How would this affect your work-life balance?",
        type: "scale",
      },
      {
        text: "Have you calculated the additional costs?",
        type: "boolean",
      },
      {
        text: "How productive are you in an office environment?",
        type: "scale",
      },
      {
        text: "What office perks matter most to you?",
        type: "text",
      },
      {
        text: "How would this impact your family routine?",
        type: "text",
      },
      {
        text: "Are you comfortable with office politics?",
        type: "scale",
      },
    ],
  },
  {
    id: "full-to-part-time",
    title: "Should I Switch from Full-Time to Part-Time Work?",
    description: "Evaluate the implications of reducing your work hours",
    category: "career",
    questions: [
      {
        text: "Can you maintain your lifestyle with reduced income?",
        type: "scale",
      },
      {
        text: "Will part-time affect your benefits?",
        type: "boolean",
      },
      {
        text: "How would you use the extra time?",
        type: "text",
      },
      {
        text: "Have you discussed this with your employer?",
        type: "boolean",
      },
      {
        text: "How would this affect your career progression?",
        type: "scale",
      },
      {
        text: "Do you have alternative income sources?",
        type: "boolean",
      },
      {
        text: "Have you calculated the total benefits impact?",
        type: "boolean",
      },
      {
        text: "What's your plan for professional development?",
        type: "text",
      },
      {
        text: "How would this affect team dynamics?",
        type: "scale",
      },
      {
        text: "What boundaries would you set for work hours?",
        type: "text",
      },
    ],
  },
  {
    id: "real-estate-agent",
    title: "Should I Become a Real Estate Agent?",
    description: "Assess your fit for a career in real estate",
    category: "career",
    questions: [
      {
        text: "How comfortable are you with commission-based income?",
        type: "scale",
      },
      {
        text: "Do you have funds to cover startup costs and licenses?",
        type: "boolean",
      },
      {
        text: "How strong are your networking skills?",
        type: "scale",
      },
      {
        text: "Why are you interested in real estate?",
        type: "text",
      },
      {
        text: "How familiar are you with the local market?",
        type: "scale",
      },
      {
        text: "Are you comfortable working weekends?",
        type: "boolean",
      },
      {
        text: "How are your negotiation skills?",
        type: "scale",
      },
      {
        text: "What brokerage would you want to work with?",
        type: "text",
      },
      {
        text: "How long can you sustain without income?",
        type: "scale",
      },
      {
        text: "What's your marketing strategy?",
        type: "text",
      },
    ],
  },
  {
    id: "international-assignment",
    title: "Should I Accept an International Assignment?",
    description: "Evaluate the opportunity to work abroad",
    category: "career",
    questions: [
      {
        text: "How adaptable are you to new cultures?",
        type: "scale",
      },
      {
        text: "Will this move advance your career goals?",
        type: "scale",
      },
      {
        text: "Do you have family commitments to consider?",
        type: "boolean",
      },
      {
        text: "What attracts you to this international opportunity?",
        type: "text",
      },
      {
        text: "Have you researched the cost of living?",
        type: "boolean",
      },
      {
        text: "How strong is the expat community there?",
        type: "scale",
      },
      {
        text: "Do you speak the local language?",
        type: "scale",
      },
      {
        text: "What's the repatriation plan?",
        type: "text",
      },
      {
        text: "How does this align with your career path?",
        type: "text",
      },
      {
        text: "Have you considered healthcare abroad?",
        type: "boolean",
      },
    ],
  },
  {
    id: "long-distance-proposal",
    title: "Should I Propose After Long-Distance Dating?",
    description:
      "Evaluate if you're ready to take the next step in your long-distance relationship",
    category: "relationships",
    questions: [
      {
        text: "How long have you been dating long-distance?",
        type: "scale",
      },
      {
        text: "Have you spent significant in-person time together?",
        type: "boolean",
      },
      {
        text: "How strong is your communication when apart?",
        type: "scale",
      },
      {
        text: "Have you discussed future living arrangements?",
        type: "boolean",
      },
      {
        text: "What challenges do you foresee in closing the distance?",
        type: "text",
      },
      {
        text: "How aligned are your life goals and values?",
        type: "scale",
      },
      {
        text: "Have you met each other's families?",
        type: "boolean",
      },
      {
        text: "How do you handle conflicts while apart?",
        type: "scale",
      },
      {
        text: "What's your plan for closing the distance gap?",
        type: "text",
      },
      {
        text: "How do you maintain intimacy long-distance?",
        type: "text",
      },
    ],
  },
  {
    id: "moving-for-partner",
    title: "Should I Move Cities for My Partner?",
    description: "Assess the implications of relocating for your relationship",
    category: "relationships",
    questions: [
      {
        text: "How long have you been together?",
        type: "scale",
      },
      {
        text: "Do you have job prospects in the new city?",
        type: "boolean",
      },
      {
        text: "How far would you be from family and friends?",
        type: "scale",
      },
      {
        text: "What's your backup plan if things don't work out?",
        type: "text",
      },
      {
        text: "Have you discussed sharing expenses?",
        type: "boolean",
      },
      {
        text: "How well do you know the new city?",
        type: "scale",
      },
      {
        text: "What would you be sacrificing by moving?",
        type: "text",
      },
      {
        text: "Is this move advancing both your goals?",
        type: "boolean",
      },
      {
        text: "How will this affect your career trajectory?",
        type: "text",
      },
      {
        text: "Have you lived together before?",
        type: "boolean",
      },
    ],
  },
  {
    id: "baby-40s",
    title: "Should I Have a Baby in My 40s?",
    description: "Evaluate the considerations of having a baby later in life",
    category: "relationships",
    questions: [
      {
        text: "Have you consulted with fertility specialists?",
        type: "boolean",
      },
      {
        text: "How strong is your support system?",
        type: "scale",
      },
      {
        text: "Are you financially prepared for potential medical costs?",
        type: "scale",
      },
      {
        text: "What are your concerns about having a baby at this age?",
        type: "text",
      },
      {
        text: "Have you considered alternative paths to parenthood?",
        type: "boolean",
      },
      {
        text: "How energetic do you feel physically?",
        type: "scale",
      },
      {
        text: "What's your childcare plan?",
        type: "text",
      },
      {
        text: "Have you discussed this with your partner?",
        type: "boolean",
      },
      {
        text: "How would this impact your career?",
        type: "text",
      },
      {
        text: "Are you prepared for potential health risks?",
        type: "boolean",
      },
    ],
  },
  {
    id: "single-parent-adoption",
    title: "Should I Adopt as a Single Parent?",
    description: "Assess your readiness for single parenthood through adoption",
    category: "relationships",
    questions: [
      {
        text: "How stable is your financial situation?",
        type: "scale",
      },
      {
        text: "Do you have a strong support network?",
        type: "boolean",
      },
      {
        text: "How flexible is your work schedule?",
        type: "scale",
      },
      {
        text: "What age group are you considering adopting?",
        type: "text",
      },
      {
        text: "Have you researched adoption requirements?",
        type: "boolean",
      },
      {
        text: "How would you balance work and parenting?",
        type: "text",
      },
      {
        text: "Are you prepared for single parent challenges?",
        type: "scale",
      },
      {
        text: "What's your childcare plan?",
        type: "text",
      },
      {
        text: "Have you connected with other single adoptive parents?",
        type: "boolean",
      },
      {
        text: "How would you handle questions about adoption?",
        type: "text",
      },
    ],
  },
  {
    id: "cohabitation-before-marriage",
    title: "Should I Move In Together Before Marriage?",
    description: "Evaluate the decision to cohabitate before marriage",
    category: "relationships",
    questions: [
      {
        text: "How long have you been dating?",
        type: "scale",
      },
      {
        text: "Have you discussed financial responsibilities?",
        type: "boolean",
      },
      {
        text: "How do your living habits align?",
        type: "scale",
      },
      {
        text: "What are your expectations for shared space?",
        type: "text",
      },
      {
        text: "Have you discussed household duties?",
        type: "boolean",
      },
      {
        text: "How do you handle conflicts?",
        type: "scale",
      },
      {
        text: "What's your timeline for marriage?",
        type: "text",
      },
      {
        text: "Do your families support cohabitation?",
        type: "boolean",
      },
      {
        text: "How will you maintain independence?",
        type: "text",
      },
      {
        text: "Have you discussed deal-breakers?",
        type: "boolean",
      },
    ],
  },
  {
    id: "dating-coworker",
    title: "Should I Date a Coworker?",
    description: "Assess the implications of workplace romance",
    category: "relationships",
    questions: [
      {
        text: "Do you work directly together?",
        type: "boolean",
      },
      {
        text: "How would it affect your career?",
        type: "scale",
      },
      {
        text: "What's your company's policy on workplace relationships?",
        type: "text",
      },
      {
        text: "How would you handle a potential breakup?",
        type: "text",
      },
      {
        text: "Are you prepared for office gossip?",
        type: "scale",
      },
      {
        text: "Have you considered the power dynamics?",
        type: "boolean",
      },
      {
        text: "How would this affect team dynamics?",
        type: "scale",
      },
      {
        text: "Can you maintain professionalism?",
        type: "boolean",
      },
      {
        text: "What boundaries would you set at work?",
        type: "text",
      },
      {
        text: "Is either person planning to change jobs?",
        type: "boolean",
      },
    ],
  },
  {
    id: "intercultural-marriage",
    title: "Should I Marry Someone from a Different Culture?",
    description:
      "Evaluate the challenges and rewards of intercultural marriage",
    category: "relationships",
    questions: [
      {
        text: "How well do you understand each other's cultures?",
        type: "scale",
      },
      {
        text: "Have you discussed religious differences?",
        type: "boolean",
      },
      {
        text: "How do your families feel about the relationship?",
        type: "scale",
      },
      {
        text: "What cultural traditions are important to you both?",
        type: "text",
      },
      {
        text: "Have you discussed raising children?",
        type: "boolean",
      },
      {
        text: "How do you handle cultural misunderstandings?",
        type: "scale",
      },
      {
        text: "What languages will be spoken at home?",
        type: "text",
      },
      {
        text: "Are you willing to learn each other's languages?",
        type: "boolean",
      },
      {
        text: "How will you blend holiday traditions?",
        type: "text",
      },
      {
        text: "Have you discussed living arrangements with extended family?",
        type: "boolean",
      },
    ],
  },
  {
    id: "destination-wedding",
    title: "Should I Have a Destination Wedding?",
    description: "Evaluate if a destination wedding is right for you",
    category: "relationships",
    questions: [
      {
        text: "What's your budget for the wedding?",
        type: "scale",
      },
      {
        text: "Have you considered guest travel costs?",
        type: "boolean",
      },
      {
        text: "How many guests would likely attend?",
        type: "scale",
      },
      {
        text: "What's your dream destination and why?",
        type: "text",
      },
      {
        text: "Have you researched marriage requirements abroad?",
        type: "boolean",
      },
      {
        text: "How comfortable are you planning from afar?",
        type: "scale",
      },
      {
        text: "What's your backup weather plan?",
        type: "text",
      },
      {
        text: "Are key family members able to travel?",
        type: "boolean",
      },
      {
        text: "How will you handle language barriers?",
        type: "text",
      },
      {
        text: "Have you considered cultural sensitivities?",
        type: "boolean",
      },
    ],
  },
  {
    id: "reconcile-ex",
    title: "Should I Reconcile with an Ex After Years Apart?",
    description: "Evaluate reconnecting with a former partner",
    category: "relationships",
    questions: [
      {
        text: "How long have you been apart?",
        type: "scale",
      },
      {
        text: "Have the original breakup reasons been resolved?",
        type: "boolean",
      },
      {
        text: "How much have you both changed?",
        type: "scale",
      },
      {
        text: "Why do you want to reconcile now?",
        type: "text",
      },
      {
        text: "Have you both processed the past relationship?",
        type: "boolean",
      },
      {
        text: "How's your current communication?",
        type: "scale",
      },
      {
        text: "What would you do differently this time?",
        type: "text",
      },
      {
        text: "Are you both single and available?",
        type: "boolean",
      },
      {
        text: "How do friends and family feel about reconciliation?",
        type: "text",
      },
      {
        text: "What are your expectations this time around?",
        type: "text",
      },
    ],
  },
  {
    id: "try-polyamory",
    title: "Should I Try Polyamory?",
    description: "Evaluate if polyamory aligns with your relationship goals",
    category: "relationships",
    questions: [
      {
        text: "How do you handle jealousy?",
        type: "scale",
      },
      {
        text: "Have you researched polyamory thoroughly?",
        type: "boolean",
      },
      {
        text: "How strong are your communication skills?",
        type: "scale",
      },
      {
        text: "What attracts you to polyamory?",
        type: "text",
      },
      {
        text: "Has your partner expressed interest?",
        type: "boolean",
      },
      {
        text: "How comfortable are you discussing boundaries?",
        type: "scale",
      },
      {
        text: "What are your relationship agreements?",
        type: "text",
      },
      {
        text: "Do you have a support system?",
        type: "boolean",
      },
      {
        text: "How would you handle scheduling conflicts?",
        type: "text",
      },
      {
        text: "Are you prepared for social judgments?",
        type: "scale",
      },
      {
        text: "How would you maintain multiple relationships?",
        type: "text",
      },
      {
        text: "Have you connected with poly communities?",
        type: "boolean",
      },
    ],
  },
  {
    id: "buy-house-market",
    title: "Should I Buy a House in This Market?",
    description: "Evaluate if now is the right time to purchase a home",
    category: "finance",
    questions: [
      {
        text: "How stable is your income?",
        type: "scale",
      },
      {
        text: "Do you have a 20% down payment saved?",
        type: "boolean",
      },
      {
        text: "How long do you plan to stay in the area?",
        type: "scale",
      },
      {
        text: "What's your debt-to-income ratio?",
        type: "scale",
      },
      {
        text: "Have you been pre-approved for a mortgage?",
        type: "boolean",
      },
      {
        text: "What's your target price range?",
        type: "text",
      },
      {
        text: "How competitive is your local market?",
        type: "scale",
      },
      {
        text: "What are your must-have features in a home?",
        type: "text",
      },
      {
        text: "Have you researched property taxes and insurance?",
        type: "boolean",
      },
      {
        text: "How comfortable are you with home maintenance?",
        type: "scale",
      },
    ],
  },
  {
    id: "sell-property-debt-free",
    title: "Should I Sell My Property to Become Debt-Free?",
    description:
      "Evaluate the financial impact of selling property to eliminate debt",
    category: "finance",
    questions: [
      {
        text: "How much equity do you have in your property?",
        type: "scale",
      },
      {
        text: "What's your total debt amount?",
        type: "text",
      },
      {
        text: "Do you have alternative housing arranged?",
        type: "boolean",
      },
      {
        text: "How's the current real estate market?",
        type: "scale",
      },
      {
        text: "What's your property's current condition?",
        type: "scale",
      },
      {
        text: "Have you calculated selling costs?",
        type: "boolean",
      },
      {
        text: "What's your plan after becoming debt-free?",
        type: "text",
      },
      {
        text: "How would selling affect your tax situation?",
        type: "text",
      },
      {
        text: "Do you have other debt elimination options?",
        type: "boolean",
      },
      {
        text: "How would this affect your monthly expenses?",
        type: "text",
      },
    ],
  },
  {
    id: "index-vs-stocks",
    title: "Should I Invest in Index Funds or Individual Stocks?",
    description: "Evaluate your investment strategy options",
    category: "finance",
    questions: [
      {
        text: "How much investment experience do you have?",
        type: "scale",
      },
      {
        text: "What's your risk tolerance?",
        type: "scale",
      },
      {
        text: "Do you have time to research individual stocks?",
        type: "boolean",
      },
      {
        text: "What's your investment timeline?",
        type: "text",
      },
      {
        text: "Have you maxed out retirement accounts?",
        type: "boolean",
      },
      {
        text: "How much capital can you invest?",
        type: "scale",
      },
      {
        text: "What are your investment goals?",
        type: "text",
      },
      {
        text: "Do you understand market fundamentals?",
        type: "scale",
      },
      {
        text: "Have you considered management fees?",
        type: "boolean",
      },
      {
        text: "What's your diversification strategy?",
        type: "text",
      },
    ],
  },
  {
    id: "consolidate-debt",
    title: "Should I Consolidate My Debt?",
    description: "Evaluate if debt consolidation is the right choice",
    category: "finance",
    questions: [
      {
        text: "What's your total debt amount?",
        type: "scale",
      },
      {
        text: "How many different debts do you have?",
        type: "text",
      },
      {
        text: "What's your average interest rate?",
        type: "scale",
      },
      {
        text: "Have you checked your credit score?",
        type: "boolean",
      },
      {
        text: "Can you qualify for a lower interest rate?",
        type: "boolean",
      },
      {
        text: "How long will it take to pay off the debt?",
        type: "text",
      },
      {
        text: "Have you compared consolidation options?",
        type: "boolean",
      },
      {
        text: "Are you still actively accumulating debt?",
        type: "boolean",
      },
      {
        text: "What's your debt repayment strategy?",
        type: "text",
      },
      {
        text: "How stable is your income?",
        type: "scale",
      },
    ],
  },
  {
    id: "buy-rental-property",
    title: "Should I Buy Rental Property?",
    description: "Evaluate if rental property investment is right for you",
    category: "finance",
    questions: [
      {
        text: "How much capital do you have for down payment?",
        type: "scale",
      },
      {
        text: "Do you understand landlord responsibilities?",
        type: "boolean",
      },
      {
        text: "Have you calculated potential returns?",
        type: "boolean",
      },
      {
        text: "What's your property management plan?",
        type: "text",
      },
      {
        text: "How strong is the rental market?",
        type: "scale",
      },
      {
        text: "Have you researched landlord laws?",
        type: "boolean",
      },
      {
        text: "What's your maintenance budget?",
        type: "text",
      },
      {
        text: "How will you screen tenants?",
        type: "text",
      },
      {
        text: "Have you considered vacancy periods?",
        type: "boolean",
      },
      {
        text: "What's your exit strategy?",
        type: "text",
      },
    ],
  },
  {
    id: "cash-out-401k",
    title: "Should I Cash Out My 401k?",
    description:
      "Evaluate the implications of withdrawing from retirement savings",
    category: "finance",
    questions: [
      {
        text: "How urgent is your financial need?",
        type: "scale",
      },
      {
        text: "Have you explored other funding options?",
        type: "boolean",
      },
      {
        text: "Do you understand the tax penalties?",
        type: "boolean",
      },
      {
        text: "What percentage would you withdraw?",
        type: "scale",
      },
      {
        text: "How will this affect retirement plans?",
        type: "text",
      },
      {
        text: "Is a 401k loan an option instead?",
        type: "boolean",
      },
      {
        text: "How many years until retirement?",
        type: "scale",
      },
      {
        text: "What's your repayment strategy?",
        type: "text",
      },
      {
        text: "Have you consulted a financial advisor?",
        type: "boolean",
      },
      {
        text: "How will this impact your long-term goals?",
        type: "text",
      },
    ],
  },
  {
    id: "start-side-hustle",
    title: "Should I Start a Side Hustle?",
    description: "Evaluate if starting a side business is right for you",
    category: "finance",
    questions: [
      {
        text: "How much time can you commit weekly?",
        type: "scale",
      },
      {
        text: "Do you have startup capital?",
        type: "boolean",
      },
      {
        text: "What skills can you monetize?",
        type: "text",
      },
      {
        text: "Have you researched the market demand?",
        type: "boolean",
      },
      {
        text: "How much initial investment is needed?",
        type: "scale",
      },
      {
        text: "Does your current job allow side work?",
        type: "boolean",
      },
      {
        text: "What's your income goal?",
        type: "text",
      },
      {
        text: "Have you considered tax implications?",
        type: "boolean",
      },
      {
        text: "What's your competitive advantage?",
        type: "text",
      },
      {
        text: "How will you market your services?",
        type: "text",
      },
    ],
  },
  {
    id: "buy-life-insurance",
    title: "Should I Buy Life Insurance?",
    description: "Evaluate your need for life insurance coverage",
    category: "finance",
    questions: [
      {
        text: "Do you have dependents?",
        type: "boolean",
      },
      {
        text: "How much debt do you carry?",
        type: "scale",
      },
      {
        text: "What's your current health status?",
        type: "scale",
      },
      {
        text: "What type of coverage are you considering?",
        type: "text",
      },
      {
        text: "Have you compared different policies?",
        type: "boolean",
      },
      {
        text: "What's your monthly budget for premiums?",
        type: "text",
      },
      {
        text: "Do you have existing coverage?",
        type: "boolean",
      },
      {
        text: "What's your desired coverage amount?",
        type: "scale",
      },
      {
        text: "Have you considered term vs whole life?",
        type: "boolean",
      },
      {
        text: "What are your long-term financial goals?",
        type: "text",
      },
    ],
  },
  {
    id: "invest-in-gold",
    title: "Should I Invest in Gold?",
    description:
      "Evaluate if gold investment aligns with your portfolio strategy",
    category: "finance",
    questions: [
      {
        text: "What percentage of portfolio would be gold?",
        type: "scale",
      },
      {
        text: "Do you understand gold market dynamics?",
        type: "boolean",
      },
      {
        text: "How will you store physical gold?",
        type: "text",
      },
      {
        text: "Have you considered gold ETFs instead?",
        type: "boolean",
      },
      {
        text: "What's your investment timeline?",
        type: "scale",
      },
      {
        text: "Are you investing for growth or security?",
        type: "text",
      },
      {
        text: "Have you researched dealer premiums?",
        type: "boolean",
      },
      {
        text: "How liquid are your other investments?",
        type: "scale",
      },
      {
        text: "What's your inflation hedge strategy?",
        type: "text",
      },
      {
        text: "Have you considered other precious metals?",
        type: "boolean",
      },
    ],
  },
  {
    id: "downsize-save-money",
    title: "Should I Downsize to Save Money?",
    description:
      "Evaluate if downsizing your living situation makes financial sense",
    category: "finance",
    questions: [
      {
        text: "How much could you save monthly?",
        type: "scale",
      },
      {
        text: "Have you calculated moving costs?",
        type: "boolean",
      },
      {
        text: "How much space do you actually need?",
        type: "scale",
      },
      {
        text: "What items would you need to sell/store?",
        type: "text",
      },
      {
        text: "Have you researched smaller home prices?",
        type: "boolean",
      },
      {
        text: "How would this affect your lifestyle?",
        type: "text",
      },
      {
        text: "What's your timeline for moving?",
        type: "text",
      },
      {
        text: "Have you considered location changes?",
        type: "boolean",
      },
      {
        text: "How would this impact your commute?",
        type: "scale",
      },
      {
        text: "What are your long-term housing goals?",
        type: "text",
      },
    ],
  },
];
