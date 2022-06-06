	var m = localStorage.getItem("patient-mail");

    var db = null;
        db = openDatabase("mp2", "1.0", "mp2", 65535);
        console.log(db)
   var id;
  

    db.transaction(function(transaction){
        var sql = "SELECT id FROM patient WHERE mail=(?)";
        transaction.executeSql(sql, [m], function(transaction, result){
        var row = result.rows.item(0)
        //alert(row.id)
        localStorage.setItem("id",row.id);
       
        alert(row.id)
        })      
})

id = localStorage.getItem("id")
alert(id)
document.write("Welcome ID" + " " );
document.write(id)
