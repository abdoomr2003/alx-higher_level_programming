#!/usr/bin/python3
import MySQLdb, mysql.connector.cursor

mydatabase_connect = MySQLdb.Connect(
    host="localhost", user="root", password="", database="hbtn_0e_0_usa"
)
cursor = mydatabase_connect.cursor()
cursor.execute("SELECT * FROM states ORDER BY id")
for state in cursor.fetchall():
    print(state)
