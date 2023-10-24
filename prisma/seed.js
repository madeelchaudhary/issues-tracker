"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function seedIssues() {
    return __awaiter(this, void 0, void 0, function () {
        var currentTime, oneHour;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentTime = Date.now();
                    oneHour = 60 * 60 * 1000;
                    return [4 /*yield*/, prisma.issue.createMany({
                            data: [
                                {
                                    title: "Server Outage",
                                    description: "A critical server outage is affecting multiple services. **Description:** This is a critical issue that needs immediate attention.",
                                    status: "OPEN",
                                    created_at: new Date(currentTime - oneHour * 10),
                                    updated_at: new Date(currentTime - oneHour * 5)
                                },
                                {
                                    title: "User Registration Bug",
                                    description: "Users are unable to register due to a validation error. **Description:** This issue prevents new users from signing up.",
                                    status: "IN_PROGRESS",
                                    created_at: new Date(currentTime - oneHour * 20),
                                    updated_at: new Date(currentTime - oneHour * 10)
                                },
                                {
                                    title: "Mobile App Crashes",
                                    description: "The mobile app crashes on launch for some users. **Description:** Investigate and fix the crash issue.",
                                    status: "IN_PROGRESS",
                                    created_at: new Date(currentTime - oneHour * 30),
                                    updated_at: new Date(currentTime - oneHour * 15)
                                },
                                {
                                    title: "Website Performance",
                                    description: "The website is loading slowly. **Description:** Optimize the website to improve performance.",
                                    status: "OPEN",
                                    created_at: new Date(currentTime - oneHour * 40),
                                    updated_at: new Date(currentTime - oneHour * 20)
                                },
                                {
                                    title: "Database Connection Error",
                                    description: "Some users are experiencing database connection errors. **Description:** Investigate and fix database connectivity issues.",
                                    status: "CLOSED",
                                    created_at: new Date(currentTime - oneHour * 50),
                                    updated_at: new Date(currentTime - oneHour * 25)
                                },
                                {
                                    title: "UI Alignment Issue",
                                    description: "The UI elements on the dashboard are misaligned. **Description:** Fix the alignment issue for a better user experience.",
                                    status: "IN_PROGRESS",
                                    created_at: new Date(currentTime - oneHour * 60),
                                    updated_at: new Date(currentTime - oneHour * 30)
                                },
                                {
                                    title: "Email Delivery Problem",
                                    description: "Emails are not being delivered to some users. **Description:** Investigate and resolve email delivery issues.",
                                    status: "OPEN",
                                    created_at: new Date(currentTime - oneHour * 70),
                                    updated_at: new Date(currentTime - oneHour * 35)
                                },
                                {
                                    title: "Payment Gateway Integration",
                                    description: "Integrate a new payment gateway for improved payment processing. **Description:** Implement a new payment gateway.",
                                    status: "IN_PROGRESS",
                                    created_at: new Date(currentTime - oneHour * 80),
                                    updated_at: new Date(currentTime - oneHour * 40)
                                },
                                {
                                    title: "Data Import Failure",
                                    description: "Data import process is failing. **Description:** Investigate and fix the data import process.",
                                    status: "OPEN",
                                    created_at: new Date(currentTime - oneHour * 90),
                                    updated_at: new Date(currentTime - oneHour * 45)
                                },
                                {
                                    title: "Mobile App Update",
                                    description: "Release a new version of the mobile app with bug fixes and improvements. **Description:** Update the mobile app with new features.",
                                    status: "OPEN",
                                    created_at: new Date(currentTime - oneHour * 100),
                                    updated_at: new Date(currentTime - oneHour * 50)
                                },
                                {
                                    title: "Security Vulnerability",
                                    description: "A security vulnerability was identified. **Description:** Patch the security vulnerability to ensure data safety.",
                                    status: "CLOSED",
                                    created_at: new Date(currentTime - oneHour * 110),
                                    updated_at: new Date(currentTime - oneHour * 55)
                                },
                                {
                                    title: "User Feedback",
                                    description: "Incorporate user feedback and suggestions for the website. **Description:** Implement user-requested improvements.",
                                    status: "IN_PROGRESS"
                                },
                                {
                                    title: "Server Maintenance",
                                    description: "Schedule server maintenance for hardware and software updates. **Description:** Plan and execute server maintenance.",
                                    status: "IN_PROGRESS"
                                },
                                {
                                    title: "Customer Support Ticket",
                                    description: "Address a customer support request regarding a billing issue. **Description:** Resolve the billing concern.",
                                    status: "CLOSED"
                                },
                                {
                                    title: "Product Enhancement",
                                    description: "Enhance product features based on customer requests. **Description:** Implement requested product enhancements.",
                                    status: "OPEN"
                                },
                                {
                                    title: "Login Issues",
                                    description: "Some users are unable to log in to their accounts. **Description:** Investigate and resolve login issues.",
                                    status: "IN_PROGRESS"
                                },
                                {
                                    title: "API Integration",
                                    description: "Integrate a third-party API for additional functionality. **Description:** Implement API integration.",
                                    status: "OPEN",
                                    created_at: new Date(currentTime - oneHour * 5),
                                    updated_at: new Date(currentTime - oneHour * 2)
                                },
                                {
                                    title: "Database Backup",
                                    description: "Perform a routine database backup to ensure data safety. **Description:** Schedule and execute a database backup.",
                                    status: "CLOSED"
                                },
                                {
                                    title: "Website Redesign",
                                    description: "Redesign the website for a fresh and modern look. **Description:** Plan and start the website redesign project.",
                                    status: "OPEN",
                                    created_at: new Date(),
                                    updated_at: new Date()
                                },
                                {
                                    title: "Performance Monitoring",
                                    description: "Set up performance monitoring and alerting for critical services. **Description:** Implement performance monitoring.",
                                    status: "IN_PROGRESS"
                                },
                            ]
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, prisma.$disconnect()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
seedIssues();
