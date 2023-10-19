async function fetchData(objectSourceList) {
    const name = objectSourceList.name;
    const type = objectSourceList.type;
    let rawData;
    let prettyData;

    if (type === 'reddit') {
        const apiUrl = objectSourceList.link + '.json';

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Error al pedir los datos a Reddit");
            }

            const jsonData = await response.json();
            rawData = jsonData.data.children; 
        } catch (error) {
            console.log(error)
        }

        prettyData = rawData.map((item) => ({
            title: item.data.title,
            score: item.data.score,
            subreddit: item.data.subreddit,
            text: item.data.selftext,
            link: item.data.permalink,
            date: item.data.created,
        }));
        
        console.log(name)
        console.log(prettyData)
        console.log("----")
    }

}

export default fetchData;