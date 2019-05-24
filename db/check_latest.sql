select max(time) as time, max(date) as date from items
where date = (select max(date) from items);