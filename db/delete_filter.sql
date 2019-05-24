delete from items
where category = (select category from filters where filter = $1);

delete from filters
where filter = $1 and user_id = $2;
select * from filters where user_id = $2;