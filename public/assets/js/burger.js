$(function(){
    $("#add-burger").on('submit', function(event){
        event.preventDefault();
        const newBurger = {
            burger_name:$("#burger_name").val().trim()
        };

        $.ajax("/api/burgers",{
            type:"POST",
            data: newBurger
        }).then(function(){
            console.log(`${newBurger.burger_name} has been added`);
            location.reload();
        })
    });
})