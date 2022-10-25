const shout = string => string.toUpperCase()
const whisper = string =>string.toLowerCase()
const logShout = string => console.log(string.toUpperCase())
const logWhisper= string => console.log(string.toLowerCase())
const sayHiToHeadphonedRoommate = string =>{
    if (string === string.toUpperCase()){
        return "YES INDEED!"
    }
    if (string === string.toLowerCase()){
        return "I can't hear you!" 
    }
    if(string === "Let's have dinner together!"){
        return "I would love to!"
    }
}

