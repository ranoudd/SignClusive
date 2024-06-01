import React from 'react'
import './Dataset.css'

const Dataset = () => {
  return (
    <div className="dataset-page">
      <main>
        <section>
          <h2>How to Contribute</h2>
          <p>
            Are you an expert in sign language? Join us in contributing to our dataset! Your expertise is invaluable in helping us collect accurate and comprehensive data. By sharing your knowledge and insights, you play a vital role in enhancing accessibility and inclusivity. Together, we can build a dataset that empowers our models to better serve the needs of all individuals. Join our community today and make a difference!
          </p>
        </section>
        <section>
          <h2>Link to Dataset</h2>
          <p>
            <a className="link" href="link_to_your_dataset">
              Explore Our Dataset
            </a>
          </p>
        </section>
        <p className="discord">Learn and share with other Signers in our Discord Community</p>
        <a href="https://www.google.com/search?q=discord&sca_esv=4c65df5ede669cd8&sxsrf=ADLYWIL-8At5exa9d9oAGgdxOhRNwR5JLg%3A1714950820856&source=hp&ei=pBI4ZoCqMq2N7NYP3IS1mAw&iflsig=AL9hbdgAAAAAZjggtLsQp2jOpEkVdmnKu0EubBLfDvdB&oq=dis&gs_lp=Egdnd3Mtd2l6IgNkaXMqAggAMgoQIxiABBgnGIoFMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxiDARjUApgDAJIHAzAuM6AH1yE&sclient=gws-wiz"
          target="_blank"
          rel="noopener noreferrer"
          className="butto"
        >
          Join Discord Community
        </a>
      </main>
    </div>
  )
}

export default Dataset