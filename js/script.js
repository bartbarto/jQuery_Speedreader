var text;
var speed=300;
var playing = false;
var wordlist;
var i = 1;
var intervalId;

$(document).ready(function(){
    
    $('.slider').slider().on('slide', function(ev){
        
        //console.log(ev.value);
        
        if(playing){
        window.clearInterval(intervalId);
        intervalId = window.setInterval(tick, speed);
        }
        
        speed = 60000/ ev.value;
        
    });
    
    $('#go_button').click(function(){
        
        go_button_clicked();
        $('#showarea').fadeIn('medium');
        
    });
    
    $("#play_control").click(function(){
        
        if(playing){
            
            window.clearInterval(intervalId);
            playing=false;
            
        }else{
            
            intervalId = window.setInterval(tick, speed);
            playing = true;
        }
       
        
    });
    
    $('#close_button').click(function(){
        
        window.clearInterval(intervalId);
        
        $('#showarea').fadeOut('slow');
        i=0;
        playing=false;
        
    });
    
    
    
})

function go_button_clicked(){
    
    text = $('#inputfield').val();
    
    wordlist = text.split(" ");
    
    //console.log(wordlist);
    
    intervalId = window.setInterval(tick, speed);
    playing=true;
    
    $('#word').empty().append(wordlist[0]);
    
    
}

function tick(){
    
    $('#word').empty().append(wordlist[i]);
    
    i++;
    
    if( i > wordlist.length){
        
        window.clearInterval(intervalId);
        
        $('#showarea').fadeOut('slow');
        i=0;
        playing=false;
        
    }
}