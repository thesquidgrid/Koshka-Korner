
fetch("/_site/feed.json" , {mode: 'no-cors'})
  .then(feed => feed.json())
  .then(feed => {
    const blogTitle = feed.feed.entry[0].title._text;    
    const blogLink = feed.feed.entry[0].link._attributes.href;
    const blogDate = feed.feed.entry[0].updated._text.slice(0,10);
    document.getElementById('blogtitle').innerHTML = blogTitle;
    document.getElementById('bloglink').setAttribute("href", blogLink)
    document.getElementById('blogdate').innerHTML = blogDate
  })
