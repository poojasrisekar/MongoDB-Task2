db.users.insertMany(
  [{
    user_name:"abi",
    date:ISODate("2024-7-16"),
    attendance:"absent",
    task_submission:"failed"
},
{
    user_name:"raja",
    date:ISODate("2024-7-20"),
    attendance:"absent",
    task_submission:"failed"
},
{
    user_name:"oviya",
    date:ISODate("2024-7-19"),
    attendance:"present",
    task_submission:"passes"
},
{
    user_name:"virat",
    date:ISODate("2024-7-01"),
    attendance:"absent",
    task_submission:"passed"
},
{
    user_name:"neha",
    date:ISODate("2024-7-16"),
    attendance:"present",
    task_submission:"failed"
},
{
    "user_name":"kaviya",
    "date":ISODate("2024-7-17"),
    "attendance":"present",
    "task_submission":"passed"
}]
);
