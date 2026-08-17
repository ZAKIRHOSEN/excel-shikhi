import type { Lesson } from "../types/lesson";

export const lessons: Lesson[] = [
  
  // ==========================
// Lesson 1
// ==========================

{
  id: 1,

  category: "beginner",

  level: "Beginner",

  title: "Excel পরিচিতি",

  description:
    "Excel কী, কোথায় ব্যবহার হয় এবং Excel-এর গুরুত্বপূর্ণ অংশগুলো একদম সহজ ভাষায় শিখুন।",

  duration: "১৫ মিনিট",

  introduction:
    "ভাবুন, আপনার অফিসে প্রতিদিন Employee Attendance, Salary, Sales বা Student Result-এর হিসাব করতে হয়। খাতায় লিখে হিসাব করা যায়, কিন্তু Data বেশি হলে কাজটা ঝামেলার হয়ে যায়। Microsoft Excel এই কাজগুলোকে অনেক সহজ করে। এই Lesson-এ আমরা Excel-এর একদম বেসিক বিষয়গুলো চিনে নেব।",

  theory: [
    "Microsoft Excel কী?",
    "Spreadsheet কী?",
    "Workbook কী?",
    "Worksheet কী?",
    "Row কী?",
    "Column কী?",
    "Cell কী?",
    "Cell Address কী?",
    "Name Box কী?",
    "Formula Bar কী?",
    "Ribbon কী?",
    "Quick Access Toolbar কী?",
    "Status Bar কী?"
  ],

  screenshots: [
    {
      title: "Excel Interface",
      image: "/images/lesson1/interface.png",
      description:
        "Excel খুললে যে প্রধান অংশগুলো দেখা যায় সেগুলো চিনে নিন।"
    }
  ],

  formulas: [],

  examples: [
    "💼 Office Attendance Sheet — কে আজ অফিসে এসেছে তা রাখার জন্য।",
    "💰 Monthly Salary Sheet — Employee-দের Salary-এর হিসাব রাখার জন্য।",
    "🎓 Student Result Sheet — Student-এর নম্বর ও Result সাজানোর জন্য।"
  ],

  questions: [
    {
      question: "Excel কী?",
      answer:
        "Microsoft Excel হলো একটি Spreadsheet Software, যেখানে Data লেখা, সাজানো, হিসাব করা এবং বিশ্লেষণ করা যায়।"
    },
    {
      question: "Spreadsheet কী?",
      answer:
        "Row এবং Column-এর মাধ্যমে Data সাজিয়ে রাখার একটি ব্যবস্থা।"
    },
    {
      question: "Workbook কী?",
      answer:
        "একটি Excel File-কে Workbook বলা হয়।"
    },
    {
      question: "Worksheet কী?",
      answer:
        "একটি Workbook-এর ভিতরের প্রতিটি Sheet-কে Worksheet বলা হয়।"
    },
    {
      question: "Cell কী?",
      answer:
        "একটি Row এবং একটি Column যেখানে মিলিত হয়, সেই ঘরটিকে Cell বলা হয়।"
    },
    {
      question: "Cell Address কী?",
      answer:
        "একটি Cell-এর অবস্থান বোঝানোর নামকে Cell Address বলে। যেমন A1।"
    },
    {
      question: "Row কী?",
      answer:
        "Row হলো Cell-গুলোর একটি অনুভূমিক (ডানে-বামে) সারি। এটি বাম থেকে ডানে চলে এবং সংখ্যা দিয়ে চেনা যায় যেমন 1, 2, 3, 4। উদাহরণ: একজন Employee-এর সম্পূর্ণ তথ্য (নাম, বিভাগ, বেতন) একটি Row-এর মধ্যে থাকে।"
    },
    {
      question: "Column কী?",
      answer:
        "Column হলো Cell-গুলোর একটি উলম্ব (উপরে-নিচে) স্তম্ভ। এটি উপর থেকে নিচে চলে এবং অক্ষর দিয়ে চেনা যায় যেমন A, B, C, D। উদাহরণ: সব Employee-এর 'নাম' বা 'বেতন' একই Column-এ থাকে।"
    },
    {
      question: "Name Box কী?",
      answer:
        "Name Box হলো Formula Bar-এর বাম পাশের ছোট বক্স যা নির্বাচিত Cell বা Range-এর Address দেখায়। যেমন B3 Cell-এ ক্লিক করলে সেখানে B3 লেখা থাকে। এতে সরাসরি Address লিখে (যেমন A10) Enter চাপলে সেই Cell-এ চলে যাওয়া যায়।"
    },
    {
      question: "Formula Bar কী?",
      answer:
        "Formula Bar হলো নির্বাচিত Cell-এর ভেতরের তথ্য বা Formula দেখা ও সম্পাদনা করার জায়গা। কোনো Cell-এ =SUM(A1:A5)-এর মতো Formula থাকলে তা এখানে দেখা যায় এবং এখান থেকে সহজে পরিবর্তন করা যায়।"
    },
    {
      question: "Ribbon কী?",
      answer:
        "Ribbon হলো Excel-এর সবচেয়ে উপরের বড় কমান্ড অংশ। এতে Home, Insert, Page Layout, Formulas, Data ইত্যাদি Tab থাকে এবং সব টুল বা কমান্ড এই Tab-গুলোর ভেতরে সাজানো থাকে।"
    },
    {
      question: "Quick Access Toolbar কী?",
      answer:
        "Quick Access Toolbar হলো একটি ছোট টুলবার যেখানে বারবার ব্যবহৃত কমান্ড রাখা হয়। যেমন Save, Undo, Redo। এর মূল কাজ হলো সাধারণ কাজগুলো দ্রুত করা।"
    },
    {
      question: "Status Bar কী?",
      answer:
        "Status Bar হলো Excel উইন্ডোর সবচেয়ে নিচের বার। এটি বর্তমান Sheet বা নির্বাচিত Cell-এর তথ্য দেখায়। যেমন কিছু সংখ্যা Select করলে Excel সেখানে Sum, Average, Count ইত্যাদি দেখাতে পারে।"
    }
  ],

  tips: [
    "প্রথম দিনেই সবকিছু মুখস্থ করার দরকার নেই। আগে Excel-এর অংশগুলো চিনুন।",
    "Excel-এ কাজ করার সময় নিয়মিত Ctrl + S দিয়ে Save করার অভ্যাস করুন।",
    "Row, Column এবং Cell—এই তিনটি বিষয় ভালোভাবে বুঝে নিন।",
    "Cell Address বুঝতে পারলে পরের Formula Lesson অনেক সহজ লাগবে।",
    "প্রতিদিন অল্প সময় Practice করাই একদিনে অনেক কিছু পড়ার চেয়ে ভালো।"
  ],

  practice: [
    "Excel খুলুন।",
    "একটি নতুন Workbook তৈরি করুন।",
    "A1 Cell-এ নিজের নাম লিখুন।",
    "B1 Cell-এ নিজের পেশা বা পরিচয় লিখুন।",
    "একটি নতুন Worksheet তৈরি করুন।",
    "Worksheet-এর নাম পরিবর্তন করুন।",
    "Workbook-টি Save করুন।"
  ],

  practiceData: {
    title: "আমার প্রথম Excel Data",

    description:
      "নিচের ছোট Data Table-টি Excel-এ নিজে তৈরি করুন। তারপর Row, Column এবং Cell খুঁজে বের করুন।",

    headers: [
      "নাম",
      "বিভাগ",
      "পদ",
      "বেতন"
    ],

    rows: [
      ["রাকিব", "Sales", "Executive", "25000"],
      ["সুমাইয়া", "HR", "Officer", "30000"],
      ["নাঈম", "Accounts", "Executive", "28000"],
      ["মাহি", "IT", "Support", "32000"],
      ["তানভীর", "Marketing", "Officer", "35000"]
    ],

    missions: [
      {
        title: "Mission 1 — Cell Detective 🔎",

        story:
          "আপনি আজ নতুন Excel User। প্রথম কাজ হলো Excel-এর Cell চিনে ফেলা।",

        instruction:
          "উপরের Data Table Excel-এ তৈরি করুন এবং নিচের প্রশ্নগুলোর উত্তর নিজে খুঁজে বের করুন।",

        tasks: [
          "রাকিবের নাম কোন Cell-এ আছে খুঁজে বের করুন।",
          "সুমাইয়ার বিভাগ কোন Cell-এ আছে খুঁজে বের করুন।",
          "তানভীরের বেতন কোন Cell-এ আছে খুঁজে বের করুন।"
        ],

        challenge:
          "আপনি কি A1, B2 এবং D5-এর মতো Cell Address দেখে বুঝতে পারছেন সেখানে কী Data আছে?"
      },

      {
        title: "Mission 2 — Row & Column Detective 🕵️",

        story:
          "এবার আপনাকে Excel-এর Row এবং Column চিনতে হবে।",

        instruction:
          "Data Table-টি দেখে Row এবং Column আলাদা করে চিনুন।",

        tasks: [
          "নাম কোন Column-এ আছে খুঁজে বের করুন।",
          "বেতন কোন Column-এ আছে খুঁজে বের করুন।",
          "রাকিবের সম্পূর্ণ Data কোন Row-তে আছে খুঁজে বের করুন।"
        ],

        challenge:
          "একজন সহপাঠী বা বন্ধুকে একটি Cell Address বলুন এবং তাকে সেই Cell খুঁজে বের করতে বলুন।"
      },

      {
        title: "Mission 3 — নিজের প্রথম Data Sheet 🚀",

        story:
          "এবার অন্যের Data নয়—নিজের ছোট একটি Excel Sheet বানাবেন।",

        instruction:
          "Excel-এ নিজের একটি ছোট Personal Data Sheet তৈরি করুন।",

        tasks: [
          "Name নামে একটি Column তৈরি করুন।",
          "Age নামে একটি Column তৈরি করুন।",
          "Profession নামে একটি Column তৈরি করুন।",
          "নিজের তথ্য দিয়ে অন্তত ৩টি Row তৈরি করুন।"
        ],

        challenge:
          "নিজের Data Sheet-এ অন্তত ৩টি Row এবং ৩টি Column তৈরি করে সুন্দরভাবে সাজান।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "Excel হলো Spreadsheet Software।",
    "একটি Excel File-কে Workbook বলা হয়।",
    "Workbook-এর ভিতরে Worksheet থাকে।",
    "Row এবং Column-এর মিলনস্থল হলো Cell।",
    "Cell Address একটি Cell-এর অবস্থান বোঝায়। যেমন A1।",
    "Excel Office, Banking, Garments, হিসাবরক্ষণ, Reporting এবং Data Analysis-এ ব্যবহার করা হয়।"
  ],

  quiz: [
    {
      question: "Microsoft Excel কী ধরনের Software?",

      options: [
        "Spreadsheet Software",
        "Video Editing Software",
        "Web Browser",
        "Operating System"
      ],

      answer: 0
    },

    {
      question: "একটি Excel File-কে কী বলা হয়?",

      options: [
        "Worksheet",
        "Workbook",
        "Cell",
        "Row"
      ],

      answer: 1
    },

    {
      question: "Row এবং Column যেখানে মিলিত হয় সেটিকে কী বলে?",

      options: [
        "Workbook",
        "Ribbon",
        "Cell",
        "Formula Bar"
      ],

      answer: 2
    },

    {
      question: "নিচের কোনটি একটি সঠিক Cell Address?",

      options: [
        "1A",
        "AA",
        "A1",
        "Row1"
      ],

      answer: 2
    },

    {
      question: "Excel-এর কোন অংশে Formula লেখা ও দেখা যায়?",

      options: [
        "Status Bar",
        "Formula Bar",
        "Sheet Tab",
        "Quick Access Toolbar"
      ],

      answer: 1
    }
  ]
},

// ==========================
// Lesson 2
// ==========================

{
  id: 2,

  category: "beginner",

  level: "Beginner",

  title: "Workbook ও Worksheet",

  description:
    "Excel File, Sheet এবং Sheet Management একদম সহজভাবে শিখুন।",

  duration: "১৮ মিনিট",

  introduction:
    "ধরুন, আপনি একটি Garments Company-তে কাজ করছেন। January, February এবং March মাসের Sales আলাদা আলাদা Sheet-এ রাখতে হবে। সবগুলো Sheet আবার একটি Excel File-এর ভিতরে থাকবে। এই Excel File হলো Workbook, আর তার ভিতরের প্রতিটি Sheet হলো Worksheet। এই Lesson-এ আমরা নিজে Sheet তৈরি, Rename, Copy, Move এবং Delete করে শিখব।",

  theory: [
    "Workbook কী?",
    "Worksheet কী?",
    "Workbook ও Worksheet-এর পার্থক্য",
    "New Worksheet তৈরি করা",
    "Worksheet Rename করা",
    "Worksheet Copy করা",
    "Worksheet Move করা",
    "Worksheet Delete করা",
    "Sheet Tab Color",
    "Sheet Management"
  ],

  screenshots: [
    {
      title: "Workbook ও Worksheet",
      image: "/images/lesson2/worksheet.png",
      description:
        "একটি Workbook-এর ভিতরে একাধিক Worksheet কীভাবে থাকে তার উদাহরণ।"
    }
  ],

  formulas: [],

  examples: [
    "📊 January Sales — জানুয়ারি মাসের Sales Data রাখুন।",
    "📊 February Sales — ফেব্রুয়ারি মাসের Sales Data আলাদা Sheet-এ রাখুন।",
    "📊 March Sales — মার্চ মাসের Sales Data আলাদা Sheet-এ রাখুন।",
    "👥 Employee List — Employee-দের তথ্যের জন্য আলাদা Worksheet ব্যবহার করুন।"
  ],

  questions: [
    {
      question: "Workbook কী?",
      answer:
        "একটি Excel File-কে Workbook বলা হয়। একটি Workbook-এর ভিতরে এক বা একাধিক Worksheet থাকতে পারে।"
    },
    {
      question: "Worksheet কী?",
      answer:
        "Workbook-এর ভিতরের প্রতিটি Sheet-কে Worksheet বলা হয়।"
    },
    {
      question: "একটি Workbook-এ কি একাধিক Worksheet থাকতে পারে?",
      answer:
        "হ্যাঁ। একটি Workbook-এর ভিতরে একাধিক Worksheet রাখা যায়।"
    },
    {
      question: "Worksheet Rename কেন করা হয়?",
      answer:
        "Sheet-এর কাজ সহজে বোঝার জন্য অর্থবহ নাম দেওয়া হয়। যেমন January, Sales বা Employee List।"
    },
    {
      question: "Worksheet Copy করার সুবিধা কী?",
      answer:
        "একই ধরনের একটি Sheet আবার নতুন করে তৈরি না করে আগের Sheet-এর Copy ব্যবহার করা যায়।"
    }
  ],

  tips: [
    "Sheet-এর নাম সবসময় কাজ অনুযায়ী রাখুন।",
    "January, February বা Sales-এর মতো অর্থবহ নাম ব্যবহার করুন।",
    "একই ধরনের কাজের জন্য একটি Sheet Copy করে ব্যবহার করতে পারেন।",
    "অপ্রয়োজনীয় Sheet বেশি জমিয়ে রাখবেন না।",
    "গুরুত্বপূর্ণ Sheet Delete করার আগে ভালোভাবে দেখে নিন।"
  ],

  practice: [
    "নতুন একটি Excel Workbook খুলুন (File → New বা Ctrl + N)।",
    "নিচের Sheet Tab-এ double-click করুন (অথবা Right Click → Rename) এবং বর্তমান Sheet-এর নাম January রাখুন।",
    "নিচের দিকে + (Insert Worksheet) button-এ ক্লিক করে আরও দুইটি নতুন Sheet তৈরি করুন।",
    "দ্বিতীয় Sheet-এর Tab-এ double-click করুন (বা Right Click → Rename) এবং নাম February রাখুন।",
    "তৃতীয় Sheet-এর Tab-এ double-click করে নাম March রাখুন।",
    "January Sheet Tab-এ Right Click → Move or Copy করে Create a copy টিক দিয়ে OK দিন।",
    "কোনো Sheet Tab-এ Right Click → Move or Copy করে desired position নির্বাচন করে সেটি Move করুন।",
    "অপ্রয়োজনীয় একটি Sheet Tab-এ Right Click → Delete করে সেটি মুছে ফেলুন।",
    "January, February ও March Sheet-এর Tab-এ Right Click → Tab Color দিয়ে ভিন্ন রঙ নির্বাচন করুন।"
  ],

  practiceData: {
    title: "আমার Monthly Sales Workbook",

    description:
      "আপনি একটি ছোট Business-এর Sales Manager। তিন মাসের Sales Data আলাদা Sheet-এ সাজিয়ে একটি Professional Workbook তৈরি করুন।",

    headers: [
      "Product",
      "Quantity",
      "Sales",
      "Month"
    ],

    rows: [
      ["Shirt", "120", "36000", "January"],
      ["Pants", "80", "32000", "January"],
      ["T-Shirt", "150", "30000", "February"],
      ["Jacket", "50", "40000", "February"],
      ["Shirt", "180", "54000", "March"],
      ["Pants", "100", "40000", "March"]
    ],

    missions: [
      {
        title: "Mission 1 — Sheet Manager 🗂️",

        story:
          "আপনি আজ একটি কোম্পানির নতুন Excel Manager। প্রথম কাজ হলো Workbook-কে সুন্দরভাবে সাজানো।",

        instruction:
          "একটি নতুন Workbook তৈরি করে মাস অনুযায়ী তিনটি Worksheet তৈরি করুন।",

        tasks: [
          "প্রথম Sheet-এর নাম January করুন।",
          "দ্বিতীয় Sheet-এর নাম February করুন।",
          "তৃতীয় Sheet-এর নাম March করুন।",
          "প্রতিটি Sheet-এ অন্তত একটি করে Data লিখুন।"
        ],

        challenge:
          "আপনি কি তিনটি মাসকে তিনটি আলাদা Worksheet-এ সুন্দরভাবে সাজাতে পারবেন?"
      },

      {
        title: "Mission 2 — Copy Master 📋",

        story:
          "January Sheet-এ আপনি সুন্দর একটি Data Layout তৈরি করেছেন। February-এর জন্য একই Layout আবার শুরু থেকে বানানোর দরকার নেই।",

        instruction:
          "January Sheet Copy করে নতুন Sheet তৈরি করুন।",

        tasks: [
          "January Sheet-এ কিছু Sample Data লিখুন।",
          "January Sheet-এর একটি Copy তৈরি করুন।",
          "Copy করা Sheet-এর নাম February করুন।",
          "February Sheet-এর Data পরিবর্তন করুন।"
        ],

        challenge:
          "একটি Sheet Copy করে কত দ্রুত নতুন মাসের জন্য প্রস্তুত করতে পারেন?"
      },

      {
        title: "Mission 3 — Sheet Organizer 🧹",

        story:
          "আপনার Workbook-এ এখন অনেকগুলো Sheet রয়েছে। এবার একজন Professional Excel User-এর মতো এগুলো সাজাতে হবে।",

        instruction:
          "Sheet-এর অবস্থান এবং নাম ঠিক করে Workbook-টি গোছান।",

        tasks: [
          "January Sheet-কে প্রথমে রাখুন।",
          "February Sheet-কে দ্বিতীয় অবস্থানে রাখুন।",
          "March Sheet-কে তৃতীয় অবস্থানে রাখুন।",
          "একটি অপ্রয়োজনীয় Sheet Delete করুন।",
          "প্রতিটি গুরুত্বপূর্ণ Sheet-এর Tab Color পরিবর্তন করুন।"
        ],

        challenge:
          "আপনার Workbook এমনভাবে সাজান যেন অন্য একজন User দেখেই বুঝতে পারে কোন Sheet-এ কী আছে।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "Workbook হলো Excel File।",
    "Workbook-এর ভিতরে একাধিক Worksheet থাকতে পারে।",
    "Worksheet-এর নাম পরিবর্তন করা যায়।",
    "Worksheet Copy এবং Move করা যায়।",
    "অপ্রয়োজনীয় Worksheet Delete করা যায়।",
    "Sheet Tab Color ব্যবহার করে Worksheet সহজে আলাদা করে চেনা যায়।"
  ],

  quiz: [
    {
      question: "একটি Excel File-কে কী বলা হয়?",

      options: [
        "Worksheet",
        "Workbook",
        "Cell",
        "Column"
      ],

      answer: 1
    },

    {
      question: "Workbook-এর ভিতরে কী থাকে?",

      options: [
        "Worksheet",
        "Browser",
        "Folder",
        "Operating System"
      ],

      answer: 0
    },

    {
      question: "Worksheet-এর নাম পরিবর্তন করাকে কী বলা হয়?",

      options: [
        "Rename",
        "Delete",
        "Filter",
        "Format"
      ],

      answer: 0
    },

    {
      question: "একই ধরনের নতুন Sheet দ্রুত তৈরি করতে কোন কাজটি উপকারী?",

      options: [
        "Sheet Copy",
        "Sheet Delete",
        "Merge",
        "Filter"
      ],

      answer: 0
    },

    {
      question: "Sheet সহজে চেনার জন্য কোনটি ব্যবহার করা যায়?",

      options: [
        "Tab Color",
        "Formula",
        "Pivot Table",
        "Chart"
      ],

      answer: 0
    },
    {
      question: "Garments Company-তে January, February ও March মাসের Sales আলাদা আলাদা রাখতে হবে। সবচেয়ে সঠিক পদ্ধতি কোনটি?",
      options: [
        "একই Excel File (Workbook)-এর ভিতরে আলাদা তিনটি Worksheet তৈরি করা",
        "তিনটি আলাদা Excel File খোলা",
        "সব Data একটি Sheet-এ এক কলামে লিখে রাখা",
        "Workbook-টি Delete করে দেওয়া"
      ],
      answer: 0
    }
  ]
},


// ==========================
// Lesson 3
// ==========================

{
  id: 3,

  category: "beginner",

  level: "Beginner",

  title: "Data Entry ও Formatting",

  description:
    "Excel-এ সঠিকভাবে Data Entry করা এবং একটি সাধারণ Data Sheet-কে Professionalভাবে সাজানো শিখুন।",

  duration: "২০ মিনিট",

  introduction:
    "Excel-এ শুধু Data লিখলেই কাজ শেষ হয় না। Data যেন সহজে পড়া যায়, ভুল কম হয় এবং Sheet দেখতে Professional লাগে—সেজন্য Formatting দরকার। এই Lesson-এ আমরা একটি বাস্তব Employee List তৈরি করব এবং ধাপে ধাপে Header, Font, Alignment, Wrap Text, Border, Fill Color এবং Merge & Center ব্যবহার করব।",

  theory: [
    "Text ও Number-এর পার্থক্য",
    "Date Format",
    "Font",
    "Font Size",
    "Bold",
    "Italic",
    "Underline",
    "Alignment",
    "Wrap Text",
    "Merge & Center",
    "Border",
    "Fill Color",
    "Font Color"
  ],

  screenshots: [
    {
      title: "Formatting Toolbar",
      image: "/images/lesson3/formatting.png",
      description:
        "Excel-এর Formatting Tool ব্যবহার করে Data Sheet সাজানোর উদাহরণ।"
    }
  ],

  formulas: [],

  examples: [
    "👥 Employee List — Employee-এর Name, Department ও Joining Date সাজিয়ে রাখা।",
    "🎓 Student Result Sheet — Student-এর Name, Subject ও Marks সুন্দরভাবে সাজানো।",
    "💰 Salary Sheet — Employee Salary Data পরিষ্কারভাবে দেখানো।",
    "📋 Attendance Sheet — Employee-এর Attendance Data সহজে পড়ার মতো করে সাজানো।"
  ],

  questions: [
    {
      question: "Text এবং Number-এর মধ্যে পার্থক্য কী?",
      answer:
        "Text সাধারণত নাম বা লেখা বোঝায়, আর Number দিয়ে হিসাব করা যায়। যেমন Zakir একটি Text এবং 25000 একটি Number।"
    },
    {
      question: "Bold কী কাজে ব্যবহার হয়?",
      answer:
        "গুরুত্বপূর্ণ লেখা মোটা ও বেশি চোখে পড়ার মতো করতে Bold ব্যবহার করা হয়।"
    },
    {
      question: "Alignment কী?",
      answer:
        "Cell-এর ভিতরের লেখা বা Data কোন দিকে থাকবে তা ঠিক করার পদ্ধতিকে Alignment বলে।"
    },
    {
      question: "Wrap Text কী?",
      answer:
        "একটি Cell-এর ভিতরের বড় লেখা একই Cell-এর মধ্যে একাধিক লাইনে দেখানোর সুবিধাকে Wrap Text বলে।"
    },
    {
      question: "Border কেন ব্যবহার করা হয়?",
      answer:
        "Data-এর বিভিন্ন অংশকে আলাদা করে পরিষ্কারভাবে দেখানোর জন্য Border ব্যবহার করা হয়।"
    },
    {
      question: "Merge & Center কী?",
      answer:
        "একাধিক Cell একত্র করে তার মধ্যে থাকা লেখা Center করার জন্য Merge & Center ব্যবহার করা হয়।"
    }
  ],

  tips: [
    "সব Data-তে অকারণে অনেক Color ব্যবহার করবেন না।",
    "Header-কে Bold এবং আলাদা Background Color দিলে Data সহজে বোঝা যায়।",
    "Date সবসময় একই Format-এ রাখার চেষ্টা করুন।",
    "একটি Professional Sheet-এ Alignment ও Spacing গুরুত্বপূর্ণ।",
    "Formatting করার আগে Data ঠিকভাবে Entry হয়েছে কিনা দেখে নিন।"
  ],

  practice: [
    "Employee List-এর Header তৈরি করুন।",
    "Header-গুলো Bold করুন।",
    "Header-এর Background Color পরিবর্তন করুন।",
    "Name ও Department Column-এর Alignment ঠিক করুন।",
    "Joining Date-এর জন্য Date Format ব্যবহার করুন।",
    "পুরো Data Table-এ Border দিন।",
    "বড় লেখা থাকলে Wrap Text ব্যবহার করুন।",
    "Sheet-এর Title সুন্দরভাবে তৈরি করুন।",
    "Title-এর জন্য Merge & Center ব্যবহার করুন।"
  ],

  practiceData: {
    title: "Employee List — আমার প্রথম Professional Sheet",

    description:
      "আপনি একটি অফিসের নতুন Data Entry Operator। আপনার কাজ হলো Employee List তৈরি করে সেটিকে এমনভাবে সাজানো যাতে Manager এক নজরেই সব তথ্য বুঝতে পারেন।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Joining Date",
      "Salary"
    ],

    rows: [
      ["EMP-001", "রাকিব", "Sales", "05/01/2025", "25000"],
      ["EMP-002", "সুমাইয়া", "HR", "12/02/2025", "30000"],
      ["EMP-003", "নাঈম", "Accounts", "18/03/2025", "28000"],
      ["EMP-004", "মাহি", "IT", "25/04/2025", "32000"],
      ["EMP-005", "তানভীর", "Marketing", "10/05/2025", "35000"],
      ["EMP-006", "সাদিয়া", "Admin", "22/06/2025", "27000"]
    ],

    missions: [
      {
        title: "Mission 1 — Data Entry Detective 🕵️",

        story:
          "আপনার Manager একটি Employee List দিয়েছেন। কিন্তু Data এখনো Excel-এ Entry করা হয়নি।",

        instruction:
          "উপরের Data Excel-এ সঠিকভাবে Entry করুন।",

        tasks: [
          "Employee ID Column তৈরি করুন।",
          "Name Column তৈরি করুন।",
          "Department Column তৈরি করুন।",
          "Joining Date Column তৈরি করুন।",
          "Salary Column তৈরি করুন।",
          "সব Employee-এর Data সঠিক Row-তে লিখুন।"
        ],

        challenge:
          "একটি Data ভুল না করে পুরো Employee List Entry করতে পারবেন?"
      },

      {
        title: "Mission 2 — Formatting Boss 🎨",

        story:
          "Data Entry শেষ হয়েছে। কিন্তু Sheet দেখতে একদম সাধারণ। এবার এটাকে Professional করতে হবে।",

        instruction:
          "Employee List-টিকে একটি Professional Office Sheet-এর মতো Format করুন।",

        tasks: [
          "পুরো Header Row Bold করুন।",
          "Header-এর Background Color পরিবর্তন করুন।",
          "Header-এর Font Color পরিবর্তন করুন।",
          "পুরো Table-এ Border দিন।",
          "Employee ID ও Name-এর Alignment ঠিক করুন।",
          "Salary Column-এর Number Format ঠিক করুন।"
        ],

        challenge:
          "আপনার Sheet এমনভাবে সাজান যেন Manager এক নজরেই Data বুঝতে পারেন।"
      },

      {
        title: "Mission 3 — Professional Sheet Designer 🚀",

        story:
          "এবার আপনাকে একজন Professional Excel User-এর মতো Sheet-এর Title তৈরি করতে হবে।",

        instruction:
          "Employee List-এর উপরে একটি সুন্দর Title তৈরি করুন।",

        tasks: [
          "Table-এর উপরে একটি নতুন Row রাখুন।",
          "Title লিখুন: Employee Information",
          "Title-এর জন্য একাধিক Cell Select করুন।",
          "Merge & Center ব্যবহার করুন।",
          "Title-এর Font Size বাড়ান।",
          "Title Bold করুন।",
          "Title-এর জন্য একটি সুন্দর Font Color ব্যবহার করুন."
        ],

        challenge:
          "আপনার Sheet-টি এমনভাবে সাজান যেন এটি সরাসরি অফিসে ব্যবহার করা যায়।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "Text ও Number-এর ব্যবহার আলাদা।",
    "Header-কে Bold ও আলাদা Color দিলে Data সহজে বোঝা যায়।",
    "Alignment দিয়ে Data-এর অবস্থান ঠিক করা যায়।",
    "Wrap Text বড় লেখা Cell-এর মধ্যে সুন্দরভাবে দেখায়।",
    "Border Data Table-কে পরিষ্কার ও গোছানো করে।",
    "Merge & Center ব্যবহার করে Professional Title তৈরি করা যায়।"
  ],

  quiz: [
    {
      question: "Employee Name সাধারণত কোন ধরনের Data?",

      options: [
        "Text",
        "Number",
        "Formula",
        "Chart"
      ],

      answer: 0
    },

    {
      question: "লেখা মোটা করতে কোন Formatting ব্যবহার হয়?",

      options: [
        "Italic",
        "Bold",
        "Underline",
        "Wrap Text"
      ],

      answer: 1
    },

    {
      question: "একটি Cell-এর মধ্যে বড় লেখা একাধিক লাইনে দেখাতে কোনটি ব্যবহার হয়?",

      options: [
        "Merge & Center",
        "Border",
        "Wrap Text",
        "Fill Color"
      ],

      answer: 2
    },

    {
      question: "একাধিক Cell একত্র করে Title Center করতে কোন Feature ব্যবহার করা হয়?",

      options: [
        "Wrap Text",
        "Merge & Center",
        "Filter",
        "Sort"
      ],

      answer: 1
    },

    {
      question: "Data Table-এর চারপাশে ও Cell-এর মধ্যে লাইন দিতে কোনটি ব্যবহার করা হয়?",

      options: [
        "Border",
        "Font Color",
        "Italic",
        "Underline"
      ],

      answer: 0
    }
  ]
},


// ==========================
// Lesson 4
// ==========================

{
  id: 4,

  category: "beginner",

  level: "Beginner",

  title: "Basic Formula",

  description:
    "Excel-এ যোগ, বিয়োগ, গুণ ও ভাগ করে বাস্তব হিসাব করা শিখুন।",

  duration: "২২ মিনিট",

  introduction:
    "Excel-এর সবচেয়ে মজার বিষয়গুলোর একটি হলো—আপনি শুধু Data লিখবেন, আর Excel আপনার হয়ে হিসাব করবে। এজন্য Formula ব্যবহার করা হয়। Formula সবসময় = চিহ্ন দিয়ে শুরু হয়। এই Lesson-এ আমরা Salary, Sales এবং Quantity-এর বাস্তব হিসাব দিয়ে Addition, Subtraction, Multiplication ও Division শিখব।",

  theory: [
    "Formula কী?",
    "Formula কীভাবে শুরু হয়?",
    "Addition (+)",
    "Subtraction (-)",
    "Multiplication (*)",
    "Division (/)",
    "Bracket ()",
    "Cell Reference",
    "Manual Number বনাম Cell Reference",
    "Formula Copy করার ধারণা"
  ],

  screenshots: [
    {
      title: "Basic Formula",
      image: "/images/lesson4/formula.png",
      description:
        "Excel-এ Cell Reference ব্যবহার করে Basic Formula লেখার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "Addition — যোগ",
      syntax: "=A1+B1",
      explanation:
        "দুটি Cell-এর সংখ্যা যোগ করে।",

      example:
        "=B2+C2"
    },

    {
      name: "Subtraction — বিয়োগ",
      syntax: "=A1-B1",
      explanation:
        "প্রথম Cell থেকে দ্বিতীয় Cell-এর সংখ্যা বিয়োগ করে।",

      example:
        "=B2-C2"
    },

    {
      name: "Multiplication — গুণ",
      syntax: "=A1*B1",
      explanation:
        "দুটি Cell-এর সংখ্যা গুণ করে।",

      example:
        "=B2*C2"
    },

    {
      name: "Division — ভাগ",
      syntax: "=A1/B1",
      explanation:
        "প্রথম Cell-এর সংখ্যা দ্বিতীয় Cell-এর সংখ্যা দিয়ে ভাগ করে।",

      example:
        "=B2/C2"
    }
  ],

  examples: [
    "💰 Salary Calculation — Basic Salary + Allowance = Total Salary",
    "🛒 Sales Calculation — Quantity × Unit Price = Total Sales",
    "📦 Product Calculation — Total Amount ÷ Quantity = Unit Price",
    "📊 Profit Calculation — Sales - Cost = Profit"
  ],

  questions: [
    {
      question: "Excel Formula কী?",
      answer:
        "Excel-কে কোনো হিসাব করতে নির্দেশ দেওয়ার জন্য যে Expression ব্যবহার করা হয় তাকে Formula বলে।"
    },

    {
      question: "Formula কী দিয়ে শুরু হয়?",
      answer:
        "Excel-এর Formula সাধারণত = (সমান) চিহ্ন দিয়ে শুরু হয়।"
    },

    {
      question: "যোগ করার জন্য কোন Operator ব্যবহার হয়?",
      answer:
        "+ Operator ব্যবহার করা হয়।"
    },

    {
      question: "গুণ করার জন্য কোন Operator ব্যবহার হয়?",
      answer:
        "* Operator ব্যবহার করা হয়।"
    },

    {
      question: "Division-এর জন্য কোন Operator ব্যবহার হয়?",
      answer:
        "/ Operator ব্যবহার করা হয়।"
    },

    {
      question: "Cell Reference ব্যবহার করার সুবিধা কী?",
      answer:
        "Cell-এর Data পরিবর্তন করলে Formula আবার লিখতে হয় না; Excel নতুন Result নিজে Calculate করে।"
    }
  ],

  tips: [
    "Formula লেখার সময় = চিহ্ন দিতে ভুলবেন না।",
    "সম্ভব হলে সরাসরি Number না লিখে Cell Reference ব্যবহার করুন।",
    "গুণের জন্য x নয়, * ব্যবহার করতে হয়।",
    "ভাগের জন্য ÷ নয়, / ব্যবহার করতে হয়।",
    "Formula লেখার পরে Enter চাপলে Excel Result দেখাবে।"
  ],

  practice: [
    "A1 এবং B1-এ দুটি সংখ্যা লিখে যোগ করুন।",
    "A2 এবং B2-এর মধ্যে বিয়োগ করুন।",
    "A3 এবং B3-এর সংখ্যা গুণ করুন।",
    "A4 এবং B4-এর সংখ্যা ভাগ করুন।",
    "একটি Salary হিসাব তৈরি করুন।",
    "একটি Product Sales হিসাব তৈরি করুন।"
  ],

  practiceData: {
    title: "আমার প্রথম Excel Calculator 🧮",

    description:
      "আপনি একটি ছোট অফিসের হিসাবরক্ষক। কয়েকটি পণ্যের Quantity ও Unit Price দেওয়া আছে। Formula ব্যবহার করে Total Sales বের করুন।",

    headers: [
      "Product",
      "Quantity",
      "Unit Price",
      "Total Sales"
    ],

    rows: [
      ["Shirt", "10", "500", ""],
      ["Pants", "8", "800", ""],
      ["T-Shirt", "15", "400", ""],
      ["Jacket", "5", "1500", ""],
      ["Shoes", "6", "1200", ""],
      ["Bag", "12", "700", ""]
    ],

    missions: [
      {
        title: "Mission 1 — Formula Detective 🕵️",

        story:
          "আপনার সামনে একটি Sales Sheet আছে। Quantity এবং Unit Price দেওয়া আছে, কিন্তু Total Sales খালি।",

        instruction:
          "প্রতিটি Product-এর Total Sales Formula দিয়ে বের করুন।",

        tasks: [
          "প্রথম Product-এর Total Sales Cell নির্বাচন করুন।",
          "Quantity × Unit Price Formula লিখুন।",
          "Enter চাপুন।",
          "Result সঠিক এসেছে কিনা দেখুন।",
          "Formula পরের Row-গুলোতেও ব্যবহার করুন।"
        ],

        challenge:
          "Manual Calculator ব্যবহার না করে পুরো Sales হিসাব Excel দিয়ে করতে পারবেন?"
      },

      {
        title: "Mission 2 — Salary Calculator 💰",

        story:
          "একজন Employee-এর Basic Salary এবং Allowance দেওয়া আছে। এখন Total Salary বের করতে হবে।",

        instruction:
          "Addition Formula ব্যবহার করে Total Salary বের করুন।",

        tasks: [
          "Basic Salary একটি Cell-এ লিখুন।",
          "Allowance অন্য একটি Cell-এ লিখুন।",
          "Total Salary Cell নির্বাচন করুন।",
          "=Basic Salary Cell + Allowance Cell লিখুন।",
          "Enter চাপুন এবং Result দেখুন।"
        ],

        challenge:
          "Basic Salary বা Allowance পরিবর্তন করলে Total Salary নিজে নিজে Update হচ্ছে কিনা পরীক্ষা করুন।"
      },

      {
        title: "Mission 3 — Profit Detective 📈",

        story:
          "আপনার দোকানে একটি Product বিক্রি হয়েছে। Sales Amount এবং Cost দেওয়া আছে। এখন Profit বের করতে হবে।",

        instruction:
          "Subtraction Formula ব্যবহার করে Profit বের করুন।",

        tasks: [
          "Sales Amount একটি Cell-এ লিখুন।",
          "Cost অন্য একটি Cell-এ লিখুন।",
          "Profit Cell নির্বাচন করুন।",
          "Sales - Cost Formula লিখুন।",
          "Result Check করুন।"
        ],

        challenge:
          "Sales বা Cost পরিবর্তন করে দেখুন Profit কীভাবে পরিবর্তিত হয়।"
      },

      {
        title: "Bonus Mission — Formula Master 🚀",

        story:
          "এবার চারটি Operator একসাথে ব্যবহার করে একটি ছোট হিসাব তৈরি করুন।",

        instruction:
          "নিজের একটি ছোট Excel Calculator তৈরি করুন।",

        tasks: [
          "দুটি Number লিখুন।",
          "দুটির যোগফল বের করুন।",
          "দুটির বিয়োগফল বের করুন।",
          "দুটির গুণফল বের করুন।",
          "দুটির ভাগফল বের করুন।"
        ],

        challenge:
          "চারটি Basic Operator ব্যবহার করে নিজের Calculator তৈরি করতে পারবেন?"
      }
    ]
  },

  pdf: "#",

  summary: [
    "Excel Formula সাধারণত = চিহ্ন দিয়ে শুরু হয়।",
    "+ দিয়ে Addition করা হয়।",
    "- দিয়ে Subtraction করা হয়।",
    "* দিয়ে Multiplication করা হয়।",
    "/ দিয়ে Division করা হয়।",
    "Cell Reference ব্যবহার করলে Data পরিবর্তনের সঙ্গে Result Update হয়।"
  ],

  quiz: [
    {
      question: "Excel Formula সাধারণত কোন চিহ্ন দিয়ে শুরু হয়?",

      options: [
        "+",
        "=",
        "-",
        "*"
      ],

      answer: 1
    },

    {
      question: "দুটি Cell যোগ করতে কোন Formula সঠিক?",

      options: [
        "=A1+B1",
        "=A1-B1",
        "=A1*B1",
        "=A1/B1"
      ],

      answer: 0
    },

    {
      question: "Excel-এ গুণ করার Operator কোনটি?",

      options: [
        "x",
        "×",
        "*",
        "%"
      ],

      answer: 2
    },

    {
      question: "Excel-এ ভাগ করার Operator কোনটি?",

      options: [
        "÷",
        "/",
        ":",
        "%"
      ],

      answer: 1
    },

    {
      question: "Cell Reference ব্যবহার করার প্রধান সুবিধা কী?",

      options: [
        "Data পরিবর্তন হলে Result Update হতে পারে",
        "Excel বন্ধ হয়ে যায়",
        "Sheet Delete হয়",
        "Font বড় হয়"
      ],

      answer: 0
    }
  ]
},

// ==========================
// Lesson 5
// ==========================

{
  id: 5,

  category: "beginner",

  level: "Beginner",

  title: "SUM, AVERAGE, MIN ও MAX",

  description:
    "Excel-এর সবচেয়ে দরকারি চারটি Function দিয়ে মোট, গড়, সর্বনিম্ন ও সর্বোচ্চ মান বের করা শিখুন।",

  duration: "২৫ মিনিট",

  introduction:
    "ধরুন, আপনার কাছে ১০০ জন Student-এর নম্বর আছে। একজন একজন করে Calculator দিয়ে Total বা Average বের করা বেশ ঝামেলার কাজ। Excel-এর SUM, AVERAGE, MIN এবং MAX Function ব্যবহার করলে কয়েক সেকেন্ডেই এই হিসাব করা যায়। এই Lesson-এ আমরা Student Result, Monthly Sales এবং Office Data দিয়ে চারটি Function বাস্তবে ব্যবহার করব।",

  theory: [
    "Function কী?",
    "SUM Function",
    "AVERAGE Function",
    "MIN Function",
    "MAX Function",
    "Range কী?",
    "AutoSum",
    "Cell Range নির্বাচন করা",
    "Function-এর Result বোঝা"
  ],

  screenshots: [
    {
      title: "SUM Function",
      image: "/images/lesson5/sum.png",
      description:
        "Excel-এ SUM Function ব্যবহার করে একাধিক Cell-এর Total বের করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "SUM — মোট যোগফল",
      syntax: "=SUM(A1:A10)",
      explanation:
        "নির্বাচিত Range-এর সব Number যোগ করে Total বের করে।",

      example:
        "=SUM(C2:C20)"
    },

    {
      name: "AVERAGE — গড়",
      syntax: "=AVERAGE(A1:A10)",
      explanation:
        "নির্বাচিত Numberগুলোর Average বা গড় বের করে।",

      example:
        "=AVERAGE(C2:C20)"
    },

    {
      name: "MIN — সর্বনিম্ন",
      syntax: "=MIN(A1:A10)",
      explanation:
        "নির্বাচিত Range-এর সবচেয়ে ছোট Number বের করে।",

      example:
        "=MIN(C2:C20)"
    },

    {
      name: "MAX — সর্বোচ্চ",
      syntax: "=MAX(A1:A10)",
      explanation:
        "নির্বাচিত Range-এর সবচেয়ে বড় Number বের করে।",

      example:
        "=MAX(C2:C20)"
    }
  ],

  examples: [
    "🎓 Student Result — সব Subject-এর Total ও Average বের করা।",
    "💰 Monthly Sales — পুরো মাসের মোট Sales বের করা।",
    "👥 Employee Data — সবচেয়ে কম ও বেশি Salary খুঁজে বের করা।",
    "📊 Office Report — একটি Data Range-এর Average, Minimum ও Maximum বের করা।"
  ],

  questions: [
    {
      question: "SUM Function কী করে?",
      answer:
        "একটি Range-এর সব Number যোগ করে Total বা যোগফল বের করে।"
    },

    {
      question: "AVERAGE Function কী করে?",
      answer:
        "নির্বাচিত Numberগুলোর গড় বের করে।"
    },

    {
      question: "MIN Function কী করে?",
      answer:
        "নির্বাচিত Range-এর সবচেয়ে ছোট Number বের করে।"
    },

    {
      question: "MAX Function কী করে?",
      answer:
        "নির্বাচিত Range-এর সবচেয়ে বড় Number বের করে।"
    },

    {
      question: "A1:A10 বলতে কী বোঝায়?",
      answer:
        "A1 থেকে A10 পর্যন্ত Cell-এর Range বোঝায়।"
    },

    {
      question: "AutoSum কী?",
      answer:
        "Excel-এর একটি সুবিধা যার মাধ্যমে দ্রুত SUM Formula তৈরি করা যায়।"
    }
  ],

  tips: [
    "অনেকগুলো Number যোগ করার জন্য এক এক করে + না লিখে SUM ব্যবহার করুন।",
    "Average বের করার সময় পুরো প্রয়োজনীয় Range নির্বাচন করুন।",
    "MIN এবং MAX দিয়ে দ্রুত সবচেয়ে কম ও বেশি মান খুঁজে বের করা যায়।",
    "Range লেখার সময় প্রথম ও শেষ Cell-এর মাঝে : ব্যবহার করুন।",
    "Formula লেখার পরে Result পরিবর্তন হচ্ছে কিনা Data পরিবর্তন করে পরীক্ষা করুন।"
  ],

  practice: [
    "একটি Student Result Sheet তৈরি করুন।",
    "SUM ব্যবহার করে Total Marks বের করুন।",
    "AVERAGE ব্যবহার করে Average Marks বের করুন।",
    "MIN ব্যবহার করে সবচেয়ে কম Marks বের করুন।",
    "MAX ব্যবহার করে সবচেয়ে বেশি Marks বের করুন।",
    "একটি Monthly Sales-এর Total বের করুন।"
  ],

  practiceData: {
    title: "Student Result Analyzer 🎓",

    description:
      "আপনি একটি স্কুলের Result তৈরি করছেন। পাঁচজন Student-এর তিনটি Subject-এর Marks দেওয়া আছে। SUM ও AVERAGE ব্যবহার করে Result বিশ্লেষণ করুন।",

    headers: [
      "Student",
      "Bangla",
      "English",
      "Math",
      "Total",
      "Average"
    ],

    rows: [
      ["রাকিব", "75", "82", "90", "", ""],
      ["সুমাইয়া", "88", "79", "85", "", ""],
      ["নাঈম", "65", "72", "68", "", ""],
      ["মাহি", "92", "90", "95", "", ""],
      ["তানভীর", "70", "76", "80", "", ""],
      ["সাদিয়া", "84", "88", "91", "", ""]
    ],

    missions: [
      {
        title: "Mission 1 — Total Marks Detective 🧮",

        story:
          "প্রতিটি Student-এর তিনটি Subject-এর Marks দেওয়া আছে। এখন প্রত্যেকের Total Marks বের করতে হবে।",

        instruction:
          "SUM Function ব্যবহার করে প্রত্যেক Student-এর Total Marks বের করুন।",

        tasks: [
          "প্রথম Student-এর Total Cell নির্বাচন করুন।",
          "=SUM(B2:D2) Formula লিখুন।",
          "Enter চাপুন।",
          "Result সঠিক এসেছে কিনা দেখুন।",
          "Formula পরের Student-দের জন্যও ব্যবহার করুন।"
        ],

        challenge:
          "একজন একজন করে Calculator ব্যবহার না করে পুরো Result Sheet-এর Total বের করতে পারবেন?"
      },

      {
        title: "Mission 2 — Average Master 📊",

        story:
          "Total Marks জানা গেছে। এবার প্রত্যেক Student-এর Average Marks বের করতে হবে।",

        instruction:
          "AVERAGE Function ব্যবহার করে প্রত্যেক Student-এর Average বের করুন।",

        tasks: [
          "প্রথম Student-এর Average Cell নির্বাচন করুন।",
          "=AVERAGE(B2:D2) Formula লিখুন।",
          "Enter চাপুন।",
          "Result Check করুন।",
          "Formula পরের Student-দের জন্য ব্যবহার করুন।"
        ],

        challenge:
          "কোন Student-এর Average সবচেয়ে বেশি তা Result দেখে অনুমান করুন।"
      },

      {
        title: "Mission 3 — Highest & Lowest Detective 🔎",

        story:
          "পুরো Class-এর Marks এখন বিশ্লেষণ করতে হবে। কোন Subject-এ সবচেয়ে বেশি এবং সবচেয়ে কম Marks হয়েছে তা খুঁজে বের করুন।",

        instruction:
          "MIN ও MAX Function ব্যবহার করে Class-এর Highest এবং Lowest Marks বের করুন।",

        tasks: [
          "Bangla Marks-এর সবচেয়ে কম মান বের করুন।",
          "Bangla Marks-এর সবচেয়ে বেশি মান বের করুন।",
          "English Marks-এর সবচেয়ে কম মান বের করুন।",
          "English Marks-এর সবচেয়ে বেশি মান বের করুন।",
          "Math Marks-এর সবচেয়ে কম মান বের করুন।",
          "Math Marks-এর সবচেয়ে বেশি মান বের করুন।"
        ],

        challenge:
          "পুরো Class-এর মধ্যে কোন Subject-এ Highest Marks হয়েছে সেটা খুঁজে বের করুন।"
      },

      {
        title: "Bonus Mission — Sales Analyst 💼",

        story:
          "এবার Student Result বাদ দিয়ে Office-এর Sales Data নিয়ে কাজ করুন।",

        instruction:
          "একটি Sales Column তৈরি করে SUM, AVERAGE, MIN ও MAX ব্যবহার করুন।",

        tasks: [
          "ছয়টি Sales Amount লিখুন।",
          "SUM দিয়ে Total Sales বের করুন।",
          "AVERAGE দিয়ে Average Sales বের করুন।",
          "MIN দিয়ে Lowest Sale বের করুন।",
          "MAX দিয়ে Highest Sale বের করুন।"
        ],

        challenge:
          "Manager যদি জিজ্ঞেস করেন 'আমাদের Total, Average, Lowest এবং Highest Sales কত?'—এক মিনিটের মধ্যে উত্তর দিতে পারবেন?"
      }
    ]
  },

  pdf: "#",

  summary: [
    "SUM একটি Range-এর Total বা যোগফল বের করে।",
    "AVERAGE একটি Range-এর গড় বের করে।",
    "MIN সবচেয়ে ছোট Number বের করে।",
    "MAX সবচেয়ে বড় Number বের করে।",
    "A1:A10 একটি Cell Range বোঝায়।",
    "AutoSum ব্যবহার করে দ্রুত SUM Formula তৈরি করা যায়।"
  ],

  quiz: [
    {
      question: "Total বের করার জন্য কোন Function ব্যবহার করা হয়?",

      options: [
        "SUM",
        "AVERAGE",
        "MIN",
        "MAX"
      ],

      answer: 0
    },

    {
      question: "Average বা গড় বের করতে কোন Function ব্যবহার হয়?",

      options: [
        "SUM",
        "AVERAGE",
        "MIN",
        "MAX"
      ],

      answer: 1
    },

    {
      question: "সবচেয়ে ছোট Number বের করতে কোন Function ব্যবহার হয়?",

      options: [
        "SUM",
        "AVERAGE",
        "MIN",
        "MAX"
      ],

      answer: 2
    },

    {
      question: "সবচেয়ে বড় Number বের করতে কোন Function ব্যবহার হয়?",

      options: [
        "SUM",
        "AVERAGE",
        "MIN",
        "MAX"
      ],

      answer: 3
    },

    {
      question: "A1:A10 কী বোঝায়?",

      options: [
        "একটি Formula",
        "একটি Cell Range",
        "একটি Worksheet",
        "একটি Workbook"
      ],

      answer: 1
    }
  ]
},

// ==========================
// Lesson 6
// ==========================

{
  id: 6,

  category: "intermediate",

  level: "Intermediate",

  title: "COUNT, COUNTA ও COUNTIF",

  description:
    "Excel-এ কতগুলো সংখ্যা, কতগুলো Data এবং নির্দিষ্ট শর্ত পূরণ করা Data আছে তা দ্রুত গণনা করতে শিখুন।",

  duration: "২৫ মিনিট",

  introduction:
    "ধরুন, অফিসে ৫০০ জন Employee আছে। Manager জানতে চাইলেন—কতজনের Salary Entry হয়েছে, কতজন Employee-এর তথ্য আছে, অথবা কতজনের Salary ৩০,০০০ টাকার বেশি। একজন একজন করে গুনে বের করার দরকার নেই। COUNT, COUNTA এবং COUNTIF ব্যবহার করে Excel কয়েক সেকেন্ডেই উত্তর দিতে পারে।",

  theory: [
    "COUNT Function কী?",
    "COUNTA Function কী?",
    "COUNTIF Function কী?",
    "COUNT ও COUNTA-এর পার্থক্য",
    "Criteria কী?",
    "Range কী?",
    "Text ও Number Count করা",
    "Condition দিয়ে Data Count করা",
    "Greater Than (>)",
    "Less Than (<)",
    "Equal To (=)"
  ],

  screenshots: [
    {
      title: "COUNT Function",
      image: "/images/lesson6/count.png",
      description:
        "COUNT, COUNTA এবং COUNTIF ব্যবহার করে Data গণনার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "COUNT — Number Count",
      syntax: "=COUNT(A1:A20)",
      explanation:
        "একটি Range-এর মধ্যে থাকা Number Cell গণনা করে।",

      example:
        "=COUNT(C2:C100)"
    },

    {
      name: "COUNTA — Data Count",
      syntax: "=COUNTA(A1:A20)",
      explanation:
        "একটি Range-এর মধ্যে খালি নয় এমন Cell গণনা করে।",

      example:
        "=COUNTA(B2:B100)"
    },

    {
      name: "COUNTIF — Condition অনুযায়ী Count",
      syntax: '=COUNTIF(A1:A20,">50")',
      explanation:
        "নির্দিষ্ট শর্ত পূরণ করা Cell গণনা করে।",

      example:
        '=COUNTIF(C2:C50,">30000")'
    }
  ],

  examples: [
    "👥 Employee Count — Employee List-এ মোট কতজন Employee আছে তা বের করা।",
    "💰 Salary Count — কতজন Employee-এর Salary Entry হয়েছে তা বের করা।",
    "📋 Attendance — কতজন Employee Present বা Absent তা গণনা করা।",
    "📊 Sales Analysis — কতটি Sale ৩০,০০০ টাকার বেশি হয়েছে তা বের করা।"
  ],

  questions: [
    {
      question: "COUNT Function কী করে?",
      answer:
        "একটি Range-এর মধ্যে থাকা Number Cell গণনা করে।"
    },

    {
      question: "COUNTA Function কী করে?",
      answer:
        "একটি Range-এর মধ্যে খালি নয় এমন Cell গণনা করে।"
    },

    {
      question: "COUNTIF কী?",
      answer:
        "নির্দিষ্ট শর্ত পূরণ করা Data বা Cell গণনা করার Function।"
    },

    {
      question: "COUNT এবং COUNTA-এর মধ্যে পার্থক্য কী?",
      answer:
        "COUNT শুধু Number গণনা করে, আর COUNTA খালি নয় এমন সব ধরনের Data গণনা করে।"
    },

    {
      question: "Criteria কী?",
      answer:
        "কোন শর্ত অনুযায়ী Data গণনা করা হবে সেটিই Criteria। যেমন >30000।"
    },

    {
      question: 'COUNTIF(A1:A20,">50") কী করবে?',
      answer:
        "A1 থেকে A20 Range-এর মধ্যে ৫০-এর বেশি Value থাকা Cell গণনা করবে।"
    }
  ],

  tips: [
    "শুধু Number গণনা করতে COUNT ব্যবহার করুন।",
    "Text সহ সব Non-empty Data গণনা করতে COUNTA ব্যবহার করুন।",
    "কোনো শর্ত অনুযায়ী Count করতে COUNTIF ব্যবহার করুন।",
    "Criteria লেখার সময় >, < বা = চিহ্ন ঠিকভাবে ব্যবহার করুন।",
    "Formula লেখার পরে কয়েকটি Data পরিবর্তন করে Result কীভাবে বদলায় তা পরীক্ষা করুন।"
  ],

  practice: [
    "Employee ID-এর মোট Number Count করুন।",
    "Employee Name-এর মোট Non-empty Cell Count করুন।",
    "Salary ৩০,০০০ টাকার বেশি এমন Employee Count করুন।",
    "Sales ৫০,০০০ টাকার বেশি এমন Order Count করুন।",
    "Present Employee-এর সংখ্যা Count করুন।"
  ],

  practiceData: {
    title: "Employee Data Counter 👥",

    description:
      "আপনি একটি অফিসের HR Assistant। Manager জানতে চেয়েছেন—মোট কতজন Employee আছে, কতজনের Salary Entry হয়েছে এবং কতজনের Salary ৩০,০০০ টাকার বেশি।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Salary",
      "Status"
    ],

    rows: [
      ["1001", "রাকিব", "Sales", "28000", "Present"],
      ["1002", "সুমাইয়া", "HR", "35000", "Present"],
      ["1003", "নাঈম", "Accounts", "30000", "Absent"],
      ["1004", "মাহি", "IT", "45000", "Present"],
      ["1005", "তানভীর", "Marketing", "26000", "Present"],
      ["1006", "সাদিয়া", "Admin", "38000", "Absent"],
      ["1007", "আরিফ", "Sales", "32000", "Present"],
      ["1008", "মিম", "HR", "29000", "Present"]
    ],

    missions: [
      {
        title: "Mission 1 — Employee Counter 👥",

        story:
          "HR Manager জানতে চেয়েছেন অফিসে মোট কতজন Employee-এর তথ্য রয়েছে।",

        instruction:
          "COUNTA ব্যবহার করে মোট Employee Count বের করুন।",

        tasks: [
          "Employee Name Column নির্বাচন করুন।",
          '=COUNTA(B2:B9) Formula লিখুন।',
          "Enter চাপুন।",
          "Result Check করুন।",
          "কতজন Employee-এর Name Entry আছে তা লিখে রাখুন।"
        ],

        challenge:
          "কেউ একজনকে হাতে গুনে না দেখে Excel দিয়ে মোট Employee Count করতে পারবেন?"
      },

      {
        title: "Mission 2 — Salary Detective 💰",

        story:
          "Finance Department জানতে চায় কতজন Employee-এর Salary ৩০,০০০ টাকার বেশি।",

        instruction:
          'COUNTIF ব্যবহার করে ৩০,০০০ টাকার বেশি Salary থাকা Employee Count করুন।',

        tasks: [
          "Salary Column নির্বাচন করুন।",
          '=COUNTIF(D2:D9,">30000") Formula লিখুন।',
          "Enter চাপুন।",
          "Result Check করুন।",
          "৩০,০০০-এর বেশি Salary থাকা Employee-এর সংখ্যা লিখুন।"
        ],

        challenge:
          "Criteria পরিবর্তন করে ৩৫,০০০ টাকার বেশি Salary থাকা Employee-ও Count করুন।"
      },

      {
        title: "Mission 3 — Attendance Detective 🕵️",

        story:
          "HR Manager আজ জানতে চান কতজন Employee Present এবং কতজন Absent।",

        instruction:
          "COUNTIF ব্যবহার করে Status অনুযায়ী Employee Count করুন।",

        tasks: [
          '=COUNTIF(E2:E9,"Present") Formula লিখুন।',
          '=COUNTIF(E2:E9,"Absent") Formula লিখুন।',
          "Present Employee-এর সংখ্যা লিখে রাখুন।",
          "Absent Employee-এর সংখ্যা লিখে রাখুন।"
        ],

        challenge:
          "আগামীকাল Data পরিবর্তন করলে Formula নিজে নিজে নতুন Count দেখাবে কিনা পরীক্ষা করুন।"
      },

      {
        title: "Bonus Mission — Data Detective 🔎",

        story:
          "এবার Manager আপনাকে বিভিন্ন প্রশ্ন করবেন। উত্তর Formula দিয়ে বের করতে হবে।",

        instruction:
          "COUNT, COUNTA এবং COUNTIF—তিনটি Function ব্যবহার করে Data বিশ্লেষণ করুন।",

        tasks: [
          "Employee ID-এর Number Count করুন।",
          "Employee Name-এর Non-empty Cell Count করুন।",
          "৩০,০০০-এর বেশি Salary Count করুন।",
          "Present Employee Count করুন।",
          "Absent Employee Count করুন।"
        ],

        challenge:
          "Manager-এর পাঁচটি প্রশ্নের উত্তর Calculator ছাড়া Excel দিয়ে বের করুন।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "COUNT শুধু Number Cell গণনা করে।",
    "COUNTA খালি নয় এমন Cell গণনা করে।",
    "COUNTIF নির্দিষ্ট শর্ত অনুযায়ী Data গণনা করে।",
    "Criteria দিয়ে COUNTIF-কে কী খুঁজতে হবে তা বলা হয়।",
    "Range হলো যে Cell-এর মধ্যে Excel Data খুঁজবে।",
    "COUNT Family Function অফিসের Data Analysis-এ খুব কাজে লাগে।"
  ],

  quiz: [
    {
      question: "শুধু Number গণনা করতে কোন Function ব্যবহার হয়?",

      options: [
        "COUNT",
        "COUNTA",
        "COUNTIF",
        "SUM"
      ],

      answer: 0
    },

    {
      question: "খালি নয় এমন সব Cell গণনা করতে কোন Function ব্যবহার হয়?",

      options: [
        "COUNT",
        "COUNTA",
        "COUNTIF",
        "AVERAGE"
      ],

      answer: 1
    },

    {
      question: "শর্ত অনুযায়ী Data Count করতে কোন Function ব্যবহার হয়?",

      options: [
        "SUM",
        "COUNT",
        "COUNTIF",
        "MAX"
      ],

      answer: 2
    },

    {
      question: 'COUNTIF(A1:A20,">50") কী করবে?',

      options: [
        "৫০-এর কম Value Count করবে",
        "৫০-এর বেশি Value Count করবে",
        "সব Value যোগ করবে",
        "Average বের করবে"
      ],

      answer: 1
    },

    {
      question: "Employee Status-এর মধ্যে শুধু Present Count করতে কোনটি ব্যবহার করা যায়?",

      options: [
        '=COUNTIF(A1:A20,"Present")',
        "=SUM(A1:A20)",
        "=MAX(A1:A20)",
        "=AVERAGE(A1:A20)"
      ],

      answer: 0
    }
  ]
},

// ==========================
// Lesson 7
// ==========================

{
  id: 7,

  category: "intermediate",

  level: "Intermediate",

  title: "LEFT, RIGHT, MID ও LEN",

  description:
    "লেখা বা Code-এর বাম, ডান ও মাঝখান থেকে প্রয়োজনীয় অংশ বের করা শিখুন।",

  duration: "২৮ মিনিট",

  introduction:
    "অফিসের Excel-এ অনেক সময় পুরো Data দরকার হয় না—শুধু Data-এর একটি নির্দিষ্ট অংশ দরকার হয়। যেমন EMP-2026-SLS-001 থেকে শুধু SLS বের করা, একটি Invoice Number থেকে Year বের করা, অথবা একটি ID-এর শেষ চারটি সংখ্যা বের করা। LEFT, RIGHT, MID এবং LEN Function দিয়ে এই কাজগুলো খুব সহজে করা যায়।",

  theory: [
    "Text Function কী?",
    "LEFT Function",
    "RIGHT Function",
    "MID Function",
    "LEN Function",
    "Character কী?",
    "Starting Position",
    "Number of Characters",
    "Text-এর নির্দিষ্ট অংশ বের করা",
    "Employee ID থেকে Department Code বের করা",
    "Invoice Number থেকে Year বের করা"
  ],

  screenshots: [
    {
      title: "Text Function",
      image: "/images/lesson7/left.png",
      description:
        "LEFT, RIGHT, MID এবং LEN Function ব্যবহার করে Text থেকে প্রয়োজনীয় অংশ বের করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "LEFT — বাম দিকের অংশ",
      syntax: "=LEFT(A1,3)",
      explanation:
        "Text-এর বাম দিক থেকে নির্দিষ্ট সংখ্যক Character বের করে।",

      example:
        '=LEFT("EMP-2026",3)'
    },

    {
      name: "RIGHT — ডান দিকের অংশ",
      syntax: "=RIGHT(A1,4)",
      explanation:
        "Text-এর ডান দিক থেকে নির্দিষ্ট সংখ্যক Character বের করে।",

      example:
        '=RIGHT("EMP-2026",4)'
    },

    {
      name: "MID — মাঝখানের অংশ",
      syntax: "=MID(A1,5,4)",
      explanation:
        "Text-এর নির্দিষ্ট Position থেকে নির্দিষ্ট সংখ্যক Character বের করে।",

      example:
        '=MID("EMP-2026-SLS",5,4)'
    },

    {
      name: "LEN — মোট Character",
      syntax: "=LEN(A1)",
      explanation:
        "একটি Text-এর মোট Character সংখ্যা গণনা করে।",

      example:
        '=LEN("EMP-2026")'
    }
  ],

  examples: [
    "🪪 Employee ID — EMP-2026-SLS-001 থেকে Department Code বের করা।",
    "🧾 Invoice Number — INV-2026-0056 থেকে Year বা শেষের Number বের করা।",
    "📱 Phone Number — একটি Phone Number-এর শেষ চারটি Digit বের করা।",
    "📦 Product Code — Product Code-এর নির্দিষ্ট অংশ আলাদা করা।"
  ],

  questions: [
    {
      question: "LEFT Function কী করে?",
      answer:
        "Text-এর বাম দিক থেকে নির্দিষ্ট সংখ্যক Character বের করে।"
    },

    {
      question: "RIGHT Function কী করে?",
      answer:
        "Text-এর ডান দিক থেকে নির্দিষ্ট সংখ্যক Character বের করে।"
    },

    {
      question: "MID Function কী করে?",
      answer:
        "Text-এর নির্দিষ্ট Position থেকে নির্দিষ্ট সংখ্যক Character বের করে।"
    },

    {
      question: "LEN Function কী করে?",
      answer:
        "একটি Text-এর মোট Character সংখ্যা গণনা করে।"
    },

    {
      question: "MID Function-এ Position কেন দরকার?",
      answer:
        "Text-এর কোন জায়গা থেকে Character নেওয়া হবে তা নির্ধারণ করার জন্য Position ব্যবহার করা হয়।"
    },

    {
      question: "Employee ID-এর শেষ চারটি Character বের করতে কোন Function ব্যবহার করা যায়?",
      answer:
        "RIGHT Function ব্যবহার করা যায়।"
    }
  ],

  tips: [
    "বাম দিক থেকে Data নিতে LEFT ব্যবহার করুন।",
    "ডান দিক থেকে Data নিতে RIGHT ব্যবহার করুন।",
    "মাঝখান থেকে Data নিতে MID ব্যবহার করুন।",
    "Text কত Character-এর তা জানতে LEN ব্যবহার করুন।",
    "MID ব্যবহার করার সময় Starting Position ঠিকভাবে গুনে নিন।",
    "Formula লেখার আগে Sample Data দিয়ে ছোট করে Practice করুন।"
  ],

  practice: [
    '=LEFT("EMP-2026",3) ব্যবহার করুন।',
    '=RIGHT("EMP-2026",4) ব্যবহার করুন।',
    '=MID("EMP-2026-SLS",5,4) ব্যবহার করুন।',
    '=LEN("EMP-2026") ব্যবহার করে Character Count করুন।',
    "Employee ID থেকে Department Code বের করুন।",
    "Invoice Number থেকে Year বের করুন।"
  ],

  practiceData: {
    title: "Employee ID Detective 🕵️",

    description:
      "আপনি একটি কোম্পানির HR Data Analyst। Employee ID-এর মধ্যে Employee Code, Year এবং Department Code লুকানো আছে। Excel Function ব্যবহার করে প্রয়োজনীয় অংশ বের করুন।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Year",
      "Code"
    ],

    rows: [
      ["EMP-2026-SLS-001", "রাকিব", "Sales", "", ""],
      ["EMP-2026-HR-002", "সুমাইয়া", "HR", "", ""],
      ["EMP-2026-ACC-003", "নাঈম", "Accounts", "", ""],
      ["EMP-2026-IT-004", "মাহি", "IT", "", ""],
      ["EMP-2026-MKT-005", "তানভীর", "Marketing", "", ""],
      ["EMP-2026-ADM-006", "সাদিয়া", "Admin", "", ""]
    ],

    missions: [
      {
        title: "Mission 1 — LEFT Detective 🔎",

        story:
          "প্রতিটি Employee ID-এর শুরুতে EMP লেখা আছে। HR Manager জানতে চান সব ID কি একই Employee Code দিয়ে শুরু হয়েছে।",

        instruction:
          "LEFT Function ব্যবহার করে Employee ID-এর প্রথম 3টি Character বের করুন।",

        tasks: [
          "প্রথম Employee ID-এর Result Cell নির্বাচন করুন।",
          '=LEFT(A2,3) Formula লিখুন।',
          "Enter চাপুন।",
          "Result EMP এসেছে কিনা দেখুন।",
          "Formula অন্য Employee-দের জন্যও ব্যবহার করুন।"
        ],

        challenge:
          "সব Employee ID-এর শুরুতে একই Code আছে কিনা Excel দিয়ে দ্রুত যাচাই করুন।"
      },

      {
        title: "Mission 2 — RIGHT Detective 🎯",

        story:
          "Employee ID-এর শেষে প্রতিটি Employee-এর Unique Number আছে। Manager শুধু সেই শেষের Numberগুলো দেখতে চান।",

        instruction:
          "RIGHT Function ব্যবহার করে Employee ID-এর শেষ 3টি Character বের করুন।",

        tasks: [
          "প্রথম Employee ID নির্বাচন করুন।",
          '=RIGHT(A2,3) Formula লিখুন।',
          "Enter চাপুন।",
          "001 Result এসেছে কিনা দেখুন।",
          "Formula নিচের Row-গুলোতেও ব্যবহার করুন।"
        ],

        challenge:
          "পুরো Employee List থেকে শুধু Unique Employee Number বের করুন।"
      },

      {
        title: "Mission 3 — MID Detective 🧩",

        story:
          "Employee ID-এর মাঝখানে Department Code আছে। যেমন EMP-2026-SLS-001-এর মধ্যে SLS হলো Sales Department-এর Code।",

        instruction:
          "MID Function ব্যবহার করে Employee ID থেকে Department Code বের করুন।",

        tasks: [
          "প্রথম Employee ID নির্বাচন করুন।",
          '=MID(A2,10,3) Formula লিখুন।',
          "Enter চাপুন।",
          "SLS Result এসেছে কিনা দেখুন।",
          "Formula অন্য Employee-দের জন্যও ব্যবহার করুন।"
        ],

        challenge:
          "সব Employee-এর Department Code একসাথে বের করতে পারবেন?"
      },

      {
        title: "Bonus Mission — LEN Master 📏",

        story:
          "একটি Data Entry Team জানতে চায় Employee ID-গুলোর Character Length একই কিনা।",

        instruction:
          "LEN Function ব্যবহার করে Employee ID-এর Character Count বের করুন।",

        tasks: [
          "Employee ID-এর পাশে একটি নতুন Column তৈরি করুন।",
          '=LEN(A2) Formula লিখুন।',
          "Enter চাপুন।",
          "Result দেখুন।",
          "সব Employee ID-এর Length Compare করুন।"
        ],

        challenge:
          "কোনো Employee ID ভুলভাবে ছোট বা বড় হলে LEN দিয়ে তা ধরতে পারবেন?"
      }
    ]
  },

  pdf: "#",

  summary: [
    "LEFT Text-এর বাম দিক থেকে Character বের করে।",
    "RIGHT Text-এর ডান দিক থেকে Character বের করে।",
    "MID Text-এর মাঝখান বা নির্দিষ্ট Position থেকে Character বের করে।",
    "LEN একটি Text-এর মোট Character সংখ্যা গণনা করে।",
    "MID ব্যবহার করার সময় Starting Position ও Character সংখ্যা ঠিকভাবে দিতে হয়।",
    "Employee ID, Invoice Number ও Product Code বিশ্লেষণে এই Functionগুলো খুব কাজে লাগে।"
  ],

  quiz: [
    {
      question: "Text-এর বাম দিক থেকে Character বের করতে কোন Function ব্যবহার হয়?",

      options: [
        "LEFT",
        "RIGHT",
        "MID",
        "LEN"
      ],

      answer: 0
    },

    {
      question: "Text-এর ডান দিক থেকে Character বের করতে কোন Function ব্যবহার হয়?",

      options: [
        "LEFT",
        "RIGHT",
        "MID",
        "LEN"
      ],

      answer: 1
    },

    {
      question: "Text-এর মাঝখান থেকে নির্দিষ্ট অংশ বের করতে কোন Function ব্যবহার হয়?",

      options: [
        "LEFT",
        "RIGHT",
        "MID",
        "LEN"
      ],

      answer: 2
    },

    {
      question: "Text-এর মোট Character সংখ্যা জানতে কোন Function ব্যবহার হয়?",

      options: [
        "LEFT",
        "RIGHT",
        "MID",
        "LEN"
      ],

      answer: 3
    },

    {
      question: '=RIGHT("EMP-2026",4) কী Result দেবে?',

      options: [
        "EMP",
        "2026",
        "EMP-",
        "202"
      ],

      answer: 1
    }
  ]
},


// ==========================
// Lesson 8
// ==========================

{
  id: 8,

  category: "intermediate",

  level: "Intermediate",

  title: "DATE ও TIME Function",

  description:
    "তারিখ ও সময় নিয়ে কাজ করা, বর্তমান Date বের করা এবং Date থেকে Year, Month ও Day আলাদা করা শিখুন।",

  duration: "২৮ মিনিট",

  introduction:
    "অফিসে Joining Date, Invoice Date, Delivery Date, Payment Date—এ ধরনের তথ্য প্রতিদিন ব্যবহার হয়। Excel-এ Date ঠিকভাবে ব্যবহার করতে পারলে অনেক কাজ সহজ হয়ে যায়। আজ আমরা TODAY, NOW, DATE, YEAR, MONTH ও DAY দিয়ে বাস্তব অফিসের কাজ করব।",

  theory: [
    "Excel Date কী?",
    "TODAY Function",
    "NOW Function",
    "DATE Function",
    "YEAR Function",
    "MONTH Function",
    "DAY Function",
    "Date থেকে Year বের করা",
    "Date থেকে Month বের করা",
    "Date থেকে Day বের করা",
    "Current Date",
    "Current Date ও Time"
  ],

  screenshots: [
    {
      title: "DATE & TIME Function",
      image: "/images/lesson8/date.png",
      description:
        "Excel-এ Date ও Time Function ব্যবহার করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "TODAY — আজকের তারিখ",
      syntax: "=TODAY()",
      explanation:
        "কম্পিউটারের বর্তমান Date অনুযায়ী আজকের তারিখ দেখায়।",

      example:
        "=TODAY()"
    },

    {
      name: "NOW — তারিখ ও সময়",
      syntax: "=NOW()",
      explanation:
        "বর্তমান Date এবং Time একসাথে দেখায়।",

      example:
        "=NOW()"
    },

    {
      name: "DATE — নির্দিষ্ট Date তৈরি",
      syntax: "=DATE(2026,8,9)",
      explanation:
        "Year, Month এবং Day ব্যবহার করে একটি নির্দিষ্ট Date তৈরি করে।",

      example:
        "=DATE(2026,8,9)"
    },

    {
      name: "YEAR — Year বের করা",
      syntax: "=YEAR(A2)",
      explanation:
        "একটি Date থেকে শুধু Year বের করে।",

      example:
        "=YEAR(A2)"
    },

    {
      name: "MONTH — Month বের করা",
      syntax: "=MONTH(A2)",
      explanation:
        "একটি Date থেকে Month-এর Number বের করে।",

      example:
        "=MONTH(A2)"
    },

    {
      name: "DAY — Day বের করা",
      syntax: "=DAY(A2)",
      explanation:
        "একটি Date থেকে Day-এর Number বের করে।",

      example:
        "=DAY(A2)"
    }
  ],

  examples: [
    "👨‍💼 Employee Joining Date — Employee কবে কোম্পানিতে Join করেছে তা বিশ্লেষণ করা।",
    "🧾 Invoice Date — Invoice তৈরি হওয়ার তারিখ থেকে Year ও Month বের করা।",
    "📦 Delivery Date — কোন মাসে কতগুলো Delivery হয়েছে তা বিশ্লেষণ করা।",
    "💰 Payment Date — Payment-এর Date থেকে Year ও Month আলাদা করা।"
  ],

  questions: [
    {
      question: "TODAY Function কী করে?",
      answer:
        "বর্তমান তারিখ দেখায়।"
    },

    {
      question: "NOW Function কী করে?",
      answer:
        "বর্তমান তারিখ এবং সময় দেখায়।"
    },

    {
      question: "DATE Function কী করে?",
      answer:
        "Year, Month এবং Day ব্যবহার করে একটি নির্দিষ্ট Date তৈরি করে।"
    },

    {
      question: "YEAR Function কী করে?",
      answer:
        "একটি Date থেকে Year বের করে।"
    },

    {
      question: "MONTH Function কী করে?",
      answer:
        "একটি Date থেকে Month-এর Number বের করে।"
    },

    {
      question: "DAY Function কী করে?",
      answer:
        "একটি Date থেকে Day-এর Number বের করে।"
    }
  ],

  tips: [
    "আজকের Date দরকার হলে TODAY() ব্যবহার করুন।",
    "Date-এর সাথে বর্তমান Time-ও দরকার হলে NOW() ব্যবহার করুন।",
    "DATE Function-এ Year, Month এবং Day-এর ক্রম ঠিক রাখুন।",
    "YEAR, MONTH ও DAY দিয়ে একটি Date-এর অংশ আলাদা করা যায়।",
    "Date Data-কে Text হিসেবে না রেখে Excel Date হিসেবে রাখার চেষ্টা করুন।",
    "একই Workbook-এ Date Format consistent রাখুন।"
  ],

  practice: [
    "=TODAY() লিখে আজকের Date দেখুন।",
    "=NOW() লিখে বর্তমান Date ও Time দেখুন।",
    "=DATE(2026,8,9) দিয়ে একটি Date তৈরি করুন।",
    "Joining Date থেকে Year বের করুন।",
    "Invoice Date থেকে Month বের করুন।",
    "Delivery Date থেকে Day বের করুন।"
  ],

  practiceData: {
    title: "Office Date Detective 📅",

    description:
      "আপনি একটি কোম্পানির HR ও Accounts Team-এর Data Assistant। আপনাকে Employee Joining Date এবং Invoice Date বিশ্লেষণ করে Year, Month ও Day বের করতে হবে।",

    headers: [
      "Employee ID",
      "Name",
      "Joining Date",
      "Invoice Date",
      "Year",
      "Month",
      "Day"
    ],

    rows: [
      ["EMP-001", "রাকিব", "2022-01-15", "2026-08-01", "", "", ""],
      ["EMP-002", "সুমাইয়া", "2023-03-22", "2026-08-03", "", "", ""],
      ["EMP-003", "নাঈম", "2021-07-10", "2026-08-04", "", "", ""],
      ["EMP-004", "মাহি", "2024-11-05", "2026-08-06", "", "", ""],
      ["EMP-005", "তানভীর", "2020-09-18", "2026-08-08", "", "", ""],
      ["EMP-006", "সাদিয়া", "2025-02-12", "2026-08-09", "", "", ""]
    ],

    missions: [
      {
        title: "Mission 1 — Today's Date 📅",

        story:
          "অফিসের Manager আজকের তারিখ জানতে চান। প্রতিদিন Date হাতে লিখে দেওয়া যাবে না—Excel-কে কাজটি করতে দিতে হবে।",

        instruction:
          "TODAY Function ব্যবহার করে বর্তমান তারিখ দেখান।",

        tasks: [
          "একটি নতুন Cell নির্বাচন করুন।",
          "=TODAY() Formula লিখুন।",
          "Enter চাপুন।",
          "আজকের Date এসেছে কিনা দেখুন।",
          "আগামীকাল Workbook খুললে Date পরিবর্তন হবে কিনা ভাবুন।"
        ],

        challenge:
          "Excel-কে এমনভাবে সেট করুন যেন প্রতিবার Workbook খুললে বর্তমান Date পাওয়া যায়।"
      },

      {
        title: "Mission 2 — Joining Year Detective 🔎",

        story:
          "HR Manager শুধু জানতে চান কোন Employee কোন বছরে কোম্পানিতে Join করেছে। পুরো Date দরকার নেই।",

        instruction:
          "YEAR Function ব্যবহার করে Joining Date থেকে Year বের করুন।",

        tasks: [
          "প্রথম Employee-এর Joining Date Cell নির্বাচন করুন।",
          "=YEAR(C2) Formula লিখুন।",
          "Enter চাপুন।",
          "Result হিসেবে Year এসেছে কিনা দেখুন।",
          "Formula নিচের Employee-দের জন্যও ব্যবহার করুন।"
        ],

        challenge:
          "সব Employee-এর Joining Year একসাথে বের করুন।"
      },

      {
        title: "Mission 3 — Invoice Month Detective 🧾",

        story:
          "Accounts Manager জানতে চান Invoice কোন Month-এ তৈরি হয়েছে।",

        instruction:
          "MONTH Function ব্যবহার করে Invoice Date থেকে Month Number বের করুন।",

        tasks: [
          "প্রথম Invoice Date নির্বাচন করুন।",
          "=MONTH(D2) Formula লিখুন।",
          "Enter চাপুন।",
          "Month Number এসেছে কিনা দেখুন।",
          "সব Invoice-এর Month বের করুন।"
        ],

        challenge:
          "কোন Invoice August Month-এর তা Formula দিয়ে শনাক্ত করার চেষ্টা করুন।"
      },

      {
        title: "Bonus Mission — Date Detective 🕵️",

        story:
          "Manager একটি নির্দিষ্ট Date দিয়েছেন। এখন সেই Date-এর Year, Month এবং Day আলাদা করে দেখাতে হবে।",

        instruction:
          "YEAR, MONTH এবং DAY—তিনটি Function ব্যবহার করুন।",

        tasks: [
          "একটি Date Cell নির্বাচন করুন।",
          "=YEAR(A2) দিয়ে Year বের করুন।",
          "=MONTH(A2) দিয়ে Month বের করুন।",
          "=DAY(A2) দিয়ে Day বের করুন।",
          "তিনটি Result Compare করুন।"
        ],

        challenge:
          "একটি Date থেকে তিনটি আলাদা তথ্য বের করে Manager-কে দেখান।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "TODAY() বর্তমান Date দেখায়।",
    "NOW() বর্তমান Date ও Time দেখায়।",
    "DATE() দিয়ে নির্দিষ্ট Date তৈরি করা যায়।",
    "YEAR() একটি Date থেকে Year বের করে।",
    "MONTH() একটি Date থেকে Month Number বের করে।",
    "DAY() একটি Date থেকে Day Number বের করে।",
    "অফিসের HR, Accounts এবং Reporting কাজে Date Function খুব গুরুত্বপূর্ণ।"
  ],

  quiz: [
    {
      question: "বর্তমান Date দেখাতে কোন Function ব্যবহার হয়?",

      options: [
        "TODAY()",
        "NOW()",
        "DATE()",
        "YEAR()"
      ],

      answer: 0
    },

    {
      question: "বর্তমান Date ও Time একসাথে দেখাতে কোন Function ব্যবহার হয়?",

      options: [
        "TODAY()",
        "NOW()",
        "DATE()",
        "DAY()"
      ],

      answer: 1
    },

    {
      question: "Year, Month ও Day দিয়ে একটি নির্দিষ্ট Date তৈরি করতে কোন Function ব্যবহার হয়?",

      options: [
        "DATE()",
        "YEAR()",
        "MONTH()",
        "DAY()"
      ],

      answer: 0
    },

    {
      question: "একটি Date থেকে Year বের করতে কোন Function ব্যবহার হয়?",

      options: [
        "DAY()",
        "MONTH()",
        "YEAR()",
        "DATE()"
      ],

      answer: 2
    },

    {
      question: "একটি Date থেকে Month Number বের করতে কোন Function ব্যবহার হয়?",

      options: [
        "YEAR()",
        "MONTH()",
        "DAY()",
        "NOW()"
      ],

      answer: 1
    }
  ]
},

// ==========================
// Lesson 9
// ==========================

{
  id: 9,

  category: "intermediate",

  level: "Intermediate",

  title: "Sort ও Filter",

  description:
    "বড় Data থেকে দরকারি তথ্য খুঁজে বের করতে Sort ও Filter ব্যবহার করা শিখুন।",

  duration: "৩০ মিনিট",

  introduction:
    "ধরুন আপনার সামনে ৫০০ জন Employee-এর একটি Excel List। Manager বললেন—সবচেয়ে বেশি Salary কার, Sales Department-এর Employee কারা, অথবা শুধু Present Employee-দের দেখাও। পুরো List দেখে একজন একজন করে খুঁজে বের করা সময়ের অপচয়। Sort দিয়ে Data সুন্দরভাবে সাজানো যায় আর Filter দিয়ে দরকারি Data ছাড়া বাকিগুলো সাময়িকভাবে লুকিয়ে রাখা যায়।",

  theory: [
    "Sort কী?",
    "Ascending Sort",
    "Descending Sort",
    "Custom Sort",
    "Multiple Column Sort",
    "Filter কী?",
    "Text Filter",
    "Number Filter",
    "Multiple Filter",
    "Clear Filter",
    "Sort ও Filter-এর পার্থক্য",
    "Filtered Data ও Original Data"
  ],

  screenshots: [
    {
      title: "Sort & Filter",
      image: "/images/lesson9/filter.png",
      description:
        "Excel Data Sort ও Filter করে দ্রুত প্রয়োজনীয় তথ্য বের করার উদাহরণ।"
    }
  ],

  formulas: [],

  examples: [
    "💰 Salary Ranking — Employee-দের Salary বেশি থেকে কম সাজানো।",
    "🏢 Department Filter — শুধু Sales Department-এর Employee দেখা।",
    "👥 Attendance Filter — শুধু Present Employee-দের দেখা।",
    "🏆 Top Employee — Highest Salary বা Highest Sales বের করতে Sort ব্যবহার করা।"
  ],

  questions: [
    {
      question: "Sort কী?",
      answer:
        "Data-কে একটি নির্দিষ্ট ক্রমে সাজানোর Feature। যেমন ছোট থেকে বড় বা বড় থেকে ছোট।"
    },

    {
      question: "Ascending Sort কী?",
      answer:
        "Data-কে ছোট থেকে বড় অথবা A থেকে Z ক্রমে সাজানো।"
    },

    {
      question: "Descending Sort কী?",
      answer:
        "Data-কে বড় থেকে ছোট অথবা Z থেকে A ক্রমে সাজানো।"
    },

    {
      question: "Filter কী?",
      answer:
        "নির্দিষ্ট শর্ত অনুযায়ী দরকারি Data দেখানোর Feature।"
    },

    {
      question: "Sort এবং Filter-এর মধ্যে পার্থক্য কী?",
      answer:
        "Sort Data-এর ক্রম পরিবর্তন করে, আর Filter অপ্রয়োজনীয় Data সাময়িকভাবে লুকিয়ে শুধু দরকারি Data দেখায়।"
    },

    {
      question: "Filter করলে কি Data Delete হয়ে যায়?",
      answer:
        "না। Filter করা Data Delete হয় না। শুধু শর্তের সঙ্গে না মেলা Row সাময়িকভাবে লুকানো থাকে।"
    }
  ],

  tips: [
    "Data Sort করার আগে পুরো Table বা সঠিক Column নির্বাচন করুন।",
    "Header Row থাকলে Sort ও Filter করা অনেক সহজ হয়।",
    "Salary বেশি থেকে কম দেখতে Descending Sort ব্যবহার করুন।",
    "একটি নির্দিষ্ট Department দেখতে Filter ব্যবহার করুন।",
    "একাধিক শর্তে Data দেখতে Multiple Filter ব্যবহার করতে পারেন।",
    "কাজ শেষে Clear Filter করে পুরো Data আবার দেখুন।"
  ],

  practice: [
    "Employee Name A থেকে Z পর্যন্ত Sort করুন।",
    "Salary বড় থেকে ছোট Sort করুন।",
    "শুধু Sales Department Filter করুন।",
    "শুধু Present Employee Filter করুন।",
    "Salary ৩০,০০০ টাকার বেশি Employee Filter করুন।",
    "Department ও Status একসাথে Filter করুন।"
  ],

  practiceData: {
    title: "Employee Data Detective 🕵️",

    description:
      "আপনি একটি কোম্পানির HR Data Assistant। Manager আপনাকে Employee List দিয়েছেন। এখন বিভিন্ন প্রশ্নের উত্তর Sort ও Filter ব্যবহার করে বের করতে হবে।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Salary",
      "Status",
      "Sales"
    ],

    rows: [
      ["EMP-001", "রাকিব", "Sales", "28000", "Present", "45000"],
      ["EMP-002", "সুমাইয়া", "HR", "35000", "Present", "12000"],
      ["EMP-003", "নাঈম", "Accounts", "42000", "Absent", "18000"],
      ["EMP-004", "মাহি", "Sales", "50000", "Present", "78000"],
      ["EMP-005", "তানভীর", "Marketing", "32000", "Present", "56000"],
      ["EMP-006", "সাদিয়া", "IT", "48000", "Absent", "23000"],
      ["EMP-007", "আরিফ", "Sales", "39000", "Present", "65000"],
      ["EMP-008", "মিম", "HR", "30000", "Present", "15000"],
      ["EMP-009", "শাওন", "Sales", "45000", "Absent", "42000"],
      ["EMP-010", "লাবণ্য", "Marketing", "36000", "Present", "61000"]
    ],

    missions: [
      {
        title: "Mission 1 — Salary Detective 💰",

        story:
          "Manager জানতে চান কোম্পানির কোন Employee সবচেয়ে বেশি Salary পান।",

        instruction:
          "Salary Column-কে Descending Order-এ Sort করুন।",

        tasks: [
          "Employee Data Table নির্বাচন করুন।",
          "Salary Column-এর Sort Option খুলুন।",
          "Sort Largest to Smallest নির্বাচন করুন।",
          "সবচেয়ে বড় Salary-এর Employee-কে দেখুন।",
          "Top Employee-এর Name লিখে রাখুন।"
        ],

        challenge:
          "এবার Smallest to Largest করে দেখুন সবচেয়ে কম Salary কার।"
      },

      {
        title: "Mission 2 — Department Detective 🏢",

        story:
          "HR Manager শুধু Sales Department-এর Employee List দেখতে চান।",

        instruction:
          "Department Column-এ Filter ব্যবহার করুন।",

        tasks: [
          "Data Table-এ Filter চালু করুন।",
          "Department Filter খুলুন।",
          "Sales নির্বাচন করুন।",
          "শুধু Sales Employee-দের দেখুন।",
          "কতজন Sales Employee আছে তা গুনুন।"
        ],

        challenge:
          "Sales-এর পরিবর্তে HR নির্বাচন করে দেখুন HR Department-এ কারা আছেন।"
      },

      {
        title: "Mission 3 — Attendance Detective 🕵️",

        story:
          "HR Manager জানতে চান আজ কারা Present।",

        instruction:
          "Status Column ব্যবহার করে শুধু Present Employee দেখান।",

        tasks: [
          "Status Column-এর Filter খুলুন।",
          "শুধু Present নির্বাচন করুন।",
          "Filtered Employee List দেখুন।",
          "কতজন Present আছে তা গুনুন।",
          "তারপর Clear Filter করুন।"
        ],

        challenge:
          "এবার শুধু Absent Employee-দের Filter করে দেখুন।"
      },

      {
        title: "Bonus Mission — Data Detective 🔎",

        story:
          "Manager এবার একটু কঠিন প্রশ্ন করেছেন: Sales Department-এর মধ্যে কার Sales সবচেয়ে বেশি?",

        instruction:
          "Filter এবং Sort একসাথে ব্যবহার করুন।",

        tasks: [
          "Department Column-এ শুধু Sales Filter করুন।",
          "Sales Column-কে Largest to Smallest Sort করুন।",
          "সবচেয়ে উপরের Employee দেখুন।",
          "Employee-এর Name ও Sales Amount লিখে রাখুন।",
          "Clear Filter করে পুরো Data আবার দেখুন।"
        ],

        challenge:
          "Sales Department-এর মধ্যে Highest Sales Employee খুঁজে বের করুন। তারপর পুরো Company-র Highest Sales Employee-র সঙ্গে Compare করুন।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "Sort Data-কে নির্দিষ্ট ক্রমে সাজায়।",
    "Ascending মানে ছোট থেকে বড় বা A থেকে Z।",
    "Descending মানে বড় থেকে ছোট বা Z থেকে A।",
    "Filter নির্দিষ্ট শর্ত অনুযায়ী দরকারি Data দেখায়।",
    "Filter করা Data Delete হয় না—শুধু সাময়িকভাবে Hide থাকে।",
    "Multiple Filter ব্যবহার করে একাধিক শর্তে Data খুঁজে বের করা যায়।",
    "Clear Filter করলে আবার পুরো Data দেখা যায়।"
  ],

  quiz: [
    {
      question: "Data-কে ছোট থেকে বড় সাজাতে কোন Sort ব্যবহার হয়?",

      options: [
        "Ascending",
        "Descending",
        "Filter",
        "Custom Filter"
      ],

      answer: 0
    },

    {
      question: "Salary বড় থেকে ছোট সাজাতে কোনটি ব্যবহার করবেন?",

      options: [
        "Ascending",
        "Descending",
        "Filter",
        "Clear Filter"
      ],

      answer: 1
    },

    {
      question: "শুধু Sales Department-এর Employee দেখতে কোন Feature ব্যবহার করবেন?",

      options: [
        "Sort",
        "Filter",
        "Merge",
        "Wrap Text"
      ],

      answer: 1
    },

    {
      question: "Filter করলে কি অন্য Data Delete হয়ে যায়?",

      options: [
        "হ্যাঁ",
        "না",
        "শুধু Salary Delete হয়",
        "শুধু Name Delete হয়"
      ],

      answer: 1
    },

    {
      question: "Filter করা Data আবার পুরোপুরি দেখতে কী করতে হবে?",

      options: [
        "Delete Data",
        "Clear Filter",
        "Close Excel",
        "Merge Cells"
      ],

      answer: 1
    }
  ]
},

// ==========================
// Lesson 10
// ==========================

{
  id: 10,

  category: "intermediate",

  level: "Intermediate",

  title: "Conditional Formatting",

  description:
    "শর্ত অনুযায়ী Cell-এর রং, Data Bar এবং Highlight স্বয়ংক্রিয়ভাবে পরিবর্তন করা শিখুন।",

  duration: "৩০ মিনিট",

  introduction:
    "একটি বড় Excel Sheet-এ কোন Salary বেশি, কোন Result কম, কোন Employee-এর Performance ভালো অথবা কোন ID Duplicate—সবকিছু চোখে দেখে খুঁজে বের করা কঠিন। Conditional Formatting ব্যবহার করলে Excel নিজেই শর্ত অনুযায়ী Data Highlight করে দেয়। অর্থাৎ Data শুধু দেখা নয়, Data-কে দেখেই দ্রুত বুঝে ফেলা যায়।",

  theory: [
    "Conditional Formatting কী?",
    "Highlight Cell Rules",
    "Greater Than",
    "Less Than",
    "Equal To",
    "Between",
    "Duplicate Values",
    "Top/Bottom Rules",
    "Data Bar",
    "Color Scale",
    "Icon Set",
    "Rule Edit ও Clear"
  ],

  screenshots: [
    {
      title: "Conditional Formatting",
      image: "/images/lesson10/conditional.png",
      description:
        "শর্ত অনুযায়ী Excel Data Highlight করার উদাহরণ।"
    }
  ],

  formulas: [],

  examples: [
    "💰 Salary Highlight — ৪০,০০০ টাকার বেশি Salary সবুজ করে দেখানো।",
    "📊 Performance — কম Performance আলাদা Color দিয়ে Highlight করা।",
    "🆔 Duplicate ID — একই Employee ID একাধিকবার থাকলে তা শনাক্ত করা।",
    "🏆 Top Sales — সবচেয়ে বেশি Sales করা Employee-দের Highlight করা।"
  ],

  questions: [
    {
      question: "Conditional Formatting কী?",
      answer:
        "নির্দিষ্ট শর্ত পূরণ হলে Excel স্বয়ংক্রিয়ভাবে Cell-এর Format পরিবর্তন করে।"
    },

    {
      question: "Conditional Formatting কেন ব্যবহার করা হয়?",
      answer:
        "গুরুত্বপূর্ণ বা নির্দিষ্ট Data দ্রুত চোখে পড়ার জন্য।"
    },

    {
      question: "৮০-এর বেশি Number Highlight করতে কোন Rule ব্যবহার করা যায়?",
      answer:
        "Greater Than Rule ব্যবহার করা যায়।"
    },

    {
      question: "Duplicate Data কীভাবে সহজে শনাক্ত করা যায়?",
      answer:
        "Conditional Formatting-এর Duplicate Values Rule ব্যবহার করে।"
    },

    {
      question: "Data Bar কী?",
      answer:
        "Cell-এর Value অনুযায়ী একটি Bar দেখিয়ে Data-এর তুলনা সহজ করে।"
    },

    {
      question: "Color Scale কী?",
      answer:
        "Value-এর পার্থক্য অনুযায়ী বিভিন্ন Color ব্যবহার করে Data-এর অবস্থান বোঝায়।"
    }
  ],

  tips: [
    "একই Data-তে অতিরিক্ত অনেক Rule ব্যবহার করবেন না।",
    "গুরুত্বপূর্ণ Data Highlight করার জন্য সহজ Color ব্যবহার করুন।",
    "Positive ও Negative Data আলাদা করতে Green ও Red ব্যবহার করা যেতে পারে।",
    "Duplicate Data খুঁজতে Duplicate Values Rule খুব কার্যকর।",
    "অনেকগুলো Number তুলনা করতে Data Bar ব্যবহার করুন।",
    "Rule তৈরি করার পর Data পরিবর্তন করে দেখুন Formatting নিজে নিজে পরিবর্তন হয় কিনা।"
  ],

  practice: [
    "৪০,০০০ টাকার বেশি Salary Green Highlight করুন।",
    "৩০,০০০ টাকার নিচে Salary Red Highlight করুন।",
    "Duplicate Employee ID Highlight করুন।",
    "Sales Column-এ Data Bar যোগ করুন।",
    "Performance Score-এ Color Scale ব্যবহার করুন।",
    "Top 3 Sales Employee Highlight করুন।"
  ],

  practiceData: {
    title: "Performance Detective 🔎",

    description:
      "আপনি একটি কোম্পানির HR Data Assistant। Manager চান Employee Data এমনভাবে সাজানো থাকুক যাতে ভালো, কম এবং Duplicate Data এক নজরেই বোঝা যায়। Conditional Formatting ব্যবহার করে Data Highlight করুন।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Salary",
      "Sales",
      "Performance"
    ],

    rows: [
      ["EMP-001", "রাকিব", "Sales", "28000", "45000", "72"],
      ["EMP-002", "সুমাইয়া", "HR", "35000", "12000", "88"],
      ["EMP-003", "নাঈম", "Accounts", "42000", "18000", "65"],
      ["EMP-004", "মাহি", "Sales", "50000", "78000", "95"],
      ["EMP-005", "তানভীর", "Marketing", "32000", "56000", "81"],
      ["EMP-006", "সাদিয়া", "IT", "48000", "23000", "58"],
      ["EMP-007", "আরিফ", "Sales", "39000", "65000", "91"],
      ["EMP-008", "মিম", "HR", "30000", "15000", "76"],
      ["EMP-004", "শাওন", "Sales", "45000", "42000", "69"],
      ["EMP-010", "লাবণ্য", "Marketing", "36000", "61000", "86"]
    ],

    missions: [
      {
        title: "Mission 1 — Salary Detective 💰",

        story:
          "HR Manager চান ৪০,০০০ টাকার বেশি Salary পাওয়া Employee-দের এক নজরে দেখা যাক।",

        instruction:
          "Salary Column-এ Greater Than Rule ব্যবহার করুন।",

        tasks: [
          "Salary Column নির্বাচন করুন।",
          "Conditional Formatting খুলুন।",
          "Highlight Cells Rules থেকে Greater Than নির্বাচন করুন।",
          "Value হিসেবে 40000 লিখুন।",
          "একটি Green Highlight Style নির্বাচন করুন।"
        ],

        challenge:
          "এবার ৩০,০০০ টাকার নিচের Salary-গুলো অন্য একটি Color দিয়ে Highlight করুন।"
      },

      {
        title: "Mission 2 — Duplicate Detective 🆔",

        story:
          "HR Team সন্দেহ করছে Employee List-এ কোনো Employee ID দুইবার Entry হয়েছে।",

        instruction:
          "Employee ID Column-এ Duplicate Values Rule ব্যবহার করুন।",

        tasks: [
          "Employee ID Column নির্বাচন করুন।",
          "Conditional Formatting খুলুন।",
          "Duplicate Values নির্বাচন করুন।",
          "একটি সহজ Highlight Color নির্বাচন করুন।",
          "Duplicate Employee ID খুঁজে বের করুন।"
        ],

        challenge:
          "Duplicate ID কেন সমস্যা তৈরি করতে পারে তা নিজের ভাষায় ব্যাখ্যা করুন।"
      },

      {
        title: "Mission 3 — Performance Detective 📊",

        story:
          "Manager চান Employee Performance Score দেখেই বোঝা যাক কে ভালো করছে এবং কার Performance কম।",

        instruction:
          "Performance Column-এ Color Scale ব্যবহার করুন।",

        tasks: [
          "Performance Column নির্বাচন করুন।",
          "Conditional Formatting খুলুন।",
          "Color Scales নির্বাচন করুন।",
          "একটি সহজ Color Scale নির্বাচন করুন।",
          "সবচেয়ে বেশি ও কম Score খুঁজে বের করুন।"
        ],

        challenge:
          "Performance Score দেখে Top Performer এবং Lowest Performer-এর নাম বের করুন।"
      },

      {
        title: "Bonus Mission — Sales Visualizer 📈",

        story:
          "Sales Manager চান Sales Number না পড়েও কোন Employee বেশি Sales করেছে তা বোঝা যাক।",

        instruction:
          "Sales Column-এ Data Bar ব্যবহার করুন।",

        tasks: [
          "Sales Column নির্বাচন করুন।",
          "Conditional Formatting খুলুন।",
          "Data Bars নির্বাচন করুন।",
          "একটি Bar Style নির্বাচন করুন।",
          "সবচেয়ে বড় Bar খুঁজে বের করুন।",
          "সবচেয়ে ছোট Bar খুঁজে বের করুন।"
        ],

        challenge:
          "Data Bar দেখে কোনো Formula ছাড়াই Highest Sales Employee শনাক্ত করুন।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "Conditional Formatting শর্ত অনুযায়ী Data Highlight করে।",
    "Greater Than ও Less Than দিয়ে নির্দিষ্ট Value Highlight করা যায়।",
    "Duplicate Values দিয়ে একই Data শনাক্ত করা যায়।",
    "Data Bar দিয়ে Number-এর তুলনা সহজ হয়।",
    "Color Scale দিয়ে বড় ও ছোট Value দ্রুত বোঝা যায়।",
    "Top/Bottom Rules দিয়ে সেরা বা কম Value Highlight করা যায়।",
    "সঠিকভাবে ব্যবহার করলে বড় Data Sheet অনেক সহজে বোঝা যায়।"
  ],

  quiz: [
    {
      question: "Conditional Formatting-এর প্রধান কাজ কী?",

      options: [
        "শর্ত অনুযায়ী Format পরিবর্তন করা",
        "Workbook Save করা",
        "Formula Delete করা",
        "Sheet Rename করা"
      ],

      answer: 0
    },

    {
      question: "৪০,০০০-এর বেশি Salary Highlight করতে কোন Rule ব্যবহার করা যায়?",

      options: [
        "Greater Than",
        "Less Than",
        "Duplicate Values",
        "Clear Rules"
      ],

      answer: 0
    },

    {
      question: "Duplicate Employee ID খুঁজতে কোন Feature ব্যবহার করা যায়?",

      options: [
        "Data Bar",
        "Color Scale",
        "Duplicate Values",
        "Freeze Panes"
      ],

      answer: 2
    },

    {
      question: "Number-এর তুলনা Visualভাবে দেখাতে কোনটি ভালো?",

      options: [
        "Data Bar",
        "Merge",
        "Wrap Text",
        "Border"
      ],

      answer: 0
    },

    {
      question: "বড় ও ছোট Value-এর পার্থক্য Color দিয়ে দেখাতে কোন Feature ব্যবহার করা যায়?",

      options: [
        "Color Scale",
        "Freeze Panes",
        "Filter",
        "Sort"
      ],

      answer: 0
    }
  ]
},

// ==========================
// Lesson 11
// ==========================

{
  id: 11,

  category: "intermediate",

  level: "Intermediate",

  title: "Freeze Panes ও Excel Table",

  description:
    "বড় Data-তে Header স্থির রাখা এবং Data-কে Professional Table-এ সাজিয়ে সহজে Manage করা শিখুন।",

  duration: "৩০ মিনিট",

  introduction:
    "ধরুন আপনার Excel Sheet-এ ১,০০০ জন Employee-এর Data আছে। আপনি নিচে Scroll করতে করতে যখন ৫০০ নম্বর Row-তে গেলেন, তখন Header আর দেখা যাচ্ছে না। কোন Column-এ Name, Salary বা Department ছিল—মনে রাখা কঠিন। এখানেই Freeze Panes কাজে আসে। আর Data-কে Excel Table-এ পরিণত করলে Filter, Formatting এবং নতুন Row যোগ করা অনেক সহজ হয়ে যায়।",

  theory: [
    "Freeze Panes কী?",
    "Freeze Top Row",
    "Freeze First Column",
    "Freeze Multiple Rows",
    "Excel Table কী?",
    "Table তৈরি করা",
    "Table Header",
    "Table Style",
    "Filter Button",
    "Total Row",
    "Table-এ নতুন Data যোগ করা",
    "Structured Reference"
  ],

  screenshots: [
    {
      title: "Freeze Panes",
      image: "/images/lesson11/freeze.png",
      description:
        "Scroll করার সময় Header স্থির রাখার উদাহরণ।"
    },
    {
      title: "Excel Table",
      image: "/images/lesson11/table.png",
      description:
        "Data-কে Professional Excel Table-এ রূপান্তর করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "Excel Table Total Row — SUBTOTAL",

      syntax: "=SUBTOTAL(109,[Salary])",

      explanation:
        "Excel Table-এর Total Row চালু করলে Excel স্বয়ংক্রিয়ভাবে এই Formula দেয়। এখানে [Salary] হলো Table-এর Salary Column-এর Structured Reference, আর 109 মানে Filtered/Hidden Row বাদ দিয়ে যোগ (SUM)। ফলে Table-এর মোট Salary (Salary Total) সহজে পাওয়া যায়।",

      example:
        "=SUBTOTAL(109,[Salary])"
    }
  ],

  examples: [
    "👥 Employee Database — হাজার Row-এর Employee Data-তে Header সবসময় দেখা।",
    "💰 Salary Sheet — Salary Data-কে Table বানিয়ে Filter করা।",
    "📦 Inventory List — নতুন Product যোগ করলে Table স্বয়ংক্রিয়ভাবে Extend করা।",
    "📊 Sales Report — Table ব্যবহার করে Data Filter ও Manage করা।"
  ],

  questions: [
    {
      question: "Freeze Panes কী?",
      answer:
        "Scroll করার সময় নির্দিষ্ট Row বা Column স্থির রাখার Excel Feature।"
    },

    {
      question: "Freeze Top Row কেন ব্যবহার করা হয়?",
      answer:
        "নিচে Scroll করলেও Header Row যেন সবসময় দেখা যায়।"
    },

    {
      question: "Freeze First Column কখন কাজে লাগে?",
      answer:
        "অনেকগুলো Column থাকলে প্রথম Column-এর তথ্য সবসময় দেখতে।"
    },

    {
      question: "Excel Table কী?",
      answer:
        "Data Range-কে একটি Structured Table-এ রূপান্তর করার Excel Feature।"
    },

    {
      question: "Excel Table-এর সুবিধা কী?",
      answer:
        "Filter, Formatting, নতুন Data যোগ করা এবং Data Manage করা সহজ হয়।"
    },

    {
      question: "Table-এ নতুন Row যোগ করলে কী হয়?",
      answer:
        "সাধারণত Table স্বয়ংক্রিয়ভাবে নতুন Row-টিকে Table-এর অংশ করে নেয়।"
    }
  ],

  tips: [
    "বড় Data Sheet হলে Header স্থির রাখতে Freeze Top Row ব্যবহার করুন।",
    "অনেক Column থাকলে First Column Freeze করা উপকারী হতে পারে।",
    "বড় Data-কে Excel Table বানিয়ে কাজ করলে Manage করা সহজ হয়।",
    "Table-এর Header পরিষ্কার ও অর্থবহ রাখুন।",
    "একই Table-এ অপ্রয়োজনীয় Blank Row বা Column রাখবেন না।",
    "Table Style এমন রাখুন যাতে Data পড়তে সহজ হয়।"
  ],

  practice: [
    "Top Row Freeze করুন।",
    "First Column Freeze করুন।",
    "Employee Data-কে Excel Table-এ Convert করুন।",
    "Table Style পরিবর্তন করুন।",
    "Table Filter ব্যবহার করুন।",
    "Table-এর শেষে নতুন Employee যোগ করুন।",
    "Total Row চালু করে Salary Total দেখুন।"
  ],

  practiceData: {
    title: "Employee Database Manager 👨‍💼",

    description:
      "আপনি একটি কোম্পানির HR Data Manager। Employee Database বড় হয়ে গেছে। এখন Header সবসময় দেখা, Data Filter করা এবং নতুন Employee যোগ করা সহজ করতে Freeze Panes ও Excel Table ব্যবহার করুন।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Designation",
      "Salary",
      "Status"
    ],

    rows: [
      ["EMP-001", "রাকিব", "Sales", "Executive", "28000", "Active"],
      ["EMP-002", "সুমাইয়া", "HR", "Officer", "35000", "Active"],
      ["EMP-003", "নাঈম", "Accounts", "Executive", "42000", "Active"],
      ["EMP-004", "মাহি", "Sales", "Manager", "50000", "Active"],
      ["EMP-005", "তানভীর", "Marketing", "Executive", "32000", "Active"],
      ["EMP-006", "সাদিয়া", "IT", "Developer", "48000", "Active"],
      ["EMP-007", "আরিফ", "Sales", "Senior Executive", "39000", "Active"],
      ["EMP-008", "মিম", "HR", "Assistant", "30000", "Active"],
      ["EMP-009", "শাওন", "Sales", "Executive", "45000", "Inactive"],
      ["EMP-010", "লাবণ্য", "Marketing", "Officer", "36000", "Active"]
    ],

    missions: [
      {
        title: "Mission 1 — Header Saver 📌",

        story:
          "আপনার Employee Database-এ অনেক Row আছে। নিচে Scroll করলে Header হারিয়ে যাচ্ছে।",

        instruction:
          "Freeze Top Row ব্যবহার করে Header স্থির রাখুন।",

        tasks: [
          "Employee Data Sheet খুলুন।",
          "View Tab-এ যান।",
          "Freeze Panes নির্বাচন করুন।",
          "Freeze Top Row নির্বাচন করুন।",
          "নিচে Scroll করুন।",
          "Header এখনও দেখা যাচ্ছে কিনা পরীক্ষা করুন।"
        ],

        challenge:
          "যত নিচেই Scroll করুন, Employee ID, Name, Department ও Salary Header যেন দেখা যায়।"
      },

      {
        title: "Mission 2 — Table Master 🧩",

        story:
          "HR Manager চান Employee Database-টি সহজে Filter এবং Manage করা যায়।",

        instruction:
          "Employee Data-কে একটি Excel Table-এ Convert করুন।",

        tasks: [
          "পুরো Employee Data নির্বাচন করুন।",
          "Insert Tab-এ যান।",
          "Table নির্বাচন করুন।",
          "My Table Has Headers অপশন নিশ্চিত করুন।",
          "একটি Table Style নির্বাচন করুন।",
          "Table তৈরি হয়েছে কিনা পরীক্ষা করুন।"
        ],

        challenge:
          "Table Header-এর Filter Button ব্যবহার করে শুধু Sales Department দেখান।"
      },

      {
        title: "Mission 3 — New Employee 👤",

        story:
          "কোম্পানিতে নতুন একজন Employee Join করেছেন। তাকে Database-এ যোগ করতে হবে।",

        instruction:
          "Table-এর নিচে নতুন Employee যোগ করুন।",

        tasks: [
          "Table-এর শেষ Row-এ যান।",
          "নতুন Employee ID লিখুন।",
          "Name লিখুন।",
          "Department ও Designation লিখুন।",
          "Salary লিখুন।",
          "Status লিখুন।",
          "নতুন Row Table-এর অংশ হয়েছে কিনা পরীক্ষা করুন।"
        ],

        challenge:
          "নতুন Employee যোগ করার পর Filter খুলে দেখুন নতুন Employee-কে Filter করা যাচ্ছে কিনা।"
      },

      {
        title: "Bonus Mission — HR Database Pro 🏆",

        story:
          "Manager চান Active Employee-দের মধ্যে Sales Department-এর Employee-দের দেখতে এবং Salary Total জানতে।",

        instruction:
          "Table Filter এবং Total Row ব্যবহার করে Manager-এর প্রশ্নের উত্তর দিন।",

        tasks: [
          "Status থেকে শুধু Active নির্বাচন করুন।",
          "Department থেকে Sales নির্বাচন করুন।",
          "শুধু Sales-এর Active Employee দেখুন।",
          "Table-এর Total Row চালু করুন।",
          "Salary Column-এর Total দেখুন।"
        ],

        challenge:
          "Filter পরিবর্তন করে HR Department-এর Active Employee-দের Salary Total বের করুন।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "Freeze Panes Scroll করার সময় গুরুত্বপূর্ণ Row বা Column স্থির রাখে।",
    "Freeze Top Row Header সবসময় দৃশ্যমান রাখে।",
    "Freeze First Column প্রথম Column স্থির রাখতে সাহায্য করে।",
    "Excel Table Data-কে Structured ও Professionalভাবে Manage করতে সাহায্য করে।",
    "Table ব্যবহার করলে Filter ও Formatting সহজ হয়।",
    "Table-এর মধ্যে নতুন Data যোগ করা সহজ।",
    "Total Row ব্যবহার করে Table-এর Data দ্রুত Summarize করা যায়।"
  ],

  quiz: [
    {
      question: "Scroll করার সময় Header স্থির রাখতে কোন Feature ব্যবহার হয়?",

      options: [
        "Freeze Panes",
        "Conditional Formatting",
        "Data Validation",
        "Sort"
      ],

      answer: 0
    },

    {
      question: "শুধু Header Row স্থির রাখতে কোন Option ব্যবহার করা যায়?",

      options: [
        "Freeze First Column",
        "Freeze Top Row",
        "Split",
        "Wrap Text"
      ],

      answer: 1
    },

    {
      question: "Data-কে Structured Table বানাতে কোন Feature ব্যবহার হয়?",

      options: [
        "Excel Table",
        "Freeze Panes",
        "Merge Cells",
        "Conditional Formatting"
      ],

      answer: 0
    },

    {
      question: "Excel Table-এর একটি গুরুত্বপূর্ণ সুবিধা কোনটি?",

      options: [
        "Filter ও Data Management সহজ হয়",
        "Computer দ্রুত হয়",
        "File Automatically PDF হয়",
        "Formula বন্ধ হয়ে যায়"
      ],

      answer: 0
    },

    {
      question: "Table-এর Data-এর Total দেখাতে কোন Feature ব্যবহার করা যায়?",

      options: [
        "Total Row",
        "Freeze Row",
        "Wrap Text",
        "Merge"
      ],

      answer: 0
    }
  ]
},

// ==========================
// Lesson 12
// ==========================

{
  id: 12,

  category: "intermediate",

  level: "Intermediate",

  title: "Named Range",

  description:
    "Excel-এর Cell বা Data Range-কে সহজ একটি নাম দিয়ে Formula আরও পরিষ্কার ও সহজে ব্যবহার করা শিখুন।",

  duration: "২৮ মিনিট",

  introduction:
    "ধরুন একটি Sales Report-এ একই Data Range বারবার Formula-তে ব্যবহার করতে হচ্ছে। প্রতিবার B2:B100 বা C2:C100 লিখতে লিখতে Formula দেখতে কঠিন হয়ে যায়। Named Range ব্যবহার করলে এই Range-কে একটি সহজ নাম দিতে পারেন—যেমন SalesData বা SalaryList। এরপর Formula-তে সেই নাম ব্যবহার করলেই Excel বুঝে যাবে কোন Data নিয়ে কাজ করতে হবে।",

  theory: [
    "Named Range কী?",
    "Range-এর নাম দেওয়া",
    "Name Box",
    "Define Name",
    "Named Range ব্যবহার",
    "Formula-তে Named Range",
    "Named Range Edit করা",
    "Named Range Delete করা",
    "একাধিক Named Range",
    "Named Range-এর সুবিধা"
  ],

  screenshots: [
    {
      title: "Named Range",
      image: "/images/lesson12/named-range.png",
      description:
        "Excel Data Range-কে একটি সহজ নাম দেওয়ার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "SUM + Named Range",
      syntax: "=SUM(SalesData)",
      explanation:
        "SalesData নামে তৈরি করা Range-এর সব Number যোগ করে।",

      example:
        "=SUM(SalesData)"
    },

    {
      name: "AVERAGE + Named Range",
      syntax: "=AVERAGE(SalaryList)",
      explanation:
        "SalaryList নামে তৈরি করা Range-এর Average বের করে।",

      example:
        "=AVERAGE(SalaryList)"
    },

    {
      name: "MAX + Named Range",
      syntax: "=MAX(SalesData)",
      explanation:
        "Named Range-এর মধ্যে সবচেয়ে বড় Value বের করে।",

      example:
        "=MAX(SalesData)"
    }
  ],

  examples: [
    "💰 SalaryList — Employee Salary Range-এর নাম দিয়ে সহজে Average বা Maximum Salary বের করা।",
    "📊 SalesData — Monthly Sales Range-এর নাম দিয়ে Total Sales বের করা।",
    "📦 ProductStock — Product Stock Range-এর নাম দিয়ে Stock Data দ্রুত ব্যবহার করা।",
    "🎓 ResultMarks — Student Marks Range-এর নাম দিয়ে Average বা Highest Mark বের করা।"
  ],

  questions: [
    {
      question: "Named Range কী?",
      answer:
        "Excel-এর কোনো Cell বা Data Range-কে একটি সহজ ও অর্থপূর্ণ নাম দেওয়াকে Named Range বলে।"
    },

    {
      question: "Named Range কেন ব্যবহার করা হয়?",
      answer:
        "Formula সহজ, পরিষ্কার এবং মনে রাখা সহজ করার জন্য Named Range ব্যবহার করা হয়।"
    },

    {
      question: "Named Range তৈরি করার একটি সহজ উপায় কী?",
      answer:
        "Range নির্বাচন করে Name Box-এ একটি নাম লিখে Enter চাপা যায়।"
    },

    {
      question: "SalesData নামে একটি Range থাকলে Total Sales কীভাবে বের করবেন?",
      answer:
        "=SUM(SalesData) ব্যবহার করা যায়।"
    },

    {
      question: "Named Range-এর নাম কি Space দিয়ে লেখা যায়?",
      answer:
        "না। সাধারণত Named Range-এর নামের মধ্যে Space ব্যবহার করা যায় না।"
    },

    {
      question: "Named Range কি পরে পরিবর্তন করা যায়?",
      answer:
        "হ্যাঁ। Name Manager ব্যবহার করে Named Range Edit বা Delete করা যায়।"
    }
  ],

  tips: [
    "Named Range-এর নাম এমন দিন যাতে নাম দেখেই বোঝা যায় কোন Data বোঝানো হচ্ছে।",
    "SalesData, SalaryList বা ProductStock-এর মতো পরিষ্কার নাম ব্যবহার করুন।",
    "Named Range-এর নামের মধ্যে Space ব্যবহার করবেন না।",
    "একই Range-এর জন্য অপ্রয়োজনীয় অনেকগুলো নাম তৈরি করবেন না।",
    "Formula-তে Named Range ব্যবহার করলে Formula পড়া ও বোঝা সহজ হয়।",
    "নামের ক্ষেত্রে একই ধরনের Naming Style অনুসরণ করুন।"
  ],

  practice: [
    "Salary Column-এর Data-কে SalaryList নামে Named Range দিন।",
    "Sales Column-এর Data-কে SalesData নামে Named Range দিন।",
    "SalesData ব্যবহার করে Total Sales বের করুন।",
    "SalaryList ব্যবহার করে Average Salary বের করুন।",
    "SalesData ব্যবহার করে Highest Sales বের করুন।",
    "Name Manager খুলে Named Range Edit করুন।"
  ],

  practiceData: {
    title: "Range Naming Detective 🕵️",

    description:
      "আপনি একটি কোম্পানির Reporting Assistant। একই Data বারবার Formula-তে ব্যবহার করতে হচ্ছে। এবার Range-গুলোকে অর্থপূর্ণ নাম দিয়ে কাজ সহজ করুন।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Salary",
      "Sales"
    ],

    rows: [
      ["EMP-001", "রাকিব", "Sales", "28000", "45000"],
      ["EMP-002", "সুমাইয়া", "HR", "35000", "12000"],
      ["EMP-003", "নাঈম", "Accounts", "42000", "18000"],
      ["EMP-004", "মাহি", "Sales", "50000", "78000"],
      ["EMP-005", "তানভীর", "Marketing", "32000", "56000"],
      ["EMP-006", "সাদিয়া", "IT", "48000", "23000"],
      ["EMP-007", "আরিফ", "Sales", "39000", "65000"],
      ["EMP-008", "মিম", "HR", "30000", "15000"],
      ["EMP-009", "শাওন", "Sales", "45000", "42000"],
      ["EMP-010", "লাবণ্য", "Marketing", "36000", "61000"]
    ],

    missions: [
      {
        title: "Mission 1 — Salary Namer 💰",

        story:
          "HR Manager বারবার Salary Column নিয়ে কাজ করেন। প্রতিবার Cell Range লিখতে তার বিরক্ত লাগছে।",

        instruction:
          "Salary Data-কে SalaryList নামে Named Range তৈরি করুন।",

        tasks: [
          "শুধু Salary-এর Numberগুলো নির্বাচন করুন।",
          "Name Box খুঁজে বের করুন।",
          "Name Box-এ SalaryList লিখুন।",
          "Enter চাপুন।",
          "একটি নতুন Cell-এ =AVERAGE(SalaryList) লিখুন।",
          "Average Salary দেখুন।"
        ],

        challenge:
          "এবার =MAX(SalaryList) ব্যবহার করে Highest Salary বের করুন।"
      },

      {
        title: "Mission 2 — Sales Namer 📊",

        story:
          "Sales Manager প্রতিদিন Sales Data-এর Total বের করেন। এবার Formula-কে আরও সহজ করতে হবে।",

        instruction:
          "Sales Column-কে SalesData নামে Named Range দিন।",

        tasks: [
          "Sales-এর Numberগুলো নির্বাচন করুন।",
          "Name Box-এ SalesData লিখুন।",
          "Enter চাপুন।",
          "=SUM(SalesData) লিখুন।",
          "Total Sales দেখুন।"
        ],

        challenge:
          "এবার =MAX(SalesData) দিয়ে Highest Sales বের করুন।"
      },

      {
        title: "Mission 3 — Formula Detective 🔎",

        story:
          "আপনার সহকর্মী একটি Formula দেখেছেন: =SUM(SalesData)। তিনি বুঝতে পারছেন না SalesData কী।",

        instruction:
          "Named Range-এর আসল Data Range খুঁজে বের করুন।",

        tasks: [
          "Formulas ব্যবহার করা Cell নির্বাচন করুন।",
          "SalesData নামটি লক্ষ্য করুন।",
          "Name Box বা Name Manager ব্যবহার করুন।",
          "SalesData কোন Range-এর সঙ্গে যুক্ত তা দেখুন।",
          "Range-এর Data মিলিয়ে দেখুন।"
        ],

        challenge:
          "SalaryList এবং SalesData—দুটোর মধ্যে কোনটি কোন Column-এর সঙ্গে যুক্ত তা নিজে ব্যাখ্যা করুন।"
      },

      {
        title: "Bonus Mission — Reporting Pro 🏆",

        story:
          "Manager চান একটি ছোট Report যেখানে Salary এবং Sales-এর Total, Average এবং Highest Value থাকবে।",

        instruction:
          "Named Range ব্যবহার করে Report তৈরি করুন।",

        tasks: [
          "Salary Range-এর নাম SalaryList রাখুন।",
          "Sales Range-এর নাম SalesData রাখুন।",
          "=SUM(SalesData) দিয়ে Total Sales বের করুন।",
          "=AVERAGE(SalaryList) দিয়ে Average Salary বের করুন।",
          "=MAX(SalesData) দিয়ে Highest Sales বের করুন।",
          "=MAX(SalaryList) দিয়ে Highest Salary বের করুন।"
        ],

        challenge:
          "Formula-গুলোতে সরাসরি Cell Range না লিখে শুধু Named Range ব্যবহার করুন।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "Named Range কোনো Cell বা Data Range-কে একটি অর্থপূর্ণ নাম দেয়।",
    "Name Box ব্যবহার করে সহজে Named Range তৈরি করা যায়।",
    "Named Range Formula-কে ছোট ও সহজ করে।",
    "SUM, AVERAGE ও MAX-এর মতো Function-এর সঙ্গে Named Range ব্যবহার করা যায়।",
    "Named Range-এর নাম পরিষ্কার ও অর্থপূর্ণ হওয়া উচিত।",
    "Name Manager দিয়ে Named Range Edit বা Delete করা যায়।"
  ],

  quiz: [
    {
      question: "Named Range-এর প্রধান কাজ কী?",

      options: [
        "Data Range-এর একটি সহজ নাম দেওয়া",
        "Chart তৈরি করা",
        "Sheet Delete করা",
        "Workbook Print করা"
      ],

      answer: 0
    },

    {
      question: "Named Range তৈরি করার সহজ উপায় কোনটি?",

      options: [
        "Name Box ব্যবহার করা",
        "Print ব্যবহার করা",
        "Page Layout ব্যবহার করা",
        "Format Painter ব্যবহার করা"
      ],

      answer: 0
    },

    {
      question: "SalesData নামে Named Range থাকলে Total বের করার Formula কোনটি?",

      options: [
        "=SUM(SalesData)",
        "=TOTAL(SalesData)",
        "=ADD(SalesData)",
        "=COUNTALL(SalesData)"
      ],

      answer: 0
    },

    {
      question: "Named Range-এর নামের মধ্যে সাধারণত কী ব্যবহার করা যায় না?",

      options: [
        "Space",
        "Letter",
        "Number",
        "Underscore"
      ],

      answer: 0
    },

    {
      question: "Named Range Edit বা Delete করতে কোন Tool ব্যবহার করা যায়?",

      options: [
        "Name Manager",
        "Format Painter",
        "Page Break",
        "Spell Check"
      ],

      answer: 0
    }
  ]
},

// ==========================
// Lesson 13
// ==========================

{
  id: 13,

  category: "advanced",

  level: "Advanced",

  title: "VLOOKUP Function",

  description:
    "একটি Table থেকে Employee ID, Product Code বা Student ID ব্যবহার করে মুহূর্তেই তথ্য খুঁজে বের করা শিখুন।",

  duration: "৩৫ মিনিট",

  introduction:
    "ধরুন আপনার কাছে ১,০০০ জন Employee-এর Database আছে। Manager শুধু Employee ID দিলেন এবং বললেন—এই Employee-এর Name, Department ও Salary বের করো। পুরো Database ঘেঁটে খোঁজার দরকার নেই। VLOOKUP ব্যবহার করলে Excel নিজেই Table থেকে সঠিক তথ্য খুঁজে এনে দেবে। এই Lesson-এ আমরা VLOOKUP-কে বাস্তব Office Detective-এর মতো ব্যবহার করব।",

  theory: [
    "VLOOKUP কী?",
    "Lookup Value",
    "Table Array",
    "Column Index Number",
    "Range Lookup",
    "Exact Match",
    "Approximate Match",
    "FALSE কেন ব্যবহার করা হয়?",
    "Lookup Column",
    "VLOOKUP-এর সীমাবদ্ধতা"
  ],

  screenshots: [
    {
      title: "VLOOKUP Example",
      image: "/images/lesson13/vlookup.png",
      description:
        "Employee ID ব্যবহার করে Table থেকে Employee-এর তথ্য খুঁজে বের করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "VLOOKUP — Employee Name",
      syntax: "=VLOOKUP(A2,D2:G20,2,FALSE)",
      explanation:
        "Lookup Value অনুযায়ী Table থেকে নির্দিষ্ট Column-এর তথ্য ফিরিয়ে আনে।",

      example:
        "=VLOOKUP(H2,A2:D20,2,FALSE)"
    },

    {
      name: "VLOOKUP — Employee Salary",
      syntax: "=VLOOKUP(H2,A2:D20,4,FALSE)",
      explanation:
        "Employee ID ব্যবহার করে Table থেকে Salary বের করে।",

      example:
        "=VLOOKUP(H2,A2:D20,4,FALSE)"
    },

    {
      name: "VLOOKUP — Department",
      syntax: "=VLOOKUP(H2,A2:D20,3,FALSE)",
      explanation:
        "Employee ID ব্যবহার করে Employee-এর Department বের করে।",

      example:
        "=VLOOKUP(H2,A2:D20,3,FALSE)"
    }
  ],

  examples: [
    "👤 Employee ID → Employee Name",
    "🏢 Employee ID → Department",
    "💰 Employee ID → Salary",
    "📦 Product Code → Product Price",
    "🎓 Student ID → Student Result"
  ],

  questions: [
    {
      question: "VLOOKUP কী?",
      answer:
        "একটি Table-এর প্রথম Column-এ কোনো Value খুঁজে তার একই Row-এর অন্য Column থেকে তথ্য ফিরিয়ে আনার Function।"
    },

    {
      question: "VLOOKUP-এর V কী বোঝায়?",
      answer:
        "V মানে Vertical। অর্থাৎ VLOOKUP Verticalভাবে Data খোঁজে।"
    },

    {
      question: "Lookup Value কী?",
      answer:
        "যে Value ব্যবহার করে আমরা Table-এর মধ্যে তথ্য খুঁজতে চাই সেটিই Lookup Value।"
    },

    {
      question: "Table Array কী?",
      answer:
        "যে Data Range-এর মধ্যে VLOOKUP তথ্য খুঁজবে সেটিই Table Array।"
    },

    {
      question: "Column Index Number কী?",
      answer:
        "Table Array-এর কোন Column থেকে Result আনতে হবে সেই Column-এর অবস্থান।"
    },

    {
      question: "FALSE কেন ব্যবহার করা হয়?",
      answer:
        "Exact Match বা হুবহু মিল পাওয়ার জন্য FALSE ব্যবহার করা হয়।"
    },

    {
      question: "VLOOKUP-এ Lookup Column কোথায় থাকতে হয়?",
      answer:
        "Lookup Value যে Column-এ আছে সেটি Table Array-এর প্রথম Column হতে হয়।"
    }
  ],

  tips: [
    "Employee ID বা Product Code-এর মতো Unique Value Lookup Value হিসেবে ব্যবহার করুন।",
    "Exact Match দরকার হলে FALSE ব্যবহার করুন।",
    "Table Array-এর প্রথম Column-এ Lookup Value থাকতে হবে।",
    "Column Index Number সঠিকভাবে গুনে দিন।",
    "Table Array নির্বাচন করার সময় প্রয়োজনীয় সব Column অন্তর্ভুক্ত করুন।",
    "VLOOKUP-এর Result ভুল হলে প্রথমে Lookup Value ও Table Array পরীক্ষা করুন।"
  ],

  practice: [
    "Employee ID দিয়ে Employee Name বের করুন।",
    "Employee ID দিয়ে Department বের করুন।",
    "Employee ID দিয়ে Salary বের করুন।",
    "Product Code দিয়ে Product Price বের করুন।",
    "Student ID দিয়ে Result বের করুন।",
    "একটি ভুল ID দিয়ে VLOOKUP করে Result কী হয় দেখুন।"
  ],

  practiceData: {
    title: "Employee Lookup Detective 🕵️",

    description:
      "আপনি একটি কোম্পানির HR Assistant। Manager শুধু Employee ID দিচ্ছেন। আপনার কাজ হলো VLOOKUP ব্যবহার করে সেই Employee-এর Name, Department ও Salary খুঁজে বের করা।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Salary"
    ],

    rows: [
      ["EMP-001", "রাকিব", "Sales", "28000"],
      ["EMP-002", "সুমাইয়া", "HR", "35000"],
      ["EMP-003", "নাঈম", "Accounts", "42000"],
      ["EMP-004", "মাহি", "Sales", "50000"],
      ["EMP-005", "তানভীর", "Marketing", "32000"],
      ["EMP-006", "সাদিয়া", "IT", "48000"],
      ["EMP-007", "আরিফ", "Sales", "39000"],
      ["EMP-008", "মিম", "HR", "30000"],
      ["EMP-009", "শাওন", "Sales", "45000"],
      ["EMP-010", "লাবণ্য", "Marketing", "36000"]
    ],

    missions: [
      {
        title: "Mission 1 — Employee Detective 👤",

        story:
          "Manager আপনাকে শুধু EMP-004 দিয়েছেন। তিনি জানতে চান Employee-এর Name কী।",

        instruction:
          "VLOOKUP ব্যবহার করে Employee Name বের করুন।",

        tasks: [
          "একটি Lookup Cell তৈরি করুন।",
          "Lookup Value হিসেবে EMP-004 লিখুন।",
          "Employee Table নির্বাচন করুন।",
          "Name Column-এর Column Index Number বের করুন।",
          "FALSE ব্যবহার করে VLOOKUP Formula লিখুন।",
          "Employee-এর Name দেখুন।"
        ],

        challenge:
          "এবার EMP-007 দিয়ে Employee Name বের করুন।"
      },

      {
        title: "Mission 2 — Salary Detective 💰",

        story:
          "Manager জানতে চান EMP-006 Employee কত Salary পান।",

        instruction:
          "VLOOKUP ব্যবহার করে Salary বের করুন।",

        tasks: [
          "Lookup Value হিসেবে EMP-006 লিখুন।",
          "Employee Table নির্বাচন করুন।",
          "Salary Column-এর Index Number নির্ধারণ করুন।",
          "FALSE ব্যবহার করুন।",
          "VLOOKUP Formula লিখুন।",
          "Result হিসেবে Salary দেখুন।"
        ],

        challenge:
          "EMP-004 এবং EMP-009-এর Salary বের করে Compare করুন।"
      },

      {
        title: "Mission 3 — Department Detective 🏢",

        story:
          "HR Manager জানতে চান EMP-010 কোন Department-এ কাজ করেন।",

        instruction:
          "Employee ID ব্যবহার করে Department বের করুন।",

        tasks: [
          "Lookup Value হিসেবে EMP-010 লিখুন।",
          "Employee Table নির্বাচন করুন।",
          "Department Column-এর Index Number নির্ধারণ করুন।",
          "FALSE ব্যবহার করুন।",
          "VLOOKUP Formula লিখুন।",
          "Employee-এর Department দেখুন।"
        ],

        challenge:
          "EMP-002 এবং EMP-005-এর Department বের করুন।"
      },

      {
        title: "Bonus Mission — HR Lookup Pro 🏆",

        story:
          "Manager আপনাকে একটি Employee ID দিলেন এবং Name, Department ও Salary—তিনটি তথ্য একসাথে চান।",

        instruction:
          "একই Lookup Value ব্যবহার করে তিনটি আলাদা VLOOKUP Formula তৈরি করুন।",

        tasks: [
          "Lookup Value হিসেবে EMP-003 ব্যবহার করুন।",
          "VLOOKUP দিয়ে Name বের করুন।",
          "VLOOKUP দিয়ে Department বের করুন।",
          "VLOOKUP দিয়ে Salary বের করুন।",
          "তিনটি Result পাশাপাশি সাজান।"
        ],

        challenge:
          "Lookup Value পরিবর্তন করে EMP-008 দিন এবং দেখুন তিনটি Result কীভাবে একসাথে পরিবর্তিত হয়।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "VLOOKUP Table থেকে তথ্য খুঁজে বের করে।",
    "V মানে Vertical Lookup।",
    "Lookup Value সাধারণত Table Array-এর প্রথম Column-এ থাকতে হয়।",
    "Table Array হলো যে Range-এর মধ্যে Data খোঁজা হয়।",
    "Column Index Number বলে দেয় কোন Column থেকে Result আনতে হবে।",
    "FALSE ব্যবহার করলে Exact Match পাওয়া যায়।",
    "Employee, Product এবং Student Database-এ VLOOKUP খুব কার্যকর।"
  ],

  quiz: [
    {
      question: "VLOOKUP কোন ধরনের Lookup করে?",

      options: [
        "Vertical",
        "Horizontal",
        "Diagonal",
        "Random"
      ],

      answer: 0
    },

    {
      question: "VLOOKUP-এ Exact Match পাওয়ার জন্য কোনটি ব্যবহার করা হয়?",

      options: [
        "TRUE",
        "FALSE",
        "1",
        "0"
      ],

      answer: 1
    },

    {
      question: "Lookup Value সাধারণত কোথায় থাকতে হয়?",

      options: [
        "Table Array-এর প্রথম Column-এ",
        "শেষ Row-তে",
        "যেকোনো Cell-এ",
        "শুধু Header-এ"
      ],

      answer: 0
    },

    {
      question: "Column Index Number কী নির্ধারণ করে?",

      options: [
        "কোন Column থেকে Result আসবে",
        "কোন Row Delete হবে",
        "কতগুলো Sheet থাকবে",
        "Font Size"
      ],

      answer: 0
    },

    {
      question: "Employee ID দিয়ে Employee Name বের করতে কোন Function ব্যবহার করা যায়?",

      options: [
        "VLOOKUP",
        "SUM",
        "COUNT",
        "AVERAGE"
      ],

      answer: 0
    }
  ]
},

// ==========================
// Lesson 14
// ==========================

{
  id: 14,

  category: "advanced",

  level: "Advanced",

  title: "HLOOKUP Function",

  description:
    "Data যদি Row বা Horizontalভাবে সাজানো থাকে, তাহলে HLOOKUP ব্যবহার করে দ্রুত তথ্য খুঁজে বের করা শিখুন।",

  duration: "৩২ মিনিট",

  introduction:
    "VLOOKUP-এ আমরা Column ধরে নিচের দিকে Data খুঁজেছি। কিন্তু সব Data সবসময় Verticalভাবে সাজানো থাকে না। কখনো কখনো Month, Product বা অন্য তথ্য একেকটি Column-এ না থেকে উপরের Row-তে সাজানো থাকে। তখন HLOOKUP কাজে আসে। এই Lesson-এ VLOOKUP-এর সঙ্গে তুলনা করে HLOOKUP এমনভাবে শিখব যাতে কোন পরিস্থিতিতে কোনটি ব্যবহার করতে হবে তা সহজেই বুঝতে পারেন।",

  theory: [
    "HLOOKUP কী?",
    "Horizontal Lookup",
    "Lookup Value",
    "Table Array",
    "Row Index Number",
    "Range Lookup",
    "Exact Match",
    "FALSE ব্যবহার",
    "VLOOKUP বনাম HLOOKUP",
    "HLOOKUP-এর সীমাবদ্ধতা"
  ],

  screenshots: [
    {
      title: "HLOOKUP Example",
      image: "/images/lesson14/hlookup.png",
      description:
        "Horizontalভাবে সাজানো Data থেকে HLOOKUP ব্যবহার করে তথ্য খুঁজে বের করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "HLOOKUP — Sales",
      syntax: "=HLOOKUP(B1,A1:F5,3,FALSE)",
      explanation:
        "উপরের Row-তে Lookup Value খুঁজে নির্দিষ্ট Row থেকে Result ফিরিয়ে আনে।",

      example:
        "=HLOOKUP(B1,A1:F5,3,FALSE)"
    },

    {
      name: "HLOOKUP — Result",
      syntax: "=HLOOKUP(C1,A1:H8,4,FALSE)",
      explanation:
        "Horizontal Table থেকে Lookup Value অনুযায়ী নির্দিষ্ট Row-এর তথ্য বের করে।",

      example:
        "=HLOOKUP(C1,A1:H8,4,FALSE)"
    }
  ],

  examples: [
    "📊 Monthly Sales — Month অনুযায়ী Sales খুঁজে বের করা।",
    "📦 Product Price — Horizontal Product List থেকে Price বের করা।",
    "🎓 Student Result — Student ID Row থেকে Result বের করা।",
    "📈 Monthly Target — Month অনুযায়ী Target Value বের করা।"
  ],

  questions: [
    {
      question: "HLOOKUP কী?",
      answer:
        "Horizontalভাবে সাজানো Table থেকে তথ্য খুঁজে বের করার Lookup Function।"
    },

    {
      question: "HLOOKUP-এর H কী বোঝায়?",
      answer:
        "H মানে Horizontal।"
    },

    {
      question: "HLOOKUP কোথায় Lookup Value খোঁজে?",
      answer:
        "Table Array-এর প্রথম Row-তে Lookup Value খোঁজে।"
    },

    {
      question: "Row Index Number কী?",
      answer:
        "Table Array-এর কোন Row থেকে Result আনতে হবে সেই Row-এর অবস্থান।"
    },

    {
      question: "HLOOKUP-এ FALSE কেন ব্যবহার করা হয়?",
      answer:
        "Exact Match বা হুবহু মিল পাওয়ার জন্য FALSE ব্যবহার করা হয়।"
    },

    {
      question: "VLOOKUP এবং HLOOKUP-এর মূল পার্থক্য কী?",
      answer:
        "VLOOKUP Verticalভাবে Data খোঁজে, আর HLOOKUP Horizontalভাবে Data খোঁজে।"
    }
  ],

  tips: [
    "HLOOKUP ব্যবহার করার আগে Data Horizontalভাবে সাজানো আছে কিনা দেখুন।",
    "Lookup Value প্রথম Row-তে থাকতে হবে।",
    "Exact Match দরকার হলে FALSE ব্যবহার করুন।",
    "Row Index Number সঠিকভাবে গুনে দিন।",
    "Data Vertical হলে VLOOKUP বেশি উপযুক্ত হতে পারে।",
    "Data Horizontal হলে HLOOKUP ব্যবহার করা সহজ হতে পারে।"
  ],

  practice: [
    "Month ব্যবহার করে Sales বের করুন।",
    "Product Code ব্যবহার করে Price বের করুন।",
    "Student ID ব্যবহার করে Result বের করুন।",
    "FALSE ব্যবহার করে Exact Match করুন।",
    "VLOOKUP ও HLOOKUP-এর পার্থক্য লিখুন।"
  ],

  practiceData: {
    title: "Monthly Sales Detective 📊",

    description:
      "আপনি একটি কোম্পানির Sales Assistant। এইবার Data Column-এ নয়, Row-তে সাজানো আছে। HLOOKUP ব্যবহার করে বিভিন্ন Month-এর Sales ও Target খুঁজে বের করুন।",

    headers: [
      "Month",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun"
    ],

    rows: [
      ["Sales", "45000", "52000", "48000", "67000", "72000", "81000"],
      ["Target", "50000", "50000", "55000", "60000", "70000", "75000"],
      ["Orders", "120", "135", "128", "165", "180", "210"],
      ["Profit", "8000", "9500", "8700", "12000", "14500", "17000"]
    ],

    missions: [
      {
        title: "Mission 1 — Monthly Sales Detective 📊",

        story:
          "Sales Manager জানতে চান March মাসে কত Sales হয়েছে।",

        instruction:
          "HLOOKUP ব্যবহার করে March-এর Sales বের করুন।",

        tasks: [
          "Lookup Value হিসেবে Mar ব্যবহার করুন।",
          "পুরো Horizontal Table নির্বাচন করুন।",
          "Sales Row-এর Row Index Number নির্ধারণ করুন।",
          "FALSE ব্যবহার করুন।",
          "HLOOKUP Formula লিখুন।",
          "March-এর Sales Result দেখুন।"
        ],

        challenge:
          "এবার June-এর Sales বের করুন।"
      },

      {
        title: "Mission 2 — Target Detective 🎯",

        story:
          "Manager জানতে চান April মাসের Sales Target কত ছিল।",

        instruction:
          "HLOOKUP ব্যবহার করে April Target বের করুন।",

        tasks: [
          "Lookup Value হিসেবে Apr ব্যবহার করুন।",
          "Table Array নির্বাচন করুন।",
          "Target Row-এর Index Number নির্ধারণ করুন।",
          "FALSE ব্যবহার করুন।",
          "Formula লিখুন।",
          "April Target দেখুন।"
        ],

        challenge:
          "May মাসের Target-ও বের করুন।"
      },

      {
        title: "Mission 3 — Profit Detective 💰",

        story:
          "Finance Team জানতে চায় কোন Month-এর Profit কত ছিল।",

        instruction:
          "HLOOKUP ব্যবহার করে নির্দিষ্ট Month-এর Profit বের করুন।",

        tasks: [
          "Lookup Value হিসেবে May ব্যবহার করুন।",
          "Table Array নির্বাচন করুন।",
          "Profit Row-এর Index Number নির্ধারণ করুন।",
          "FALSE ব্যবহার করুন।",
          "HLOOKUP Formula লিখুন।",
          "May-এর Profit দেখুন।"
        ],

        challenge:
          "June-এর Profit বের করে May-এর সঙ্গে Compare করুন।"
      },

      {
        title: "Bonus Mission — VLOOKUP vs HLOOKUP 🏆",

        story:
          "আপনার Manager জানতে চান কখন VLOOKUP আর কখন HLOOKUP ব্যবহার করবেন।",

        instruction:
          "দুই ধরনের Lookup-এর পার্থক্য বাস্তব Data দিয়ে বুঝুন।",

        tasks: [
          "Employee Database-এর মতো Vertical Data চিনুন।",
          "সেখানে VLOOKUP কেন উপযুক্ত তা দেখুন।",
          "Monthly Sales-এর মতো Horizontal Data চিনুন।",
          "সেখানে HLOOKUP কেন উপযুক্ত তা দেখুন।",
          "দুই ধরনের Table-এর প্রথম Lookup Area চিহ্নিত করুন।"
        ],

        challenge:
          "নিজের ভাষায় লিখুন: Vertical Data হলে কোন Function এবং Horizontal Data হলে কোন Function ব্যবহার করবেন?"
      }
    ]
  },

  pdf: "#",

  summary: [
    "HLOOKUP Horizontalভাবে Data খুঁজে বের করে।",
    "HLOOKUP-এর H মানে Horizontal।",
    "Lookup Value সাধারণত Table Array-এর প্রথম Row-তে থাকে।",
    "Row Index Number বলে দেয় কোন Row থেকে Result আনতে হবে।",
    "FALSE ব্যবহার করলে Exact Match পাওয়া যায়।",
    "Vertical Data-এর জন্য VLOOKUP এবং Horizontal Data-এর জন্য HLOOKUP ব্যবহার করা যায়।"
  ],

  quiz: [
    {
      question: "HLOOKUP কোন ধরনের Lookup করে?",

      options: [
        "Horizontal",
        "Vertical",
        "Diagonal",
        "Random"
      ],

      answer: 0
    },

    {
      question: "HLOOKUP-এর H কী বোঝায়?",

      options: [
        "Horizontal",
        "High",
        "Header",
        "Hidden"
      ],

      answer: 0
    },

    {
      question: "HLOOKUP কোথায় Lookup Value খোঁজে?",

      options: [
        "প্রথম Row-তে",
        "প্রথম Column-এ",
        "শেষ Row-তে",
        "যেকোনো Cell-এ"
      ],

      answer: 0
    },

    {
      question: "HLOOKUP-এ Result-এর অবস্থান নির্ধারণ করতে কোনটি ব্যবহার হয়?",

      options: [
        "Row Index Number",
        "Column Width",
        "Font Size",
        "Sheet Number"
      ],

      answer: 0
    },

    {
      question: "Exact Match-এর জন্য HLOOKUP-এ কোনটি ব্যবহার করা হয়?",

      options: [
        "FALSE",
        "TRUE",
        "1",
        "AUTO"
      ],

      answer: 0
    },

    {
      question: "Horizontal Data-এর জন্য কোন Function বেশি উপযুক্ত?",

      options: [
        "HLOOKUP",
        "VLOOKUP",
        "SUM",
        "COUNT"
      ],

      answer: 0
    }
  ]
},

// ==========================
// Lesson 15
// ==========================

{
  id: 15,

  category: "advanced",

  level: "Advanced",

  title: "INDEX + MATCH",

  description:
    "MATCH দিয়ে Position এবং INDEX দিয়ে সেই Position-এর Value বের করে Flexible Lookup করা শিখুন।",

  duration: "৩৫ মিনিট",

  introduction:
    "VLOOKUP দিয়ে অনেক Lookup করা যায়, কিন্তু কিছু ক্ষেত্রে সেটি সীমাবদ্ধ। INDEX + MATCH ব্যবহার করলে Lookup আরও Flexible হয়। এখানে আমরা দুইটি Function একসাথে ব্যবহার করব। MATCH প্রথমে খুঁজে বের করবে কোনো Data কোন Position-এ আছে, আর INDEX সেই Position থেকে আসল Value নিয়ে আসবে। সহজভাবে মনে রাখুন—MATCH বলে 'কোথায়?', INDEX বলে 'সেখানে কী আছে?'।",

  theory: [
    "INDEX কী?",
    "MATCH কী?",
    "Position কী?",
    "MATCH-এর Lookup Value",
    "MATCH-এর Lookup Array",
    "Exact Match",
    "INDEX-এর Return Range",
    "Nested Formula",
    "INDEX + MATCH একসাথে ব্যবহার",
    "VLOOKUP বনাম INDEX + MATCH"
  ],

  screenshots: [
    {
      title: "INDEX + MATCH",
      image: "/images/lesson15/index-match.png",
      description:
        "MATCH দিয়ে Position খুঁজে INDEX দিয়ে সেই Position-এর Value বের করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "MATCH — Position",
      syntax: "=MATCH(A2,B2:B20,0)",
      explanation:
        "একটি Data Range-এর মধ্যে Lookup Value কোন Position-এ আছে তা বের করে।",

      example:
        "=MATCH(H2,B2:B20,0)"
    },

    {
      name: "INDEX — Value",
      syntax: "=INDEX(C2:C20,5)",
      explanation:
        "একটি Range-এর নির্দিষ্ট Position থেকে Value ফিরিয়ে আনে।",

      example:
        "=INDEX(C2:C20,5)"
    },

    {
      name: "INDEX + MATCH — Employee Salary",
      syntax: "=INDEX(C2:C20,MATCH(A2,B2:B20,0))",
      explanation:
        "MATCH দিয়ে Employee-এর Position খুঁজে INDEX দিয়ে সেই Position-এর Salary বের করে।",

      example:
        "=INDEX(D2:D20,MATCH(H2,A2:A20,0))"
    }
  ],

  examples: [
    "👤 Employee ID → Employee Name",
    "🏢 Employee ID → Department",
    "💰 Employee ID → Salary",
    "📦 Product Code → Product Price",
    "🎓 Student ID → Result"
  ],

  questions: [
    {
      question: "MATCH কী করে?",
      answer:
        "কোনো Value একটি Range-এর কোন Position-এ আছে তা খুঁজে বের করে।"
    },

    {
      question: "INDEX কী করে?",
      answer:
        "একটি Range-এর নির্দিষ্ট Position থেকে Value ফিরিয়ে দেয়।"
    },

    {
      question: "INDEX + MATCH কীভাবে কাজ করে?",
      answer:
        "MATCH প্রথমে Position খুঁজে বের করে এবং INDEX সেই Position থেকে Value ফিরিয়ে দেয়।"
    },

    {
      question: "MATCH-এর শেষে 0 কেন ব্যবহার করা হয়?",
      answer:
        "Exact Match বা হুবহু মিল খুঁজে পাওয়ার জন্য 0 ব্যবহার করা হয়।"
    },

    {
      question: "INDEX + MATCH-এর সহজ Logic কী?",
      answer:
        "MATCH বলে 'কোথায়?', INDEX বলে 'সেখানে কী আছে?'।"
    },

    {
      question: "INDEX + MATCH কেন ব্যবহার করা হয়?",
      answer:
        "Flexible Lookup করার জন্য এবং বিভিন্ন ধরনের Lookup-এ VLOOKUP-এর বিকল্প হিসেবে ব্যবহার করা যায়।"
    }
  ],

  tips: [
    "MATCH-এর শেষে 0 ব্যবহার করলে Exact Match পাওয়া যায়।",
    "MATCH যে Position ফেরত দেয়, INDEX সেই Position ব্যবহার করে Value বের করে।",
    "INDEX-এর Return Range এবং MATCH-এর Lookup Range সঠিকভাবে নির্বাচন করুন।",
    "Formula বড় হলে আগে আলাদা করে MATCH-এর Result পরীক্ষা করুন।",
    "INDEX + MATCH বুঝতে প্রথমে MATCH একা Practice করুন।",
    "মনে রাখুন: MATCH = Position, INDEX = Value।"
  ],

  practice: [
    "MATCH দিয়ে Employee ID-এর Position বের করুন।",
    "INDEX দিয়ে একটি নির্দিষ্ট Position-এর Name বের করুন।",
    "INDEX + MATCH দিয়ে Employee Name বের করুন।",
    "INDEX + MATCH দিয়ে Department বের করুন।",
    "INDEX + MATCH দিয়ে Salary বের করুন।",
    "VLOOKUP এবং INDEX + MATCH-এর Logic Compare করুন।"
  ],

  practiceData: {
    title: "Lookup Detective — INDEX + MATCH 🕵️",

    description:
      "আপনি একটি কোম্পানির HR Assistant। Manager Employee ID দিচ্ছেন এবং আপনাকে Name, Department ও Salary বের করতে হবে। এবার VLOOKUP নয়—INDEX + MATCH ব্যবহার করুন।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Salary"
    ],

    rows: [
      ["EMP-001", "রাকিব", "Sales", "28000"],
      ["EMP-002", "সুমাইয়া", "HR", "35000"],
      ["EMP-003", "নাঈম", "Accounts", "42000"],
      ["EMP-004", "মাহি", "Sales", "50000"],
      ["EMP-005", "তানভীর", "Marketing", "32000"],
      ["EMP-006", "সাদিয়া", "IT", "48000"],
      ["EMP-007", "আরিফ", "Sales", "39000"],
      ["EMP-008", "মিম", "HR", "30000"],
      ["EMP-009", "শাওন", "Sales", "45000"],
      ["EMP-010", "লাবণ্য", "Marketing", "36000"]
    ],

    missions: [
      {
        title: "Mission 1 — Position Detective 🔎",

        story:
          "Manager আপনাকে EMP-006 দিয়েছেন। প্রথমে জানতে হবে এই Employee List-এ EMP-006 কত নম্বর Position-এ আছে।",

        instruction:
          "MATCH ব্যবহার করে Employee ID-এর Position বের করুন।",

        tasks: [
          "Employee ID Column নির্বাচন করুন।",
          "Lookup Value হিসেবে EMP-006 ব্যবহার করুন।",
          "MATCH Formula লিখুন।",
          "শেষ Argument হিসেবে 0 ব্যবহার করুন।",
          "Formula-এর Result দেখুন।",
          "Position Number বুঝে নিন।"
        ],

        challenge:
          "এবার EMP-009-এর Position MATCH দিয়ে বের করুন।"
      },

      {
        title: "Mission 2 — Value Detective 💰",

        story:
          "এবার Manager জানতে চান List-এর ৬ নম্বর Position-এ কোন Employee-এর Name আছে।",

        instruction:
          "INDEX ব্যবহার করে নির্দিষ্ট Position-এর Value বের করুন।",

        tasks: [
          "Name Range নির্বাচন করুন।",
          "Position হিসেবে 6 ব্যবহার করুন।",
          "INDEX Formula লিখুন।",
          "Result দেখুন।",
          "Result-এর Employee ID-এর সঙ্গে মিলিয়ে দেখুন।"
        ],

        challenge:
          "অন্য একটি Position ব্যবহার করে অন্য Employee-এর Name বের করুন।"
      },

      {
        title: "Mission 3 — INDEX + MATCH Detective 🧩",

        story:
          "Manager সরাসরি Employee ID দিলেন এবং তার Salary জানতে চাইলেন। Position আলাদা করে বের করার দরকার নেই।",

        instruction:
          "INDEX এবং MATCH একসাথে ব্যবহার করে Salary বের করুন।",

        tasks: [
          "Lookup Value হিসেবে EMP-004 ব্যবহার করুন।",
          "MATCH দিয়ে EMP-004-এর Position খুঁজুন।",
          "Salary Range-এর সঙ্গে INDEX ব্যবহার করুন।",
          "MATCH Formula-কে INDEX-এর ভিতরে বসান।",
          "Exact Match-এর জন্য 0 ব্যবহার করুন।",
          "Employee-এর Salary দেখুন।"
        ],

        challenge:
          "EMP-008-এর Salary একই INDEX + MATCH Logic দিয়ে বের করুন।"
      },

      {
        title: "Bonus Mission — Lookup Pro 🏆",

        story:
          "Manager একটি Employee ID দিলেন এবং Name, Department ও Salary—তিনটি তথ্য চান।",

        instruction:
          "একই Lookup Value ব্যবহার করে তিনটি INDEX + MATCH Formula তৈরি করুন।",

        tasks: [
          "Lookup Value হিসেবে EMP-007 ব্যবহার করুন।",
          "INDEX + MATCH দিয়ে Name বের করুন।",
          "INDEX + MATCH দিয়ে Department বের করুন।",
          "INDEX + MATCH দিয়ে Salary বের করুন।",
          "তিনটি Result পাশাপাশি সাজান।"
        ],

        challenge:
          "Lookup Value EMP-003 করলে তিনটি Result কীভাবে পরিবর্তন হয় তা দেখুন।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "MATCH কোনো Value-এর Position খুঁজে বের করে।",
    "INDEX একটি নির্দিষ্ট Position থেকে Value ফিরিয়ে দেয়।",
    "INDEX + MATCH একসাথে ব্যবহার করলে Flexible Lookup করা যায়।",
    "MATCH-এর শেষে 0 ব্যবহার করলে Exact Match পাওয়া যায়।",
    "সহজভাবে মনে রাখুন: MATCH = Position, INDEX = Value।",
    "INDEX + MATCH অনেক Lookup-এর ক্ষেত্রে VLOOKUP-এর বিকল্প হিসেবে ব্যবহার করা যায়।"
  ],

  quiz: [
    {
      question: "MATCH Function-এর প্রধান কাজ কী?",

      options: [
        "Position খুঁজে বের করা",
        "Value যোগ করা",
        "Chart তৈরি করা",
        "Data Sort করা"
      ],

      answer: 0
    },

    {
      question: "INDEX Function কী করে?",

      options: [
        "Position থেকে Value ফিরিয়ে দেয়",
        "Data Filter করে",
        "Workbook Save করে",
        "Cell Color পরিবর্তন করে"
      ],

      answer: 0
    },

    {
      question: "MATCH-এর শেষে 0 ব্যবহার করার কারণ কী?",

      options: [
        "Exact Match",
        "Approximate Match",
        "Sort",
        "Filter"
      ],

      answer: 0
    },

    {
      question: "INDEX + MATCH-এর সহজ Logic কোনটি?",

      options: [
        "MATCH = Position, INDEX = Value",
        "INDEX = Position, MATCH = Chart",
        "MATCH = Sum, INDEX = Average",
        "দুটিই একই কাজ করে"
      ],

      answer: 0
    },

    {
      question: "INDEX + MATCH সাধারণত কোন Function-এর বিকল্প হিসেবে ব্যবহৃত হতে পারে?",

      options: [
        "VLOOKUP",
        "SUM",
        "COUNT",
        "AVERAGE"
      ],

      answer: 0
    }
  ]
},

// ==========================
// Lesson 16
// ==========================

{
  id: 16,

  category: "advanced",

  level: "Advanced",

  title: "IF Function",

  description:
    "Excel-কে শর্ত অনুযায়ী সিদ্ধান্ত নিতে শেখান—Pass/Fail, Eligible/Not Eligible, Target Achieved/Not Achieved ইত্যাদি তৈরি করুন।",

  duration: "৩৫ মিনিট",

  introduction:
    "ধরুন একটি কোম্পানিতে Employee-এর Sales Target ৫০,০০০ টাকা। Manager চান Excel নিজে থেকেই বলুক কে Target পূরণ করেছে আর কে করেনি। এখানেই IF Function কাজে আসে। সহজ ভাষায় IF মানে—'যদি শর্তটি সত্য হয় তাহলে একটি Result দাও, আর সত্য না হলে অন্য Result দাও।' এই Lesson-এ আমরা IF ব্যবহার করে বাস্তব Office Decision তৈরি করব।",

  theory: [
    "IF Function কী?",
    "Logical Test",
    "Value if True",
    "Value if False",
    "Comparison Operator",
    "Greater Than (>)",
    "Less Than (<)",
    "Equal To (=)",
    "Text Result",
    "Number Result"
  ],

  screenshots: [
    {
      title: "IF Function",
      image: "/images/lesson16/if-function.png",
      description:
        "একটি শর্ত পরীক্ষা করে True বা False অনুযায়ী Result দেখানোর উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "IF — Pass / Fail",
      syntax: '=IF(B2>=40,"Pass","Fail")',
      explanation:
        "B2-এর Mark 40 বা তার বেশি হলে Pass এবং তার কম হলে Fail দেখায়।",

      example:
        '=IF(B2>=40,"Pass","Fail")'
    },

    {
      name: "IF — Target Status",
      syntax: '=IF(C2>=50000,"Target Achieved","Target Not Achieved")',
      explanation:
        "Sales 50,000 বা তার বেশি হলে Target Achieved দেখায়।",

      example:
        '=IF(C2>=50000,"Target Achieved","Target Not Achieved")'
    },

    {
      name: "IF — Eligibility",
      syntax: '=IF(D2>=18,"Eligible","Not Eligible")',
      explanation:
        "Age 18 বা তার বেশি হলে Eligible এবং কম হলে Not Eligible দেখায়।",

      example:
        '=IF(D2>=18,"Eligible","Not Eligible")'
    }
  ],

  examples: [
    "🎓 Exam Result — Mark অনুযায়ী Pass বা Fail দেখানো।",
    "💰 Sales Target — Target পূরণ হয়েছে কিনা দেখানো।",
    "👤 Employee Status — Performance অনুযায়ী Eligible বা Not Eligible দেখানো।",
    "📦 Stock Status — Stock কম হলে Reorder এবং পর্যাপ্ত হলে Available দেখানো।",
    "⏰ Attendance — Attendance নির্দিষ্ট সীমার নিচে হলে Warning দেখানো।"
  ],

  questions: [
    {
      question: "IF Function কী?",
      answer:
        "কোনো শর্ত পরীক্ষা করে শর্ত সত্য বা মিথ্যা হওয়ার ভিত্তিতে আলাদা Result দেখানোর Function হলো IF।"
    },

    {
      question: "IF Function-এর সহজ Logic কী?",
      answer:
        "যদি শর্ত সত্য হয় তাহলে একটি Result, আর সত্য না হলে অন্য Result।"
    },

    {
      question: "Logical Test কী?",
      answer:
        "যে শর্তটি Excel পরীক্ষা করবে সেটিই Logical Test।"
    },

    {
      question: "Value if True কী?",
      answer:
        "Logical Test সত্য হলে যে Result দেখাবে সেটি Value if True।"
    },

    {
      question: "Value if False কী?",
      answer:
        "Logical Test মিথ্যা হলে যে Result দেখাবে সেটি Value if False।"
    },

    {
      question: "Text Result Formula-তে কেন quotation mark ব্যবহার করা হয়?",
      answer:
        'Text Result যেমন "Pass" বা "Fail" লিখলে সেটিকে quotation mark-এর মধ্যে রাখতে হয়।'
    },

    {
      question: "B2-এর Value 50 হলে =IF(B2>=40,\"Pass\",\"Fail\") কী দেখাবে?",
      answer:
        "Pass দেখাবে, কারণ 50 হলো 40-এর চেয়ে বেশি।"
    }
  ],

  tips: [
    "IF Formula লেখার আগে নিজের ভাষায় শর্তটি বলুন—'যদি... তাহলে... না হলে...'।",
    "Text Result হলে quotation mark ব্যবহার করুন।",
    "Greater Than, Less Than এবং Equal To Operator সঠিকভাবে ব্যবহার করুন।",
    ">= মানে Greater Than or Equal To।",
    "<= মানে Less Than or Equal To।",
    "Formula কাজ না করলে প্রথমে Bracket এবং quotation mark পরীক্ষা করুন।"
  ],

  practice: [
    "Mark 40 বা তার বেশি হলে Pass এবং কম হলে Fail দেখান।",
    "Sales 50,000 বা তার বেশি হলে Target Achieved দেখান।",
    "Stock 20-এর কম হলে Reorder দেখান।",
    "Age 18 বা তার বেশি হলে Eligible দেখান।",
    "Attendance 80%-এর কম হলে Warning দেখান।",
    "নিজে একটি নতুন IF Decision তৈরি করুন।"
  ],

  practiceData: {
    title: "Decision Maker Detective 🕵️",

    description:
      "আপনি একটি কোম্পানির Reporting Assistant। Manager চান Excel নিজেই Employee-এর Sales, Stock এবং Attendance দেখে বিভিন্ন Decision তৈরি করুক। আপনার কাজ হলো IF Function দিয়ে Excel-কে Decision Maker বানানো।",

    headers: [
      "Employee ID",
      "Name",
      "Sales",
      "Stock",
      "Attendance"
    ],

    rows: [
      ["EMP-001", "রাকিব", "65000", "35", "92"],
      ["EMP-002", "সুমাইয়া", "42000", "18", "86"],
      ["EMP-003", "নাঈম", "78000", "12", "79"],
      ["EMP-004", "মাহি", "50000", "45", "95"],
      ["EMP-005", "তানভীর", "38000", "8", "74"],
      ["EMP-006", "সাদিয়া", "92000", "28", "91"],
      ["EMP-007", "আরিফ", "47000", "15", "83"],
      ["EMP-008", "মিম", "55000", "6", "77"],
      ["EMP-009", "শাওন", "72000", "40", "88"],
      ["EMP-010", "লাবণ্য", "33000", "22", "81"]
    ],

    missions: [
      {
        title: "Mission 1 — Sales Detective 💰",

        story:
          "Manager চান ৫০,০০০ টাকা বা তার বেশি Sales করা Employee-দের পাশে Target Achieved এবং অন্যদের পাশে Target Not Achieved লেখা থাকুক।",

        instruction:
          "Sales Column ব্যবহার করে IF Formula তৈরি করুন।",

        tasks: [
          "Sales Column-এর প্রথম Employee-এর Cell নির্বাচন করুন।",
          "শর্ত হিসেবে Sales >= 50000 ব্যবহার করুন।",
          "True হলে Target Achieved লিখুন।",
          "False হলে Target Not Achieved লিখুন।",
          "Formula লিখে নিচের Row-গুলোতে Copy করুন।",
          "সব Employee-এর Status দেখুন।"
        ],

        challenge:
          "Target 60,000 করলে কোন কোন Employee-এর Status পরিবর্তন হবে তা দেখুন।"
      },

      {
        title: "Mission 2 — Stock Detective 📦",

        story:
          "Warehouse Manager চান যেসব Product Stock 20-এর নিচে আছে সেগুলোর পাশে Reorder লেখা থাকুক।",

        instruction:
          "Stock Column ব্যবহার করে Reorder Decision তৈরি করুন।",

        tasks: [
          "Stock-এর প্রথম Value নির্বাচন করুন।",
          "শর্ত হিসেবে Stock < 20 ব্যবহার করুন।",
          "True হলে Reorder লিখুন।",
          "False হলে Stock Available লিখুন।",
          "Formula নিচে Copy করুন।",
          "কোন Employee-এর Stock কম তা চিহ্নিত করুন।"
        ],

        challenge:
          "Stock Limit 10 করলে Result কীভাবে পরিবর্তিত হয় দেখুন।"
      },

      {
        title: "Mission 3 — Attendance Detective ⏰",

        story:
          "HR Manager চান যাদের Attendance 80%-এর কম তাদের পাশে Warning লেখা থাকুক।",

        instruction:
          "Attendance Percentage ব্যবহার করে HR Warning তৈরি করুন।",

        tasks: [
          "Attendance-এর প্রথম Value নির্বাচন করুন।",
          "শর্ত হিসেবে Attendance < 80 ব্যবহার করুন।",
          "True হলে Warning লিখুন।",
          "False হলে Good Attendance লিখুন।",
          "Formula নিচের Employee-দের জন্য Copy করুন।",
          "Warning পাওয়া Employee-দের চিহ্নিত করুন।"
        ],

        challenge:
          "Attendance Limit 85 করলে কতজন Employee Warning পাবে তা বের করুন।"
      },

      {
        title: "Bonus Mission — Decision Maker Pro 🏆",

        story:
          "Manager চান একটি Final Status তৈরি করতে। Employee-এর Sales Target পূরণ হলে এবং Attendance 80 বা তার বেশি হলে তাকে Good Performer বলা হবে।",

        instruction:
          "IF ব্যবহার করে Sales এবং Attendance—দুইটি শর্তের ভিত্তিতে একটি Decision তৈরি করুন।",

        tasks: [
          "Sales >= 50000 শর্ত পরীক্ষা করুন।",
          "Attendance >= 80 শর্ত পরীক্ষা করুন।",
          "দুই শর্ত সত্য হলে Good Performer লিখুন।",
          "অন্যথায় Needs Improvement লিখুন।",
          "Formula তৈরি করুন।",
          "সব Employee-এর Final Status দেখুন।"
        ],

        challenge:
          "নিজে একটি নতুন Business Decision তৈরি করুন যেখানে Sales বা Attendance-এর একটি নতুন Threshold থাকবে।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "IF Function শর্ত অনুযায়ী Decision তৈরি করে।",
    "IF-এর মূল Logic হলো: যদি শর্ত সত্য হয় এক Result, না হলে অন্য Result।",
    "Logical Test হলো যে শর্তটি Excel পরীক্ষা করে।",
    "Value if True হলো শর্ত সত্য হলে Result।",
    "Value if False হলো শর্ত মিথ্যা হলে Result।",
    "IF দিয়ে Pass/Fail, Target Status, Reorder এবং Warning-এর মতো বাস্তব Decision তৈরি করা যায়।"
  ],

  quiz: [
    {
      question: "IF Function-এর প্রধান কাজ কী?",

      options: [
        "শর্ত অনুযায়ী Decision তৈরি করা",
        "Data Sort করা",
        "Chart তৈরি করা",
        "Cell Merge করা"
      ],

      answer: 0
    },

    {
      question: '=IF(B2>=40,"Pass","Fail")-এ B2>=40 কী?', 

      options: [
        "Logical Test",
        "Value if True",
        "Value if False",
        "Table Array"
      ],

      answer: 0
    },

    {
      question: 'শর্ত সত্য হলে "Pass" দেখাতে কোন অংশ ব্যবহার হয়?', 

      options: [
        "Value if True",
        "Value if False",
        "Lookup Value",
        "Row Index"
      ],

      answer: 0
    },

    {
      question: ">= Operator-এর অর্থ কী?",

      options: [
        "Greater Than or Equal To",
        "Less Than",
        "Equal Only",
        "Not Equal"
      ],

      answer: 0
    },

    {
      question: "Stock 20-এর কম হলে Reorder দেখানোর জন্য কোন Logic সঠিক?",

      options: [
        '=IF(B2<20,"Reorder","Stock Available")',
        '=IF(B2>20,"Reorder","Stock Available")',
        '=IF(B2=20,"Reorder","Stock Available")',
        '=IF(B2<20,"Stock Available","Reorder")'
      ],

      answer: 0
    }
  ]
},

// ==========================
// Lesson 17
// ==========================

{
  id: 17,

  category: "advanced",

  level: "Advanced",

  title: "AND & OR Function",

  description:
    "একাধিক শর্ত একসাথে পরীক্ষা করে Excel-কে আরও Smart Decision নিতে শেখান।",

  duration: "৩৮ মিনিট",

  introduction:
    "একটি Employee-কে Good Performer বলতে হলে হয়তো তার Sales Target পূরণ করতে হবে এবং Attendance-ও ভালো হতে হবে। আবার কোনো Employee-কে Special Training দেওয়ার জন্য Sales কম অথবা Attendance কম—যেকোনো একটি কারণই যথেষ্ট হতে পারে। এই ধরনের একাধিক শর্ত একসাথে পরীক্ষা করতে AND ও OR Function ব্যবহার করা হয়। সহজভাবে মনে রাখুন—AND বলছে 'সবগুলো শর্ত ঠিক হতে হবে', আর OR বলছে 'যেকোনো একটি ঠিক হলেই হবে'।",

  theory: [
    "AND Function কী?",
    "OR Function কী?",
    "Multiple Conditions",
    "AND-এর Logic",
    "OR-এর Logic",
    "AND + IF",
    "OR + IF",
    "Comparison Operator",
    "Nested Logical Formula",
    "AND বনাম OR"
  ],

  screenshots: [
    {
      title: "AND & OR Function",
      image: "/images/lesson17/and-or.png",
      description:
        "একাধিক শর্ত একসাথে পরীক্ষা করে Decision তৈরি করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "AND — দুই শর্ত",
      syntax: "=AND(B2>=50000,C2>=80)",
      explanation:
        "B2 কমপক্ষে 50,000 এবং C2 কমপক্ষে 80 হলে TRUE দেখাবে।",

      example:
        "=AND(B2>=50000,C2>=80)"
    },

    {
      name: "OR — যেকোনো একটি শর্ত",
      syntax: "=OR(B2<50000,C2<80)",
      explanation:
        "B2 50,000-এর কম অথবা C2 80-এর কম হলে TRUE দেখাবে।",

      example:
        "=OR(B2<50000,C2<80)"
    },

    {
      name: "IF + AND",
      syntax:
        '=IF(AND(B2>=50000,C2>=80),"Good Performer","Needs Improvement")',
      explanation:
        "Sales এবং Attendance—দুই শর্তই পূরণ হলে Good Performer দেখাবে।",

      example:
        '=IF(AND(B2>=50000,C2>=80),"Good Performer","Needs Improvement")'
    },

    {
      name: "IF + OR",
      syntax:
        '=IF(OR(B2<50000,C2<80),"Needs Attention","Good")',
      explanation:
        "Sales অথবা Attendance-এর যেকোনো একটি শর্ত খারাপ হলে Needs Attention দেখাবে।",

      example:
        '=IF(OR(B2<50000,C2<80),"Needs Attention","Good")'
    }
  ],

  examples: [
    "🏆 Performance — Sales Target এবং Attendance দুটোই ভালো হলে Good Performer।",
    "📚 Training — Sales কম অথবা Attendance কম হলে Training Required।",
    "🎁 Bonus — Target এবং Attendance দুটোই পূরণ হলে Bonus Eligible।",
    "⚠️ Warning — যেকোনো একটি গুরুত্বপূর্ণ শর্ত পূরণ না হলে Warning।",
    "👤 Employee Review — একাধিক Performance Condition একসাথে পরীক্ষা করা।"
  ],

  questions: [
    {
      question: "AND Function কী করে?",
      answer:
        "একাধিক শর্ত পরীক্ষা করে এবং সবগুলো শর্ত সত্য হলে TRUE দেয়।"
    },

    {
      question: "OR Function কী করে?",
      answer:
        "একাধিক শর্ত পরীক্ষা করে এবং অন্তত একটি শর্ত সত্য হলে TRUE দেয়।"
    },

    {
      question: "AND-এর সহজ Logic কী?",
      answer:
        "সব শর্ত সত্য হতে হবে।"
    },

    {
      question: "OR-এর সহজ Logic কী?",
      answer:
        "যেকোনো একটি শর্ত সত্য হলেই হবে।"
    },

    {
      question: "IF-এর সঙ্গে AND কেন ব্যবহার করা হয়?",
      answer:
        "একাধিক শর্ত একসাথে পরীক্ষা করে একটি নির্দিষ্ট Decision দেখানোর জন্য।"
    },

    {
      question: "IF-এর সঙ্গে OR কেন ব্যবহার করা হয়?",
      answer:
        "একাধিক শর্তের যেকোনো একটি সত্য হলে নির্দিষ্ট Decision দেখানোর জন্য।"
    },

    {
      question: "Sales 60,000 এবং Attendance 90 হলে =AND(B2>=50000,C2>=80) কী দেখাবে?",
      answer:
        "TRUE দেখাবে, কারণ দুইটি শর্তই সত্য।"
    },

    {
      question: "Sales 40,000 এবং Attendance 90 হলে একই AND Formula কী দেখাবে?",
      answer:
        "FALSE দেখাবে, কারণ Sales-এর শর্তটি পূরণ হয়নি।"
    }
  ],

  tips: [
    "AND মনে রাখুন: 'সবগুলো লাগবে'।",
    "OR মনে রাখুন: 'একটা হলেই হবে'।",
    "AND বা OR-কে IF-এর সঙ্গে ব্যবহার করলে সুন্দর Business Decision তৈরি করা যায়।",
    "একাধিক শর্ত লেখার সময় প্রতিটি Condition-এর মাঝে Comma ব্যবহার করুন।",
    "Formula বড় হলে আগে AND বা OR অংশটি আলাদাভাবে পরীক্ষা করুন।",
    "Business Rule-কে আগে সাধারণ বাংলায় লিখুন, তারপর Formula বানান।"
  ],

  practice: [
    "Sales >= 50000 এবং Attendance >= 80 হলে Good Performer দেখান।",
    "Sales < 50000 অথবা Attendance < 80 হলে Needs Attention দেখান।",
    "Sales >= 70000 এবং Attendance >= 90 হলে Bonus Eligible দেখান।",
    "Sales < 40000 অথবা Attendance < 75 হলে Training Required দেখান।",
    "AND ও OR আলাদা করে ব্যবহার করে TRUE/FALSE Result দেখুন।",
    "নিজের একটি দুই-শর্তের Business Rule তৈরি করুন।"
  ],

  practiceData: {
    title: "Smart Decision Detective 🕵️",

    description:
      "আপনি HR Reporting Team-এর সদস্য। Manager চান Excel একাধিক শর্ত দেখে Employee-এর Performance, Bonus এবং Training Status নিজে থেকে নির্ধারণ করুক।",

    headers: [
      "Employee ID",
      "Name",
      "Sales",
      "Attendance",
      "Quality Score"
    ],

    rows: [
      ["EMP-001", "রাকিব", "65000", "92", "88"],
      ["EMP-002", "সুমাইয়া", "42000", "86", "91"],
      ["EMP-003", "নাঈম", "78000", "79", "84"],
      ["EMP-004", "মাহি", "50000", "95", "93"],
      ["EMP-005", "তানভীর", "38000", "74", "76"],
      ["EMP-006", "সাদিয়া", "92000", "91", "96"],
      ["EMP-007", "আরিফ", "47000", "83", "89"],
      ["EMP-008", "মিম", "55000", "77", "82"],
      ["EMP-009", "শাওন", "72000", "88", "94"],
      ["EMP-010", "লাবণ্য", "33000", "81", "87"]
    ],

    missions: [
      {
        title: "Mission 1 — Performance Detective 🏆",

        story:
          "Manager বলেছেন, একজন Employee-এর Sales কমপক্ষে 50,000 এবং Attendance কমপক্ষে 80 হলে তাকে Good Performer ধরা হবে।",

        instruction:
          "IF + AND ব্যবহার করে Performance Status তৈরি করুন।",

        tasks: [
          "Sales >= 50000 শর্ত লিখুন।",
          "Attendance >= 80 শর্ত লিখুন।",
          "দুইটি শর্ত AND-এর মধ্যে রাখুন।",
          "দুই শর্ত সত্য হলে Good Performer লিখুন।",
          "অন্যথায় Needs Improvement লিখুন।",
          "Formula নিচের Employee-দের জন্য Copy করুন।"
        ],

        challenge:
          "Quality Score-ও 85 বা তার বেশি হলে তবেই Good Performer করতে Formula পরিবর্তন করুন।"
      },

      {
        title: "Mission 2 — Training Detective 📚",

        story:
          "HR Manager চান Sales 50,000-এর কম অথবা Attendance 80%-এর কম হলেই Employee-কে Training-এর জন্য চিহ্নিত করা হোক।",

        instruction:
          "IF + OR ব্যবহার করে Training Status তৈরি করুন।",

        tasks: [
          "Sales < 50000 শর্ত লিখুন।",
          "Attendance < 80 শর্ত লিখুন।",
          "দুইটি শর্ত OR-এর মধ্যে রাখুন।",
          "যেকোনো একটি সত্য হলে Training Required লিখুন।",
          "দুইটি শর্তই মিথ্যা হলে No Training লিখুন।",
          "Formula নিচে Copy করুন।"
        ],

        challenge:
          "Quality Score 80-এর কম হলেও Training Required হবে—এমন তৃতীয় Condition যোগ করুন।"
      },

      {
        title: "Mission 3 — Bonus Detective 🎁",

        story:
          "Company Bonus পেতে Employee-এর Sales কমপক্ষে 70,000 এবং Attendance কমপক্ষে 85 হতে হবে।",

        instruction:
          "IF + AND ব্যবহার করে Bonus Eligibility তৈরি করুন।",

        tasks: [
          "Sales >= 70000 শর্ত লিখুন।",
          "Attendance >= 85 শর্ত লিখুন।",
          "AND দিয়ে দুইটি Condition যুক্ত করুন।",
          "দুই শর্ত সত্য হলে Bonus Eligible লিখুন।",
          "অন্যথায় Not Eligible লিখুন।",
          "সব Employee-এর Result দেখুন।"
        ],

        challenge:
          "Quality Score 90 বা তার বেশি হলে Bonus Eligibility-র তৃতীয় শর্ত যোগ করুন।"
      },

      {
        title: "Bonus Mission — Logic Master 🧠",

        story:
          "Manager চান যাদের Sales ভালো অথবা Quality Score ভালো—তাদের Shortlist করতে।",

        instruction:
          "IF + OR ব্যবহার করে Shortlist তৈরি করুন।",

        tasks: [
          "Sales >= 70000 শর্ত লিখুন।",
          "Quality Score >= 90 শর্ত লিখুন।",
          "OR দিয়ে দুইটি Condition যুক্ত করুন।",
          "যেকোনো একটি সত্য হলে Shortlisted লিখুন।",
          "অন্যথায় Not Shortlisted লিখুন।",
          "সব Employee-এর Result Compare করুন।"
        ],

        challenge:
          "নিজে একটি নতুন AND Rule এবং একটি নতুন OR Rule তৈরি করুন।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "AND Function-এ সব শর্ত সত্য হতে হয়।",
    "OR Function-এ যেকোনো একটি শর্ত সত্য হলেই TRUE হয়।",
    "IF + AND দিয়ে একাধিক শর্ত পূরণ হলে Business Decision তৈরি করা যায়।",
    "IF + OR দিয়ে একাধিক শর্তের যেকোনো একটি পূরণ হলে Decision তৈরি করা যায়।",
    "AND মনে রাখুন: সবগুলো লাগবে।",
    "OR মনে রাখুন: একটি হলেই হবে।"
  ],

  quiz: [
    {
      question: "AND Function কখন TRUE দেয়?",

      options: [
        "সব শর্ত সত্য হলে",
        "একটি শর্ত সত্য হলে",
        "কোনো শর্ত সত্য না হলে",
        "শুধু প্রথম শর্ত সত্য হলে"
      ],

      answer: 0
    },

    {
      question: "OR Function কখন TRUE দেয়?",

      options: [
        "অন্তত একটি শর্ত সত্য হলে",
        "সব শর্ত সত্য হলে",
        "সব শর্ত মিথ্যা হলে",
        "শুধু শেষ শর্ত সত্য হলে"
      ],

      answer: 0
    },

    {
      question:
        "=AND(70>=50,90>=80) Formula-এর Result কী হবে?",

      options: [
        "TRUE",
        "FALSE",
        "70",
        "90"
      ],

      answer: 0
    },

    {
      question:
        '=IF(AND(B2>=50000,C2>=80),"Good","Bad")-এ Good কখন দেখাবে?',

      options: [
        "Sales এবং Attendance দুটোই শর্ত পূরণ করলে",
        "শুধু Sales শর্ত পূরণ করলে",
        "শুধু Attendance শর্ত পূরণ করলে",
        "কোনো শর্ত পূরণ না করলে"
      ],

      answer: 0
    },

    {
      question: "Training Required দেখাতে OR কখন ব্যবহার করা ভালো?",

      options: [
        "যেকোনো একটি সমস্যা থাকলেই Training দরকার হলে",
        "সব শর্ত অবশ্যই পূরণ হলে",
        "শুধু একটি নির্দিষ্ট Row-এর জন্য",
        "Data Sort করার জন্য"
      ],

      answer: 0
    },

    {
      question: "AND ও OR-এর মূল পার্থক্য কোনটি?",

      options: [
        "AND = সব শর্ত, OR = যেকোনো একটি শর্ত",
        "AND = যেকোনো একটি, OR = সব শর্ত",
        "দুটিই একই কাজ করে",
        "AND শুধু Number আর OR শুধু Text নিয়ে কাজ করে"
      ],

      answer: 0
    }
  ]
},


// ==========================
// Lesson 18
// ==========================

{
  id: 18,

  category: "advanced",

  level: "Advanced",

  title: "COUNTIF & SUMIF",

  description:
    "নির্দিষ্ট শর্ত অনুযায়ী কতগুলো Data আছে এবং সেই Data-এর মোট Value কত—COUNTIF ও SUMIF দিয়ে দ্রুত বের করুন।",

  duration: "৩৮ মিনিট",

  introduction:
    "অফিসে অনেক সময় Manager এমন প্রশ্ন করেন—Sales Department-এ কয়জন Employee আছে? Sales Department-এর মোট Sales কত? HR Department-এ মোট Salary কত? পুরো Data হাতে গুনে বের করার দরকার নেই। COUNTIF শর্ত মেনে কতগুলো Data আছে তা গুনে দেয়, আর SUMIF সেই শর্ত মেনে থাকা Data-এর Number যোগ করে। সহজভাবে মনে রাখুন—COUNTIF = কতজন/কতগুলো, SUMIF = মোট কত।",

  theory: [
    "COUNTIF কী?",
    "SUMIF কী?",
    "Criteria কী?",
    "COUNTIF-এর Range",
    "COUNTIF-এর Criteria",
    "SUMIF-এর Criteria Range",
    "SUMIF-এর Sum Range",
    "Text Criteria",
    "Number Criteria",
    "COUNTIF বনাম SUMIF"
  ],

  screenshots: [
    {
      title: "COUNTIF & SUMIF",
      image: "/images/lesson18/countif-sumif.png",
      description:
        "নির্দিষ্ট Department অনুযায়ী Employee Count এবং Total Sales বের করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "COUNTIF — Department Count",
      syntax: '=COUNTIF(B2:B20,"Sales")',
      explanation:
        "Department Range-এর মধ্যে Sales কতবার আছে তা গুনে দেয়।",

      example:
        '=COUNTIF(C2:C20,"Sales")'
    },

    {
      name: "SUMIF — Department Sales",
      syntax: '=SUMIF(B2:B20,"Sales",D2:D20)',
      explanation:
        "যেসব Row-তে Department Sales, সেই Row-এর Sales Value যোগ করে।",

      example:
        '=SUMIF(C2:C20,"Sales",E2:E20)'
    },

    {
      name: "COUNTIF — Salary Criteria",
      syntax: '=COUNTIF(D2:D20,">40000")',
      explanation:
        "Salary Range-এর মধ্যে 40,000-এর বেশি Salary কতজন পান তা গুনে দেয়।",

      example:
        '=COUNTIF(E2:E20,">40000")'
    },

    {
      name: "SUMIF — Salary Criteria",
      syntax: '=SUMIF(D2:D20,">40000",D2:D20)',
      explanation:
        "40,000-এর বেশি Salary পাওয়া Employee-দের Salary যোগ করে।",

      example:
        '=SUMIF(E2:E20,">40000",E2:E20)'
    }
  ],

  examples: [
    "👥 Sales Department-এ কতজন Employee আছে তা COUNTIF দিয়ে বের করা।",
    "💰 Sales Department-এর মোট Sales SUMIF দিয়ে বের করা।",
    "🏢 HR Department-এ কতজন Employee আছে তা Count করা।",
    "💵 40,000 টাকার বেশি Salary পাওয়া Employee কতজন তা বের করা।",
    "📊 50,000 টাকার বেশি Sales-এর মোট Amount বের করা।"
  ],

  questions: [
    {
      question: "COUNTIF কী করে?",
      answer:
        "একটি নির্দিষ্ট শর্ত পূরণ করা Data কতবার আছে তা গুনে দেয়।"
    },

    {
      question: "SUMIF কী করে?",
      answer:
        "একটি নির্দিষ্ট শর্ত পূরণ করা Row-এর Number Value যোগ করে।"
    },

    {
      question: "Criteria কী?",
      answer:
        "যে শর্তের ভিত্তিতে Excel Data গুনবে বা যোগ করবে সেটিই Criteria।"
    },

    {
      question: "COUNTIF-এর সহজ Logic কী?",
      answer:
        "শর্ত মিললে Count করো।"
    },

    {
      question: "SUMIF-এর সহজ Logic কী?",
      answer:
        "শর্ত মিললে সেই Value যোগ করো।"
    },

    {
      question: 'COUNTIF(B2:B20,"Sales") কী বের করে?',
      answer:
        "B2:B20 Range-এর মধ্যে Sales কতবার আছে তা বের করে।"
    },

    {
      question: 'SUMIF(B2:B20,"Sales",D2:D20) কী করে?',
      answer:
        "B2:B20-এ যেসব Row-তে Sales আছে, সেই Row-এর D Column-এর Value যোগ করে।"
    },

    {
      question: 'COUNTIF(D2:D20,">40000") কী করে?',
      answer:
        "40,000-এর বেশি Value কতগুলো আছে তা গুনে দেয়।"
    }
  ],

  tips: [
    "COUNTIF মনে রাখুন: Count + IF = শর্ত মেনে কতগুলো।",
    "SUMIF মনে রাখুন: Sum + IF = শর্ত মেনে মোট কত।",
    "Text Criteria হলে quotation mark ব্যবহার করুন।",
    "Greater Than বা Less Than Criteria লিখলে quotation mark ব্যবহার করুন।",
    "SUMIF-এর Criteria Range এবং Sum Range-এর Row সংখ্যা মিলিয়ে রাখুন।",
    "Formula কাজ না করলে Range এবং Criteria ঠিক আছে কিনা আগে পরীক্ষা করুন।"
  ],

  practice: [
    "Sales Department-এ কতজন Employee আছে COUNTIF দিয়ে বের করুন।",
    "HR Department-এ কতজন Employee আছে বের করুন।",
    "Sales Department-এর মোট Sales SUMIF দিয়ে বের করুন।",
    "40,000-এর বেশি Salary পাওয়া Employee কতজন তা বের করুন।",
    "50,000-এর বেশি Sales-এর মোট Amount বের করুন।",
    "COUNTIF এবং SUMIF-এর পার্থক্য নিজের ভাষায় লিখুন।"
  ],

  practiceData: {
    title: "Department Data Detective 🕵️",

    description:
      "আপনি একটি কোম্পানির HR ও Sales Reporting Team-এর সদস্য। Manager জানতে চান কোন Department-এ কতজন Employee আছে এবং প্রতিটি Department-এর মোট Sales কত। COUNTIF ও SUMIF ব্যবহার করে দ্রুত Report তৈরি করুন।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Salary",
      "Sales"
    ],

    rows: [
      ["EMP-001", "রাকিব", "Sales", "28000", "65000"],
      ["EMP-002", "সুমাইয়া", "HR", "35000", "42000"],
      ["EMP-003", "নাঈম", "Accounts", "42000", "78000"],
      ["EMP-004", "মাহি", "Sales", "50000", "50000"],
      ["EMP-005", "তানভীর", "Marketing", "32000", "38000"],
      ["EMP-006", "সাদিয়া", "IT", "48000", "92000"],
      ["EMP-007", "আরিফ", "Sales", "39000", "47000"],
      ["EMP-008", "মিম", "HR", "30000", "55000"],
      ["EMP-009", "শাওন", "Sales", "45000", "72000"],
      ["EMP-010", "লাবণ্য", "Marketing", "36000", "33000"],
      ["EMP-011", "ফারহান", "Sales", "46000", "61000"],
      ["EMP-012", "নিশাত", "HR", "38000", "49000"]
    ],

    missions: [
      {
        title: "Mission 1 — Department Counter 👥",

        story:
          "HR Manager জানতে চান Sales Department-এ মোট কতজন Employee কাজ করেন।",

        instruction:
          "COUNTIF ব্যবহার করে Sales Department-এর Employee Count বের করুন।",

        tasks: [
          "Department Column-এর Range নির্বাচন করুন।",
          "Criteria হিসেবে Sales ব্যবহার করুন।",
          "COUNTIF Formula লিখুন।",
          "Result দেখুন।",
          "Result-এর সঙ্গে Data মিলিয়ে দেখুন।"
        ],

        challenge:
          "এবার HR Department-এ কতজন Employee আছে COUNTIF দিয়ে বের করুন।"
      },

      {
        title: "Mission 2 — Sales Calculator 💰",

        story:
          "Sales Manager জানতে চান Sales Department-এর সব Employee মিলে মোট কত Sales করেছেন।",

        instruction:
          "SUMIF ব্যবহার করে Sales Department-এর Total Sales বের করুন।",

        tasks: [
          "Department Column-কে Criteria Range হিসেবে নির্বাচন করুন।",
          "Criteria হিসেবে Sales লিখুন।",
          "Sales Column-কে Sum Range হিসেবে নির্বাচন করুন।",
          "SUMIF Formula লিখুন।",
          "Total Sales দেখুন।"
        ],

        challenge:
          "HR Department-এর Total Sales-ও SUMIF দিয়ে বের করুন।"
      },

      {
        title: "Mission 3 — Salary Detective 💵",

        story:
          "Finance Manager জানতে চান 40,000 টাকার বেশি Salary পাওয়া Employee কতজন।",

        instruction:
          "COUNTIF ব্যবহার করে 40,000-এর বেশি Salary-এর Employee Count বের করুন।",

        tasks: [
          "Salary Column নির্বাচন করুন।",
          'Criteria হিসেবে ">40000" লিখুন।',
          "COUNTIF Formula তৈরি করুন।",
          "Result দেখুন।",
          "কোন Employee-রা এই Criteria পূরণ করে তা Data থেকে চিহ্নিত করুন।"
        ],

        challenge:
          "এবার 45,000-এর বেশি Salary পাওয়া Employee কতজন তা বের করুন।"
      },

      {
        title: "Bonus Mission — Reporting Pro 🏆",

        story:
          "Manager একটি ছোট Department Report চান যেখানে প্রতিটি Department-এর Employee Count এবং Total Sales থাকবে।",

        instruction:
          "COUNTIF এবং SUMIF ব্যবহার করে একটি Mini Report তৈরি করুন।",

        tasks: [
          "Sales Department-এর Employee Count বের করুন।",
          "Sales Department-এর Total Sales বের করুন।",
          "HR Department-এর Employee Count বের করুন।",
          "HR Department-এর Total Sales বের করুন।",
          "Marketing Department-এর Employee Count বের করুন।",
          "Marketing Department-এর Total Sales বের করুন।"
        ],

        challenge:
          "Accounts এবং IT Department-এর জন্যও একই Report তৈরি করুন।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "COUNTIF নির্দিষ্ট শর্ত পূরণ করা Data কতগুলো আছে তা গুনে দেয়।",
    "SUMIF নির্দিষ্ট শর্ত পূরণ করা Data-এর Number Value যোগ করে।",
    "Criteria হলো যে শর্তের ভিত্তিতে Count বা Sum করা হয়।",
    "COUNTIF-এর মূল ধারণা: শর্ত মিললে Count।",
    "SUMIF-এর মূল ধারণা: শর্ত মিললে Sum।",
    "COUNTIF ও SUMIF ব্যবহার করে Department, Salary, Sales এবং অন্যান্য Office Report দ্রুত তৈরি করা যায়।"
  ],

  quiz: [
    {
      question: "COUNTIF-এর প্রধান কাজ কী?",

      options: [
        "শর্ত মেনে Data Count করা",
        "শর্ত মেনে Data যোগ করা",
        "Data Sort করা",
        "Chart তৈরি করা"
      ],

      answer: 0
    },

    {
      question: "SUMIF-এর প্রধান কাজ কী?",

      options: [
        "শর্ত মেনে Number যোগ করা",
        "শর্ত মেনে Data Count করা",
        "Sheet Rename করা",
        "Data Filter করা"
      ],

      answer: 0
    },

    {
      question: 'COUNTIF(B2:B20,"Sales") কী বের করে?',

      options: [
        "Sales কতবার আছে",
        "Sales-এর Total Amount",
        "Sales-এর Average",
        "Sales-এর Highest Value"
      ],

      answer: 0
    },

    {
      question: 'SUMIF(B2:B20,"Sales",D2:D20)-এ B2:B20 কী?',

      options: [
        "Criteria Range",
        "Sum Range",
        "Result Range",
        "Lookup Range"
      ],

      answer: 0
    },

    {
      question: 'COUNTIF(D2:D20,">40000") কী বের করে?',

      options: [
        "40,000-এর বেশি Value কতটি",
        "40,000-এর কম Value কতটি",
        "সব Value-এর Total",
        "Average Value"
      ],

      answer: 0
    },

    {
      question: "COUNTIF ও SUMIF-এর সহজ পার্থক্য কোনটি?",

      options: [
        "COUNTIF = কতগুলো, SUMIF = মোট কত",
        "COUNTIF = মোট কত, SUMIF = কতগুলো",
        "দুটিই একই কাজ করে",
        "COUNTIF শুধু Text আর SUMIF শুধু Date নিয়ে কাজ করে"
      ],

      answer: 0
    }
  ]
},

// ==========================
// Lesson 19
// ==========================

{
  id: 19,

  category: "advanced",

  level: "Advanced",

  title: "SUMIFS & COUNTIFS",

  description:
    "একাধিক শর্ত একসাথে ব্যবহার করে কতগুলো Data আছে এবং সেই Data-এর মোট Value কত—COUNTIFS ও SUMIFS দিয়ে দ্রুত বের করুন।",

  duration: "৪২ মিনিট",

  introduction:
    "বাস্তব অফিস রিপোর্টে অনেক সময় একটি নয়, একাধিক শর্ত একসাথে দিতে হয়। যেমন—Sales Department-এর মধ্যে যাদের Sales 50,000 টাকার বেশি, তাদের সংখ্যা কত? অথবা Sales Department-এর যাদের Sales 50,000-এর বেশি, তাদের মোট Sales কত? একটি Criteria দিয়ে COUNTIF বা SUMIF যথেষ্ট নয়। একাধিক Criteria-এর জন্য COUNTIFS ও SUMIFS ব্যবহার করা হয়। সহজভাবে মনে রাখুন—COUNTIFS = একাধিক শর্ত মেনে কতগুলো, SUMIFS = একাধিক শর্ত মেনে মোট কত।",

  theory: [
    "COUNTIFS কী?",
    "SUMIFS কী?",
    "Multiple Criteria",
    "COUNTIFS-এর Criteria Range",
    "COUNTIFS-এর Criteria",
    "SUMIFS-এর Sum Range",
    "SUMIFS-এর Multiple Criteria",
    "Text Criteria",
    "Number Criteria",
    "COUNTIF/SUMIF বনাম COUNTIFS/SUMIFS"
  ],

  screenshots: [
    {
      title: "SUMIFS & COUNTIFS",
      image: "/images/lesson19/sumifs-countifs.png",
      description:
        "একাধিক শর্ত ব্যবহার করে Employee Count এবং Total Sales বের করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "COUNTIFS — Department + Sales",
      syntax: '=COUNTIFS(C2:C20,"Sales",E2:E20,">=50000")',
      explanation:
        "যেসব Employee-এর Department Sales এবং Sales 50,000 বা তার বেশি, তাদের সংখ্যা গুনে দেয়।",

      example:
        '=COUNTIFS(C2:C20,"Sales",E2:E20,">=50000")'
    },

    {
      name: "COUNTIFS — Department + Salary",
      syntax: '=COUNTIFS(C2:C20,"HR",D2:D20,">40000")',
      explanation:
        "HR Department-এর মধ্যে 40,000 টাকার বেশি Salary পাওয়া Employee-এর সংখ্যা বের করে।",

      example:
        '=COUNTIFS(C2:C20,"HR",D2:D20,">40000")'
    },

    {
      name: "SUMIFS — Department + Sales",
      syntax: '=SUMIFS(E2:E20,C2:C20,"Sales",E2:E20,">=50000")',
      explanation:
        "Sales Department-এর যেসব Employee-এর Sales 50,000 বা তার বেশি, তাদের Sales যোগ করে।",

      example:
        '=SUMIFS(E2:E20,C2:C20,"Sales",E2:E20,">=50000")'
    },

    {
      name: "SUMIFS — Department + Salary",
      syntax: '=SUMIFS(D2:D20,C2:C20,"HR",D2:D20,">40000")',
      explanation:
        "HR Department-এর 40,000 টাকার বেশি Salary পাওয়া Employee-দের Salary যোগ করে।",

      example:
        '=SUMIFS(D2:D20,C2:C20,"HR",D2:D20,">40000")'
    }
  ],

  examples: [
    "👥 Sales Department-এর মধ্যে 50,000 বা তার বেশি Sales করা Employee কতজন তা বের করা।",
    "💰 Sales Department-এর মধ্যে 50,000 বা তার বেশি Sales-এর মোট Amount বের করা।",
    "🏢 HR Department-এর মধ্যে 40,000-এর বেশি Salary পাওয়া Employee কতজন তা বের করা।",
    "💵 HR Department-এর 40,000-এর বেশি Salary-এর মোট Amount বের করা।",
    "📊 Department এবং Performance—দুই Criteria একসাথে ব্যবহার করে Management Report তৈরি করা।"
  ],

  questions: [
    {
      question: "COUNTIFS কী করে?",
      answer:
        "একাধিক শর্ত একসাথে পূরণ করা Data কতগুলো আছে তা গুনে দেয়।"
    },

    {
      question: "SUMIFS কী করে?",
      answer:
        "একাধিক শর্ত একসাথে পূরণ করা Row-এর Number Value যোগ করে।"
    },

    {
      question: "COUNTIF এবং COUNTIFS-এর পার্থক্য কী?",
      answer:
        "COUNTIF একটি Criteria দিয়ে Count করে, আর COUNTIFS একাধিক Criteria দিয়ে Count করে।"
    },

    {
      question: "SUMIF এবং SUMIFS-এর পার্থক্য কী?",
      answer:
        "SUMIF একটি Criteria দিয়ে Sum করে, আর SUMIFS একাধিক Criteria দিয়ে Sum করে।"
    },

    {
      question: "Multiple Criteria কী?",
      answer:
        "একসাথে একাধিক শর্ত ব্যবহার করাকে Multiple Criteria বলা হয়।"
    },

    {
      question: 'COUNTIFS(C2:C20,"Sales",E2:E20,">=50000") কী বের করে?',
      answer:
        "Sales Department-এর মধ্যে 50,000 বা তার বেশি Sales করা Employee-এর সংখ্যা বের করে।"
    },

    {
      question: "SUMIFS-এ প্রথম Range কী?",
      answer:
        "SUMIFS-এর প্রথম Range হলো যে Range-এর Number Value যোগ করা হবে, অর্থাৎ Sum Range।"
    },

    {
      question: "একাধিক Criteria কেন ব্যবহার করা হয়?",
      answer:
        "আরও নির্দিষ্ট এবং নির্ভুল Business Report তৈরি করার জন্য একাধিক Criteria ব্যবহার করা হয়।"
    }
  ],

  tips: [
    "COUNTIFS মনে রাখুন: একাধিক শর্ত মিলে কতগুলো।",
    "SUMIFS মনে রাখুন: একাধিক শর্ত মিলে মোট কত।",
    "COUNTIFS-এ প্রতিটি Criteria Range-এর সঙ্গে একটি Criteria থাকে।",
    "SUMIFS-এ প্রথমে Sum Range দিতে হয়।",
    "Criteria Range এবং Criteria-এর ক্রম ঠিক রাখুন।",
    "Greater Than বা Greater Than or Equal To Criteria লিখলে quotation mark ব্যবহার করুন।",
    "Formula বড় হলে প্রতিটি Criteria আলাদাভাবে পরীক্ষা করে তারপর পুরো Formula তৈরি করুন।"
  ],

  practice: [
    "Sales Department-এর 50,000 বা তার বেশি Sales করা Employee কতজন বের করুন।",
    "Sales Department-এর 50,000 বা তার বেশি Sales-এর মোট Amount বের করুন।",
    "HR Department-এর 40,000-এর বেশি Salary পাওয়া Employee কতজন বের করুন।",
    "HR Department-এর 40,000-এর বেশি Salary-এর মোট Amount বের করুন।",
    "Marketing Department-এর 40,000 বা তার বেশি Sales করা Employee Count করুন।",
    "একটি তিন-Criteria Report তৈরি করুন।"
  ],

  practiceData: {
    title: "Multi-Criteria Detective 🕵️",

    description:
      "আপনি একটি কোম্পানির Management Reporting Team-এর সদস্য। এবার Manager শুধু Department জানতে চান না—তিনি Department-এর সঙ্গে Sales ও Salary-এর নির্দিষ্ট শর্তও দিতে চান। আপনার কাজ হলো COUNTIFS ও SUMIFS ব্যবহার করে Multi-Criteria Report তৈরি করা।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Salary",
      "Sales",
      "Performance"
    ],

    rows: [
      ["EMP-001", "রাকিব", "Sales", "28000", "65000", "Excellent"],
      ["EMP-002", "সুমাইয়া", "HR", "35000", "42000", "Good"],
      ["EMP-003", "নাঈম", "Accounts", "42000", "78000", "Excellent"],
      ["EMP-004", "মাহি", "Sales", "50000", "50000", "Excellent"],
      ["EMP-005", "তানভীর", "Marketing", "32000", "38000", "Average"],
      ["EMP-006", "সাদিয়া", "IT", "48000", "92000", "Excellent"],
      ["EMP-007", "আরিফ", "Sales", "39000", "47000", "Good"],
      ["EMP-008", "মিম", "HR", "30000", "55000", "Good"],
      ["EMP-009", "শাওন", "Sales", "45000", "72000", "Excellent"],
      ["EMP-010", "লাবণ্য", "Marketing", "36000", "33000", "Average"],
      ["EMP-011", "ফারহান", "Sales", "46000", "61000", "Excellent"],
      ["EMP-012", "নিশাত", "HR", "38000", "49000", "Good"]
    ],

    missions: [
      {
        title: "Mission 1 — Multi-Criteria Counter 👥",

        story:
          "Sales Manager জানতে চান Sales Department-এর মধ্যে যাদের Sales কমপক্ষে 50,000 টাকা, এমন Employee কতজন।",

        instruction:
          "COUNTIFS ব্যবহার করে দুইটি Criteria একসাথে পরীক্ষা করুন।",

        tasks: [
          "Department Column-কে প্রথম Criteria Range হিসেবে নির্বাচন করুন।",
          'Criteria হিসেবে "Sales" ব্যবহার করুন।',
          "Sales Column-কে দ্বিতীয় Criteria Range হিসেবে নির্বাচন করুন।",
          'Criteria হিসেবে ">=50000" ব্যবহার করুন।',
          "COUNTIFS Formula তৈরি করুন।",
          "Result দেখুন।"
        ],

        challenge:
          "Sales Target 60,000 করলে Count কত হয় তা বের করুন।"
      },

      {
        title: "Mission 2 — Multi-Criteria Sales 💰",

        story:
          "Management জানতে চায় Sales Department-এর যেসব Employee 50,000 বা তার বেশি Sales করেছেন, তাদের মোট Sales কত।",

        instruction:
          "SUMIFS ব্যবহার করে Department এবং Sales—দুই Criteria একসাথে ব্যবহার করুন।",

        tasks: [
          "Sales Column-কে Sum Range হিসেবে নির্বাচন করুন।",
          "Department Column-কে Criteria Range হিসেবে নির্বাচন করুন।",
          'Criteria হিসেবে "Sales" লিখুন।',
          "Sales Column-কে দ্বিতীয় Criteria Range হিসেবে নির্বাচন করুন।",
          'Criteria হিসেবে ">=50000" লিখুন।',
          "SUMIFS Formula তৈরি করুন।",
          "Total Sales দেখুন।"
        ],

        challenge:
          "Sales Target 60,000 করে Total Sales আবার বের করুন।"
      },

      {
        title: "Mission 3 — Salary Detective 💵",

        story:
          "HR Manager জানতে চান HR Department-এর মধ্যে 40,000 টাকার বেশি Salary পাওয়া Employee কতজন এবং তাদের মোট Salary কত।",

        instruction:
          "COUNTIFS এবং SUMIFS—দুইটি Function ব্যবহার করে HR Salary Report তৈরি করুন।",

        tasks: [
          "HR Department-এর Employee Count COUNTIFS দিয়ে বের করুন।",
          "Salary > 40000 Criteria যোগ করুন।",
          "HR Department-এর 40,000-এর বেশি Salary-এর Total SUMIFS দিয়ে বের করুন।",
          "দুইটি Result Compare করুন।",
          "Data থেকে সংশ্লিষ্ট Employee-দের চিহ্নিত করুন।"
        ],

        challenge:
          "Salary Criteria 45,000-এর বেশি করে Report পরিবর্তন করুন।"
      },

      {
        title: "Bonus Mission — Reporting Master 🏆",

        story:
          "Management একটি Advanced Report চায়—শুধু Sales Department-এর Employee নয়, তাদের Performance-ও Excellent হতে হবে এবং Sales কমপক্ষে 50,000 হতে হবে।",

        instruction:
          "তিনটি Criteria ব্যবহার করে Multi-Criteria Report তৈরি করুন।",

        tasks: [
          "Department = Sales Criteria তৈরি করুন।",
          "Sales >= 50000 Criteria তৈরি করুন।",
          "Performance = Excellent Criteria তৈরি করুন।",
          "COUNTIFS দিয়ে কতজন Employee সব Criteria পূরণ করে তা বের করুন।",
          "SUMIFS দিয়ে তাদের Total Sales বের করুন।"
        ],

        challenge:
          "Sales Target 60,000 করে Report আবার Calculate করুন এবং Result Compare করুন।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "COUNTIFS একাধিক Criteria পূরণ করা Data Count করে।",
    "SUMIFS একাধিক Criteria পূরণ করা Data-এর Number Value যোগ করে।",
    "COUNTIF/SUMIF একটি Criteria-এর জন্য উপযোগী।",
    "COUNTIFS/SUMIFS একাধিক Criteria-এর জন্য উপযোগী।",
    "SUMIFS-এ প্রথমে Sum Range দিতে হয়।",
    "Multi-Criteria Formula দিয়ে আরও নির্দিষ্ট এবং বাস্তব Office Report তৈরি করা যায়।"
  ],

  quiz: [
    {
      question: "COUNTIFS-এর প্রধান কাজ কী?",

      options: [
        "একাধিক শর্ত মিলে কতগুলো Data আছে তা Count করা",
        "একটি শর্ত মিলে Data যোগ করা",
        "Data Sort করা",
        "Chart তৈরি করা"
      ],

      answer: 0
    },

    {
      question: "SUMIFS-এর প্রধান কাজ কী?",

      options: [
        "একাধিক শর্ত মিলে Number Value যোগ করা",
        "একটি শর্ত মিলে Data Count করা",
        "Data Filter করা",
        "Cell Merge করা"
      ],

      answer: 0
    },

    {
      question: "COUNTIF থেকে COUNTIFS কেন ব্যবহার করা হয়?",

      options: [
        "একাধিক Criteria একসাথে ব্যবহার করার জন্য",
        "শুধু Text Count করার জন্য",
        "শুধু Number যোগ করার জন্য",
        "Formula Short করার জন্য"
      ],

      answer: 0
    },

    {
      question:
        'COUNTIFS(C2:C20,"Sales",E2:E20,">=50000")-এ কয়টি Criteria ব্যবহার হয়েছে?',

      options: [
        "২টি",
        "১টি",
        "৩টি",
        "৪টি"
      ],

      answer: 0
    },

    {
      question: "SUMIFS-এর প্রথম Argument কী?",

      options: [
        "Sum Range",
        "Criteria",
        "Criteria Range",
        "Lookup Value"
      ],

      answer: 0
    },

    {
      question: "একজন Employee-কে Count করতে হলে Department = Sales এবং Sales >= 50000—কোন Function উপযুক্ত?",

      options: [
        "COUNTIFS",
        "COUNTIF",
        "SUMIF",
        "AVERAGE"
      ],

      answer: 0
    },

    {
      question: "Sales Department + Sales >= 50000 Employee-দের মোট Sales বের করতে কোন Function উপযুক্ত?",

      options: [
        "SUMIFS",
        "COUNTIFS",
        "COUNTIF",
        "MAX"
      ],

      answer: 0
    }
  ]
},


// ==========================
// Lesson 20
// ==========================

{
  id: 20,

  category: "advanced",

  level: "Advanced",

  title: "XLOOKUP Function",

  description:
    "Employee ID বা অন্য কোনো Lookup Value ব্যবহার করে Excel থেকে দ্রুত Name, Department, Salary, Sales এবং অন্যান্য তথ্য খুঁজে বের করুন।",

  duration: "৪৫ মিনিট",

  introduction:
    "অফিসে Manager আপনাকে বললেন—EMP-006 Employee-এর নাম, Department, Salary এবং Sales বের করতে হবে। হাজার হাজার Row-এর মধ্যে হাতে খুঁজে বের করা সময়সাপেক্ষ এবং ভুল হওয়ার সম্ভাবনাও থাকে। XLOOKUP ব্যবহার করে একটি Lookup Value দিলেই Excel নির্দিষ্ট Table থেকে সম্পর্কিত তথ্য খুঁজে বের করতে পারে। এই Lesson-এ আমরা Employee ID ব্যবহার করে বিভিন্ন তথ্য বের করব এবং XLOOKUP-এর মূল Logic বুঝব।",

  theory: [
    "XLOOKUP কী?",
    "Lookup Value",
    "Lookup Array",
    "Return Array",
    "Exact Match",
    "Not Found Message",
    "Column Lookup",
    "Row Lookup",
    "XLOOKUP-এর সুবিধা",
    "XLOOKUP বনাম VLOOKUP"
  ],

  screenshots: [
    {
      title: "XLOOKUP Example",
      image: "/images/lesson20/xlookup.png",
      description:
        "Employee ID ব্যবহার করে Employee-এর Name, Department, Salary এবং Sales খুঁজে বের করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "XLOOKUP — Employee Name",
      syntax:
        '=XLOOKUP(H2,A2:A20,B2:B20,"Not Found")',
      explanation:
        "H2-এর Employee ID A2:A20-এর মধ্যে খুঁজে সংশ্লিষ্ট Name B2:B20 থেকে ফিরিয়ে দেয়।",

      example:
        '=XLOOKUP(H2,A2:A20,B2:B20,"Not Found")'
    },

    {
      name: "XLOOKUP — Department",
      syntax:
        '=XLOOKUP(H2,A2:A20,C2:C20,"Not Found")',
      explanation:
        "Employee ID খুঁজে সংশ্লিষ্ট Department Return করে।",

      example:
        '=XLOOKUP(H2,A2:A20,C2:C20,"Not Found")'
    },

    {
      name: "XLOOKUP — Salary",
      syntax:
        '=XLOOKUP(H2,A2:A20,D2:D20,"Not Found")',
      explanation:
        "Employee ID ব্যবহার করে সংশ্লিষ্ট Salary খুঁজে বের করে।",

      example:
        '=XLOOKUP(H2,A2:A20,D2:D20,"Not Found")'
    },

    {
      name: "XLOOKUP — Sales",
      syntax:
        '=XLOOKUP(H2,A2:A20,E2:E20,"Not Found")',
      explanation:
        "Employee ID ব্যবহার করে সংশ্লিষ্ট Sales Value Return করে।",

      example:
        '=XLOOKUP(H2,A2:A20,E2:E20,"Not Found")'
    }
  ],

  examples: [
    "👤 Employee ID দিয়ে Employee Name খুঁজে বের করা।",
    "🏢 Employee ID দিয়ে Department বের করা।",
    "💵 Employee ID দিয়ে Salary বের করা।",
    "💰 Employee ID দিয়ে Sales Amount বের করা।",
    "📋 Manager-এর দেওয়া Employee ID থেকে একটি Quick Employee Report তৈরি করা।"
  ],

  questions: [
    {
      question: "XLOOKUP কী?",
      answer:
        "XLOOKUP হলো Excel-এর একটি Lookup Function, যা একটি Value খুঁজে নির্দিষ্ট Range বা Array থেকে সম্পর্কিত Result ফিরিয়ে দেয়।"
    },

    {
      question: "Lookup Value কী?",
      answer:
        "যে Value-টি Excel-এর মধ্যে খুঁজতে চাই সেটিই Lookup Value। যেমন Employee ID।"
    },

    {
      question: "Lookup Array কী?",
      answer:
        "যে Range-এর মধ্যে Excel Lookup Value খুঁজবে সেটিই Lookup Array।"
    },

    {
      question: "Return Array কী?",
      answer:
        "যে Range থেকে খুঁজে পাওয়া Lookup Value-এর সম্পর্কিত Result ফিরিয়ে আনা হবে সেটিই Return Array।"
    },

    {
      question: "XLOOKUP-এ Not Found Message কেন ব্যবহার করা হয়?",
      answer:
        "Lookup Value না পাওয়া গেলে Error-এর পরিবর্তে একটি পরিষ্কার Message দেখানোর জন্য।"
    },

    {
      question:
        '=XLOOKUP(H2,A2:A20,B2:B20,"Not Found")-এ H2 কী?',
      answer:
        "H2 হলো Lookup Value।"
    },

    {
      question:
        '=XLOOKUP(H2,A2:A20,B2:B20,"Not Found")-এ A2:A20 কী?',
      answer:
        "A2:A20 হলো Lookup Array।"
    },

    {
      question:
        '=XLOOKUP(H2,A2:A20,B2:B20,"Not Found")-এ B2:B20 কী?',
      answer:
        "B2:B20 হলো Return Array।"
    }
  ],

  tips: [
    "XLOOKUP মনে রাখুন: Search → Find → Return।",
    "Lookup Array এবং Return Array-এর Size/Rows সঠিকভাবে মিলিয়ে রাখুন।",
    "Not Found Message ব্যবহার করলে Report আরও Professional দেখায়।",
    "Employee ID-এর মতো Unique ID Lookup Value হিসেবে ব্যবহার করা ভালো।",
    "Lookup Value ভুল হলে Result-ও ভুল বা Not Found হতে পারে।",
    "Formula Copy করার সময় Reference ঠিক আছে কিনা পরীক্ষা করুন।"
  ],

  practice: [
    "Employee ID দিয়ে Employee Name বের করুন।",
    "Employee ID দিয়ে Department বের করুন।",
    "Employee ID দিয়ে Salary বের করুন।",
    "Employee ID দিয়ে Sales বের করুন।",
    "ভুল Employee ID দিয়ে XLOOKUP করে Not Found Result দেখুন।",
    "একটি Employee Quick Report তৈরি করুন।"
  ],

  practiceData: {
    title: "Employee Lookup Detective 🕵️",

    description:
      "আপনি একটি কোম্পানির HR Reporting Team-এর সদস্য। Manager আপনাকে Employee ID দিচ্ছেন এবং প্রত্যেক Employee-এর Name, Department, Salary ও Sales জানতে চাইছেন। আপনার কাজ হলো XLOOKUP ব্যবহার করে দ্রুত Employee Information বের করা।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Salary",
      "Sales"
    ],

    rows: [
      ["EMP-001", "রাকিব", "Sales", "28000", "65000"],
      ["EMP-002", "সুমাইয়া", "HR", "35000", "42000"],
      ["EMP-003", "নাঈম", "Accounts", "42000", "78000"],
      ["EMP-004", "মাহি", "Sales", "50000", "50000"],
      ["EMP-005", "তানভীর", "Marketing", "32000", "38000"],
      ["EMP-006", "সাদিয়া", "IT", "48000", "92000"],
      ["EMP-007", "আরিফ", "Sales", "39000", "47000"],
      ["EMP-008", "মিম", "HR", "30000", "55000"],
      ["EMP-009", "শাওন", "Sales", "45000", "72000"],
      ["EMP-010", "লাবণ্য", "Marketing", "36000", "33000"],
      ["EMP-011", "ফারহান", "Sales", "46000", "61000"],
      ["EMP-012", "নিশাত", "HR", "38000", "49000"]
    ],

    missions: [
      {
        title: "Mission 1 — Name Detective 👤",

        story:
          "HR Manager আপনাকে Employee ID EMP-006 দিয়েছেন। তিনি শুধু Employee-এর Name জানতে চান।",

        instruction:
          "XLOOKUP ব্যবহার করে Employee Name খুঁজে বের করুন।",

        tasks: [
          "একটি Lookup Cell নির্বাচন করুন।",
          "Lookup Value হিসেবে EMP-006 ব্যবহার করুন।",
          "Employee ID Column-কে Lookup Array হিসেবে ব্যবহার করুন।",
          "Name Column-কে Return Array হিসেবে ব্যবহার করুন।",
          "XLOOKUP Formula লিখুন।",
          "Employee Name দেখুন।"
        ],

        challenge:
          "EMP-009 এবং EMP-011-এর Name XLOOKUP দিয়ে বের করুন।"
      },

      {
        title: "Mission 2 — Department Detective 🏢",

        story:
          "Manager জানতে চান EMP-008 কোন Department-এ কাজ করেন।",

        instruction:
          "Employee ID ব্যবহার করে Department বের করুন।",

        tasks: [
          "Lookup Value হিসেবে EMP-008 দিন।",
          "Employee ID Column Lookup Array হিসেবে নির্বাচন করুন।",
          "Department Column Return Array হিসেবে নির্বাচন করুন।",
          "XLOOKUP Formula তৈরি করুন।",
          "Department Result দেখুন।"
        ],

        challenge:
          "EMP-003, EMP-006 এবং EMP-010-এর Department বের করুন।"
      },

      {
        title: "Mission 3 — Salary Detective 💵",

        story:
          "Finance Team জানতে চায় EMP-003-এর Salary কত।",

        instruction:
          "XLOOKUP ব্যবহার করে Employee Salary বের করুন।",

        tasks: [
          "Lookup Value হিসেবে EMP-003 ব্যবহার করুন।",
          "Employee ID Column Lookup Array হিসেবে নির্বাচন করুন।",
          "Salary Column Return Array হিসেবে নির্বাচন করুন।",
          "Not Found Message যোগ করুন।",
          "Formula Calculate করুন।",
          "Salary Result দেখুন।"
        ],

        challenge:
          "EMP-006, EMP-009 এবং EMP-012-এর Salary বের করুন।"
      },

      {
        title: "Bonus Mission — Employee Report Pro 🏆",

        story:
          "Management একটি Quick Employee Report চায়। তারা Employee ID দিলে Excel যেন নিজে থেকেই Name, Department, Salary এবং Sales দেখায়।",

        instruction:
          "একটি Employee Lookup Dashboard তৈরি করুন।",

        tasks: [
          "একটি Employee ID Input Cell তৈরি করুন।",
          "XLOOKUP দিয়ে Name বের করুন।",
          "XLOOKUP দিয়ে Department বের করুন।",
          "XLOOKUP দিয়ে Salary বের করুন।",
          "XLOOKUP দিয়ে Sales বের করুন।",
          "প্রতিটি Formula-তে Not Found Message ব্যবহার করুন।"
        ],

        challenge:
          "EMP-001 থেকে EMP-012 পর্যন্ত বিভিন্ন ID দিয়ে Input পরিবর্তন করে Report Test করুন।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "XLOOKUP একটি Lookup Value খুঁজে সম্পর্কিত Result Return করে।",
    "Lookup Value হলো যে Value আমরা খুঁজতে চাই।",
    "Lookup Array হলো যেখানে Lookup Value খোঁজা হয়।",
    "Return Array হলো যেখান থেকে Result ফেরত আসে।",
    "Not Found Message ব্যবহার করলে Lookup Report আরও পরিষ্কার হয়।",
    "Employee ID-এর মতো Unique Identifier দিয়ে XLOOKUP খুব কার্যকরভাবে ব্যবহার করা যায়।"
  ],

  quiz: [
    {
      question: "XLOOKUP-এর প্রধান কাজ কী?",

      options: [
        "একটি Value খুঁজে সম্পর্কিত Result Return করা",
        "Data Sort করা",
        "Chart তৈরি করা",
        "Cell Format করা"
      ],

      answer: 0
    },

    {
      question: "Lookup Value কী?",

      options: [
        "যে Value-টি খুঁজতে চাই",
        "যে Result Return হবে",
        "যে Sheet-এ Formula আছে",
        "যে Cell Format করা হবে"
      ],

      answer: 0
    },

    {
      question:
        '=XLOOKUP(H2,A2:A20,B2:B20,"Not Found")-এ A2:A20 কী?',

      options: [
        "Lookup Array",
        "Return Array",
        "Lookup Value",
        "Result"
      ],

      answer: 0
    },

    {
      question:
        '=XLOOKUP(H2,A2:A20,B2:B20,"Not Found")-এ B2:B20 কী?',

      options: [
        "Return Array",
        "Lookup Array",
        "Lookup Value",
        "Criteria"
      ],

      answer: 0
    },

    {
      question: "Employee ID দিয়ে Employee Name বের করতে কোন Function ব্যবহার করা হচ্ছে?",

      options: [
        "XLOOKUP",
        "SUMIF",
        "COUNTIF",
        "IF"
      ],

      answer: 0
    },

    {
      question: "XLOOKUP-এ Not Found Message-এর সুবিধা কী?",

      options: [
        "Value না পেলে পরিষ্কার Message দেখানো",
        "Data Automatically Sort করা",
        "Formula Delete করা",
        "Cell Color পরিবর্তন করা"
      ],

      answer: 0
    },

    {
      question: "XLOOKUP শেখার সহজ Logic কোনটি?",

      options: [
        "Search → Find → Return",
        "Sort → Filter → Delete",
        "Count → Sum → Average",
        "Copy → Paste → Format"
      ],

      answer: 0
    }
  ]
},

// ==========================
// Lesson 21
// ==========================

{
  id: 21,

  category: "advanced",

  level: "Advanced",

  title: "VLOOKUP Function",

  description:
    "Employee ID বা Product Code ব্যবহার করে Excel-এর Table থেকে Name, Department, Salary, Price এবং অন্যান্য তথ্য খুঁজে বের করুন।",

  duration: "৪৫ মিনিট",

  introduction:
    "Excel-এর সবচেয়ে পরিচিত Lookup Function-গুলোর একটি হলো VLOOKUP। অনেক কোম্পানির পুরোনো Excel File, Office Report এবং Database Template-এ এখনো VLOOKUP ব্যাপকভাবে ব্যবহার করা হয়। তাই একজন Professional Excel User-এর VLOOKUP জানা জরুরি। এই Lesson-এ Employee ID ব্যবহার করে Name, Department, Salary ও Sales বের করা হবে এবং শেষে VLOOKUP ও XLOOKUP-এর গুরুত্বপূর্ণ পার্থক্য বোঝানো হবে।",

  theory: [
    "VLOOKUP কী?",
    "Lookup Value",
    "Table Array",
    "Column Index Number",
    "Range Lookup",
    "Exact Match",
    "Approximate Match",
    "FALSE কেন ব্যবহার করা হয়?",
    "VLOOKUP-এর সীমাবদ্ধতা",
    "VLOOKUP বনাম XLOOKUP"
  ],

  screenshots: [
    {
      title: "VLOOKUP Example",
      image: "/images/lesson21/vlookup.png",
      description:
        "Employee ID ব্যবহার করে Table থেকে Employee-এর তথ্য খুঁজে বের করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "VLOOKUP — Employee Name",
      syntax: '=VLOOKUP(G2,A2:E20,2,FALSE)',
      explanation:
        "G2-এর Employee ID Table-এর প্রথম Column-এ খুঁজে সংশ্লিষ্ট Name-এর Value Return করে।",
      example: '=VLOOKUP(G2,A2:E20,2,FALSE)'
    },

    {
      name: "VLOOKUP — Department",
      syntax: '=VLOOKUP(G2,A2:E20,3,FALSE)',
      explanation:
        "Employee ID খুঁজে Table-এর 3 নম্বর Column থেকে Department Return করে।",
      example: '=VLOOKUP(G2,A2:E20,3,FALSE)'
    },

    {
      name: "VLOOKUP — Salary",
      syntax: '=VLOOKUP(G2,A2:E20,4,FALSE)',
      explanation:
        "Employee ID ব্যবহার করে Table-এর 4 নম্বর Column থেকে Salary বের করে।",
      example: '=VLOOKUP(G2,A2:E20,4,FALSE)'
    },

    {
      name: "VLOOKUP — Sales",
      syntax: '=VLOOKUP(G2,A2:E20,5,FALSE)',
      explanation:
        "Employee ID ব্যবহার করে Table-এর 5 নম্বর Column থেকে Sales Value Return করে।",
      example: '=VLOOKUP(G2,A2:E20,5,FALSE)'
    }
  ],

  examples: [
    "👤 Employee ID দিয়ে Employee Name খুঁজে বের করা।",
    "🏢 Employee ID দিয়ে Department বের করা।",
    "💵 Employee ID দিয়ে Salary বের করা।",
    "💰 Employee ID দিয়ে Sales Amount বের করা।",
    "📦 Product Code দিয়ে Product Price খুঁজে বের করা।",
    "📋 পুরোনো Office Excel Report থেকে Employee Information বের করা।"
  ],

  questions: [
    {
      question: "VLOOKUP কী?",
      answer:
        "VLOOKUP হলো Excel-এর একটি Lookup Function, যা Table-এর প্রথম Column-এ একটি Value খুঁজে একই Row-এর অন্য Column থেকে তথ্য Return করে।"
    },

    {
      question: "VLOOKUP-এর V কী বোঝায়?",
      answer:
        "V হলো Vertical। অর্থাৎ VLOOKUP Verticalভাবে Table-এর প্রথম Column-এ Lookup Value খোঁজে।"
    },

    {
      question: "Lookup Value কী?",
      answer:
        "যে Value-টি Table-এর প্রথম Column-এ খুঁজতে চাই সেটিই Lookup Value।"
    },

    {
      question: "Table Array কী?",
      answer:
        "যে পুরো Table Range-এর মধ্যে VLOOKUP কাজ করবে সেটিই Table Array।"
    },

    {
      question: "Column Index Number কী?",
      answer:
        "Table Array-এর কোন Column থেকে Result Return করা হবে সেই Column-এর Number হলো Column Index Number।"
    },

    {
      question: "FALSE কেন ব্যবহার করা হয়?",
      answer:
        "Exact Match করার জন্য FALSE ব্যবহার করা হয়। Employee ID-এর মতো Unique ID Lookup করার সময় Exact Match সাধারণত সবচেয়ে উপযোগী।"
    },

    {
      question: "TRUE কী বোঝায়?",
      answer:
        "TRUE Approximate Match-এর জন্য ব্যবহৃত হয়।"
    },

    {
      question:
        '=VLOOKUP(G2,A2:E20,3,FALSE)-এ 3 কী বোঝায়?',
      answer:
        "Table Array-এর 3 নম্বর Column থেকে Result Return করতে হবে।"
    },

    {
      question: "VLOOKUP-এর একটি গুরুত্বপূর্ণ সীমাবদ্ধতা কী?",
      answer:
        "VLOOKUP সাধারণভাবে Table Array-এর প্রথম Column-এ Lookup Value খুঁজে ডান পাশের Column থেকে Result Return করে।"
    }
  ],

  tips: [
    "VLOOKUP মনে রাখুন: Search → Column Number → Result।",
    "Exact Match-এর জন্য FALSE ব্যবহার করুন।",
    "Table Array-এর প্রথম Column-এ Lookup Value থাকতে হবে।",
    "Column Index Number গুনতে ভুল করবেন না।",
    "Employee ID-এর মতো Unique Value Lookup Value হিসেবে ব্যবহার করা ভালো।",
    "VLOOKUP Formula Copy করার সময় Table Array Lock করার প্রয়োজন হতে পারে।",
    "VLOOKUP-এর সীমাবদ্ধতা জানুন—সব Lookup কাজের জন্য এটি সেরা নয়।"
  ],

  practice: [
    "Employee ID দিয়ে Name বের করুন।",
    "Employee ID দিয়ে Department বের করুন।",
    "Employee ID দিয়ে Salary বের করুন।",
    "Employee ID দিয়ে Sales বের করুন।",
    "একটি ভুল Employee ID দিয়ে VLOOKUP Test করুন।",
    "Column Index Number পরিবর্তন করে বিভিন্ন Result বের করুন।",
    "একই Lookup কাজ XLOOKUP দিয়েও করে VLOOKUP-এর সঙ্গে Compare করুন।"
  ],

  practiceData: {
    title: "VLOOKUP Detective 🕵️",

    description:
      "আপনি একটি কোম্পানির Reporting Team-এর সদস্য। কোম্পানির পুরোনো Excel System VLOOKUP-এর উপর নির্ভরশীল। Manager Employee ID দিলে আপনাকে দ্রুত Name, Department, Salary এবং Sales বের করতে হবে।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Salary",
      "Sales"
    ],

    rows: [
      ["EMP-001", "রাকিব", "Sales", "28000", "65000"],
      ["EMP-002", "সুমাইয়া", "HR", "35000", "42000"],
      ["EMP-003", "নাঈম", "Accounts", "42000", "78000"],
      ["EMP-004", "মাহি", "Sales", "50000", "50000"],
      ["EMP-005", "তানভীর", "Marketing", "32000", "38000"],
      ["EMP-006", "সাদিয়া", "IT", "48000", "92000"],
      ["EMP-007", "আরিফ", "Sales", "39000", "47000"],
      ["EMP-008", "মিম", "HR", "30000", "55000"],
      ["EMP-009", "শাওন", "Sales", "45000", "72000"],
      ["EMP-010", "লাবণ্য", "Marketing", "36000", "33000"],
      ["EMP-011", "ফারহান", "Sales", "46000", "61000"],
      ["EMP-012", "নিশাত", "HR", "38000", "49000"]
    ],

    missions: [
      {
        title: "Mission 1 — Name Detective 👤",

        story:
          "Manager আপনাকে EMP-006 Employee ID দিয়েছেন। এখন শুধু Employee-এর Name বের করতে হবে।",

        instruction:
          "VLOOKUP ব্যবহার করে Employee Name খুঁজে বের করুন।",

        tasks: [
          "একটি Lookup Cell নির্বাচন করুন।",
          "Lookup Value হিসেবে EMP-006 ব্যবহার করুন।",
          "পুরো Employee Table-কে Table Array হিসেবে নির্বাচন করুন।",
          "Name-এর Column Index Number নির্ধারণ করুন।",
          "Exact Match-এর জন্য FALSE ব্যবহার করুন।",
          "VLOOKUP Formula লিখুন।"
        ],

        challenge:
          "EMP-009 এবং EMP-011-এর Name VLOOKUP দিয়ে বের করুন।"
      },

      {
        title: "Mission 2 — Department Detective 🏢",

        story:
          "HR Team জানতে চায় EMP-008 কোন Department-এ কাজ করেন।",

        instruction:
          "VLOOKUP দিয়ে Department বের করুন।",

        tasks: [
          "Lookup Value হিসেবে EMP-008 দিন।",
          "Employee Table নির্বাচন করুন।",
          "Department-এর Column Index Number বের করুন।",
          "FALSE দিয়ে Exact Match করুন।",
          "Formula Calculate করুন।",
          "Department Result দেখুন।"
        ],

        challenge:
          "EMP-003, EMP-006 এবং EMP-010-এর Department বের করুন।"
      },

      {
        title: "Mission 3 — Salary Detective 💵",

        story:
          "Finance Team জানতে চায় EMP-003-এর Salary কত।",

        instruction:
          "VLOOKUP ব্যবহার করে Salary বের করুন।",

        tasks: [
          "Lookup Value হিসেবে EMP-003 ব্যবহার করুন।",
          "Employee Table নির্বাচন করুন।",
          "Salary-এর Column Index Number নির্ধারণ করুন।",
          "FALSE ব্যবহার করে Exact Match করুন।",
          "Formula Calculate করুন।",
          "Salary Result দেখুন।"
        ],

        challenge:
          "EMP-006, EMP-009 এবং EMP-012-এর Salary বের করুন।"
      },

      {
        title: "Bonus Mission — VLOOKUP vs XLOOKUP 🏆",

        story:
          "আপনার অফিসে পুরোনো Report VLOOKUP ব্যবহার করে তৈরি করা হয়েছে। নতুন Report-এ XLOOKUP ব্যবহার করা হচ্ছে। Manager চান আপনি দুইটির পার্থক্য বুঝে কাজ করুন।",

        instruction:
          "একই Employee ID দিয়ে VLOOKUP এবং XLOOKUP ব্যবহার করে একই তথ্য বের করুন।",

        tasks: [
          "VLOOKUP দিয়ে Employee Name বের করুন।",
          "XLOOKUP দিয়ে একই Employee Name বের করুন।",
          "VLOOKUP দিয়ে Department বের করুন।",
          "XLOOKUP দিয়ে Department বের করুন।",
          "দুই Formula-এর Result Compare করুন।",
          "কোন Formula-তে Column Index Number প্রয়োজন হয় তা চিহ্নিত করুন।"
        ],

        challenge:
          "নিজে লিখুন—VLOOKUP কখন ব্যবহার করা সুবিধাজনক এবং XLOOKUP কখন বেশি flexible।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "VLOOKUP Table-এর প্রথম Column-এ Lookup Value খুঁজে একই Row থেকে Result Return করে।",
    "VLOOKUP-এর V মানে Vertical Lookup।",
    "Table Array হলো যে Table-এর মধ্যে Lookup করা হয়।",
    "Column Index Number নির্ধারণ করে কোন Column থেকে Result আসবে।",
    "Exact Match-এর জন্য FALSE ব্যবহার করা হয়।",
    "VLOOKUP-এর একটি গুরুত্বপূর্ণ সীমাবদ্ধতা হলো এটি সাধারণভাবে প্রথম Column থেকে ডানদিকে Result Return করে।",
    "XLOOKUP অনেক ক্ষেত্রে VLOOKUP-এর তুলনায় বেশি flexible।"
  ],

  quiz: [
    {
      question: "VLOOKUP-এর V কী বোঝায়?",
      options: [
        "Vertical",
        "Value",
        "Variable",
        "Version"
      ],
      answer: 0
    },

    {
      question: "VLOOKUP কোথায় Lookup Value খোঁজে?",
      options: [
        "Table Array-এর প্রথম Column-এ",
        "শেষ Column-এ",
        "যেকোনো Random Cell-এ",
        "শুধু Row-তে"
      ],
      answer: 0
    },

    {
      question:
        '=VLOOKUP(G2,A2:E20,2,FALSE)-এ 2 কী বোঝায়?',
      options: [
        "দ্বিতীয় Column থেকে Result Return হবে",
        "দ্বিতীয় Row খুঁজবে",
        "দুইটি Criteria আছে",
        "Lookup Value 2"
      ],
      answer: 0
    },

    {
      question: "Exact Match-এর জন্য VLOOKUP-এ কোনটি ব্যবহার করা হয়?",
      options: [
        "FALSE",
        "TRUE",
        "EXACT",
        "MATCH"
      ],
      answer: 0
    },

    {
      question: "VLOOKUP-এর একটি গুরুত্বপূর্ণ সীমাবদ্ধতা কোনটি?",
      options: [
        "সাধারণভাবে প্রথম Column থেকে ডানদিকে Result Return করে",
        "কোনো Text নিয়ে কাজ করে না",
        "Number নিয়ে কাজ করে না",
        "শুধু Date নিয়ে কাজ করে"
      ],
      answer: 0
    },

    {
      question: "Column Index Number কেন প্রয়োজন?",
      options: [
        "কোন Column থেকে Result Return হবে তা নির্ধারণ করতে",
        "Lookup Value লিখতে",
        "Sheet Rename করতে",
        "Cell Color পরিবর্তন করতে"
      ],
      answer: 0
    },

    {
      question: "VLOOKUP এবং XLOOKUP-এর মধ্যে কোনটি সাধারণভাবে বেশি flexible?",
      options: [
        "XLOOKUP",
        "VLOOKUP",
        "দুটিই সবসময় একই",
        "কোনোটিই নয়"
      ],
      answer: 0
    }
  ]
},

// ==========================
// Lesson 22
// ==========================

{
  id: 22,

  category: "advanced",

  level: "Advanced",

  title: "INDEX + MATCH Advanced",

  description:
    "INDEX ও MATCH একসাথে ব্যবহার করে Flexible Lookup তৈরি করুন এবং XLOOKUP-এর সঙ্গে Advanced Lookup Logic তুলনা করুন।",

  duration: "৪৮ মিনিট",

  introduction:
    "INDEX এবং MATCH আলাদাভাবে জানলে আপনি দুইটি শক্তিশালী Excel Function জানেন। কিন্তু এই দুইটি Function একসাথে ব্যবহার করলে আরও Flexible Lookup তৈরি করা যায়। MATCH নির্দিষ্ট Value-এর Position খুঁজে বের করে এবং INDEX সেই Position থেকে আসল তথ্য Return করে। এই Lesson-এ Employee ID ব্যবহার করে Name, Department, Salary ও Sales বের করা হবে। পাশাপাশি INDEX + MATCH এবং XLOOKUP-এর পার্থক্যও বাস্তব Office scenario দিয়ে বোঝানো হবে।",

  theory: [
    "INDEX Function কী?",
    "MATCH Function কী?",
    "MATCH Position কীভাবে খুঁজে?",
    "INDEX Return Value",
    "INDEX + MATCH Logic",
    "Exact Match",
    "Lookup Column",
    "Return Column",
    "Two-Way Lookup ধারণা",
    "INDEX + MATCH বনাম XLOOKUP"
  ],

  screenshots: [
    {
      title: "INDEX + MATCH Advanced",
      image: "/images/lesson22/index-match-advanced.png",
      description:
        "Employee ID ব্যবহার করে INDEX + MATCH দিয়ে বিভিন্ন Employee Information বের করার উদাহরণ।"
    }
  ],

  formulas: [
    {
      name: "MATCH — Position",
      syntax: '=MATCH(G2,A2:A20,0)',
      explanation:
        "G2-এর Employee ID A2:A20-এর মধ্যে খুঁজে তার Position Number Return করে। 0 ব্যবহার করলে Exact Match হয়।",
      example: '=MATCH(G2,A2:A20,0)'
    },

    {
      name: "INDEX — Value",
      syntax: '=INDEX(B2:B20,MATCH(G2,A2:A20,0))',
      explanation:
        "MATCH Employee ID-এর Position খুঁজে দেয় এবং INDEX সেই Position-এর Name Return করে।",
      example: '=INDEX(B2:B20,MATCH(G2,A2:A20,0))'
    },

    {
      name: "INDEX + MATCH — Salary",
      syntax: '=INDEX(D2:D20,MATCH(G2,A2:A20,0))',
      explanation:
        "Employee ID খুঁজে সংশ্লিষ্ট Salary Return করে।",
      example: '=INDEX(D2:D20,MATCH(G2,A2:A20,0))'
    },

    {
      name: "INDEX + MATCH — Sales",
      syntax: '=INDEX(E2:E20,MATCH(G2,A2:A20,0))',
      explanation:
        "Employee ID খুঁজে সংশ্লিষ্ট Sales Value Return করে।",
      example: '=INDEX(E2:E20,MATCH(G2,A2:A20,0))'
    }
  ],

  examples: [
    "👤 Employee ID দিয়ে Name বের করা।",
    "🏢 Employee ID দিয়ে Department বের করা।",
    "💵 Employee ID দিয়ে Salary বের করা।",
    "💰 Employee ID দিয়ে Sales বের করা।",
    "📋 পুরোনো Excel Report-এ Flexible Lookup তৈরি করা।",
    "🔄 একই Lookup XLOOKUP ও INDEX + MATCH দিয়ে করে Result Compare করা।"
  ],

  questions: [
    {
      question: "INDEX Function কী করে?",
      answer:
        "INDEX একটি নির্দিষ্ট Range বা Array-এর নির্দিষ্ট Position থেকে Value Return করে।"
    },

    {
      question: "MATCH Function কী করে?",
      answer:
        "MATCH একটি Lookup Value-এর Position বা অবস্থান খুঁজে বের করে।"
    },

    {
      question: "INDEX + MATCH কেন একসাথে ব্যবহার করা হয়?",
      answer:
        "MATCH Position খুঁজে দেয় এবং INDEX সেই Position থেকে Value Return করে।"
    },

    {
      question: "MATCH-এর শেষে 0 কেন ব্যবহার করা হয়?",
      answer:
        "Exact Match করার জন্য 0 ব্যবহার করা হয়।"
    },

    {
      question: '=MATCH(G2,A2:A20,0)-এ G2 কী?',
      answer:
        "G2 হলো Lookup Value।"
    },

    {
      question: '=MATCH(G2,A2:A20,0)-এ A2:A20 কী?',
      answer:
        "A2:A20 হলো Lookup Array বা Lookup Range।"
    },

    {
      question:
        '=INDEX(B2:B20,MATCH(G2,A2:A20,0))-এ MATCH কী করছে?',
      answer:
        "MATCH Employee ID-এর Position খুঁজে দিচ্ছে।"
    },

    {
      question:
        '=INDEX(B2:B20,MATCH(G2,A2:A20,0))-এ INDEX কী করছে?',
      answer:
        "INDEX MATCH-এর পাওয়া Position ব্যবহার করে Name Return করছে।"
    },

    {
      question: "INDEX + MATCH-এর একটি সুবিধা কী?",
      answer:
        "এটি Lookup Column-এর ডান পাশে বা বাম পাশের Return Column-এর সঙ্গে Flexibleভাবে কাজ করতে পারে।"
    }
  ],

  tips: [
    "MATCH মনে রাখুন: 'কোথায় আছে?'",
    "INDEX মনে রাখুন: 'সেই জায়গা থেকে কী Value চাই?'",
    "INDEX + MATCH মনে রাখুন: Position → Value।",
    "Exact Match-এর জন্য MATCH-এর শেষে 0 ব্যবহার করুন।",
    "Lookup Range এবং Return Range-এর Row সংখ্যা মিলিয়ে রাখুন।",
    "Formula বড় হলে আগে MATCH আলাদাভাবে পরীক্ষা করুন।",
    "তারপর সেই MATCH Formula INDEX-এর ভিতরে বসান।",
    "XLOOKUP সহজ হলেও INDEX + MATCH জানা পুরোনো ও Flexible Excel Workbook-এর জন্য গুরুত্বপূর্ণ।"
  ],

  practice: [
    "MATCH দিয়ে Employee ID-এর Position বের করুন।",
    "INDEX + MATCH দিয়ে Employee Name বের করুন।",
    "INDEX + MATCH দিয়ে Department বের করুন।",
    "INDEX + MATCH দিয়ে Salary বের করুন।",
    "INDEX + MATCH দিয়ে Sales বের করুন।",
    "একই Employee Information XLOOKUP দিয়েও বের করুন।",
    "INDEX + MATCH এবং XLOOKUP-এর Formula Compare করুন।"
  ],

  practiceData: {
    title: "Advanced Lookup Detective 🕵️",

    description:
      "আপনি একটি কোম্পানির Advanced Reporting Team-এর সদস্য। পুরোনো এবং নতুন—দুই ধরনের Excel Workbook নিয়ে কাজ করতে হচ্ছে। আপনার কাজ হলো INDEX + MATCH ব্যবহার করে Employee Information বের করা এবং একই কাজ XLOOKUP দিয়ে করে Result Compare করা।",

    headers: [
      "Employee ID",
      "Name",
      "Department",
      "Salary",
      "Sales",
      "Performance"
    ],

    rows: [
      ["EMP-001", "রাকিব", "Sales", "28000", "65000", "Excellent"],
      ["EMP-002", "সুমাইয়া", "HR", "35000", "42000", "Good"],
      ["EMP-003", "নাঈম", "Accounts", "42000", "78000", "Excellent"],
      ["EMP-004", "মাহি", "Sales", "50000", "50000", "Excellent"],
      ["EMP-005", "তানভীর", "Marketing", "32000", "38000", "Average"],
      ["EMP-006", "সাদিয়া", "IT", "48000", "92000", "Excellent"],
      ["EMP-007", "আরিফ", "Sales", "39000", "47000", "Good"],
      ["EMP-008", "মিম", "HR", "30000", "55000", "Good"],
      ["EMP-009", "শাওন", "Sales", "45000", "72000", "Excellent"],
      ["EMP-010", "লাবণ্য", "Marketing", "36000", "33000", "Average"],
      ["EMP-011", "ফারহান", "Sales", "46000", "61000", "Excellent"],
      ["EMP-012", "নিশাত", "HR", "38000", "49000", "Good"]
    ],

    missions: [
      {
        title: "Mission 1 — Position Detective 🔎",

        story:
          "Manager আপনাকে EMP-006 দিয়েছেন। প্রথমে আপনাকে জানতে হবে Employee ID-টি Table-এর কত নম্বর Position-এ আছে।",

        instruction:
          "MATCH ব্যবহার করে Employee ID-এর Position বের করুন।",

        tasks: [
          "একটি Lookup Cell নির্বাচন করুন।",
          "Lookup Value হিসেবে EMP-006 ব্যবহার করুন।",
          "Employee ID Column-কে Lookup Range হিসেবে নির্বাচন করুন।",
          "Exact Match-এর জন্য 0 ব্যবহার করুন।",
          "MATCH Formula Calculate করুন।",
          "Position Number লক্ষ্য করুন।"
        ],

        challenge:
          "EMP-003, EMP-009 এবং EMP-012-এর Position বের করুন।"
      },

      {
        title: "Mission 2 — Name Detective 👤",

        story:
          "এবার Manager চান EMP-006-এর Name। কিন্তু সরাসরি VLOOKUP ব্যবহার না করে INDEX + MATCH ব্যবহার করতে হবে।",

        instruction:
          "INDEX-এর ভিতরে MATCH ব্যবহার করে Employee Name বের করুন।",

        tasks: [
          "Name Column-কে INDEX-এর Array হিসেবে নির্বাচন করুন।",
          "MATCH দিয়ে EMP-006-এর Position খুঁজুন।",
          "MATCH Formula INDEX-এর Row Number হিসেবে ব্যবহার করুন।",
          "Formula Calculate করুন।",
          "Employee Name দেখুন।"
        ],

        challenge:
          "EMP-002, EMP-008 এবং EMP-011-এর Name INDEX + MATCH দিয়ে বের করুন।"
      },

      {
        title: "Mission 3 — Salary & Sales Detective 💰",

        story:
          "Finance Team জানতে চায় EMP-003-এর Salary এবং Sales।",

        instruction:
          "INDEX + MATCH ব্যবহার করে Salary ও Sales—দুইটি তথ্য বের করুন।",

        tasks: [
          "Salary Column-কে INDEX Array হিসেবে ব্যবহার করুন।",
          "MATCH দিয়ে Employee ID-এর Position বের করুন।",
          "Salary Return করুন।",
          "Sales Column ব্যবহার করে দ্বিতীয় INDEX + MATCH Formula তৈরি করুন।",
          "Sales Return করুন।",
          "দুই Result Compare করুন।"
        ],

        challenge:
          "EMP-006 এবং EMP-009-এর Salary ও Sales বের করুন।"
      },

      {
        title: "Bonus Mission — Lookup Master 🏆",

        story:
          "আপনার অফিসে একই Employee Report-এর জন্য XLOOKUP এবং INDEX + MATCH—দুই ধরনের Formula ব্যবহার হচ্ছে। Manager চান আপনি দুইটির Result এবং Formula Logic Compare করুন।",

        instruction:
          "একই Employee ID দিয়ে INDEX + MATCH এবং XLOOKUP ব্যবহার করে Employee Information বের করুন।",

        tasks: [
          "INDEX + MATCH দিয়ে Name বের করুন।",
          "XLOOKUP দিয়ে একই Name বের করুন।",
          "INDEX + MATCH দিয়ে Salary বের করুন।",
          "XLOOKUP দিয়ে একই Salary বের করুন।",
          "দুই Formula-এর Result Compare করুন।",
          "কোন Formula-তে MATCH Position খুঁজছে তা চিহ্নিত করুন।"
        ],

        challenge:
          "নিজের ভাষায় লিখুন—INDEX + MATCH-এর কোন অংশ Position এবং কোন অংশ Value Return করে।"
      }
    ]
  },

  pdf: "#",

  summary: [
    "MATCH একটি Lookup Value-এর Position খুঁজে বের করে।",
    "INDEX একটি নির্দিষ্ট Position থেকে Value Return করে।",
    "INDEX + MATCH একসাথে ব্যবহার করলে Flexible Lookup তৈরি করা যায়।",
    "MATCH-এর শেষে 0 ব্যবহার করলে Exact Match করা যায়।",
    "INDEX + MATCH-এর Logic হলো Position → Value।",
    "XLOOKUP অনেক ক্ষেত্রে সহজ হলেও INDEX + MATCH জানা Professional Excel Skill-এর অংশ।",
    "পুরোনো Excel Workbook এবং Flexible Lookup Scenario-তে INDEX + MATCH এখনও গুরুত্বপূর্ণ।"
  ],

  quiz: [
    {
      question: "MATCH Function-এর প্রধান কাজ কী?",
      options: [
        "Value-এর Position খুঁজে বের করা",
        "Value যোগ করা",
        "Data Count করা",
        "Cell Format করা"
      ],
      answer: 0
    },

    {
      question: "INDEX Function-এর প্রধান কাজ কী?",
      options: [
        "নির্দিষ্ট Position থেকে Value Return করা",
        "Position Count করা",
        "Data Sort করা",
        "Sheet Rename করা"
      ],
      answer: 0
    },

    {
      question: "INDEX + MATCH-এর সহজ Logic কোনটি?",
      options: [
        "Position → Value",
        "Value → Sort",
        "Count → Sum",
        "Filter → Delete"
      ],
      answer: 0
    },

    {
      question:
        '=MATCH(G2,A2:A20,0)-এ 0 কী বোঝায়?',
      options: [
        "Exact Match",
        "Approximate Match",
        "Column Number",
        "Row Number"
      ],
      answer: 0
    },

    {
      question:
        '=INDEX(B2:B20,MATCH(G2,A2:A20,0))-এ MATCH-এর কাজ কী?',
      options: [
        "Position খুঁজে দেওয়া",
        "Name যোগ করা",
        "Name Count করা",
        "Table Sort করা"
      ],
      answer: 0
    },

    {
      question:
        '=INDEX(B2:B20,MATCH(G2,A2:A20,0))-এ INDEX-এর কাজ কী?',
      options: [
        "Position থেকে Name Return করা",
        "Position Count করা",
        "Lookup Value খোঁজা",
        "Criteria তৈরি করা"
      ],
      answer: 0
    },

    {
      question: "INDEX + MATCH-এর একটি গুরুত্বপূর্ণ সুবিধা কোনটি?",
      options: [
        "Flexible Lookup তৈরি করা যায়",
        "শুধু Text নিয়ে কাজ করে",
        "শুধু Number নিয়ে কাজ করে",
        "কোনো Range দরকার হয় না"
      ],
      answer: 0
    },

    {
      question: "XLOOKUP-এর তুলনায় INDEX + MATCH কেন শেখা দরকার?",
      options: [
        "পুরোনো ও Flexible Excel Workbook-এ এটি গুরুত্বপূর্ণ",
        "XLOOKUP কখনো কাজ করে না",
        "INDEX + MATCH শুধু Chart তৈরি করে",
        "INDEX + MATCH দিয়ে Data Entry করা হয়"
      ],
      answer: 0
    }
  ]
}

];