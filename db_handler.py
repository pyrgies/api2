import database_common


@database_common.connection_handler
def insert_parameters(cursor):
    cursor.execute("""
                   
                """)
    all_questions = cursor.fetchall()
    return all_questions