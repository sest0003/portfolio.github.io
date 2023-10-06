/*
Chinook 03

Exercises with **Group by**
*/

--  1) List the amount of customers in each country. Sort so the higest amount shows first.

SELECT country, COUNT(*) nrofcustomer
FROM customer
GROUP BY country
ORDER BY nrofcustomer DESC

--  2) List the amount of invoices per year. Show the years in order.
--     Hint: use EXTRACT to get the year from a date 

SELECT EXTRACT(YEAR FROM invoicedate) AS year, COUNT(*) nrofinvoices
FROM invoice
GROUP BY year
ORDER BY year

--  3) List all artists and how many albums they have released. Sort the result.

/*
	artistname      nrofinvoices
	
	Iron Maiden		21
	Led Zeppelin	14
	Deep Purple		11
	...etc
*/

SELECT artist.name artistname, COUNT(*) nrofalbums
FROM album join artist on album.artistid = artist.artistid
GROUP BY artistname
ORDER BY nrofalbums DESC

-- Alternative, if there are artist with the same name:

SELECT artist.name artistname, COUNT(*) nrofalbums
FROM album join artist on album.artistid = artist.artistid
GROUP BY artist.artistid, artist.name
ORDER BY nrofalbums DESC

--  4) List the five genre (ids) which has the longest track (one of the track in that genre should be long)

/*
Time	GenreId

5286953	19
5088838	21
2960293	20
2713755	18
2541875	22
*/

SELECT MAX(milliseconds) time, genreid
FROM track
GROUP BY genreid
ORDER BY time DESC
LIMIT 5

--  5) List the five countries that has received the hightest amount of invoice dept. 

/*
BillingCountry	Amount

USA	            523.06
Canada	        303.96
France	        195.10
Brazil	        190.10
Germany	        156.48
*/

SELECT billingcountry, SUM(total) as amount
FROM invoice
invoice
GROUP BY billingcountry
ORDER BY amount DESC
LIMIT 5