
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: "change this to your api key"
});

const openai = new OpenAIApi(config);

const prompt = "mountain view trees and stream in the background";
const numberOfImages = 1;
const imageSize = "1024x1024";

openai.createImage({
    prompt: prompt,
    n: numberOfImages,
    size: imageSize
}).then((data) => {
    console.log(data.data.data);
}).catch((error) => {
    console.log(error);
});