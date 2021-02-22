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

    $(".devour").click(function(event){
        event.preventDefault();
        const id = $(this).data("id");
        const burgerState = $(this).data("devoured");
        console.log(burgerState);
        
        const newBurgerState = {
            devoured: burgerState
        };

        $.ajax("/api/burgers/"+id, {
            type:"PUT",
            data: newBurgerState
        }).then(function(){
            console.log(`changed devoured to ${newBurgerState}`);
            location.reload();
        });
        
    });

    $(".delete-burger").click(function(event){
        event.preventDefault();
        const id = $(this).data("id");
        
        $.ajax('/api/delete/' +id,{
            type:"DELETE",
        }).then(function(){
            console.log(`delete burger id ${id}`);
            location.reload();
        })
    })
});