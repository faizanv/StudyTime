var page = [];
$(document).ready(function() {
    $.ajax({
        "url": "/card",
        "success": function(result) {
            console.log(result);
            _.each(result, function(item) {
                var card = _.clone(item);
                page.push(card);
                console.log(page);
                $('#cardList').append("<button type='button' class='card' value='"+item._id
                +"'><p class='username'>@"+item.username+"</p><strong>"
                    +item.title+"</strong><p>"+item.body+"</p></button>");
            });
            $('.card').click(function() { //change card displayed
                var id = $(this).val(); //id
                var item = _.filter(page,function(n) {
                    return n._id === id;
                })[0];
                $('#cardDisplay').html("<div class='cardMain' id='cardMain' value='"+item._id+"'><p>Author: "
                    +item.author+ "</p><p>@"+item.username+"</p><strong class='title'>"
                    +item.title+"</strong><p class='content'>"+item.body+"</p></div>");
            });
        $('#cardDisplay').html("<div class='cardMain' id='cardMain' value='"+result[0]._id+"'><p>Author: "
            +result[0].author+ "</p><p>@"+result[0].username+"</p><strong class='title'>"
            +result[0].title+"</strong><p class='content'>"+result[0].body+"</p></div>");
        }
    });
    // var cardList = getCards();
    //append div Card to cardList
    //depending on size only load certain amount of cards
    //load more if user scrolls (event listener)
    // if cardList != empty
    // showDetail()
    // else
    // show friendly prompt
    //(left side) card onClick()/showDetail() puts it on the right side $().add()
    //new card button exopses a form
    //save card button posts if unique card and puts(updates) if not
});

function addCard(){
    var data = {
        "author": $("#name").val(),
        "username": $("#username").val(),
        "title": $("#title").val(),
        "body": $("#body").val()
    };
    $.ajax({
        "url": "/card",
        "method": "post",
        "data": data,
        "success": function(result) {
            console.log("posted");
            location.reload();
        }
    });
}

$('.card').hover(function() {
    $('.card').animate({
            height: '150px',
            width: '200px'
        });
    },
    function() {
        $('.card').animate({
                height: '100px',
                width: '150px'
        });
});

function deleteCard() {
    // var id = document.getElementById('cardMain').value;
    var id = document.getElementById('cardMain').getAttribute('value');//.value;
    console.log(id);
    var link = "/card/" + id;
    console.log(link);
    $.ajax({
        "url": link,
        "type": "delete",
        "success": function() {
            console.log("deleted");
            location.reload();
        }
    });
}
