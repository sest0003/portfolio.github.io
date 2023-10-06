function calcPayout(song) {
    return song.numStreams * 0.0033;
}
function printSongDetails(song) {
    console.log("".concat(song.title));
}
var mySong = {
    title: "lolly",
    artist: "Dolly PArton",
    numStreams: 123753,
    credits: { producer: "phil Spector", writer: "Dolly Parton"
    }
};
var earnings = calcPayout(mySong);
console.log(earnings);
printSongDetails(mySong);
