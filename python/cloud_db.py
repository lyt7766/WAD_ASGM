import sqlite3
db = sqlite3.connect('LMEO.sqlite')

db.execute('DROP TABLE IF EXISTS members')
db.execute('DROP TABLE IF EXISTS orders')
db.execute('DROP TABLE IF EXISTS order_item')

db.execute('''CREATE TABLE members(
    user_id integer PRIMARY KEY AUTOINCREMENT,
    email text UNIQUE NOT NULL,
    password text NOT NULL
)''')

db.execute('''CREATE TABLE orders(
    id integer PRIMARY KEY AUTOINCREMENT, 
    order_datetime timestamp NOT NULL,
    member_id integer NOT NULL,
    total_price real NOT NULL
)''')

db.execute('''CREATE TABLE order_item(
    order_id integer, 
    item_name text,
    quantity integer, 
    price real,
    PRIMARY KEY (order_id, item_name)
)''')

cursor = db.cursor()

cursor.execute('''
    INSERT INTO members(email,password)
    VALUES('fooyw@ayam.com','asdasd')
''')

cursor.execute('''
    INSERT INTO members(email,password)
    VALUES('lili@koalamail.com','012-7534988')
''')

cursor.execute('''
    INSERT INTO members(email,password)
    VALUES('abc@gmail.com','abcde')
''')

cursor.execute('''
    INSERT INTO orders(order_datetime, member_id, total_price)
    VALUES('2022-01-01', 3, 188.00)
''')

cursor.execute('''
    INSERT INTO orders(order_datetime, member_id, total_price)
    VALUES('2022-03-03', 3, 22.00)
''')

cursor.execute('''
    INSERT INTO orders(order_datetime, member_id, total_price)
    VALUES('2022-06-07', 3, 12.00)
''')

cursor.execute('''
    INSERT INTO order_item(order_id, item_name, quantity, price) 
    VALUES(1, 'Ribeye Steak', 2, 40.00)
''')

cursor.execute('''
    INSERT INTO order_item(order_id, item_name, quantity, price) 
    VALUES(1, 'Chicken Supreme', 3, 30.00)
''')

cursor.execute('''
    INSERT INTO order_item(order_id, item_name, quantity, price) 
    VALUES(1, 'Whooper Jr', 1, 18.00)
''')

cursor.execute('''
    INSERT INTO order_item(order_id, item_name, quantity, price) 
    VALUES(2, 'Long Cheesy Onion Beef', 1, 22.00)
''')

cursor.execute('''
    INSERT INTO order_item(order_id, item_name, quantity, price) 
    VALUES(3, 'Caffe Latte', 1, 12.00)
''')

db.commit()
db.close()