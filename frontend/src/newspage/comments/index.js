import './comments.css'

const Comments = () => {
    return <>
        <div className='comments-box'>
            <div className='comments-padding-element'>
                <h2 className='comments-title'>Add your comment</h2>
                <div className='unit-comment-box'>
                    <div className='unit-comment-top-box'>
                        <label className='unit-comments-name'>Mauricio</label>
                        <label className='unit-comments-date'>2 / 1 / 2022</label>
                    </div>
                    <p className='comments-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, dolorum? Inventore eos nisi nesciunt deserunt esse aperiam, aliquam reprehenderit in, harum mollitia dolor a voluptates cupiditate pariatur omnis fuga autem.</p>
                    <div className='unit-comment-buttons-box'>
                        <label className='likes-number'>8</label>
                        <button className='unit-comment-button' >Like</button>
                        <button className='unit-comment-button'>Reply</button>
                    </div>
                </div>
                <div className='unit-comment-box'>
                    <div className='unit-comment-top-box'>
                        <label className='unit-comments-name'>Mauricio</label>
                        <label className='unit-comments-date'>2 / 1 / 2022</label>
                    </div>
                    <p className='comments-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, dolorum? Inventore eos nisi nesciunt deserunt esse aperiam, aliquam reprehenderit in, harum mollitia dolor a voluptates cupiditate pariatur omnis fuga autem.</p>
                    <div className='unit-comment-buttons-box'>
                        <label className='likes-number'>8</label>
                        <button className='unit-comment-button' >Like</button>
                        <button className='unit-comment-button'>Reply</button>
                    </div>
                </div>
                <div className='unit-comment-box'>
                    <div className='unit-comment-top-box'>
                        <label className='unit-comments-name'>Mauricio</label>
                        <label className='unit-comments-date'>2 / 1 / 2022</label>
                    </div>
                    <p className='comments-content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, dolorum? Inventore eos nisi nesciunt deserunt esse aperiam, aliquam reprehenderit in, harum mollitia dolor a voluptates cupiditate pariatur omnis fuga autem.</p>
                    <div className='unit-comment-buttons-box'>
                        <label className='likes-number'>8</label>
                        <button className='unit-comment-button' >Like</button>
                        <button className='unit-comment-button'>Reply</button>
                    </div>
                </div>
                <form className='comment-input-form'>
                    <label>Add new comment</label>
                    <textarea className='comment-input' placeholder='insert your comment' />
                    <button className='comment-submit-btn'>Submit</button>
                </form>
            </div>
        </div>

    </>
}

export default Comments