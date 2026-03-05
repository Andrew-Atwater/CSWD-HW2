function showDate(){
    let today = new Date();
    document.getElementById("date").innerText = "Today's Date: " + today.toDateString();
}

document.addEventListener("DOMContentLoaded", function(){
    let postBtn = document.getElementById("postBtn");
    postBtn.addEventListener("click", function(){
        let username = document.getElementById("username").value;
        let message = document.getElementById("message").value;

        if(username === ""){
            alert("Please enter a username.");
            return;
        }
        else if(message === ""){
            alert("Please enter a message to post.");
            return;
        }

        let postList = document.getElementById("posts");

        let newPost = document.createElement("li");

        newPost.textContent = username + " says: " + message;
        postList.appendChild(newPost);
        
    });
});