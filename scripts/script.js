//Picture Frame
let pictureFrame = document.getElementById('frame');
let colorFrame = './images/frame_pic_color.png';
let bwFrame = './images/frame_pic_bw.png';

pictureFrame.onmouseover = () => {
    pictureFrame.src = colorFrame;
}

pictureFrame.onmouseout = () => {
    pictureFrame.src = bwFrame;
}

//Emoji Top 3
let emojiOne = document.getElementById('kiss');
let emojiTwo = document.getElementById('upsidedown');
let emojiThree = document.getElementById('wine');

let kiss = './images/emojis/kiss.png';
let upsidedown = './images/emojis/upsidedown.png';
let wine = './images/emojis/wine.png';

emojiOne.onclick = () => {
    emojiOne.src = kiss;
}

emojiTwo.onclick = () => {
    emojiTwo.src = upsidedown;
}

emojiThree.onclick = () => {
    emojiThree.src = wine;
}