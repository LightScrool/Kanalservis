CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    quantity INTEGER,
    distance INTEGER,
    date DATE
);

INSERT INTO items (title, quantity, distance, "date") VALUES
('Title', 120, 5621, '11.06.2022')

SELECT * FROM items;

SELECT COUNT(*) FROM items;

