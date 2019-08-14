

$(document).ready(function() 
{ 
    $("#loader").hide();
    
        $.ajax({
            type:"GET",
            url:"https://api.jsonbin.io/b/5d41c0db3c07cc1d5d1703d7",

            beforeSend: function()
               { $("#loader").show();},
            
           success:function(data)
            {   $("#loader").hide();
                
                var count=0;
                console.log(data);
                var output='<div class="container"><div class="row"><div class="col col-12 col-sm-6" ><table><tr>';
                for(var i in data)
                    {
                        $("#loader").hide();
                        output+='<td><div class="card" style="width: 25rem;"><center><img class="img-thumbnail" src="'+data[i].image+'"  width="250" height="250" id="photo"></center>';
                        output+='<div class="card-body"><h5 class="card-title">'+data[i].title+'</h5>';
                        output+='<p class="card-text">By '+data[i].author+'</p></div></div></td>';


                        count++;
                        if(count>=4)
                        {
                            output+='</tr></div><div class="row"><div class="col col-12 col-sm-6"<table><tr>';
                            count=0;
                        }
                        
                    }
                output+="</tr></table></div></div></div>";
                $("#result").html(output);
            }
        
    });


    $("#cat").change(function(){ 
        var category = $("#cat").val();
        $.ajax({
            type:"GET",
            url:"https://api.jsonbin.io/b/5d41c0db3c07cc1d5d1703d7",
            success:function(data){ var count1=0;
            if(category!="Category"){
               var output ='<div class="container"><div class="row"><div class="col col-12 col-sm-6" ><table><tr>';
               for(var i in data)
                if (category == data[i].category)
                {   console.log("hit");
                    $("#loader").hide();
                    output+='<td><div class="card" style="width: 25rem;"><center><img class="img-thumbnail" src="'+data[i].image+'"  width="250" height="250" id="photo"></center>';
                    output+='<div class="card-body"><h5 class="card-title">'+data[i].title+'</h5>';
                    output+='<p class="card-text">By '+data[i].author+'</p></div></div></td>';


                     count1++;
                    if(count1>=4)
                    {
                        output+='</tr></div><div class="row"><div class="col col-12 col-sm-6"<table><tr>';
                        count1=0;
                    } 
                    
                    
                }       output+="</tr></table></div></div></div>";
                $("#result").html(output);
            }
            

            }

        });
    });
});