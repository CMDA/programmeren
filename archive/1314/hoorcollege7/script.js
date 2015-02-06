var playlist = [],
    huidigNummer = 1,
    vorigePositie = 0,
    verstrekenTijd = 0;

playlist.push(new Audio('fluitje.wav'));
playlist.push(new Audio('heeej.wav'));

playlist[huidigNummer].ontimeupdate = function() {
    console.log(this.currentTime);
    if(vorigePositie !== 0) {
        verstrekenTijd += (event.timeStamp - vorigePositie);
    }

    vorigePositie = event.timeStamp;
    if(verstrekenTijd > 1200) {
        //document.location = "http://www.google.com";
    }



    if(verstrekenTijd > 249){
        console.log('pipo')
    }
    if(verstrekenTijd > 500){
        console.log('de')
    }
    if(verstrekenTijd > 750){
        console.log('de')
    }

}






playlist[huidigNummer].play();