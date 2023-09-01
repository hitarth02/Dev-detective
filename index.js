const url = 'https://api.github.com/users/';
const get = (agrs) => document.getElementById(`${agrs}`);
const input = get("input")
const root = document.documentElement.style;
const profile = get("user_profile");
const realName = get("real_name")
const usser = get("user_name")
const date = get("user_date")
const bio = get("user_bio")
const repos = get("user_repos")
const followers = get("user_followers")
const followings = get("user_followings")
const userLocation = get("user_location")
const twitter = get("user_twitter")
const github = get("user_github")
const company = get("user_company")
const btnsubmit = get("submit")
const btnMode = document.getElementById("btn-mode")
const theme = document.querySelector(".theme")
const lightIcon = document.querySelector(".light-mode-icon")
const darkIcon = document.querySelector(".dark-mode-icon")
const months = ["jan","feb","mar","april","may","jun","july","aug","sept","oct","nov","dec"]
const notFound = get("not_found")
const userDetails = get("user_details")
const userExtra = get("user_extra")
const modeIcon = get("mode_icon")
const wrapper = get("wrapper")
const container = get("container")
const searchBar = get("search_bar")
const detailstyle = get("user_details")
const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")

function setDarkMode(){
    btnMode.innerHTML = "LIGHT"
    btnMode.style.color = "black"
    btnMode.style.transition = "all 2s"
        btnMode.style.backgroundColor = "#d6d6d6"
        wrapper.style.backgroundColor = "#3e3e42"
        container.style.backgroundColor = "#1e1e1e"
        container.style.color = "#e0e1dd"
        input.style.backgroundColor = "#1e1e1e"
        input.style.color = "#e0e1dd"
        input.style.transition = "all 2s"
        searchBar.style.border = "2px solid #252526"
        container.style.boxShadow = "0px 0px 15px 0.5px #2d2d30"
        searchBar.style.boxShadow = "0px 0px 5px 0.5px #2d2d30"
        searchBar.style.transition = "all 2s"
        detailstyle.style.backgroundColor = "#2d2d30"
        detailstyle.style.transition = "all 2ms"
        a.style.backgroundColor = "#252526"
        b.style.backgroundColor = "#252526"
        c.style.backgroundColor = "#252526"
        a.style.transition = "all 2s"
        b.style.transition = "all 2s"
        c.style.transition = "all 2s"
        github.style.color = "#e0e1dd"
        github.style.transition = "all 2s"
    twitter.style.color = "#e0e1dd"
    twitter.style.transition = "all 2s"
    btnsubmit.style.backgroundColor = "#007acc"
    wrapper.style.transition = "all 2s"
    container.style.transition = "all 2s"
}

function setLightMode(){
    btnMode.innerHTML = "DARK"
        btnMode.style.color = "white"
        btnMode.style.backgroundColor = "#282828"
        wrapper.style.backgroundColor = "#d6d6d6"
        container.style.backgroundColor = "#ededed"
        container.style.color = "black"
        input.style.backgroundColor = "#ededed"
        input.style.color = "black"
        searchBar.style.border = "2px solid rgba(78, 78, 78, 0.748)"
        container.style.boxShadow = "0px 0px 15px 0.5px rgba(0, 0, 0, 0.586)"
        searchBar.style.boxShadow = "0px 0px 0px 0px #2d2d30"
        detailstyle.style.backgroundColor = "#d6d6d6"
        a.style.backgroundColor = "#ededed"
        b.style.backgroundColor = "#ededed"
        c.style.backgroundColor = "#ededed"
        github.style.color = "black"
        twitter.style.color = "black"
}


btnMode.addEventListener("click", function(){
    if(btnMode.innerHTML === "DARK"){
        setDarkMode()
    }else{
        setLightMode()
    }
})


async function fetchData(url){

    let data = await fetch(url);
    let result = await data.json();
    console.log(result)
    showData(result)
}

function showData(result){
    if(result.message === "Not Found"){
        notFound.innerHTML = "User not found"
        userDetails.style.scale = 0
        userExtra.style.scale = 0
        bio.style.scale = 0
        profile.src="./icons/dummy.png"
        realName.innerHTML=""
        usser.innerHTML="@"
        date.innerHTML="dd-mm-yyyy"
        bio.innerHTML=""
        repos.innerHTML="-"
        followers.innerHTML="-"
        followings.innerHTML="-"
    }else{
        notFound.innerHTML=""
        userDetails.style.scale = 1
        userExtra.style.scale = 1
        bio.style.scale = 1
        profile.src=`${result.avatar_url}`
        realName.innerHTML=`${result.name === null ? result.login : result.name}`
        usser.innerHTML=`@${result.login}`
        datesegments = result.created_at.split("T").shift().split("-")
        date.innerHTML=`Joined ${datesegments[2]} ${months[datesegments[1]-1]} ${datesegments[0]}`
        bio.innerHTML=`${result.bio === null ? "This profile has No bio" : result.bio}`
        repos.innerHTML=`${result.public_repos}`
        followers.innerHTML=`${result.followers}`
        followings.innerHTML=`${result.following}`
        userLocation.innerHTML=`${result.location === null ? "Not available" : result.location}`
        company.innerHTML=`${result.company === null ? "Not available" : result.company}`
        twitter.innerHTML=`${result.twitter_username === null ? "Not available" : result.twitter_username}`
        twitter.href=`${result.twitter_username === null ? "#" : `https://twitter.com/${result.twitter_username}`}`
        github.href=`${result.html_url === null ? "Not available" : result.html_url}`
        github.innerHTML=`${result.html_url === null ? "Not available" :result.login}`
        
    }
}

input.addEventListener('keydown',function(e){
    if(e.key=="Enter"){
        if(input.value !==""){
            fetchData(url + input.value)
        }
    }
})

btnsubmit.addEventListener('click',function(){
    if(input.value !==""){
        fetchData(url + input.value)
    }
})

function init(){

    setLightMode()
    fetchData(url + "hitarth02")
}

init()