document.querySelector(".checkout").style.display = "none";
document.getElementById("plus").addEventListener("click",function(){
    document.getElementById("count").textContent++;
    countoncart();
});

document.getElementById("minus").addEventListener("click",function(){
    countoncart();
    if(document.getElementById("count").textContent > 0){
        document.getElementById("count").textContent--;
        countoncart();
    }
});

document.getElementById("btn").addEventListener("click",function(){
    if(document.getElementById("count").textContent > 0){
        alert("Item already added to cart");
    }
    else{
        document.getElementById("count").textContent = 1;
    }
    countoncart();
});

function countoncart(){
    if(document.getElementById("count").textContent > 0){
        document.getElementById("num").textContent =  document.getElementById("count").textContent;
    }
    else if(document.getElementById("count").textContent == 0){
        document.getElementById("num").textContent = '';
    }
}

document.getElementById("bar").addEventListener('click',function(){
    document.getElementById("previous").style.visibility = "hidden";
    document.querySelector(".checkout").style.display = "none";
    document.querySelector(".menu").style.left = "0px";
});

document.getElementById("close").addEventListener("click",function(){
    document.getElementById("previous").style.visibility = "visible";
    document.querySelector(".menu").style.left = "-900px";
});

document.getElementById("cart").addEventListener("click",function(){
    if(document.querySelector(".checkout").style.display === "none"){
        if(document.getElementById("count").textContent == '0'){
            document.getElementById("previous").style.visibility = "hidden";
            document.getElementById("next").style.visibility = "hidden";
            document.querySelector(".innertext").style.display = "none";
            document.querySelector("#check").style.display = "none";
            document.querySelector(".checkout").style.display = "block";
            document.querySelector(".empty").style.display = "flex";
        }
        else{
            var totalItems = document.getElementById("count").textContent;
            var totalCost = totalItems * 125;
            document.getElementById("previous").style.visibility = "hidden";
            document.getElementById("next").style.visibility = "hidden";
            document.querySelector(".checkout").style.display = "block";
            document.querySelector("#mul").innerHTML = "$125 x "+totalItems;
            document.querySelector("#total").innerHTML = '  $' + totalCost;
            document.querySelector(".empty").style.display = "none";
            document.querySelector(".innertext").style.display = "flex";
            document.querySelector("#check").style.display = "block";
        }
    }
    else if(document.querySelector(".checkout").style.display === "block"){
        document.querySelector(".checkout").style.display = "none";
        document.getElementById("previous").style.visibility = "visible";
        document.getElementById("next").style.visibility = "visible";
    }
});

document.querySelector(".container").addEventListener("click",function(){
    document.querySelector(".checkout").style.display = "none";
    document.getElementById("previous").style.visibility = "visible";
    document.getElementById("next").style.visibility = "visible";
});

for(var i=0;i<4;i++){
    document.querySelectorAll(".thumb")[i].addEventListener("click",function(){
        document.querySelectorAll(".thumb").forEach(img =>{
            img.style.opacity = "1";
            img.style.border = "none";
        });
        this.style.opacity = "0.5";
        this.style.border = "2px solid hsl(26, 100%, 55%)";
        document.getElementById("thumbnails").src = this.src.replace("-thumbnail",'');
    });
}

var j=5;
document.getElementById("previous").addEventListener("click",function(){
    if(j>=2){
        document.getElementById("thumbnails").src = "images/image-product-"+--j+".jpg";
    }
    else{
        j=4;
        document.getElementById("thumbnails").src = "images/image-product-"+j+".jpg";
    }
});

var k=1;
document.getElementById("next").addEventListener("click",function(){
    if(k<4){
        document.getElementById("thumbnails").src = "images/image-product-"+k+".jpg";
        k++;
    }
    else{
        document.getElementById("thumbnails").src = "images/image-product-"+k+".jpg";
        k = 1;
    }
});
