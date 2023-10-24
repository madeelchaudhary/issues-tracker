import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedIssues() {
  const currentTime = Date.now();
  const oneHour = 60 * 60 * 1000;

  await prisma.issue.createMany({
    data: [
      {
        title: "Server Outage",
        description:
          "A critical server outage is affecting multiple services. **Description:** This is a critical issue that needs immediate attention.",
        status: "OPEN",
        created_at: new Date(currentTime - oneHour * 10),
        updated_at: new Date(currentTime - oneHour * 5),
      },
      {
        title: "User Registration Bug",
        description:
          "Users are unable to register due to a validation error. **Description:** This issue prevents new users from signing up.",
        status: "IN_PROGRESS",
        created_at: new Date(currentTime - oneHour * 20),
        updated_at: new Date(currentTime - oneHour * 10),
      },
      {
        title: "Mobile App Crashes",
        description:
          "The mobile app crashes on launch for some users. **Description:** Investigate and fix the crash issue.",
        status: "IN_PROGRESS",
        created_at: new Date(currentTime - oneHour * 30),
        updated_at: new Date(currentTime - oneHour * 15),
      },
      {
        title: "Website Performance",
        description:
          "The website is loading slowly. **Description:** Optimize the website to improve performance.",
        status: "OPEN",
        created_at: new Date(currentTime - oneHour * 40),
        updated_at: new Date(currentTime - oneHour * 20),
      },
      {
        title: "Database Connection Error",
        description:
          "Some users are experiencing database connection errors. **Description:** Investigate and fix database connectivity issues.",
        status: "CLOSED",
        created_at: new Date(currentTime - oneHour * 50),
        updated_at: new Date(currentTime - oneHour * 25),
      },
      {
        title: "UI Alignment Issue",
        description:
          "The UI elements on the dashboard are misaligned. **Description:** Fix the alignment issue for a better user experience.",
        status: "IN_PROGRESS",
        created_at: new Date(currentTime - oneHour * 60),
        updated_at: new Date(currentTime - oneHour * 30),
      },
      {
        title: "Email Delivery Problem",
        description:
          "Emails are not being delivered to some users. **Description:** Investigate and resolve email delivery issues.",
        status: "OPEN",
        created_at: new Date(currentTime - oneHour * 70),
        updated_at: new Date(currentTime - oneHour * 35),
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Integrate a new payment gateway for improved payment processing. **Description:** Implement a new payment gateway.",
        status: "IN_PROGRESS",
        created_at: new Date(currentTime - oneHour * 80),
        updated_at: new Date(currentTime - oneHour * 40),
      },
      {
        title: "Data Import Failure",
        description:
          "Data import process is failing. **Description:** Investigate and fix the data import process.",
        status: "OPEN",
        created_at: new Date(currentTime - oneHour * 90),
        updated_at: new Date(currentTime - oneHour * 45),
      },
      {
        title: "Mobile App Update",
        description:
          "Release a new version of the mobile app with bug fixes and improvements. **Description:** Update the mobile app with new features.",
        status: "OPEN",
        created_at: new Date(currentTime - oneHour * 100),
        updated_at: new Date(currentTime - oneHour * 50),
      },
      {
        title: "Security Vulnerability",
        description:
          "A security vulnerability was identified. **Description:** Patch the security vulnerability to ensure data safety.",
        status: "CLOSED",
        created_at: new Date(currentTime - oneHour * 110),
        updated_at: new Date(currentTime - oneHour * 55),
      },
      {
        title: "User Feedback",
        description:
          "Incorporate user feedback and suggestions for the website. **Description:** Implement user-requested improvements.",
        status: "IN_PROGRESS",
      },
      {
        title: "Server Maintenance",
        description:
          "Schedule server maintenance for hardware and software updates. **Description:** Plan and execute server maintenance.",
        status: "IN_PROGRESS",
      },
      {
        title: "Customer Support Ticket",
        description:
          "Address a customer support request regarding a billing issue. **Description:** Resolve the billing concern.",
        status: "CLOSED",
      },
      {
        title: "Product Enhancement",
        description:
          "Enhance product features based on customer requests. **Description:** Implement requested product enhancements.",
        status: "OPEN",
      },
      {
        title: "Login Issues",
        description:
          "Some users are unable to log in to their accounts. **Description:** Investigate and resolve login issues.",
        status: "IN_PROGRESS",
      },
      {
        title: "API Integration",
        description:
          "Integrate a third-party API for additional functionality. **Description:** Implement API integration.",
        status: "OPEN",
        created_at: new Date(currentTime - oneHour * 5),
        updated_at: new Date(currentTime - oneHour * 2),
      },
      {
        title: "Database Backup",
        description:
          "Perform a routine database backup to ensure data safety. **Description:** Schedule and execute a database backup.",
        status: "CLOSED",
      },
      {
        title: "Website Redesign",
        description:
          "Redesign the website for a fresh and modern look. **Description:** Plan and start the website redesign project.",
        status: "OPEN",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: "Performance Monitoring",
        description:
          "Set up performance monitoring and alerting for critical services. **Description:** Implement performance monitoring.",
        status: "IN_PROGRESS",
      },
    ],
  });

  await prisma.$disconnect();
}

seedIssues();
