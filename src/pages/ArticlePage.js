import React from 'react'
import articleContent from './article-content';
import ArticlesList from '../Components/ArticlesList';
import PageNotFound from '../pages/PageNotFound'

const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const otherArticles = articleContent.filter(article => article.name !== name);

    if (article) {
        return (
            <>
                <h1>[{article.title}]</h1>
                {article.content.map((paragraph, key) => (
                    <p key={key}>{paragraph}</p>
                ))}
                <h3>[Other Articles]</h3>
                <ArticlesList articles={otherArticles}/>
            </>
        )
    }else{
        return (
            <PageNotFound />
        )
    }
}

export default ArticlePage