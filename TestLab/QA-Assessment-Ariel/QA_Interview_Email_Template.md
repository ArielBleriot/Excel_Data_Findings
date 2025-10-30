** QA Automation Engineer Interview - Technical Assessment **
Dear Candidate,

Thank you for your interest in the QA Automation Engineer position at Atari. As part of our interview process, we would like you to complete a technical assessment that will help us evaluate your testing skills, analytical thinking, and automation expertise.

## Assessment Overview

You will be testing a **Gaming Dashboard Application** - a React-based web application that includes user authentication, sales data visualization, and platform-specific analytics. This assessment is designed to evaluate both your manual testing skills and automation strategy capabilities.

## Getting Started

### Step 1: Access the Repository
Clone your dedicated private repository from:
```
https://github.com/sreedeepnarayan-atari/QA-Assessment-Ariel
```

### Step 2: Setup Instructions
1. Ensure you have Node.js (v14 or higher) installed
2. Navigate to the `gaming-dashboard` directory
3. Run `npm install` to install dependencies
4. Run `npm start` to launch the application
5. The application will open at `http://localhost:3000`

### Step 3: Review Available Resources
- **Test Users:** Check `gaming-dashboard/public/users.csv` for login credentials
- **Sales Data:** Review `gaming-dashboard/public/sales-data.json` for expected data
- **Top Games:** See `gaming-dashboard/public/top-games.json` for ranking information
- **Task Details:** Read `gaming-dashboard/QA_INTERVIEW_TASKS.txt` for complete requirements

## Required Deliverables

Please complete the following tasks and provide detailed documentation:

### 1. Environment Setup & Exploration
- [ ] Successfully setup and run the application
- [ ] Document any issues encountered during setup
- [ ] Provide initial observations about the application

### 2. Manual Testing

#### A. Authentication Testing
- [ ] Test at least 5 valid user logins from the provided CSV
- [ ] Test invalid login scenarios (wrong passwords, empty fields, special characters)
- [ ] Verify logout functionality
- [ ] Document all bugs or unexpected behaviors

#### B. Data Validation & Accuracy Testing
**Critical Data Points to Verify:**
- [ ] Total number of games displayed (should be 20 games)
- [ ] Platform-specific game counts (5 games per platform)
- [ ] Revenue totals per platform:
  - Xbox: $3,790,000
  - Steam: $8,680,000
  - Nintendo: $5,600,000
  - PlayStation: $5,640,000
- [ ] Total overall revenue: $23,710,000
- [ ] Top 5 games ranking accuracy (compare with provided data)

#### C. Functionality Testing
- [ ] Test all platform filters (Xbox, Steam, Nintendo, PlayStation, All)
- [ ] Verify filtered results show correct games and counts
- [ ] Check that revenue totals update correctly when filtering
- [ ] Test responsiveness across different screen sizes
- [ ] Document any UI/UX issues or inconsistencies

### 3. Test Automation Strategy & Implementation

#### A. Framework Selection & Setup
- [ ] Choose and justify your automation framework (Selenium, Playwright, Cypress, etc.)
- [ ] Set up your chosen framework with proper project structure
- [ ] Document any setup challenges or decisions made

#### B. Automated Test Cases (Implement at least 3 of the following)
- [ ] **Login Flow Automation**: Valid and invalid login scenarios
- [ ] **Data Validation Tests**: Verify game counts and revenue totals programmatically  
- [ ] **Platform Filtering Tests**: Test at least 2 different platform filters
- [ ] **Cross-browser Testing**: Ensure functionality works across browsers
- [ ] **End-to-End User Journey**: Complete workflow from login to data verification

#### C. Test Data Management
- [ ] Implement proper test data management (CSV parsing, JSON validation)
- [ ] Create reusable test utilities for common actions
- [ ] Handle dynamic data and assertions effectively

### 4. Documentation & Reporting

#### A. Test Report
- [ ] Summary of all bugs found with severity levels (Critical, High, Medium, Low)
- [ ] Include screenshots for visual issues
- [ ] Provide steps to reproduce each bug
- [ ] Suggest priority for fixes

#### B. Test Strategy Document
Create a comprehensive document covering:
- [ ] **Framework Justification**: Why you chose your automation approach
- [ ] **Test Case Prioritization**: How you would prioritize test cases for this application
- [ ] **CI/CD Integration**: Recommendations for integrating tests into a development pipeline
- [ ] **Future Test Improvements**: Suggestions for expanding test coverage
- [ ] **Risk Assessment**: Identify the highest risk areas of the application

#### C. Executive Summary
- [ ] High-level overview of application quality
- [ ] Key findings and recommendations
- [ ] Testing completion percentage
- [ ] Confidence level in application stability

## Submission Instructions

### Final Deliverables Checklist
Before submitting, ensure you have:
- [ ] Completed manual testing with documented results
- [ ] Implemented at least 3 automated test scenarios
- [ ] Created test report with bug findings and screenshots
- [ ] Written test strategy document with recommendations
- [ ] Provided executive summary of key findings
- [ ] Included clear README for running your automated tests
- [ ] Committed all work to the repository

### How to Submit

1. **Create a new branch for your work:**
   ```bash
   git checkout -b qa-assessment-submission
   ```

2. **Commit your work regularly with clear commit messages:**
   ```bash
   git add .
   git commit -m "Add login automation tests"
   git commit -m "Add test report with bug findings"
   # etc.
   ```

3. **Push your branch:**
   ```bash
   git push origin qa-assessment-submission
   ```

4. **Create a Pull Request:**
   - Go to your repository on GitHub
   - Click "Pull requests" → "New pull request"
   - Set base branch: `main`, compare branch: `qa-assessment-submission`
   - Title: "QA Assessment Submission - [Your Name]"
   
5. **In the PR description, include:**
   - **Summary of Testing Completed**
     - Number of test cases executed
     - Automation coverage achieved
     - Key findings summary
   
   - **Bugs Found** (use a table format)
     | Bug ID | Description | Severity | Status |
     |--------|-------------|----------|--------|
     | BUG-001 | Login fails with special characters | High | Open |
     | BUG-002 | Revenue total calculation error | Critical | Open |
   
   - **Test Execution Evidence**
     - Screenshots of test results
     - Automation test run reports
     - Console logs for any errors found
   
   - **Files Changed Summary**
     - List of test files created
     - Documentation added
     - Any fixes implemented
   
   - **Time Spent**
     - Manual testing: X hours
     - Automation development: X hours
     - Documentation: X hours
   
6. **Attach Screenshots:**
   - Drag and drop screenshots directly into the PR description
   - Include: Test execution results, bugs found, automation running
   
7. **Do NOT merge the PR** - Leave it open for review

8. **Send confirmation email** to the hiring team with:
   - Link to your Pull Request
   - Any additional notes about your approach

## Important Notes

- **Quality over Quantity**: Focus on thorough, well-documented testing rather than trying to cover everything superficially
- **Ask Questions**: If you encounter any blocking technical issues, don't hesitate to reach out
- **Document Assumptions**: Clearly note any assumptions you make during testing
- **Professional Approach**: Treat this as a real client assessment - demonstrate your professional testing methodology

## Support

If you encounter any setup issues or have questions about the assessment requirements, please contact the hiring team immediately. We want you to succeed and showcase your skills effectively.

**Good luck with your assessment!**

---
*This assessment is designed to evaluate real-world QA skills in a controlled environment. Your approach to testing, problem-solving, and documentation will provide valuable insights into your capabilities as a QA Automation Engineer.*