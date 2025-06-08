# 💼 Internship Section Customization Guide

The Internship section is different from other sections - it's **not** stored in Firebase but directly in the code.

## 📋 How to Update the Internship Section

1. Open file: `components/sections/internship-section.tsx`
2. Find these arrays and update them with your actual information:

### 1. Benefits Array
\`\`\`javascript
const benefits = [
  "Work on real mobile game projects",
  "Mentorship and feedback throughout your journey",
  "Flexible remote work arrangement",
  "Certificate of completion",
  "Portfolio-worthy projects",
  "Networking and community access",
  "Top performers may be invited for future collaborations",
]
\`\`\`

### 2. Requirements Array
\`\`\`javascript
const requirements = [
  "Basic programming knowledge (C# preferred)",
  "Familiarity with Unity or Unreal Engine",
  "A portfolio or sample personal projects",
  "Strong communication skills",
  "Commitment to a 3-month program",
  "Availability of at least 20 hours/week",
]
\`\`\`

### 3. Timeline Array
\`\`\`javascript
const timeline = [
  {
    phase: "Application",
    duration: "Week 1",
    description: "Submit your application, portfolio, and a brief motivation letter",
    icon: Briefcase,
  },
  {
    phase: "Assessment",
    duration: "Weeks 2-3",
    description: "Short technical test and remote interview",
    icon: Code,
  },
  {
    phase: "Onboarding",
    duration: "Week 4",
    description: "Welcome session, intro tasks, and team setup",
    icon: Users,
  },
  {
    phase: "Development",
    duration: "Weeks 5-16",
    description: "Collaborate on real projects under mentorship",
    icon: Award,
  },
]
\`\`\`

### 4. Start Date
Find this text near the bottom of the file:
\`\`\`javascript
<p className="text-sm text-gray-400 mt-4">
  <Calendar className="h-4 w-4 inline mr-1" />
  Next cohort starts July 2025
</p>
\`\`\`

Change "July 2025" to your actual start date.

## 🚨 Important Notes

1. The Internship section is the **only** section that doesn't use Firebase
2. You need to edit the code directly to update this section
3. After editing, save the file and restart your development server
4. No Firebase updates are needed for this section

## 💡 Why Is This Different?

The Internship section contains structured data that doesn't change often, so it's hardcoded in the component rather than stored in Firebase.
