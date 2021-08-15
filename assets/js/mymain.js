function works(xCategory,xlink,xImage,xGithublink,xTitle)
{
    this.Category=xCategory;
    this.link=xlink;
    this.image=xImage;
    this.githublink=xGithublink;
    this.title=xTitle;
}
function skillsName(){
    this.skil1="PHP";
    this.skil2="HTML5/CSS3";
    this.skil3="Web Application";
    this.skil4="Windows Application";
    this.skil3="Machain Learning";
}
var skillsNameArr=["PHP","HTML5/CSS3","WebApplication","WindowsApplication","MachainLearning"];

function aboutme(xdetails,xphoto,xskillsTitle){
    this.Details=xdetails;
    this.Photo=xphoto;
    this.SkillsTitle=xskillsTitle;
}
function contact(xemail,xphone,xlocation,xinformation)
{
    this.Email=xemail;
    this.Phone=xphone;
    this.Location=xlocation;
    this.Information=xinformation;
}
function galarry(xpathImage,ximage)
{
    this.PathImage=xpathImage;
    this.Image=ximage;
    
}

function user (xiamge,fname,lname,age,address){
    this.FisrtName=fname;
    this.LastName=lname;
    this.Age=age;
    this.Address=address;
    this.Image=ximage;

}
/////////////////////contactus//////////////////////////////
var Contactus=new contact("rana_abdullah77@yahoo.com","+9647814357048","Baghdad","Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.")

////////////////////////gallary////////////////////////////////////
var Gallary=new galarry("c://image1.jpg","imag1.jpg");

////////////////////About Me/////////////////////////////////////////////
var About=new aboutme("I’m a Web Designer & Application Developer.I program’s and analysis Systems,And I Have B.Sc. Degree in Computer Science.","photo","skills")

//////////////////////////     About Page     //////////////////////////////////////////////////
function user (ximagePath,fname,lname,age,address,xabout){
    this.ImagePath=ximagePath;
    this.FisrtName=fname;
    this.LastName=lname;
    this.Age=age;
    this.Address=address;
    this.propAbout=xabout
}
var me=new user("image/avatar.jpg","Rana","Abdullah","44","Baghdad",About);
//document.write(jsonSkill);


/////////////////////////////////////Works////////////////////////////////////////////////////////////////////////////////
var work1 =new works("web","https://heuristic-benz-56a9d2.netlify.app/","image/quize.png","https://github.com/temamen/QuizJavascript.git","Quize");
var work2 =new works("web","https://amazing-ride-224e1a.netlify.app/index.html","image/netflex.png","linkGithub","Netflex");
var work3 =new works("web","https://brave-mccarthy-dc6ddd.netlify.app/","image/chalange.jpg","https://github.com/temamen/ChallengeXTeam.git","chalange");
var work4 =new works("web","https://angry-allen-b4cb2b.netlify.app/","image/cinema.png","https://github.com/temamen/myCinamana.git","Cinemana");
var work5 =new works("web","https://amazing-ride-224e1a.netlify.app/index.html","image/shopping.png","https://github.com/temamen/myCinamana.git","Shopping");

var work6 =new works("design","http://index.html","image/web1.jpg","linkGithub","Templat1");
var work7 =new works("design","http://index.html","image/web2.jpg","linkGithub","Templat2");
var work8 =new works("design","http://index.html","image/web3.jpg","linkGithub","Templat3");

var work9 =new works("MachainLearning","http://index.html","image/web4.jpg","linkGithub","detials4");
var work10 =new works("MachainLearning","http://index.html","image/web2.jpg","linkGithub","detials5");

let allWorks=[];
allWorks.push(work1);
allWorks.push(work2);
allWorks.push(work3);
allWorks.push(work4);
allWorks.push(work5);
allWorks.push(work6);
allWorks.push(work7);
allWorks.push(work8);
allWorks.push(work9);
allWorks.push(work10);
////////////////Loop For Display Works/////////////////////
const divPortfolio=document.getElementById("portfolio-grid");
for(const myWorks in allWorks){
console.log(allWorks[myWorks].title);
}
for(const myWorks in allWorks){
    const workDiv=document.createElement("div");

    workDiv.classList.add(allWorks[myWorks].image);
    console.log(allWorks[myWorks].title);
    if ((allWorks[myWorks].Category) == "web"){
        workDiv.innerHTML=`<div class="item web col-sm-6 col-md-4 col-lg-4 mb-4">
        <a href="${allWorks[myWorks].link}" class="item-wrap fancybox">
        <div class="work-info">
            <h3>${allWorks[myWorks].title}</h3>
            <span>Web</span>
        </div>
        <img class="img-fluid" src="${allWorks[myWorks].image}">
        </a>
        </div> `
        
    }else if((allWorks[myWorks].Category) == "design"){
        workDiv.innerHTML=`<div class="item design col-sm-6 col-md-4 col-lg-4 mb-4">
        <a href="${allWorks[myWorks].link}" class="item-wrap fancybox">
        <div class="work-info">
            <h3>${allWorks[myWorks].title}</h3>
            <span>design</span>
        </div>
        <img class="img-fluid" src="${allWorks[myWorks].image}">
        </a>
        </div> `
        // divPortfolio.appendChild(workDiv);
    }else{
        workDiv.innerHTML=`<div class="item design col-sm-6 col-md-4 col-lg-4 mb-4">
        <a href="${allWorks[myWorks].link}" class="item-wrap fancybox">
        <div class="work-info">
            <h3>${allWorks[myWorks].title}</h3>
            <span>design</span>
        </div>
        <img class="img-fluid" src="${allWorks[myWorks].image}">
        </a>
        </div> `
        // divPortfolio.appendChild(workDiv);
    }
    if ( workDiv != null)
    {
        console.log(allWorks[myWorks].Category);
    }
    divPortfolio.appendChild(workDiv);

    
}///End For Loop

// var jsonSkill = JSON.stringify(allSkill);


