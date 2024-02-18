#!/usr/bin/python3
"""
Script that lists all states from the database hbtn_0e_0_usa
"""
import MySQLdb

# Establishing a connection to the database
mydatabase_connect = MySQLdb.Connect(
    host="localhost", user="root", password="", database="hbtn_0e_0_usa"
)

# Creating a cursor object to execute SQL queries
cursor = mydatabase_connect.cursor()

# Executing a SQL query to select all states from the table 'states' and ordering them by id
cursor.execute("SELECT * FROM states ORDER BY id")

# Fetching all the rows returned by the query and printing them
for state in cursor.fetchall():
    print(state)
