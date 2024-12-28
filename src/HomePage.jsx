import React, { useState, useEffect } from 'react';
import { get_course_content, generate_video } from '../src/api';


export function HomePage() {
    const [userInput, setUserInput] = useState('');
    const [courseContent, setCourseContent] = useState([]);
    const [videoUrl, setVideoUrl] = useState("");

    var video_ipt = null;

    useEffect(() => {
        video_ipt = [courseContent[0]]
    }, [courseContent]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!userInput.trim()) {
            alert('Please enter a topic.');
            return;
        }

        try {
            const result = await get_course_content(userInput);
            const json_data = JSON.parse(result[0])
            
            if (Array.isArray(json_data)) {
                setCourseContent(json_data);

                // Generate Video
                console.log(JSON.stringify({
                    "data": [result[1]]
                }))
                const video_result = await generate_video(result[1]);
                setVideoUrl(video_result['url']);
            } else {
                console.error('Unexpected result format:', result);
            }

        } catch (error) {
            console.error('Error fetching course content:', error);
            alert('Failed to fetch course content.');
        }
    };


    return (
        <>
            <div className="container" style={{ overflow: "auto" }}>
                {/* Welcome Section */}
                <div className="welcome-section">
                    <div className="welcome-text">
                        <h1>Welcome, User!</h1>
                    </div>
                </div>

                {/* Input Box for User Input */}
                <div className="input-container mt-5">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="awesome-input"
                            placeholder=""
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                        <label htmlFor="awesome-input">Enter the topic you want to study</label>
                        <button className="btn btn-primary my-2" type="submit">
                            Submit
                        </button>
                    </form>
                </div>

                {/* Display Video */}
                {videoUrl && 
                    <div className="video-container mt-4">
                        <video width="100%" height="auto" controls>
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                    </div>
                }

                {/* Display Course Content */}
                <div className="course-content mt-4" style={{ overflow: "auto" }}>
                    {courseContent && (
                        <div>
                            <div style={{ padding: '10px', fontFamily: 'Arial, sans-serif' }}>
                                {
                                    courseContent[0] &&
                                    <div style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                                        <h5>Course Content:</h5>
                                        <div style={{ margin: '10px 0' }}>
                                            <h5>John's Question:</h5>
                                            <p>{courseContent[0].john_question}</p>
                                            <h5>Professor's Answer:</h5>
                                            <p>{courseContent[0].professor_answer_john['answer']}</p>
                                        </div>
                                        <div style={{ margin: '10px 0' }}>
                                            <h5>Lara's Question:</h5>
                                            <p>{courseContent[0].lara_question}</p>
                                            <h5>Professor's Answer:</h5>
                                            <p>{courseContent[0].professor_answer_lara['answer']}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default HomePage;


// export default HomePage