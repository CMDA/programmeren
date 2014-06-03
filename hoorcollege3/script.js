var docenten = ['Walter', 'David', 'Laura', 'Sonja', 'Justus'];
console.log(docenten.length);
console.log(docenten[2]);

docenten.push('Joost');
console.log(docenten.length);
console.log(docenten[2]);

for (var i=0; i<docenten.length; i++){
    console.log('<h1>We hebben '+ docenten[i] +' in ons docententeam.</h1>');
}

var memo = [];

memo.push('Hee doe eens een formatie maken?');
memo.push('Biertjes drinken met je SLC klas..');
memo.push('Hoorcollege voor Programmeren voorbereiden.');

console.log('We gaan de memo: "'+memo[memo.length-1]+'" weghalen.');
memo.pop();
console.log(memo);

var klanten = [];

klanten.push('Justus');
klanten.push('Walter');
klanten.push('Laura');

console.log(klanten);

console.log('De klant '+klanten[0]+' is aan de beurt!');
klanten.shift();

console.log(klanten);

klanten.push('David');

console.log(klanten);

klanten.unshift('Sonja');

console.log(klanten);

klanten.sort();

console.log(klanten);

klanten.reverse();

console.log(klanten);

var boek = {
    "titel": "River of Gods",
    "auteur": "Ian McDonald",
    "genre": "Science Fiction",
    "ISBN": 0987654321234,
    "voorraad": false
};

console.log(boek.titel);

var boeken = [
    {
        "titel":"River of Gods"
    },
    {
        "titel":"Sein und Zeit"
    },
    {
        "titel":"Hyperion"
    }
];

var tweet = {
    "geo":null,
    "coordinates":null,
    "retweeted":false,
    "text":"Een cameraatje op de rug van een gans, die vliegt langs New York. Gaaf. #ned1",
    "id_str":"268447462765772800",
    "retweet_count":0,
    "in_reply_to_status_id_str":null,
    "contributors":null,
    "in_reply_to_user_id":null,
    "in_reply_to_status_id":null,
    "truncated":false,
    "in_reply_to_user_id_str":null,
    "place":null,
    "user":{
        "followers_count":226,
        "id":21127969,
        "statuses_count":7089,
        "id_str":"21127969",
        "profile_background_color":"2E2E2E",
        "profile_banner_url":"https:\/\/si0.twimg.com\/profile_banners\/21127969\/1348731358",
        "follow_request_sent":false,
        "utc_offset":3600,
        "profile_background_image_url":"http:\/\/a0.twimg.com\/profile_background_images\/670573397\/38655f49f0c0bf26fda4bc4a70c2ee8f.jpeg",
        "location":"The Netherlands",
        "profile_link_color":"F00984",
        "name":"Erwin",
        "default_profile":false,
        "profile_image_url_https":"https:\/\/si0.twimg.com\/profile_images\/2783808211\/acf1e76779db058ab928d4f621993ab8_normal.png",
        "following":true,
        "description":"ERWIN | 24 | ontwerpt websites | programmeert | luistert muziek | speelt piano | is 2012-proof | bouwt aan stateof.nl | vertelt meer op erwinrietveld.nl ",
        "protected":false,
        "profile_use_background_image":true,
        "profile_text_color":"333333",
        "screen_name":"ewinnn",
        "listed_count":2,
        "profile_sidebar_border_color":"000000",
        "contributors_enabled":false,
        "notifications":false,
        "time_zone":"Amsterdam",
        "created_at":"Tue Feb 17 20:42:22 +0000 2009",
        "profile_image_url":"http:\/\/a0.twimg.com\/profile_images\/2783808211\/acf1e76779db058ab928d4f621993ab8_normal.png",
        "profile_background_tile":true,
        "geo_enabled":true,
        "is_translator":false,
        "profile_sidebar_fill_color":"C8D2D4",
        "default_profile_image":false,
        "verified":false,
        "url":"http:\/\/www.erwinrietveld.nl",
        "profile_background_image_url_https":"https:\/\/si0.twimg.com\/profile_background_images\/670573397\/38655f49f0c0bf26fda4bc4a70c2ee8f.jpeg",
        "friends_count":385,
        "lang":"en",
        "favourites_count":0
    },
    "in_reply_to_screen_name":null,
    "favorited":false,
    "source":"<a href=\"http:\/\/www.twittergadget.com\" rel=\"nofollow\">tGadget<\/a>",
    "id":268447462765772800,
    "created_at":"Tue Nov 13 20:17:17 +0000 2012"
};


console.log(tweet.user.name + " tweeted:" + tweet.text);














