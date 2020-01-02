        // Function to add written thing to chat
        function appendChat() {
            let text = document.getElementById("chat");
            let written_text = text.value;

            let appearchat = document.getElementById("appearchat");

            appearchat.innerHTML = appearchat.innerHTML + "<div class='textclouds'>" + "<div class='client'>" + written_text + "</div>" + "</div>";
            text.value = "";
        }

        // Function to extend chat if necessary, else calls appendchat to append normally
        function extendChat() {
            let text = document.getElementById("chat");
            let written_text = text.value;
            let appearchat = document.getElementById("appearchat");

            // 37 is here the average case of requiered letters til the linebreak for THIS Window size,
            // There is no general formular, it has to be changed by hand if window size is changed
            if(written_text.length >= 37) {
                let rows_to_add = Math.ceil(written_text.length/30.0);
                let change_cloud = document.createElement("div");
                change_cloud.setAttribute("class", "textclouds");
                // Where 35 is initial size, 16 size for each row
                change_cloud.style.height = (35 + 16 * rows_to_add).toString()+"px";
                change_cloud.innerHTML = "<div class='client'>" + written_text + "</div>";
                appearchat.appendChild(change_cloud);
                text.value = "";
            } else if(written_text.length > 0) {
                appendChat();
            }
            appearchat.scrollTop = appearchat.scrollHeight;
        }

        function sendByEnter(event) {
            var e = event.which || event.keyCode;
            if(e === 13) {
                extendChat();
            }
        }