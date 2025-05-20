
with hotels as (
select * from dbo.['2018$']
union 
select * from dbo.['2019$']
union
select * from dbo.['2020$'] ) 

select * from hotels
left Join dbo.market$
ON hotels.market_segment = market$.market_segment
left Join dbo.meal_cost$ ON meal_cost$.meal=hotels.meal