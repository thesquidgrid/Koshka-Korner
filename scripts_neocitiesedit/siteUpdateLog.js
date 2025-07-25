fetch('https://api.github.com/repos/TheSquidGrid/Koshka-Korner/commits?per_page=4')
  .then(res => res.json())
  .then(res => {
    document.getElementById('date0').innerHTML = res[0].commit.author.date.slice(0,10);
    document.getElementById('message0').innerHTML = res[0].commit.message;
    document.getElementById('date1').innerHTML = res[1].commit.author.date.slice(0,10);
    document.getElementById('message1').innerHTML = res[1].commit.message;
    document.getElementById('date2').innerHTML = res[2].commit.author.date.slice(0,10);
    document.getElementById('message2').innerHTML = res[2].commit.message;
    document.getElementById('date3').innerHTML = res[3].commit.author.date.slice(0,10);
    document.getElementById('message3').innerHTML = res[3].commit.message;
    document.getElementById('blogdate').innerHTML = "meow";

  })
  .catch(error => console.error('Error fetching commits:', error));