import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsComponent = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=28f6e8836bb34530b0c668a5a6a1d840');
            setArticles(response.data.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    return (
        <div>

            <div className="container mt-5">
                <h1 style={{padding:"5px"}}>Business Guide</h1>
                <div className="row" id="newsRow">
                    {articles.map((article, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                            <div className="card news-card">
                                <img src={article.urlToImage} className="card-img-top" alt="load..." style={{ width: '100%', height: '220px', objectFit: 'cover' }}/>
                                <div className="card-body">
                                    <h5 className="card-title">{article.title.length > 30 ? `${article.title.substring(0, 35)}...` : article.title}</h5>
                                    <p className="card-text">
                                        {article && article.description && article.description.length > 40 ? `${article.description.slice(0, 50)}...` : article.description}
                                    </p>
                                    <a href={article.url} className="btn btn-primary" target="_blank" rel="noreferrer">Read more</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsComponent;
