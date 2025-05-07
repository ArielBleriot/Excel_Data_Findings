/*select * from orders;*/

/* Questions to Answers */


/*1 --- Find the top 15 highest revenue generating products*/

/*Select top 15 Select top 15 product_id, sum (sale_price) as sales from orders
group by product_id
order by sales DESC; from orders
group by product_id
order by sales DESC;*/



/*2 --- select the top 5 highest selling product in each region*/


/*with cte  as (
Select region , product_id, sum (sale_price) as sales  from orders
group by region , product_id )

select * from (
Select * 
, row_number() over (partition by region order by sales DESC) as position
from cte) A
where  position <= 5;*/



/*3 ---- find month over month comparison for 2022 and 2023 sales : let's say for example Sep 2022 vs Sep 2023 */


/*WITH cte AS (
    SELECT 
        YEAR(order_date) AS order_year, 
        MONTH(order_date) AS order_month, 
        SUM(sale_price) AS sales 
    FROM orders
    GROUP BY 
        YEAR(order_date), 
        MONTH(order_date)
)
SELECT 
    order_month,
    SUM(CASE WHEN order_year = 2022 THEN sales ELSE 0 END) AS sales_2022,
    SUM(CASE WHEN order_year = 2023 THEN sales ELSE 0 END) AS sales_2023
FROM cte
GROUP BY order_month
ORDER BY order_month;*/


/*4 ---- for each category which month had highest sales */

/*WITH monthly_sales AS (
    SELECT 
        category,
        MONTH(order_date) AS order_month,
        SUM(sale_price) AS total_sales
    FROM orders
    GROUP BY category, MONTH(order_date)
),
ranked_sales AS (
    SELECT *,
        ROW_NUMBER() OVER (PARTITION BY category ORDER BY total_sales DESC) AS rank
    FROM monthly_sales
)
SELECT category, order_month, total_sales
FROM ranked_sales
WHERE rank = 1
ORDER BY category;*/


/*5 --- which sub category had highest growth by profit in 2023 compare to 2022 */


WITH yearly_sales AS (
    SELECT 
        sub_category,
        YEAR(order_date) AS order_year,
        SUM(sale_price) AS total_sales
    FROM orders
    WHERE YEAR(order_date) IN (2022, 2023)
    GROUP BY sub_category, YEAR(order_date)
),
pivoted_sales AS (
    SELECT 
        sub_category,
        MAX(CASE WHEN order_year = 2022 THEN total_sales ELSE 0 END) AS sales_2022,
        MAX(CASE WHEN order_year = 2023 THEN total_sales ELSE 0 END) AS sales_2023
    FROM yearly_sales
    GROUP BY sub_category
),
sales_growth AS (
    SELECT 
        sub_category,
        sales_2022,
        sales_2023,
        (sales_2023 - sales_2022) AS growth
    FROM pivoted_sales
)
SELECT TOP 1 *
FROM sales_growth
ORDER BY growth DESC;




