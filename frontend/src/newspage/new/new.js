import Comments from './comments'

import './new.css'

const New = ({ news, isAunthenticated, id }) => {

    return <>
        <div className='New-page'>
            <div className='new-page-box-title'>
                <h1 className='new-page-title'> {news.title}</h1>
                <h5 className='new-page-date'>{news.date}</h5>
            </div>
            <h3 className='new-page-subtitle'>{news.subtitle}</h3>
            <div className='new-page-line'></div>
            <div className='new-page-img-box'>
                <img className='new-page-img' src={news.image} alt={news.title} />
                <p className='new-page-img-footer'>{news.imgFooter}</p>
            </div>
            {news.content.map((paragraph, i) => {
                return <>
                    <p key={i} className='new-page-text'>{paragraph}</p>
                </>
            })}
            <Comments
                isAunthenticated={isAunthenticated}
                id={id} />
        </div>
    </>
}

export default New