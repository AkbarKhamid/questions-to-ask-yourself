export interface Question {
  id: string;
  title: string;
  description: string;
  category:
    | "career 💼"
    | "relationships ❤️"
    | "lifestyle ✨"
    | "finance 💰"
    | "couples 💑"
    | "dating 💕"
    | "student 🎓"
    | "health 💪";
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
    id: "should-i-quit-my-corporate-job-to-freelance",
    title: "Should I Quit My Corporate Job to Freelance?",
    description: "Thinking about freelancing? Here's what to consider.",
    category: "career 💼",
    questions: [
      {
        text: "How comfortable are you with an unstable income?",
        type: "scale",
      },
      {
        text: "Do you have enough savings for 6 months of expenses?",
        type: "boolean",
      },
      {
        text: "How strong is your professional network for finding clients?",
        type: "scale",
      },
      {
        text: "Do you already have some clients or leads?",
        type: "boolean",
      },
      {
        text: "What specific skills will you offer as a freelancer?",
        type: "text",
      },
      {
        text: "How experienced are you in your field?",
        type: "scale",
      },
      {
        text: "Do you have a good workspace at home?",
        type: "boolean",
      },
      {
        text: "How well do you manage your own time?",
        type: "scale",
      },
      {
        text: "Are you comfortable with marketing yourself and finding work?",
        type: "scale",
      },
      {
        text: "What's your plan for health insurance and retirement?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-start-my-own-restaurant",
    title: "Should I Start My Own Restaurant?",
    description: "Assess if you're ready to jump into the restaurant business.",
    category: "career 💼",
    questions: [
      {
        text: "Do you have restaurant or business management experience?",
        type: "boolean",
      },
      {
        text: "How much money can you realistically invest upfront?",
        type: "scale",
      },
      {
        text: "Are you prepared for long hours, including nights and weekends?",
        type: "boolean",
      },
      {
        text: "How familiar are you with local food safety and business rules?",
        type: "scale",
      },
      {
        text: "Describe your restaurant idea and who your target customers are.",
        type: "text",
      },
      {
        text: "Have you researched the local market demand for your concept?",
        type: "boolean",
      },
      {
        text: "Do you have good connections with potential suppliers?",
        type: "scale",
      },
      {
        text: "Have you managed staff before?",
        type: "boolean",
      },
      {
        text: "How well do you handle high-pressure situations?",
        type: "scale",
      },
      {
        text: "What will make your restaurant stand out?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-take-less-pay-for-better-work-life-balance",
    title: "Should I Take Less Pay for Better Work-Life Balance?",
    description: "Considering a trade-off between salary and personal time.",
    category: "career 💼",
    questions: [
      {
        text: "How much of a pay cut can you realistically afford?",
        type: "scale",
      },
      {
        text: "How is your current job impacting your health and happiness?",
        type: "scale",
      },
      {
        text: "Do your financial needs require your current salary?",
        type: "boolean",
      },
      {
        text: "What would you actually do with more free time?",
        type: "multi",
        options: [
          "Spend time with family/friends",
          "Hobbies/Interests",
          "Travel",
          "Rest/Relaxation",
          "Volunteering",
          "Further Education/Skills",
          "Exercise/Health",
        ],
      },
      {
        text: "How important is career advancement to you right now?",
        type: "scale",
      },
      {
        text: "Do you have an emergency fund or savings?",
        type: "boolean",
      },
      {
        text: "How does your partner or family feel about this possible change?",
        type: "text",
      },
      {
        text: "Does the new job offer potential for future growth?",
        type: "boolean",
      },
      {
        text: "How would this move affect your long-term career goals?",
        type: "text",
      },
      {
        text: "What does good work-life balance look like for you?",
        type: "multi",
        options: [
          "Flexible hours",
          "Remote work options",
          "Reasonable workload",
          "Less stressful environment",
          "More vacation time",
          "Clear boundaries between work/life",
        ],
      },
    ],
  },
  {
    id: "should-i-switch-from-a-tech-job-to-teaching",
    title: "Should I Switch from a Tech Job to Teaching?",
    description: "Thinking about moving from the tech industry into education.",
    category: "career 💼",
    questions: [
      {
        text: "How passionate are you about teaching and mentoring?",
        type: "scale",
      },
      {
        text: "Are you prepared to get teaching certifications or further education?",
        type: "boolean",
      },
      {
        text: "Can you financially handle a potential pay cut?",
        type: "boolean",
      },
      {
        text: "What subjects are you interested in teaching?",
        type: "multi",
        options: [
          "Computer Science",
          "Mathematics",
          "Physics",
          "Engineering",
          "Other STEM",
          "Non-STEM Subject",
        ],
      },
      {
        text: "How skilled are you at explaining complex ideas clearly?",
        type: "scale",
      },
      {
        text: "Do you have any prior teaching or mentoring experience?",
        type: "boolean",
      },
      {
        text: "Are you ready for the schedule and demands of a teaching job?",
        type: "boolean",
      },
      {
        text: "How would you approach classroom management?",
        type: "scale",
      },
      {
        text: "What age group would you prefer to teach?",
        type: "multi",
        options: [
          "Elementary School",
          "Middle School",
          "High School",
          "College/University",
          "Adult Education",
        ],
      },
      {
        text: "How could you use your tech skills in a teaching role?",
        type: "multi",
        options: [
          "Teaching coding/tech subjects",
          "Using tech tools in the classroom",
          "Developing curriculum",
          "Mentoring tech clubs",
          "IT support",
        ],
      },
    ],
  },
  {
    id: "should-i-go-back-to-school-for-a-law-degree",
    title: "Should I Go Back to School for a Law Degree?",
    description: "Considering law school as a mid-career change.",
    category: "career 💼",
    questions: [
      {
        text: "Can you realistically commit to 3-4 years of full-time study?",
        type: "boolean",
      },
      {
        text: "How do you feel about taking on significant student loan debt?",
        type: "scale",
      },
      {
        text: "What area of law are you most interested in?",
        type: "multi",
        options: [
          "Corporate Law",
          "Criminal Law",
          "Family Law",
          "Environmental Law",
          "Intellectual Property",
          "Public Interest Law",
          "Immigration Law",
          "Other",
        ],
      },
      {
        text: "Have you researched the admission requirements for law schools?",
        type: "boolean",
      },
      {
        text: "How well do you handle intense academic pressure?",
        type: "scale",
      },
      {
        text: "Have you taken any law-related courses before?",
        type: "boolean",
      },
      {
        text: "Are you prepared for the LSAT exam?",
        type: "scale",
      },
      {
        text: "How would going back to school impact your family and personal life?",
        type: "text",
      },
      {
        text: "What are your career goals after finishing law school?",
        type: "text",
      },
      {
        text: "Have you talked to any lawyers about their experiences?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-i-leave-my-stable-job-for-a-startup",
    title: "Should I Leave My Stable Job for a Startup?",
    description: "Weighing the risks and rewards of joining a startup company.",
    category: "career 💼",
    questions: [
      {
        text: "How comfortable are you with career uncertainty and risk?",
        type: "scale",
      },
      {
        text: "Do you genuinely believe in the startup's product or mission?",
        type: "scale",
      },
      {
        text: "Are you okay with potentially lower salary in exchange for equity?",
        type: "boolean",
      },
      {
        text: "What specifically excites you about this startup opportunity?",
        type: "multi",
        options: [
          "The Product/Mission",
          "The Team",
          "Potential for Growth",
          "Company Culture",
          "Learning Opportunity",
          "Equity/Potential Payout",
        ],
      },
      {
        text: "How stable does the startup's funding situation seem?",
        type: "scale",
      },
      {
        text: "Do you trust and respect the founding team?",
        type: "scale",
      },
      {
        text: "Have you researched the market potential for their product/service?",
        type: "boolean",
      },
      {
        text: "Do you have a sense of the startup's financial health (runway, burn rate)?",
        type: "text",
      },
      {
        text: "How would you handle the possibility of the startup failing?",
        type: "text",
      },
      {
        text: "Are you prepared for a role that might be less defined and change often?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-i-go-back-to-working-in-an-office",
    title: "Should I Go Back to Working in an Office?",
    description:
      "Considering the switch from remote work back to an office setting.",
    category: "career 💼",
    questions: [
      {
        text: "How much would a daily commute impact your routine and well-being?",
        type: "scale",
      },
      {
        text: "Do you miss the social interaction and collaboration of an office?",
        type: "scale",
      },
      {
        text: "Do you believe being physically present in the office would benefit your career?",
        type: "boolean",
      },
      {
        text: "What are your main concerns about returning to the office?",
        type: "multi",
        options: [
          "Commute Time/Cost",
          "Less Flexibility",
          "Distractions",
          "Office Politics",
          "Health Concerns",
          "Childcare/Family Logistics",
        ],
      },
      {
        text: "How would returning to the office affect your work-life balance?",
        type: "scale",
      },
      {
        text: "Have you considered the extra costs (commuting, lunches, wardrobe)?",
        type: "boolean",
      },
      {
        text: "How productive do you tend to be in a traditional office environment?",
        type: "scale",
      },
      {
        text: "What aspects of office culture or perks are important to you?",
        type: "multi",
        options: [
          "Collaboration",
          "Social Interaction",
          "Mentorship",
          "Clearer Work/Life Separation",
          "Specific Amenities (gym, food)",
          "Team Events",
        ],
      },
      {
        text: "How would this change impact your family or home life?",
        type: "text",
      },
      {
        text: "How comfortable are you navigating office dynamics and politics?",
        type: "scale",
      },
    ],
  },
  {
    id: "should-i-switch-from-full-time-to-part-time-work",
    title: "Should I Switch from Full-Time to Part-Time Work?",
    description: "Evaluating the pros and cons of reducing your work hours.",
    category: "career 💼",
    questions: [
      {
        text: "Can you comfortably live on a part-time income?",
        type: "scale",
      },
      {
        text: "How would going part-time affect your health insurance and other benefits?",
        type: "boolean",
      },
      {
        text: "What would you do with the extra free time gained?",
        type: "multi",
        options: [
          "Spend time with family/friends",
          "Hobbies/Interests",
          "Travel",
          "Rest/Relaxation",
          "Volunteering",
          "Further Education/Skills",
          "Exercise/Health",
        ],
      },
      {
        text: "Have you discussed the possibility of part-time work with your employer?",
        type: "boolean",
      },
      {
        text: "How might working part-time impact your career advancement?",
        type: "scale",
      },
      {
        text: "Do you have other sources of income or financial support?",
        type: "boolean",
      },
      {
        text: "Have you fully calculated the impact on retirement savings and benefits?",
        type: "boolean",
      },
      {
        text: "What's your plan for staying current in your field while working less?",
        type: "multi",
        options: [
          "Online Courses/Certifications",
          "Industry Conferences/Events",
          "Networking",
          "Reading Publications/Blogs",
          "Personal Projects",
        ],
      },
      {
        text: "How might this change affect your relationship with your colleagues?",
        type: "scale",
      },
      {
        text: "How would you set boundaries to protect your non-work time?",
        type: "multi",
        options: [
          "Set Specific Work Hours",
          "Turn off Notifications",
          "Dedicated Workspace",
          "Communicate Boundaries Clearly",
          "Schedule Personal Time",
        ],
      },
    ],
  },
  {
    id: "should-i-become-a-real-estate-agent",
    title: "Should I Become a Real Estate Agent?",
    description:
      "Assessing if a career in real estate is the right fit for you.",
    category: "career 💼",
    questions: [
      {
        text: "How comfortable are you with an income based entirely on commission?",
        type: "scale",
      },
      {
        text: "Do you have the savings to cover initial licensing and business costs?",
        type: "boolean",
      },
      {
        text: "How strong are your networking and sales skills?",
        type: "scale",
      },
      {
        text: "What specifically draws you to a career in real estate?",
        type: "multi",
        options: [
          "Helping People",
          "Flexible Schedule",
          "Income Potential",
          "Interest in Houses/Architecture",
          "Being Your Own Boss",
          "Networking",
        ],
      },
      {
        text: "How well do you know the local housing market?",
        type: "scale",
      },
      {
        text: "Are you prepared to work irregular hours, including evenings and weekends?",
        type: "boolean",
      },
      {
        text: "How confident are you in your negotiation abilities?",
        type: "scale",
      },
      {
        text: "Have you researched different real estate brokerages to potentially join?",
        type: "text",
      },
      {
        text: "How long could you financially support yourself while building your client base?",
        type: "scale",
      },
      {
        text: "What's your plan for marketing yourself and finding clients?",
        type: "multi",
        options: [
          "Social Media",
          "Networking Events",
          "Website/Blog",
          "Referrals",
          "Online Ads",
          "Cold Calling/Door Knocking",
        ],
      },
    ],
  },
  {
    id: "should-i-take-an-international-job-assignment",
    title: "Should I Take an International Job Assignment?",
    description: "Evaluating the opportunity and challenges of working abroad.",
    category: "career 💼",
    questions: [
      {
        text: "How adaptable are you to new environments and cultures?",
        type: "scale",
      },
      {
        text: "Do you believe this international experience will help your career long-term?",
        type: "scale",
      },
      {
        text: "Do you have family or relationship commitments that make moving difficult?",
        type: "boolean",
      },
      {
        text: "What specifically appeals to you about this opportunity abroad?",
        type: "multi",
        options: [
          "Career Advancement",
          "Cultural Experience",
          "Travel Opportunities",
          "Learning a New Language",
          "Personal Growth",
          "Financial Incentives",
        ],
      },
      {
        text: "Have you researched the cost of living in the new location?",
        type: "boolean",
      },
      {
        text: "How important is having a community of expats or people from home?",
        type: "scale",
      },
      {
        text: "Do you speak the local language, or are you willing to learn?",
        type: "scale",
      },
      {
        text: "What support does the company offer for relocation and return?",
        type: "multi",
        options: [
          "Housing Assistance",
          "Moving Costs",
          "Language Training",
          "Cultural Training",
          "Tax Assistance",
          "Spousal/Family Support",
          "Return Job Guarantee",
        ],
      },
      {
        text: "How does this assignment fit into your overall career goals?",
        type: "text",
      },
      {
        text: "Have you looked into the healthcare system in the destination country?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-we-get-engaged-while-still-long-distance",
    title: "Should We Get Engaged While Still Long-Distance?",
    description:
      "Considering taking the next step before closing the distance.",
    category: "dating 💕",
    questions: [
      {
        text: "How long have you been in a long-distance relationship?",
        type: "scale",
      },
      {
        text: "Have you spent a significant amount of time together in person?",
        type: "boolean",
      },
      {
        text: "How strong and open is your communication when you're apart?",
        type: "scale",
      },
      {
        text: "Have you seriously discussed future living arrangements and timelines?",
        type: "boolean",
      },
      {
        text: "What are the biggest challenges you anticipate when you finally live together?",
        type: "multi",
        options: [
          "Different Living Habits",
          "Sharing Finances",
          "Merging Social Circles",
          "Less Personal Space",
          "Decision Making",
          "Handling Disagreements In Person",
        ],
      },
      {
        text: "How well do your long-term life goals and values align?",
        type: "scale",
      },
      {
        text: "Have you met each other's families and close friends?",
        type: "boolean",
      },
      {
        text: "How effectively do you resolve disagreements while long-distance?",
        type: "scale",
      },
      {
        text: "What is your concrete plan for closing the distance?",
        type: "text",
      },
      {
        text: "How do you maintain connection and intimacy while apart?",
        type: "multi",
        options: [
          "Regular Video Calls",
          "Scheduled Virtual Dates",
          "Sending Gifts/Letters",
          "Planning Future Visits",
          "Shared Online Activities",
          "Open Communication",
        ],
      },
    ],
  },
  {
    id: "should-i-move-to-a-new-city-for-my-partner",
    title: "Should I Move to a New City for My Partner?",
    description: "Thinking about relocating primarily for your relationship.",
    category: "couples 💑",
    questions: [
      {
        text: "How long have you been in this relationship?",
        type: "scale",
      },
      {
        text: "What are your job or study prospects in the new city?",
        type: "boolean",
      },
      {
        text: "How far will you be from your own friends and family support system?",
        type: "scale",
      },
      {
        text: "What is your backup plan if the relationship doesn't work out after moving?",
        type: "text",
      },
      {
        text: "Have you had open conversations about finances and living together?",
        type: "boolean",
      },
      {
        text: "How familiar are you with the new city or area?",
        type: "scale",
      },
      {
        text: "What personal or career goals might you have to put on hold?",
        type: "multi",
        options: [
          "Specific Job Opportunity",
          "Educational Program",
          "Proximity to Family/Friends",
          "Personal Hobbies/Activities",
          "Building Local Network",
        ],
      },
      {
        text: "Do you feel this move supports both of your individual goals?",
        type: "boolean",
      },
      {
        text: "How might this move impact your own career trajectory?",
        type: "text",
      },
      {
        text: "Have you lived with this partner before?",
        type: "boolean",
      },
      {
        text: "If our home could talk, what's one secret it would spill about us?",
        type: "text",
      },
      {
        text: "Scale of 1-10, how good are we at making up after an argument?",
        type: "scale",
      },
      {
        text: "What's a quirky habit of mine you secretly find endearing?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-have-a-baby-in-my-40s",
    title: "Should I Have a Baby in My 40s?",
    description:
      "Considering the unique factors of starting a family later in life.",
    category: "couples 💑",
    questions: [
      {
        text: "Have you discussed potential fertility challenges and health risks with a doctor?",
        type: "boolean",
      },
      {
        text: "How strong is your support network (partner, family, friends)?",
        type: "scale",
      },
      {
        text: "Are you financially prepared for potential extra medical costs or treatments?",
        type: "scale",
      },
      {
        text: "What are your main concerns or fears about having a baby at this age?",
        type: "multi",
        options: [
          "Health Risks (Self/Baby)",
          "Energy Levels",
          "Financial Strain",
          "Career Impact",
          "Age Gap with Child",
          "Lack of Support",
        ],
      },
      {
        text: "Have you considered or are you open to other paths to parenthood?",
        type: "boolean",
      },
      {
        text: "How would you rate your current physical energy levels?",
        type: "scale",
      },
      {
        text: "What is your realistic childcare plan?",
        type: "text",
      },
      {
        text: "Is your partner fully on board and prepared for this journey?",
        type: "boolean",
      },
      {
        text: "How do you anticipate a baby impacting your career at this stage?",
        type: "text",
      },
      {
        text: "Are you mentally prepared to handle potential age-related health risks?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-i-adopt-a-child-as-a-single-parent",
    title: "Should I Adopt a Child as a Single Parent?",
    description: "Evaluating your readiness to pursue adoption on your own.",
    category: "lifestyle ✨",
    questions: [
      {
        text: "How stable and secure is your financial situation?",
        type: "scale",
      },
      {
        text: "Do you have a reliable support system of friends and family?",
        type: "boolean",
      },
      {
        text: "How much flexibility do you have in your work schedule?",
        type: "scale",
      },
      {
        text: "What age range of child are you hoping or prepared to adopt?",
        type: "multi",
        options: ["Infant", "Toddler", "Preschool", "School-Age", "Teenager"],
      },
      {
        text: "Have you researched the specific requirements and process for single-parent adoption?",
        type: "boolean",
      },
      {
        text: "How do you envision balancing work responsibilities with parenting solo?",
        type: "text",
      },
      {
        text: "Are you prepared for the unique emotional and logistical challenges of single parenting?",
        type: "scale",
      },
      {
        text: "What is your plan for childcare when you need it?",
        type: "text",
      },
      {
        text: "Have you connected with or sought advice from other single adoptive parents?",
        type: "boolean",
      },
      {
        text: "How would you handle questions from the child or others about their adoption story?",
        type: "text",
      },
      {
        text: "If you could instantly master one new skill, what would it be?",
        type: "text",
      },
      {
        text: "Rate your current 'life clutter' level (physical and mental): 1 (Minimalist Monk) to 10 (Hoarder Haven).",
        type: "scale",
      },
      {
        text: "What's one small change you could make this week to boost your happiness?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-date-a-coworker",
    title: "Should I Date a Coworker?",
    description:
      "Weighing the potential benefits and complications of an office romance.",
    category: "dating 💕",
    questions: [
      {
        text: "Do you work closely with this person on the same team or projects?",
        type: "boolean",
      },
      {
        text: "How could this relationship potentially impact your professional reputation or career?",
        type: "scale",
      },
      {
        text: "What is your company's official policy on inter-office relationships?",
        type: "text",
      },
      {
        text: "How would you handle working together if the relationship ended badly?",
        type: "text",
      },
      {
        text: "Are you prepared to deal with potential office gossip or speculation?",
        type: "scale",
      },
      {
        text: "Is there a power dynamic (e.g., manager-subordinate) between you?",
        type: "boolean",
      },
      {
        text: "How might dating affect your relationships with other colleagues or team morale?",
        type: "scale",
      },
      {
        text: "Can you commit to maintaining professional boundaries at work?",
        type: "boolean",
      },
      {
        text: "What specific boundaries would you set for your interactions at work?",
        type: "text",
      },
      {
        text: "Is either of you considering leaving the company in the near future?",
        type: "boolean",
      },
      {
        text: "Would you rather go on an adventurous outdoor date or a cozy night in?",
        type: "single",
        options: ["Adventure", "Cozy Night In"],
      },
      {
        text: "Rate your texting response time on a scale of 'instant reply' to 'might get back to you next week'.",
        type: "rating",
      },
      {
        text: "What's a 'green flag' you actively look for when dating someone new?",
        type: "text",
      },
    ],
  },
  {
    id: "should-we-get-married-if-were-from-different-cultures",
    title: "Should We Get Married If We're From Different Cultures?",
    description:
      "Exploring the joys and challenges of building a life together across cultures.",
    category: "couples 💑",
    questions: [
      {
        text: "How well do you understand and appreciate each other's cultural backgrounds?",
        type: "scale",
      },
      {
        text: "Have you openly discussed potential differences in religious beliefs or practices?",
        type: "boolean",
      },
      {
        text: "How supportive are your respective families of your relationship?",
        type: "scale",
      },
      {
        text: "What cultural traditions are most important for each of you to maintain?",
        type: "text",
      },
      {
        text: "Have you discussed how you would raise children regarding cultural identity?",
        type: "boolean",
      },
      {
        text: "How do you typically navigate cultural misunderstandings or differing perspectives?",
        type: "scale",
      },
      {
        text: "What language(s) do you plan to primarily speak at home?",
        type: "text",
      },
      {
        text: "Are you both willing to learn aspects of each other's native languages?",
        type: "boolean",
      },
      {
        text: "How will you blend or alternate between different holiday traditions?",
        type: "text",
      },
      {
        text: "Have you discussed expectations regarding involvement with extended family?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-we-have-a-destination-wedding",
    title: "Should We Have a Destination Wedding?",
    description:
      "Weighing the pros and cons of getting married away from home.",
    category: "couples 💑",
    questions: [
      {
        text: "What is your realistic budget for a destination wedding?",
        type: "scale",
      },
      {
        text: "Have you considered the travel and accommodation costs for your guests?",
        type: "boolean",
      },
      {
        text: "How many of your essential guests would realistically be able to attend?",
        type: "scale",
      },
      {
        text: "What makes your chosen destination special for your wedding?",
        type: "text",
      },
      {
        text: "Have you researched the legal marriage requirements in that location?",
        type: "boolean",
      },
      {
        text: "How comfortable are you with planning a wedding remotely?",
        type: "scale",
      },
      {
        text: "What is your contingency plan for bad weather or travel disruptions?",
        type: "text",
      },
      {
        text: "Are your most important family members willing and able to travel?",
        type: "boolean",
      },
      {
        text: "How will you manage potential language barriers with local vendors?",
        type: "text",
      },
      {
        text: "Are you aware of any local customs or sensitivities to consider?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-i-get-back-together-with-my-ex",
    title: "Should I Get Back Together With My Ex?",
    description:
      "Evaluating whether rekindling a past relationship is a good idea.",
    category: "dating 💕",
    questions: [
      {
        text: "How much time has passed since the breakup?",
        type: "scale",
      },
      {
        text: "Have the core issues that led to the breakup been resolved?",
        type: "boolean",
      },
      {
        text: "How much have you both individually grown or changed since then?",
        type: "scale",
      },
      {
        text: "What are your primary reasons for wanting to reconcile now?",
        type: "multi",
        options: [
          "Still Have Feelings",
          "Believe Issues Are Resolved",
          "Loneliness",
          "Regret",
          "Shared History/Comfort",
          "External Pressure",
        ],
      },
      {
        text: "Have you both fully processed the end of the previous relationship?",
        type: "boolean",
      },
      {
        text: "How is the communication between you two currently?",
        type: "scale",
      },
      {
        text: "What specific things would need to be different this time around?",
        type: "text",
      },
      {
        text: "Are you both genuinely single and emotionally available?",
        type: "boolean",
      },
      {
        text: "How do your close friends and family feel about this possibility?",
        type: "text",
      },
      {
        text: "What are your realistic expectations for the relationship if you try again?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-explore-polyamory-or-an-open-relationship",
    title: "Should I Explore Polyamory or an Open Relationship?",
    description: "Considering non-monogamy and what it might mean for you.",
    category: "dating 💕",
    questions: [
      {
        text: "How do you typically react to feelings of jealousy?",
        type: "scale",
      },
      {
        text: "Have you thoroughly researched different forms of ethical non-monogamy?",
        type: "boolean",
      },
      {
        text: "How would you rate your communication and emotional honesty skills?",
        type: "scale",
      },
      {
        text: "What specifically draws you to the idea of polyamory?",
        type: "multi",
        options: [
          "Desire for Multiple Connections",
          "Belief Monogamy is Restrictive",
          "Intellectual Curiosity",
          "Exploring Different Relationship Dynamics",
          "Meeting Needs Not Met by One Partner",
        ],
      },
      {
        text: "If you have a current partner, have you discussed this openly and honestly?",
        type: "boolean",
      },
      {
        text: "How comfortable are you setting, discussing, and respecting boundaries?",
        type: "scale",
      },
      {
        text: "What kind of relationship agreements would be important to you?",
        type: "text",
      },
      {
        text: "Do you have a support system that understands or accepts non-monogamy?",
        type: "boolean",
      },
      {
        text: "How would you manage the time and emotional energy for multiple relationships?",
        type: "text",
      },
      {
        text: "Are you prepared for potential societal judgment or misunderstanding?",
        type: "scale",
      },
      {
        text: "How do you envision nurturing multiple romantic or intimate connections?",
        type: "text",
      },
      {
        text: "Have you sought out resources or communities related to polyamory?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-i-buy-a-house-in-the-current-market",
    title: "Should I Buy a House in the Current Market?",
    description:
      "Deciding if now is a good time for you to enter the housing market.",
    category: "finance 💰",
    questions: [
      {
        text: "How stable is your current income and employment situation?",
        type: "scale",
      },
      {
        text: "Have you saved enough for a down payment (ideally 10-20%)?",
        type: "boolean",
      },
      {
        text: "How long do you plan to live in this home or area?",
        type: "scale",
      },
      {
        text: "What is your current debt-to-income ratio?",
        type: "scale",
      },
      {
        text: "Have you gotten pre-approved for a mortgage to know your budget?",
        type: "boolean",
      },
      {
        text: "What is your realistic price range for a home?",
        type: "text",
      },
      {
        text: "How competitive is the housing market in your desired area?",
        type: "scale",
      },
      {
        text: "What are your essential needs vs. wants in a home?",
        type: "text",
      },
      {
        text: "Have you factored in ongoing costs like property taxes, insurance, and HOA fees?",
        type: "boolean",
      },
      {
        text: "How prepared are you for the costs and effort of home maintenance?",
        type: "scale",
      },
    ],
  },
  {
    id: "should-i-sell-my-property-to-pay-off-debt",
    title: "Should I Sell My Property to Pay Off Debt?",
    description: "Considering selling a major asset to become debt-free.",
    category: "finance 💰",
    questions: [
      {
        text: "How much equity do you currently have in your property?",
        type: "scale",
      },
      {
        text: "What is the total amount of debt you're hoping to eliminate?",
        type: "text",
      },
      {
        text: "Do you have a clear plan for where you will live after selling?",
        type: "boolean",
      },
      {
        text: "What are the current conditions of the real estate market in your area?",
        type: "scale",
      },
      {
        text: "What is the current condition of your property (repairs needed?)?",
        type: "scale",
      },
      {
        text: "Have you accurately estimated all the costs associated with selling?",
        type: "boolean",
      },
      {
        text: "What is your financial plan after potentially becoming debt-free?",
        type: "text",
      },
      {
        text: "How would selling this property impact your overall tax situation?",
        type: "text",
      },
      {
        text: "Have you explored all other options for managing or reducing this debt?",
        type: "boolean",
      },
      {
        text: "How would selling change your monthly housing costs (rent vs. mortgage)?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-invest-in-index-funds-or-individual-stocks",
    title: "Should I Invest in Index Funds or Individual Stocks?",
    description:
      "Choosing between a passive (index funds) or active (stocks) investment approach.",
    category: "finance 💰",
    questions: [
      {
        text: "How would you rate your current investment knowledge and experience?",
        type: "scale",
      },
      {
        text: "How much investment risk are you comfortable taking?",
        type: "scale",
      },
      {
        text: "Do you realistically have the time and interest to research individual companies?",
        type: "boolean",
      },
      {
        text: "What is your investment timeline (short-term vs. long-term)?",
        type: "text",
      },
      {
        text: "Are you already contributing sufficiently to retirement accounts (401k, IRA)?",
        type: "boolean",
      },
      {
        text: "How much money are you planning to invest?",
        type: "scale",
      },
      {
        text: "What are your specific financial goals for this investment?",
        type: "multi",
        options: [
          "Retirement",
          "House Down Payment",
          "Education Fund",
          "General Wealth Building",
          "Large Purchase",
        ],
      },
      {
        text: "Do you have a solid understanding of basic market principles?",
        type: "scale",
      },
      {
        text: "Have you considered the fees associated with funds vs. stock trading?",
        type: "boolean",
      },
      {
        text: "What is your overall strategy for diversifying your investments?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-consolidate-my-debts",
    title: "Should I Consolidate My Debts?",
    description:
      "Evaluating if combining multiple debts into one loan makes sense for you.",
    category: "finance 💰",
    questions: [
      {
        text: "What is the approximate total amount of debt you want to consolidate?",
        type: "scale",
      },
      {
        text: "How many different creditors or loans do you currently have?",
        type: "text",
      },
      {
        text: "What is the average interest rate you're paying across these debts?",
        type: "scale",
      },
      {
        text: "Do you know your current credit score?",
        type: "boolean",
      },
      {
        text: "Is it likely you can qualify for a consolidation loan with a lower interest rate?",
        type: "boolean",
      },
      {
        text: "What would be the repayment term (length) of the consolidation loan?",
        type: "text",
      },
      {
        text: "Have you compared different consolidation methods (loan, balance transfer, etc.)?",
        type: "boolean",
      },
      {
        text: "Have you addressed the spending habits that may have led to the debt?",
        type: "boolean",
      },
      {
        text: "What is your plan for paying off the consolidated debt?",
        type: "text",
      },
      {
        text: "How stable and predictable is your current income?",
        type: "scale",
      },
    ],
  },
  {
    id: "should-i-buy-a-rental-property",
    title: "Should I Buy a Rental Property?",
    description:
      "Assessing if becoming a landlord and investing in rental property is right for you.",
    category: "finance 💰",
    questions: [
      {
        text: "How much capital do you have available for a down payment and reserves?",
        type: "scale",
      },
      {
        text: "Do you fully understand the responsibilities and time commitment of being a landlord?",
        type: "boolean",
      },
      {
        text: "Have you realistically calculated potential cash flow, expenses, and ROI?",
        type: "boolean",
      },
      {
        text: "How do you plan to manage the property (self-manage or hire a manager)?",
        type: "single",
        options: ["Self-Manage", "Hire Property Manager"],
      },
      {
        text: "How strong is the rental demand in the specific area you're considering?",
        type: "scale",
      },
      {
        text: "Are you familiar with local landlord-tenant laws and regulations?",
        type: "boolean",
      },
      {
        text: "What is your budget for ongoing maintenance and unexpected repairs?",
        type: "text",
      },
      {
        text: "What is your process for screening potential tenants?",
        type: "text",
      },
      {
        text: "Have you accounted for potential vacancy periods between tenants?",
        type: "boolean",
      },
      {
        text: "What is your long-term investment strategy or exit plan for the property?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-cash-out-my-401k-early",
    title: "Should I Cash Out My 401(k) Early?",
    description:
      "Understanding the serious consequences of withdrawing retirement funds prematurely.",
    category: "finance 💰",
    questions: [
      {
        text: "How critical is your current financial need?",
        type: "scale",
      },
      {
        text: "Have you exhausted all other possible sources of funds (loans, savings)?",
        type: "boolean",
      },
      {
        text: "Do you fully understand the income taxes and early withdrawal penalties involved?",
        type: "boolean",
      },
      {
        text: "What percentage of your 401(k) balance are you considering withdrawing?",
        type: "scale",
      },
      {
        text: "How significantly will this withdrawal impact your long-term retirement goals?",
        type: "text",
      },
      {
        text: "Is taking a 401(k) loan a possible alternative to a withdrawal?",
        type: "boolean",
      },
      {
        text: "How many years do you have until your planned retirement age?",
        type: "scale",
      },
      {
        text: "If taking a loan, what is your realistic repayment plan?",
        type: "text",
      },
      {
        text: "Have you consulted with a qualified financial advisor about this decision?",
        type: "boolean",
      },
      {
        text: "How does this potential withdrawal align with your other major financial goals?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-start-a-side-hustle",
    title: "Should I Start a Side Hustle?",
    description:
      "Thinking about launching a small business or freelance work alongside your main job.",
    category: "finance 💰",
    questions: [
      {
        text: "How many hours per week can you consistently dedicate to a side hustle?",
        type: "scale",
      },
      {
        text: "Do you have funds available for any necessary startup costs?",
        type: "boolean",
      },
      {
        text: "What specific skills or passions could you turn into a business?",
        type: "text",
      },
      {
        text: "Have you researched the potential market demand for your idea?",
        type: "boolean",
      },
      {
        text: "How much initial investment do you anticipate needing?",
        type: "scale",
      },
      {
        text: "Does your current employment contract have any restrictions on side work?",
        type: "boolean",
      },
      {
        text: "What is your realistic income goal for this side venture?",
        type: "text",
      },
      {
        text: "Have you considered the tax implications of earning extra income?",
        type: "boolean",
      },
      {
        text: "What would make your product or service stand out from competitors?",
        type: "text",
      },
      {
        text: "How do you plan to find your first customers or clients?",
        type: "multi",
        options: [
          "Social Media",
          "Networking Events",
          "Website/Blog",
          "Referrals",
          "Online Ads",
          "Marketplaces (Etsy, Upwork)",
          "Word of Mouth",
        ],
      },
    ],
  },
  {
    id: "should-i-buy-life-insurance",
    title: "Should I Buy Life Insurance?",
    description:
      "Determining if you need life insurance and what kind might be suitable.",
    category: "finance 💰",
    questions: [
      {
        text: "Does anyone financially depend on your income (children, partner, parents)?",
        type: "boolean",
      },
      {
        text: "How much outstanding debt (mortgage, loans) do you currently have?",
        type: "scale",
      },
      {
        text: "How would you describe your current overall health?",
        type: "scale",
      },
      {
        text: "What type of life insurance are you considering (e.g., term, whole life)?",
        type: "multi",
        options: [
          "Term Life",
          "Whole Life",
          "Universal Life",
          "Variable Life",
          "Unsure/Need Info",
        ],
      },
      {
        text: "Have you compared quotes and policies from different insurance providers?",
        type: "boolean",
      },
      {
        text: "What is your monthly budget for life insurance premiums?",
        type: "text",
      },
      {
        text: "Do you already have some life insurance coverage through your employer?",
        type: "boolean",
      },
      {
        text: "How much coverage (death benefit) do you estimate your dependents would need?",
        type: "scale",
      },
      {
        text: "Have you weighed the pros and cons of term versus permanent life insurance?",
        type: "boolean",
      },
      {
        text: "How does life insurance fit into your overall financial planning strategy?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-invest-in-gold",
    title: "Should I Invest in Gold?",
    description:
      "Evaluating whether gold is a suitable addition to your investment portfolio.",
    category: "finance 💰",
    questions: [
      {
        text: "What percentage of your total investment portfolio are you considering allocating to gold?",
        type: "scale",
      },
      {
        text: "Do you understand the factors that influence gold prices?",
        type: "boolean",
      },
      {
        text: "If buying physical gold, how do you plan to store it securely?",
        type: "multi",
        options: [
          "Home Safe",
          "Bank Safe Deposit Box",
          "Third-Party Vault",
          "Not Sure Yet",
        ],
      },
      {
        text: "Have you considered investing in gold through ETFs or mutual funds instead?",
        type: "boolean",
      },
      {
        text: "What is your investment horizon for holding gold?",
        type: "scale",
      },
      {
        text: "Are you primarily seeking potential growth, or using gold as a hedge/safety asset?",
        type: "single",
        options: ["Potential Growth", "Hedge/Safety Asset", "Both", "Unsure"],
      },
      {
        text: "Have you researched the premiums or fees associated with buying/selling gold?",
        type: "boolean",
      },
      {
        text: "How easily could you liquidate your other investments if needed?",
        type: "scale",
      },
      {
        text: "Is gold your primary strategy for hedging against inflation?",
        type: "text",
      },
      {
        text: "Have you considered other alternative investments like silver or commodities?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-i-downsize-my-home-to-save-money",
    title: "Should I Downsize My Home to Save Money?",
    description: "Considering moving to a smaller home to reduce expenses.",
    category: "finance 💰",
    questions: [
      {
        text: "How much money do you estimate you would save each month by downsizing?",
        type: "scale",
      },
      {
        text: "Have you accurately calculated the costs associated with moving?",
        type: "boolean",
      },
      {
        text: "How much living space do you realistically need?",
        type: "scale",
      },
      {
        text: "What belongings would you need to sell, donate, or put into storage?",
        type: "text",
      },
      {
        text: "Have you researched the cost and availability of smaller homes in your desired area?",
        type: "boolean",
      },
      {
        text: "How would living in a smaller space impact your daily lifestyle?",
        type: "text",
      },
      {
        text: "What is your preferred timeline for making this move?",
        type: "text",
      },
      {
        text: "Would downsizing require moving to a different neighborhood or area?",
        type: "boolean",
      },
      {
        text: "How would a potential move affect your commute or accessibility needs?",
        type: "scale",
      },
      {
        text: "What are your long-term goals related to housing and lifestyle?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-choose-this-college-major",
    title: "Should I Choose This College Major?",
    description:
      "Evaluating if a specific college major aligns with your interests and goals.",
    category: "student 🎓",
    questions: [
      {
        text: "How genuinely interested and passionate are you about this subject?",
        type: "scale",
      },
      {
        text: "Does this major lead to career paths that genuinely interest you?",
        type: "boolean",
      },
      {
        text: "What are the typical job opportunities and salary ranges for this major?",
        type: "text",
      },
      {
        text: "Are you prepared for the academic rigor and workload of this major?",
        type: "scale",
      },
      {
        text: "Have you talked to current students or professionals in fields related to this major?",
        type: "boolean",
      },
      {
        text: "What other majors are you considering, and why?",
        type: "text",
      },
      {
        text: "How well does this major align with your broader long-term life goals?",
        type: "scale",
      },
      {
        text: "Are you aware of the typical starting salaries for graduates in this field?",
        type: "boolean",
      },
      {
        text: "What specific skills will you develop in this major that are valuable to employers?",
        type: "multi",
        options: [
          "Analytical Skills",
          "Problem-Solving",
          "Communication",
          "Technical Skills",
          "Research",
          "Teamwork",
          "Leadership",
        ],
      },
      {
        text: "Have you explored internship or practical experience opportunities related to this major?",
        type: "boolean",
      },
      {
        text: "If your study playlist had a title, what would it be?",
        type: "text",
      },
      {
        text: "Rate your ability to resist procrastination: 1 (Hopeless) to 10 (Master).",
        type: "scale",
      },
      {
        text: "Would you rather pull an all-nighter for a final or give a presentation to the entire school?",
        type: "single",
        options: ["All-Nighter", "Presentation"],
      },
    ],
  },
  {
    id: "should-we-buy-our-first-home-together",
    title: "Should We Buy Our First Home Together?",
    description:
      "Assessing if you and your partner are ready to buy property together.",
    category: "couples 💑",
    questions: [
      {
        text: "How stable and secure is your combined income?",
        type: "scale",
      },
      {
        text: "Have you had open and detailed discussions about your shared long-term financial goals?",
        type: "boolean",
      },
      {
        text: "How much have you realistically saved for a down payment, closing costs, and an emergency fund?",
        type: "scale",
      },
      {
        text: "What location preferences (neighborhood, schools, commute) are important to both of you?",
        type: "text",
      },
      {
        text: "Are you both fully prepared for the responsibilities and costs of homeownership?",
        type: "boolean",
      },
      {
        text: "How do you plan to handle the mortgage, property taxes, insurance, and maintenance costs?",
        type: "text",
      },
      {
        text: "Have you gotten pre-approved for a mortgage to understand your budget?",
        type: "boolean",
      },
      {
        text: "How does buying a home fit into your shared life plan for the next 5-10 years?",
        type: "scale",
      },
      {
        text: "What compromises are you both willing to make regarding the property itself?",
        type: "text",
      },
      {
        text: "Have you discussed how you'll make decisions and handle disagreements about the house?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-i-use-anabolic-steroids-like-tren",
    title: "Should I Use Anabolic Steroids (like Tren)?",
    description:
      "Considering performance-enhancing drugs? Understand the serious risks.",
    category: "health 💪",
    questions: [
      {
        text: "What specific results are you hoping to achieve?",
        type: "multi",
        options: [
          "Increased Muscle Mass",
          "Increased Strength",
          "Fat Loss",
          "Improved Athletic Performance",
          "Faster Recovery",
        ],
      },
      {
        text: "Have you thoroughly researched the potential short-term and long-term health risks?",
        type: "boolean",
      },
      {
        text: "Are you aware of the legal implications in your area?",
        type: "boolean",
      },
      {
        text: "Have you consulted with a qualified medical professional about this?",
        type: "boolean",
      },
      {
        text: "What are the potential impacts on your mental health?",
        type: "multi",
        options: [
          "Mood Swings",
          "Aggression ('Roid Rage')",
          "Anxiety",
          "Depression",
          "Dependence/Addiction",
          "Body Image Issues",
        ],
      },
      {
        text: "Have you maximized your results through natural training and nutrition?",
        type: "scale",
      },
      {
        text: "Do you understand the need for Post Cycle Therapy (PCT) and its complexities?",
        type: "boolean",
      },
      {
        text: "What are the potential side effects you're most concerned about?",
        type: "multi",
        options: [
          "Cardiovascular Issues",
          "Liver Damage",
          "Hormonal Imbalances",
          "Infertility",
          "Acne",
          "Hair Loss",
          "Mental Health Effects",
        ],
      },
      {
        text: "Have you considered safer, legal alternatives to reach your goals?",
        type: "boolean",
      },
      {
        text: "How might using steroids affect your personal relationships or career?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-get-a-nose-job-rhinoplasty",
    title: "Should I Get a Nose Job (Rhinoplasty)?",
    description:
      "Thinking about cosmetic surgery to change the shape of your nose?",
    category: "health 💪",
    questions: [
      {
        text: "What specifically about your nose do you want to change?",
        type: "multi",
        options: [
          "Size (Smaller/Larger)",
          "Shape of Bridge (e.g., hump)",
          "Shape of Tip",
          "Nostril Size/Shape",
          "Symmetry",
          "Breathing Issues",
        ],
      },
      {
        text: "How long have you been considering this surgery?",
        type: "scale",
      },
      {
        text: "Are your expectations for the results realistic?",
        type: "boolean",
      },
      {
        text: "Have you researched qualified and experienced surgeons?",
        type: "boolean",
      },
      {
        text: "Do you understand the potential risks and complications?",
        type: "boolean",
      },
      {
        text: "Are you financially prepared for the cost of the surgery and potential revisions?",
        type: "scale",
      },
      {
        text: "Have you discussed your motivations with a therapist or counselor?",
        type: "boolean",
      },
      {
        text: "Are you prepared for the recovery process (time off work, discomfort, swelling)?",
        type: "boolean",
      },
      {
        text: "How do you think this change will impact your self-esteem?",
        type: "text",
      },
      {
        text: "Have you looked at before/after photos that align with your desired outcome?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-i-get-cosmetic-eye-surgery",
    title: "Should I Get Cosmetic Eye Surgery?",
    description:
      "Considering procedures like blepharoplasty or canthoplasty to alter eye appearance?",
    category: "health 💪",
    questions: [
      {
        text: "What specific change are you hoping to achieve with eye surgery?",
        type: "multi",
        options: [
          "Larger Appearance",
          "Wider Appearance",
          "Address Droopy Eyelids",
          "Reduce Under-Eye Bags",
          "Change Eye Shape (e.g., almond)",
        ],
      },
      {
        text: "How long have you been thinking about this type of procedure?",
        type: "scale",
      },
      {
        text: "Are your expectations realistic for what the surgery can achieve?",
        type: "boolean",
      },
      {
        text: "Have you thoroughly researched surgeons specializing in oculoplastic procedures?",
        type: "boolean",
      },
      {
        text: "Do you understand the specific risks, potential side effects, and recovery time?",
        type: "boolean",
      },
      {
        text: "Are you financially prepared for the costs involved?",
        type: "scale",
      },
      {
        text: "What are your underlying motivations for wanting this surgery?",
        type: "text",
      },
      {
        text: "Are you prepared for potential changes in vision or eye comfort during recovery?",
        type: "boolean",
      },
      {
        text: "How might this change affect your overall facial harmony and appearance?",
        type: "text",
      },
      {
        text: "Have you considered non-surgical alternatives or discussed concerns with a professional?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-i-get-a-tattoo",
    title: "Should I Get a Tattoo?",
    description:
      "Thinking about getting permanent ink? Consider these points first.",
    category: "lifestyle ✨",
    questions: [
      {
        text: "How long have you wanted this specific tattoo design or idea?",
        type: "scale",
      },
      {
        text: "Are you confident you'll still like this design and placement in 10, 20, 50 years?",
        type: "boolean",
      },
      {
        text: "Have you thoroughly researched tattoo artists and their portfolios?",
        type: "boolean",
      },
      {
        text: "Where on your body do you plan to get the tattoo?",
        type: "text",
      },
      {
        text: "How might this tattoo affect your career or future job prospects?",
        type: "scale",
      },
      {
        text: "Are you prepared for the pain involved during the tattooing process?",
        type: "scale",
      },
      {
        text: "Do you understand the required aftercare process?",
        type: "boolean",
      },
      {
        text: "Are you aware of potential risks like infection or allergic reactions?",
        type: "boolean",
      },
      {
        text: "What is your budget for the tattoo?",
        type: "scale",
      },
      {
        text: "What personal meaning or significance does this tattoo hold for you?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-start-a-cutting-phase-weight-loss",
    title: "Should I Start a Cutting Phase (Weight Loss)?",
    description:
      "Thinking about focusing on fat loss while trying to keep muscle?",
    category: "health 💪",
    questions: [
      {
        text: "What is your specific fat loss goal (e.g., target weight/body fat %)?",
        type: "text",
      },
      {
        text: "Have you consulted a doctor or registered dietitian first?",
        type: "boolean",
      },
      {
        text: "How much weight do you realistically aim to lose per week?",
        type: "scale",
      },
      {
        text: "Do you have a sustainable nutrition plan (calorie deficit) in place?",
        type: "boolean",
      },
      {
        text: "How will you adjust your training (cardio, resistance) during the cut?",
        type: "text",
      },
      {
        text: "Are you prepared for potential challenges like hunger, lower energy, or strength loss?",
        type: "boolean",
      },
      {
        text: "How long do you plan for this cutting phase to last?",
        type: "text",
      },
      {
        text: "Do you have a history of eating disorders or body image issues?",
        type: "boolean",
      },
      {
        text: "How will you track your progress (weight, measurements, photos)?",
        type: "multi",
        options: [
          "Scale Weight",
          "Body Measurements",
          "Progress Photos",
          "Body Fat % Estimate",
          "How Clothes Fit",
        ],
      },
      {
        text: "What is your plan for maintaining your results after the cut?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-start-a-bulking-phase-muscle-gain",
    title: "Should I Start a Bulking Phase (Muscle Gain)?",
    description:
      "Ready to focus on gaining muscle mass, likely with some fat gain too?",
    category: "health 💪",
    questions: [
      {
        text: "What is your primary goal for bulking (strength, size)?",
        type: "multi",
        options: [
          "Increase Muscle Size",
          "Increase Strength",
          "Improve Athletic Performance",
          "Combination",
        ],
      },
      {
        text: "How experienced are you with consistent resistance training?",
        type: "scale",
      },
      {
        text: "Have you consulted a doctor or relevant professional (trainer, dietitian)?",
        type: "boolean",
      },
      {
        text: "Do you have a structured training program focused on progressive overload?",
        type: "boolean",
      },
      {
        text: "Do you have a nutrition plan ensuring a consistent calorie surplus?",
        type: "boolean",
      },
      {
        text: "Are you prepared for potential fat gain alongside muscle gain?",
        type: "boolean",
      },
      {
        text: "How much weight do you realistically aim to gain per month?",
        type: "scale",
      },
      {
        text: "How will you ensure adequate protein intake and overall nutrition?",
        type: "text",
      },
      {
        text: "Are you prioritizing sleep and recovery?",
        type: "boolean",
      },
      {
        text: "What is your plan for transitioning out of the bulk (e.g., maintenance, cut)?",
        type: "single",
        options: ["Maintenance Phase", "Cutting Phase", "Continue Bulking"],
      },
    ],
  },
  {
    id: "should-i-get-laser-hair-removal",
    title: "Should I Get Laser Hair Removal?",
    description: "Considering laser treatment for long-term hair reduction?",
    category: "health 💪",
    questions: [
      {
        text: "Which body areas are you hoping to treat?",
        type: "multi",
        options: [
          "Legs",
          "Underarms",
          "Bikini Area",
          "Face",
          "Back",
          "Chest",
          "Arms",
        ],
      },
      {
        text: "Have you researched reputable clinics and technicians?",
        type: "boolean",
      },
      {
        text: "Do you understand that multiple sessions are usually required?",
        type: "boolean",
      },
      {
        text: "Are your skin type and hair color suitable for effective treatment?",
        type: "boolean",
      },
      {
        text: "Are you prepared for the cost of a full treatment course?",
        type: "scale",
      },
      {
        text: "Do you understand the potential side effects (redness, temporary discomfort)?",
        type: "boolean",
      },
      {
        text: "Are you aware of the pre- and post-treatment care requirements (e.g., sun avoidance)?",
        type: "boolean",
      },
      {
        text: "What are your expectations for the level of hair reduction?",
        type: "text",
      },
      {
        text: "Have you considered alternative hair removal methods?",
        type: "boolean",
      },
      {
        text: "How committed are you to completing the full series of treatments?",
        type: "scale",
      },
    ],
  },
  {
    id: "should-i-get-laser-skin-treatment",
    title: "Should I Get Laser Skin Treatment?",
    description:
      "Thinking about laser treatment for wrinkles, scars, or skin tone?",
    category: "health 💪",
    questions: [
      {
        text: "What specific skin concerns are you hoping to address?",
        type: "multi",
        options: [
          "Fine Lines/Wrinkles",
          "Acne Scars",
          "Sun Damage/Age Spots",
          "Uneven Skin Tone/Texture",
          "Redness/Rosacea",
          "Enlarged Pores",
        ],
      },
      {
        text: "Have you consulted with a dermatologist or qualified practitioner?",
        type: "boolean",
      },
      {
        text: "Which type of laser resurfacing are you considering (ablative vs. non-ablative)?",
        type: "multi",
        options: [
          "Ablative",
          "Non-Ablative",
          "Fractional",
          "Unsure/Need Consultation",
        ],
      },
      {
        text: "Do you understand the expected downtime and recovery process?",
        type: "boolean",
      },
      {
        text: "Are your expectations for the results realistic?",
        type: "boolean",
      },
      {
        text: "Are you financially prepared for the cost of the treatment(s)?",
        type: "scale",
      },
      {
        text: "Do you understand the potential risks and side effects (redness, swelling, pigmentation changes)?",
        type: "boolean",
      },
      {
        text: "Are you committed to strict sun protection post-treatment?",
        type: "boolean",
      },
      {
        text: "How does this fit into your overall skincare routine and goals?",
        type: "text",
      },
      {
        text: "Have you explored alternative treatments for your skin concerns?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-i-get-laser-eye-surgery-like-lasik",
    title: "Should I Get Laser Eye Surgery (like LASIK)?",
    description:
      "Considering vision correction surgery to reduce reliance on glasses/contacts?",
    category: "health 💪",
    questions: [
      {
        text: "Have you had a comprehensive eye exam to determine your candidacy?",
        type: "boolean",
      },
      {
        text: "What specific type of laser eye surgery are you considering (LASIK, PRK, etc.)?",
        type: "multi",
        options: ["LASIK", "PRK", "SMILE", "ICL", "Unsure/Need Consultation"],
      },
      {
        text: "Do you understand the potential risks, side effects (dry eye, halos), and recovery time?",
        type: "boolean",
      },
      {
        text: "Are your expectations for vision improvement realistic?",
        type: "boolean",
      },
      {
        text: "Have you researched experienced and reputable surgeons/clinics?",
        type: "boolean",
      },
      {
        text: "Are you financially prepared for the cost of the procedure?",
        type: "scale",
      },
      {
        text: "Has your vision prescription been stable for at least a year?",
        type: "boolean",
      },
      {
        text: "Are you comfortable with the idea of surgery on your eyes?",
        type: "scale",
      },
      {
        text: "Do you understand that enhancements (follow-up surgeries) are sometimes needed?",
        type: "boolean",
      },
      {
        text: "How significantly would reducing dependence on glasses/contacts improve your life?",
        type: "scale",
      },
    ],
  },
  {
    id: "should-we-move-in-together-before-marriage",
    title: "Should We Move In Together Before Marriage?",
    description:
      "Considering sharing a home before potentially tying the knot.",
    category: "couples 💑",
    questions: [
      {
        text: "How long have you been seriously dating?",
        type: "scale",
      },
      {
        text: "Have you had detailed discussions about managing shared finances and bills?",
        type: "boolean",
      },
      {
        text: "How compatible are your living habits, routines, and cleanliness standards?",
        type: "scale",
      },
      {
        text: "What are your individual expectations for personal space and alone time?",
        type: "text",
      },
      {
        text: "Have you discussed how you'll divide household chores and responsibilities?",
        type: "boolean",
      },
      {
        text: "How effectively do you communicate and resolve conflicts as a couple?",
        type: "scale",
      },
      {
        text: "What are your shared (or differing) views on a timeline for marriage?",
        type: "text",
      },
      {
        text: "How do your respective families feel about you living together before marriage?",
        type: "boolean",
      },
      {
        text: "How will you ensure you both maintain your independence and social lives?",
        type: "text",
      },
      {
        text: "Have you discussed potential relationship deal-breakers?",
        type: "boolean",
      },
      {
        text: "If our home could talk, what's one secret it would spill about us?",
        type: "text",
      },
      {
        text: "Scale of 1-10, how good are we at making up after an argument?",
        type: "scale",
      },
      {
        text: "What's a quirky habit of mine you secretly find endearing?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-embrace-digital-nomad-life",
    title: "Should I Embrace Digital Nomad Life?",
    description:
      "Considering the lifestyle and potential challenges of being a digital nomad.",
    category: "lifestyle ✨",
    questions: [
      {
        text: "If you could instantly master one new skill, what would it be?",
        type: "text",
      },
      {
        text: "Rate your current 'life clutter' level (physical and mental): 1 (Minimalist Monk) to 10 (Hoarder Haven).",
        type: "scale",
      },
      {
        text: "What's one small change you could make this week to boost your happiness?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-drop-out-of-college",
    title: "Should I Drop Out of College?",
    description: "Thinking about leaving your studies? Consider these factors.",
    category: "student 🎓",
    questions: [
      {
        text: "How interested are you in your current major/program?",
        type: "scale",
      },
      {
        text: "Have you explored alternative options (transferring, different major, vocational training)?",
        type: "boolean",
      },
      {
        text: "What are the main reasons pushing you to consider dropping out?",
        type: "multi",
        options: [
          "Academic Difficulty",
          "Loss of Interest",
          "Financial Pressure",
          "Mental Health",
          "Found Job/Opportunity",
          "Uncertainty About Future",
        ],
      },
      {
        text: "Have you discussed this with an academic advisor or counselor?",
        type: "boolean",
      },
      {
        text: "How confident are you in finding fulfilling work without a degree in this field?",
        type: "scale",
      },
      {
        text: "What's your financial plan if you leave school?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-pursue-a-double-major",
    title: "Should I Pursue a Double Major?",
    description: "Considering adding a second major? Weigh the pros and cons.",
    category: "student 🎓",
    questions: [
      {
        text: "How passionate are you about the subjects of *both* majors?",
        type: "scale",
      },
      {
        text: "Can you realistically handle the increased academic workload?",
        type: "scale",
      },
      {
        text: "Will pursuing a double major delay your planned graduation date?",
        type: "boolean",
      },
      {
        text: "How well do the two majors complement each other for your career goals?",
        type: "scale",
      },
      {
        text: "What's the primary benefit you hope to gain from a double major?",
        type: "single",
        options: [
          "Broader Career Options",
          "Deeper Personal Interest",
          "Enhanced Skill Set",
          "Graduate School Preparation",
          "Intellectual Challenge",
        ],
      },
      {
        text: "Have you mapped out the required courses and potential schedule conflicts?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-i-do-an-exchange-program-abroad",
    title: "Should I Do an Exchange Program Abroad?",
    description:
      "Thinking about studying in another country? Explore if it's right for you.",
    category: "student 🎓",
    questions: [
      {
        text: "How excited are you about immersing yourself in a completely different culture?",
        type: "scale",
      },
      {
        text: "How adaptable and independent do you consider yourself?",
        type: "scale",
      },
      {
        text: "Have you researched the potential host countries/universities and their programs?",
        type: "boolean",
      },
      {
        text: "Are you financially prepared for the costs (travel, housing, living expenses)?",
        type: "boolean",
      },
      {
        text: "What are your main goals for participating in an exchange program?",
        type: "multi",
        options: [
          "Learn a New Language",
          "Experience a Different Culture",
          "Take Unique Courses",
          "Travel and Explore",
          "Personal Growth/Independence",
          "Boost Resume",
        ],
      },
      {
        text: "How might an exchange program impact your academic progress or graduation timeline?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-stop-some-extracurricular-activities",
    title: "Should I Stop Some Extracurricular Activities?",
    description:
      "Feeling overwhelmed? Decide if cutting back on activities is needed.",
    category: "student 🎓",
    questions: [
      {
        text: "How much stress are your current extracurriculars adding to your life?",
        type: "scale",
      },
      {
        text: "Are these activities negatively impacting your academic performance or sleep?",
        type: "boolean",
      },
      {
        text: "Which activity do you enjoy the least or feel is the biggest time drain?",
        type: "text",
      },
      {
        text: "Are any of these activities essential for your future career or grad school plans?",
        type: "boolean",
      },
      {
        text: "What would you primarily do with the time freed up?",
        type: "multi",
        options: [
          "Focus more on Studies",
          "Relax / De-stress",
          "Sleep More",
          "Socialize",
          "Pursue a different interest",
          "Work (part-time job)",
        ],
      },
      {
        text: "Could you reduce your commitment level instead of quitting entirely?",
        type: "boolean",
      },
    ],
  },
  {
    id: "should-i-learn-a-new-language-while-in-school",
    title: "Should I Learn a New Language While in School?",
    description: "Considering adding language learning to your busy schedule?",
    category: "student 🎓",
    questions: [
      {
        text: "How strong is your motivation to learn this specific language?",
        type: "scale",
      },
      {
        text: "How many hours per week can you realistically commit to language study?",
        type: "scale",
      },
      {
        text: "Does learning this language align with your academic, career, or personal goals?",
        type: "boolean",
      },
      {
        text: "What resources are available to you (classes, apps, tutors, conversation partners)?",
        type: "multi",
        options: [
          "University Courses",
          "Language Learning Apps",
          "Online Tutors",
          "Conversation Groups/Partners",
          "Self-Study Books/Materials",
        ],
      },
      {
        text: "How well do you typically handle adding new commitments to your schedule?",
        type: "scale",
      },
      {
        text: "Which language are you most interested in learning?",
        type: "text",
      },
    ],
  },
  {
    id: "should-i-take-a-gap-year",
    title: "Should I Take a Gap Year?",
    description:
      "Considering pausing your education for a year? Evaluate the idea.",
    category: "student 🎓",
    questions: [
      {
        text: "Do you have a clear and productive plan for what you would do during a gap year?",
        type: "boolean",
      },
      {
        text: "What are your primary goals for taking a gap year?",
        type: "multi",
        options: [
          "Work and Save Money",
          "Travel",
          "Volunteer",
          "Gain Work Experience/Internship",
          "Personal Development/Rest",
          "Explore Different Interests",
        ],
      },
      {
        text: "How would you financially support yourself during this year?",
        type: "scale",
      },
      {
        text: "How confident are you that you will return to your studies or intended path afterwards?",
        type: "scale",
      },
      {
        text: "Have you discussed this possibility with your family, mentors, or advisors?",
        type: "boolean",
      },
      {
        text: "What are your biggest concerns about taking a gap year?",
        type: "text",
      },
    ],
  },
];
