
const logoButton = document.getElementById("logo");

const headerButton = document.getElementById("headerButton");
const headerPopover = document.getElementById("popoverLikeJS");
const wrapperGet = document.getElementsByClassName("wrapper")[0];
const arrayOfPopover = [headerButton, headerPopover, wrapperGet];

const height = headerPopover.offsetHeight;

const aboutMe = document.getElementsByClassName("aboutMeSection")[0];




headerButton.addEventListener("click", function(){
   
    if(window.innerHeight < height) return;
    headerButton.classList.toggle("open");
    headerPopover.classList.toggle("open");
    wrapperGet.classList.toggle("blur");
    headerButton.style.filter = "blur(0px)";
    headerButton.style.pointerEvents = "none";
    for(const navButton of arrayOfButtons) navButton.style.pointerEvents = "none";
    logoButton.style.pointerEvents = "none";
    document.documentElement.style.overflowY = "hidden";
    document.body.style.overflowY = "hidden";  
    event.stopPropagation();



    
    document.addEventListener("click", function(event){
        if(!headerPopover.contains(event.target))
        {
            headerButton.classList.remove("open");
            headerPopover.classList.remove("open");
            wrapperGet.classList.remove("blur");
            headerButton.style.pointerEvents = "all";
            for(const navButton of arrayOfButtons) navButton.style.pointerEvents = "all";
            logoButton.style.pointerEvents ="all";
            document.documentElement.style.overflowY = "scroll";
            document.body.style.overflowY = "scroll";  


            
            

        }
    })

    window.addEventListener("resize", function(){
        if(window.innerHeight < height)
        {
            arrayOfPopover.forEach(element => {
                element.classList.remove("open");
            });
            wrapperGet.classList.remove("blur");
            headerButton.style.pointerEvents = "all";
            for(const button of arrayOfButtons) button.style.pointerEvents = "all";
        }
        
    })
    
    
})





const layoutCont = document.getElementsByClassName("layoutContainer");

Array.from(layoutCont).forEach(el => {

    
    el.addEventListener("click", function(){
        el.classList.toggle("open");
    })
});

const arrayOfButtons = document.getElementsByClassName("referenceButtons");
let openAlready = false

for(let i = 0; i < arrayOfButtons.length; i++)
{
    const elementWithin = layoutCont[i];
    
        
        arrayOfButtons[i].addEventListener("click",function(){
            elementWithin.scrollIntoView({
                block: "center",
                behavior: "smooth"
            });
            if(elementWithin.classList.contains("open"))
            {
                if(i > 0)
                {
                    setTimeout(() => {
    
                        elementWithin.classList.add("shadow");
                    } , 150);

                }
                else
                {
                    elementWithin.classList.add("shadow");
                }
                
            }
            
            
            elementWithin.classList.add("open");
        
            
            
        });
        document.addEventListener("click",function(event){
            if(!arrayOfButtons[i].contains(event.target)) elementWithin.classList.remove("shadow");
        })
    

        
            
            
    
}