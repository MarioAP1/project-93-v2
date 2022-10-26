function adduser()
{
     username = document.getElementById("user_name").value;

        localStorage.setItem("user_name", user_name);

        window.location = "room_page.html";
}