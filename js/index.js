$(document).ready(function(){
    $(".main-page .txt-content").fadeIn(1500)

    function skill(id, per){
        let circle = new ProgressBar.Circle(id,{
            strokeWidth: 4,
            trailWidth: 4,
            color: "#6699cc",
            duration: 1400,
            step: function(state, circle){
                circle.setText(Math.round(circle.value() * 100) + "%")
            }
        })
        circle.animate(per)
    }
    let pg_chk = false;

    let Fullpage = new fullpage('#fullpage',{
        navigation: true,
        responsiveWidth: 1500,
        anchors: ['home', 'about', 'portfolio', 'contact'],
        parallax: true,
        licenseKey: "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
        onLeave: function(origin, destination){

            if(destination.index == 1 && pg_chk == false){
                skill("#html",0.9);
                skill("#css",0.8);
                skill("#js",0.7);
                skill("#jq",0.7);
                skill("#scss",0.6);
                skill("#ps",0.8);
                skill("#ai",0.8);
                pg_chk = true;
            }
        },
    })
    
})