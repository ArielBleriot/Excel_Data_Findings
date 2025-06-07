# Customer Churn Prediction - Machine Learning Project

This project focuses on predicting customer churn using various machine learning classification algorithms, comparing their performance, and evaluating model effectiveness using a real-world bank dataset.

## 🔍 Objective
To build and evaluate predictive models that classify whether a customer is likely to churn (exit) based on demographic and account features.

## 🧰 Tools & Libraries
- Python (Jupyter Notebook)
- Pandas, NumPy
- Matplotlib, Seaborn
- Scikit-learn (sklearn)

## 📊 Dataset
- **Churn_Modelling.csv** from a bank's customer database.
- Features include: Credit Score, Age, Balance, Geography, Gender, etc.
- Target variable: `Exited` (1 = customer churned, 0 = customer retained)

## 🧹 Data Preprocessing
- Handled missing and duplicated values
- Encoded categorical variables using LabelEncoding and OneHotEncoding
- Scaled numerical features using StandardScaler
- Feature engineering (e.g., BalancePerProduct, IncomeActivityRatio)

## 📈 Models Trained
- Logistic Regression
- K-Nearest Neighbors (KNN)
- Support Vector Machine (SVM)
- Random Forest Classifier
- Gradient Boosting Classifier

## ✅ Evaluation Metrics
- Accuracy
- Precision, Recall, F1-score
- Confusion Matrix
- Classification Report

## 🏆 Results
- **Best Performing Model:** Random Forest & Gradient Boosting (after tuning)
- **Accuracy Achieved:** ~86.6%
- Balanced evaluation of precision and recall to handle class imbalance

## 📌 Conclusion
Gradient Boosting and Random Forest proved to be the most robust models for predicting churn. Feature scaling and encoding significantly improved the overall performance.


