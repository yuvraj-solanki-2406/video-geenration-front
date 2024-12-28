export async function get_course_content(user_ipt) {
    var base_url = "https://4febmmprj2gdkoxold7idlqpxi0oeifc.lambda-url.us-east-1.on.aws/api/";
    try {
        console.log(base_url + "/create_video_content");
        const response = await fetch(base_url + "/create_video_content", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: JSON.stringify({
                "course_name": user_ipt,
                "topic_id": "1"
            }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result.content && result.content[1].content) {
            const all_res = result.content[1].content;
            const single_obj = JSON.parse(all_res)
            return [ all_res, single_obj[0] ]
        } else {
            console.log(result["content"]);
            const all_res = result["content"];
            const single_obj = JSON.parse(all_res)
            return [ all_res, single_obj[0] ]
        }
    } catch (error) {
        console.error('Error fetching course content:', error);
        return null;
    }
}


// generate the video
export async function generate_video(user_ipt) {
    var base_url = "https://atbgxrqyuqw7lmkd3gx75axpoi0qgcat.lambda-url.us-east-1.on.aws/generate-video"
    try {
        const response = await fetch(base_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            body: JSON.stringify({
                "data": [user_ipt]
            }),
        });
        console.log(response)

        if (!response.ok) {
            // Handle HTTP errors
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();

        console.log('Video URL: ', result['url']);
        return result;
    } catch (error) {
        console.error('Error fetching course content:', error);
        return null;
    }
}

