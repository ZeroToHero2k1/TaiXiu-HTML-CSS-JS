document.getElementById("lacXiNgau").addEventListener("click",function(){
    let xx1=Math.floor(Math.random()*6)+1;
    let xx2=Math.floor(Math.random()*6)+1;
    let xx3=Math.floor(Math.random()*6)+1;
    document.getElementById("btnTai").addEventListener("click",function(){
        let duDoan=true;
        document.getElementById("khuiKq").addEventListener("click",function(){
            document.getElementById("numberOfXX1").innerHTML=xx1;
            document.getElementById("numberOfXX2").innerHTML=xx2;
            document.getElementById("numberOfXX3").innerHTML=xx3; 
            let tong=xx1+xx2+xx3;
            let kq=(tong>=11?true:false);
            if(kq===duDoan){
                document.getElementById("kq").innerHTML="Bạn đã thắng, ra Tài";
            }
            else{
                document.getElementById("kq").innerHTML="Bạn đã thua, ra Xỉu";
            }
    
        })
    })
    document.getElementById("btnXiu").addEventListener("click",function(){
        let duDoan=false;
        document.getElementById("khuiKq").addEventListener("click",function(){
            document.getElementById("numberOfXX1").innerHTML=xx1;
            document.getElementById("numberOfXX2").innerHTML=xx2;
            document.getElementById("numberOfXX3").innerHTML=xx3; 
            let tong=xx1+xx2+xx3;
            let kq=(tong>=11?true:false);
            if(kq===duDoan){
                document.getElementById("kq").innerHTML="Bạn đã thắng, ra Xỉu";
            }
            else{
                document.getElementById("kq").innerHTML="Bạn đã thua, ra Tài";
            }
    
        })
    })        
})
document.getElementById("btnAgain").addEventListener("click",function(){
    window.location.reload(true);
})
