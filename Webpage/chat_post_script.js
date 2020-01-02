    // Post script
    /* When send button pressed */
    send_and_upload = document.getElementsByClassName("bt send");
    send_and_upload[1].onclick = function() { extendChat() };

    // Upload button
    send_and_upload[0].onclick = function() { /* Let him choose a file */ };

    /* When call ends, get back to queue */
    endcall = document.getElementById("endcall");
    endcall.onclick = function() { window.location = "mainpage.html"; };

    /* Adds an eventlistener who is connected to a function to accept enter button as send button */
    text_field = document.getElementById("chat");
    text_field.addEventListener("keydown", sendByEnter);