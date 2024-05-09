import React, { useEffect, useState } from 'react';

function BlogPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  async function getBlogs() { 
    try {
      //const apiKey = '';
      const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b27502994f9247f986a13f3c6f0c9aea');
      const data = await response.json();

      // Limit content characters to 200 characters
      const articles = data.articles.map(article => {
        if (article.content && article.content.length > 200) {
          article.content = article.content.substring(0, 200) + '...';
        }
        return article;
      });

      setNews(articles);
      console.log(data);
    } catch (err) {
      console.error('Error fetching blogs:', err.message);
    }
  }

  return (
    <div id='Blog' className='mt-10 px-3 py-24'>
      <h1 className='font-semibold  md:pt-20 mb-[60px] text-A-writeup text-4xl text-center '>TechTidbits</h1>
      <ul className='flex text-sm justify-center gap-7 flex-wrap'>
        {news.map((article, index) => {
          return (
            <li key={index} className="mb-9 w-full md:w-[350px]">
              
              <img className='' src={article.urlToImage} alt="" />
              <h2 className='font-semibold mb-2 text-[16px] mt-2'>{article.title}</h2>
              <p className="content">{article.content}</p>
              <button className='border border-arinze-blue px-4 py-1 font-semibold mt-3'><a href={article.url}>Read more</a></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogPage;
