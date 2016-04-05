function toggleText(button_id)  {
     var el = document.getElementById(button_id);
        if (el.firstChild.data == "Empty") 
        {
            el.firstChild.data = "有人QQ";
            $("#"+button_id).attr("class","btn btn-lg btn-block btn-danger");
        }
        else 
        {
            el.firstChild.data = "Empty";
            $("#"+button_id).attr("class","btn btn-lg btn-block btn-info");
        }
}