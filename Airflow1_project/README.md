# 🚀 Airflow1_project: Automated Weather ETL Pipeline

Welcome to **Airflow1_project**! This mini-project demonstrates a fully automated **Weather ETL pipeline** built with **Apache Airflow**, **Python**, **PostgreSQL**, and **Docker**. The pipeline extracts real-time weather data, transforms it into a structured format, and loads it into a database — all fully automated and orchestrated for seamless data analysis.

---

## 🔍 Project Goal

- Extract live weather data from the **Open-Meteo API** 🌤️  
- Transform raw JSON into structured datasets 🛠️  
- Load results into **PostgreSQL** for analytics 📊  
- Automate the entire ETL process using **Airflow DAGs** ⏱️  

---

## ⚙️ Tools & Their Purpose

| Tool/Software | Purpose |
|---------------|---------|
| **Apache Airflow** | Orchestrates the ETL workflow, schedules and automates tasks |
| **Python (Pandas, Boto3, PyArrow)** | Handles data extraction, transformation, and loading logic |
| **PostgreSQL** | Stores the transformed weather data for analysis and reporting |
| **DBeaver** | Visualizes and manages the database, simplifies monitoring and debugging |
| **Docker** | Containerizes Airflow and its dependencies for reproducible deployments |
| **Astronomer CLI** | Runs Airflow in a local Dockerized environment efficiently |
| **Open-Meteo API** | Provides live weather data in JSON format |
| **Git/GitHub** | Version control and project repository management |

---

## 🛠️ Workflow Steps

1️⃣ **Extract**: Pulls live weather data via API using Airflow's `HttpHook`.  
2️⃣ **Transform**: Cleans and structures the raw JSON using Python (`Pandas`).  
3️⃣ **Load**: Inserts data into **PostgreSQL** using `PostgresOperator`.  
4️⃣ **Automation**: DAG triggers daily or on-demand to update the database automatically.

---

## ⚡ Challenges & Solutions

- **Missing Airflow Providers** → Installed necessary packages inside Docker with `pip install`.  
- **Deprecation Issues** (`days_ago`, `schedule_interval`) → Updated DAG code to use **datetime** and **schedule**.  
- **PostgreSQL Connection** → Used **DBeaver** for external database access and smooth monitoring.  

---

## ✅ Outcome

- Fully automated ETL pipeline that can be scheduled daily or triggered manually.  
- Real-time weather data is loaded into PostgreSQL, ready for dashboards or analytics.  
- Pipeline designed to scale for larger datasets and additional APIs.  

---

## 💡 Key Skills Gained

**Workflow Orchestration**, **Airflow DAG Debugging**, **Python ETL**, **PostgreSQL Integration**, **Containerized Deployment (Docker)**, **API Data Handling**, **Data Cleaning & Transformation**, **Process Automation**, **ETL/ELT Pipelines**, **Data Warehousing**, **Data Modeling**, **Project Documentation**.

---

## 📂 Repository Link

Explore also this etl_pipeline project here: [etl_pipeline](https://github.com/ArielBleriot/Excel_Data_Findings/tree/main/project1_etl-pipeline)  

---

Made with ❤️ by **Ariel Bleriot Ndonfak Sapi**  
