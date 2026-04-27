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
