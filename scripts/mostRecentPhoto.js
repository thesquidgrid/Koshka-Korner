async function getLatestImage() {
  const directoryUrl = 'Photos'; 

  try {
    const response = await fetch(directoryUrl);
    const text = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');

    const links = Array.from(doc.querySelectorAll('a'));

    const imageLinks = links
      .map(link => link.getAttribute('href'))
      .filter(href => /\.(jpg|jpeg|png|gif|webp)$/i.test(href));

    const fullUrls = imageLinks.map(name => name);

    const imagesWithDates = await Promise.all(fullUrls.map(async url => {
      const res = await fetch(url, { method: 'HEAD' });
      const lastModified = new Date(res.headers.get('Last-Modified'));
      return { url, lastModified };
    }));

    imagesWithDates.sort((a, b) => b.lastModified - a.lastModified);

    document.getElementById('latest-image').src = imagesWithDates[0].url;

  } catch (error) {
    console.error('Error fetching latest image:', error);
  }
}

getLatestImage();