const navbar = document.getElementById("navbar")
navbar.innerHTML += `
<div class="flex flex-row gap-x-12">
    <a class="text-2xl sm:text-xl cursor-pointer text-blue-600 hover:text-blue-500" href="index.html">
        Winners
    </a>
    <a class="text-2xl sm:text-xl cursor-pointer text-blue-600 hover:text-blue-500" href="topTen.html">
        Top 10
    </a>
</div>
<div class="flex flex-row gap-x-6" id="authSection"></div>
`

const authSection = document.getElementById("authSection")
if (localStorage.getItem("username")) {
    authSection.innerHTML += `
    <a 
        class="text-2xl sm:text-xl text-black-600" 
        href="profile.html?usernameOrEmail=${localStorage.getItem("username")}"
    >
        ${localStorage.getItem("fullName")}
    </a>
    <div class="text-2xl sm:text-xl cursor-pointer text-blue-600 hover:text-blue-500" onclick="logout()">
        Log out
    </div>
    `
} else {
    authSection.innerHTML += `
    <a class="text-2xl sm:text-xl cursor-pointer text-blue-600 hover:text-blue-500" href="signin.html">
        Sign in
    </a>
    `
}