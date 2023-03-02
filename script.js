var storage = [
    ["Stuhl", "10€", "100"],
    ["Tisch", "150€", "2"],
    ["Wer das liest ist ein Hund", "Du hund€", "67"],
    ["iPhone", "30€", "20"]
]

var results = [
    "", //1
    "", //2
    "", //3
    "", //4
    "", //5
    "", //6
    "", //7
    "", //8
    "", //9
    ""  //10
];

function set_href(){
    for (i = 1; i < 11; i++){
        resultablo = results[i-1][0];
        if (resultablo == undefined){
            document.getElementById("href" + i).href = "https://i.ytimg.com/an_webp/o-YBDTqX_ZU/mqdefault_6s.webp?du=3000&sqp=CJatg6AG&rs=AOn4CLBkAtpZI4UBRv611Oo8K2QrmIp0Cw";
        }
        else{
            document.getElementById("href" + i).href = "https://www.amazon.de/s?k=" + resultablo;
        }
    }
}


function search(){
    
    text = document.getElementById("search").value;
    
    var count = 0;

    for (item in storage){
        if (storage[item][0].startsWith(text)){
            results[count] = storage[item];
            count += 1;
            if (count == 11){
                break;
            }
        }
    }
    
    for (i = 1; i < 11; i++){
        console.log("result" + i.toString())
        result = results[i-1].toString().replace(",", " ").replace(",", " ")
        document.getElementById("result" + i.toString()).innerHTML = result;
    }
    set_href()
}

