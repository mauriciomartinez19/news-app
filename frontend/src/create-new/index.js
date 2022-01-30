import { useState } from 'react'
import './create.css'
import { handleFileUpload } from './handleFileUpload'

const url = 'http://localhost:5000/api/news/create'

const Create = () => {
    const [title, setTitle] = useState('')
    const [resume, setResume] = useState('')
    const [date, setDate] = useState('')
    const [author, setAuthor] = useState('')
    const [imgFooter, setImgFooter] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [image, setImage] = useState('')
    const [tag, setTag] = useState('')
    const [content, setContent] = useState([])

    const handleContent = (e) => {
        const arrayContent = e.target.value.split('\n\n')
        setContent(arrayContent)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const mes = {
            title: title,
            resume: resume,
            date: date,
            author: author,
            imgFooter: imgFooter,
            subtitle: subtitle,
            image: image,
            tag: tag,
            content: content
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mes)
        })
        const data = await response.json()
        console.log(data)
    }

    return <>
        <form className="create-page" onSubmit={handleSubmit}>
            <h1>Create Notes</h1>
            <div className="create-box-input">
                <label>title</label>
                <input
                    placeholder="title"
                    onChange={e => setTitle(e.target.value)}></input>
            </div>
            <div className="create-box-input">
                <label>resume</label>
                <input
                    placeholder="resume"
                    onChange={e => setResume(e.target.value)}></input>
            </div>
            <div className="create-box-input">
                <label>date</label>
                <input
                    placeholder="date"
                    type='date'
                    onChange={e => setDate(e.target.value)}></input>
            </div>
            <div className="create-box-input">
                <label>author</label>
                <input
                    placeholder="author"
                    onChange={e => setAuthor(e.target.value)}></input>
            </div>
            <div className="create-box-input">
                <label>img footer</label>
                <input
                    placeholder="img footer"
                    onChange={e => setImgFooter(e.target.value)}></input>
            </div>
            <div className="create-box-input">
                <label>subtitle</label>
                <textarea
                    placeholder="subtitle"
                    className='subtitle'
                    onChange={e => setSubtitle(e.target.value)}></textarea>
            </div>
            <div className="create-box-input">
                <label>content</label>
                <textarea
                    placeholder="content"
                    className='content'
                    onChange={e => handleContent(e)}></textarea>
            </div>
            <div className="create-box-input">
                <label>image</label>
                <input
                    type="file"
                    label="Image"
                    name="myFile"
                    accept=".jpeg, .png, .jpg"
                    onChange={async (e) => setImage(await handleFileUpload(e))}></input>
            </div>
            <div className="create-box-input">
                <label>tag</label>
                <select name='tag' id='tag' onChange={e => setTag(e.target.value)}>
                    <option value="general">General</option>
                    <option value="bussines">Bussines</option>
                    <option value="show">Show</option>
                    <option value="sports">Sports</option>
                    <option value="technology">Technology</option>
                    <option value="health">Health</option>
                </select>
            </div>
            <button type='submit'>Create Note</button>
        </form>
    </>
}

export default Create