import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://i.pinimg.com/originals/a6/ae/bb/a6aebbc3b5f0760de63b67a2e56518fa.jpg"
                profileSrc="https://i.pinimg.com/564x/7f/67/c1/7f67c132865ae6242117093c000fecab.jpg"
                title="Romal Faizyar"
            />
            <Story
                image="https://i.pinimg.com/564x/c7/5d/11/c75d1171ed891fda5ddaff1802917dcd.jpg"
                profileSrc="https://i.pinimg.com/564x/7f/67/c1/7f67c132865ae6242117093c000fecab.jpg"
                title="Romal Faizyar"
            />
            <Story
                image="https://i.pinimg.com/564x/69/ab/44/69ab44bcf9d24de4b622c18d43462e87.jpg"
                profileSrc="https://i.pinimg.com/564x/7f/67/c1/7f67c132865ae6242117093c000fecab.jpg"
                title="Romal Faizyar"
            />
            <Story
                image="https://i.pinimg.com/originals/7f/27/b7/7f27b75064a5fd2b951c9b9222b7b0cb.jpg"
                profileSrc="https://i.pinimg.com/564x/7f/67/c1/7f67c132865ae6242117093c000fecab.jpg"
                title="Romal Faizyar"
            />
        </div>
    )
}

export default StoryReel
