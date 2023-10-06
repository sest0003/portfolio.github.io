type Song ={
    title: string,
    artist: string,
    numStreams:number, 
    credits: { producer: string, writer: string };
    };


function calcPayout(song:Song): number {
return song.numStreams * 0.0033
}

function printSongDetails(song:Song): void{
console.log(`${song.title}`);
}

const mySong: Song = {
    title: "lolly",
    artist: "Dolly PArton",
    numStreams: 123753, 
    credits: { producer: "phil Spector", writer: "Dolly Parton" 
  }
}

    const earnings = calcPayout(mySong)
    console.log(earnings)
    printSongDetails(mySong)