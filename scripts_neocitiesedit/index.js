fetch("/_site/feed.xml")
            .then((response) => response.text())
            .then((xmlString) => {
                const parser = new DOMParser();
                const xmlDoc = parser.
                    parseFromString(xmlString, "text/xml");
                
                const feeds = xmlDoc.
                    querySelectorAll("entry");
                const titles = xmlDoc.
                    querySelectorAll("title");
                


                //yes i know this is an abomination.
                //no i will not figure out the right way to do this
                //I HATE NODES 
                //okay not really but holy shit i wish there was a way to hide information that wasn't just null
                let count = 0;
            
                feeds.forEach((entry) => {
                    while(count == 0){
                    const id = entry.
                        querySelector("id").textContent;
                    const updated = entry.
                        querySelector("updated").textContent;
                    const title = entry.
                        querySelector("title").textContent;
                    document.getElementById("title").innerHTML = title;
                    document.getElementById("dateTitled").innerHTML = updated.slice(0,10); 
                    var link = document.getElementById("link");
                    link.setAttribute("href", id);

                    console.log(`${title}, ${updated}, ${id}`);
                    count++;
                    }
                });
                
            });