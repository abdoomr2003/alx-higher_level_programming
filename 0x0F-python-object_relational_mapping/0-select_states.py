#!/usr/bin/python3
"""
Script that lists all states from the database hbtn_0e_0_usa
"""
import MySQLdb


mydatabase_connect = MySQLdb.Connect(
    host="localhost", user="root", password="", database="hbtn_0e_0_usa"
)
cursor = mydatabase_connect.cursor()
cursor.execute("SELECT * FROM states ORDER BY id")
for state in cursor.fetchall():
    print(state)
