$(document).ready(function() {
    console.log( "ready!" );
    MakeContent();
});

function SetBG(){

}

function MakeContent(){
    let list = [
        ContentBasic(),
    ]
    for (let i = 0; i < list.length;i++){
        $("body").append(list[i]);
    }
}



function ContentBasic(){
    return "<h1>Hello world</h1>"
}

