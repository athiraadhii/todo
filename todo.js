function todo(){
    console.log("clicked")
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function()
    {
        var data=JSON.parse(this.responseText);
        console.log(data);
        var output=`<tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Complete</th>
                        </tr>`;
        for(let i=0;i<data.length;i++)
        {
            let status = data[i].completed?"checked":"";
            let disable = data[i].completed?"disabled":"";
            output+=`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].title}</td>
                    <td><input type="checkbox" ${status} ${disable} onclick="count()"/></td>
                    </tr>`
        } 
        document.getElementById("table").innerHTML=output;             
    }
    xhttp.open(`GET`,`https://jsonplaceholder.typicode.com/todos`,true);
    xhttp.send();
}
    let n=0;
    function count(){
        n++;
        new Promise((resolve,reject)=>{
            if(n==5){
                resolve("congrats.5 task have been succesfully completed");
            }

            })
            .then((val)=>{
                alert(val);
            })
    }
    
