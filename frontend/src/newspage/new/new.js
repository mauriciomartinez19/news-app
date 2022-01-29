import './new.css'
import { text } from './data'


const New = () => {
    return <>
        <div className='New-page'>
            <div className='new-page-box-title'>
                <h1 className='new-page-title'> Pfizer gets EU regulator's nod for oral Covid drug</h1>
                <h5>19.8.2021</h5>
            </div>
            <h3 className='new-page-subtitle'>European Medicines Agency recommends use of at-home treatment Paxlovid</h3>
            <div className='new-page-line'></div>
            <div className='new-page-img-box'>
                <img className='new-page-img' src='./images/home/down-home/pfizer.jpg' />
                <p className='new-page-img-footer'>This handout photo provided by Pfizer, shows the making of its experimental Covid-19 antiviral pill Paxlovid at a laboratory in Freiburg, Germany in November.
                    Photo credit: AFP</p>
            </div>
            {text.map(paragraph => {
                return <>
                    <p className='new-page-text'>{paragraph}</p>
                </>
            })}

        </div>
    </>
}

export default New