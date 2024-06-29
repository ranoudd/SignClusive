import React from 'react'
import './Dataset.css'
import { Link } from 'react-scroll'

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
            <a className="link" href="https://www.kaggle.com/datasets/ahmedkhairy11/signclusive-mediapipe/data" target="_blank">
              Explore Our Dataset
            </a>
          </p>
        </section>
        <p className="discord">Learn and share with other Signers in our Discord Community</p>
        <div className="button-container">
        <a href="https://discord.gg/XmaWyKeh" target='blank' rel="noreferrer" className="bttnn">Join Discord Community</a>

        </div>
      </main>
    </div>
  );
}

export default Dataset;