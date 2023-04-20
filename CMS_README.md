Rewriting JS to fetch a Wordpress REST API we set up for this assignment.

Featured/sale items rendered on index.
Productlist fetches data from https://codewithspooks.com/rainydaysproducts/wp-admin/ and renders the product according to product tags that will be either men or women depending on when button/link is clicked. I have utilized local storage to store the filter value in local storage and the render function grabs this from storage and filters the fetch with it.

Details page will check the query string for the ID passed from products page and fetch the correct item (the one clicked).
There is a cart functon in place for the product page and detail page. This also uses local storage. Mostly because I had it written like that previously so I rewrote the functions instead of recreating the whole thing.

After teacher videos I went ahead and rewrote all innerHTML to createElement. Mostly because of the practise even though we were told that innerHTML was fine for this assignment.
I still have a few .innerHTML assigned because it worked better with WooCommerce API and some of their features. Like .price_html that gives you a very dynamic price setup by default.
