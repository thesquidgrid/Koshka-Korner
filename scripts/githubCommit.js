fetch('https://api.github.com/repos/TheSquidGrid/Koshka-Korner/commits?per_page=1')
  .then(res => res.json())
  .then(res => {
    var msg = res[0].commit.message;
    if(msg.length > 30){
        msg = msg.slice(0, 30) + "...";
    }
    document.getElementById('message').innerHTML = msg;
    document.getElementById('date').innerHTML = res[0].commit.author.date.slice(0,10);
  })