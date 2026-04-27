# 🧪 Playwright TodoMVC Automation Framework

End-to-End (E2E) test automation project built with **Playwright + JavaScript** on the TodoMVC React application.

---

## 🎯 Project Goal

The objective of this project is to:

- Build a **robust E2E automation suite**
- Apply **modern QA best practices**
- Ensure **cross-browser reliability**
- Simulate **real user interactions**
- Produce **clear and professional test reports**

---

## 🛠️ Tech Stack

- ⚡ Playwright
- 🟨 JavaScript
- 🧪 Playwright Test Runner
- 📊 HTML Reporter
- 🌐 Cross-browser execution (Chromium, Firefox, WebKit)

---

## 📌 Application Under Test

👉 https://todomvc.com/examples/react/dist/

---

## ✅ Test Scenarios Covered

- ➕ Add multiple todos
- ✔️ Mark a todo as completed
- 🔍 Filter active todos
- 📂 Filter completed todos
- ❌ Delete a todo item
- 🧹 Clear completed todos

---

## 🧠 Key Testing Concepts Applied

- 🧩 **Atomic test design** (1 behavior = 1 test)
- 🎯 **Stable locators**
  - `getByTestId`
  - `getByRole`
- 🔁 **Cross-browser validation**
- 🧪 **State verification**
- ⚙️ **UI interaction handling**
- 🧱 **Test isolation with beforeEach**

---

## 🚨 Challenges & Failures Encountered

### 1. ❌ Wrong element count

```text
Expected: 3
Received: 11

Cause:
Used:

getByRole('listitem')

This was too generic and captured extra elements.

Fix:

getByTestId('todo-item')
2. ❌ Delete button not clickable
element is not visible

Cause:
Delete button is hidden unless hovered.

Fix:

await todoItem.hover();
await deleteButton.click({ force: true });
3. ❌ Timeout when checking checkbox

Cause:
Tried to interact with elements after applying filters.

Fix:

Set state first (complete todos)
THEN apply filters
💡 What I Learned
🧠 Importance of test order and UI state
🎯 Why precise locators matter
⚠️ Difference between visible vs present in DOM
🔄 Handling dynamic UI behavior
🧪 Designing reliable and non-flaky tests
🌍 Importance of cross-browser testing
🧪 Test Execution

Run all tests:

npx playwright test

Run with UI:

npx playwright test --headed

Run only sanity tests:

npx playwright test --grep "@sanity"
📊 Test Results

✔️ All tests passed across:

🟦 Chromium
🟧 Firefox
🟪 WebKit
6 test scenarios × 3 browsers = 18 test executions
📸 Test Report
HTML Report
npx playwright show-report

👉 Opens locally:

http://localhost:9323
📄 PDF Report

Generated from HTML report using browser export or automation script.

📂 See:

/reports/playwright-report.pdf
📁 Project Structure
Playwright-TodoMVC-Automation/
│
├── tests/
│   └── todo-demo1.spec.js
│
├── reports/
│   ├── README.md
│   └── playwright-report.pdf
│
├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md

🚀 Future Improvements
🔄 Refactor to Page Object Model (POM)
⚙️ Integrate CI/CD (GitHub Actions)
📊 Add Allure reporting
🧪 Add negative test cases
📈 Performance & load testing
👨‍💻 Author


Ariel Bleriot Ndonfak Sapi
💼Product Manager & QA Automation
🔗 GitHub: https://github.com/ArielBleriot
