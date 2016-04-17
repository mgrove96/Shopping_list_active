$(function () {
	$(".add-items").submit(function () {
    	event.preventDefault();
    	var item = $("#todo-list-item").val();
    	if (item)
    	{
            if (item == 'Potatoes')
            {
            	$("#todo-list-item").val("");
                var win = window.open('https://www.youtube.com/watch?v=ihMMw0rnKz4', '_blank');
                if (win)
                    win.focus();
                else
                    alert('Lol you need to allow popups fam');
            }
            else
            {
        		$(".list-items").append("<li class='item'><input class='checkbox' type='checkbox'/>"+item+"<a class='remove'>X</a></li>");
        		localStorage.setItem("listItems", $("#list-items").html());
        		$("#todo-list-item").val("");
            }

    	}
    });

    $(document).on("change", ".checkbox", function() {
        if ($(this).attr("checked"))
            $(this).removeAttr("checked");
        else
            $(this).attr("checked", "checked");
    	$(this).parent().toggleClass("completed");
    });

    $(document).on("click", ".remove" ,function() {
        $(this).parent().slideUp("slow", function() {
            $(this).remove();
        });
        
    });
});