var numbersStatic = [];
var numbersMobile = [];
var data1 = [];
var data2 = [];
var timestamps = [];
var timestampsMobile = [];
var seen = false;
var check = false;
var average1 = [];
var index = 0;
var counter = 0;
var average = 0;
var total = 0;
var totalList = [];
var staticAverage = {};
var mobileAverage = {};

d3.csv("StaticSensorReadings.csv", function(data){
    //var sensors = ["Sensor 1", "Sensor 4", "Sensor 6", "Sensor 9", "Sensor 11", "Sensor 12", "Sensor 13", "Sensor 14", "Sensor 15"];

    data.forEach(function(d, i){
        data1[i] = data[i];
    });
    createTime(data1);
    IDlist(data1, i);
    for(x = 0; x < numbersStatic.length; x++){
        //console.log(numbersStatic[x]);
        for(i =0; i<timestamps.length; i++){
            averageCalc(data1, i, x);
            average = 0;
            average1 = [];
            total = 0;
        }
        staticAverage[numbersStatic[x]] = totalList;
        //console.log(totalList);
        totalList = [];
        index = 0;
    }
    console.log(staticAverage);
    console.log(numbersStatic);
    testing();

    render(sensorDataOne);

});

function createTime(data) {
    timestamps[0] = data[0].Timestamp;
    for (i = 1; i < data.length; i++){
        var Time = data[i].Timestamp;
        if (Time.includes(":00") || Time.includes(":20") || Time.includes(":40")){
            if (timestamps[counter] !== data[i].Timestamp){
                timestamps[counter+1] = data[i].Timestamp;
                counter++;
            }
        }
    }
    counter = 0;
    //console.log(timestamps);
}

function IDlist(data, key) {
    numbersStatic[0] = data[0].SensorID;
    for (i = 1; data[i].Timestamp === timestamps[0]; i++){
        for(j = 0; j < i; j++){
            if (numbersStatic[j] === data[i].SensorID){
                seen = true;
            }
        }
        if (seen === false){
            numbersStatic[i] = data[i].SensorID;
        }
    }
}

function averageCalc(data, key, ID) {
    if(index < 743910) {
        while (data[index].Timestamp !== timestamps[key]) {
            index++;
        }
        while (data[index].Timestamp === timestamps[key]) {
            if (numbersStatic[ID] === data[index].SensorID) {
                check = true;
                average1[counter] = +data[index].Value;
                counter++;
            }
            index++;
        }
    }
    //console.log(check);
    check = false;
    counter = 0;
    /*for (b = 0; b <= key; b++){
        index += 2000;
    }*/
    for (a = 0; a < average1.length; a++){
        total = total + average1[a];
    }
    average = total/a;
    totalList[key] = +average.toFixed(2);
    //console.log(Math.max(...average1));
    //console.log(Math.min(...average1));
}
/*
    d3.csv("MobileSensorReadings.csv", function(data){
        data.forEach(function(d, i){
            data2[i] = data[i];
        });
        createTimeMobile(data2);
        seen = false;
        IDlistMobile(data2);
        for(x = 0; x < numbersMobile.length; x++){
            //console.log(numbersMobile[x]);
            for(i =0; i<timestampsMobile.length; i++){
                averageCalcMobile(data2, i, x);
                average = 0;
                average1 = [];
                total = 0;
            }
            mobileAverage[numbersMobile[x]] = totalList;
            //console.log(totalList);
            totalList = [];
            index = 0;
        }
        console.log(mobileAverage);
        console.log(numbersMobile);

    });

    function createTimeMobile(data) {
        timestampsMobile[0] = data[0].Timestamp;
        for (i = 1; i < data.length; i++){
            var Time = data[i].Timestamp;
            if (Time.includes(":00") || Time.includes(":20") || Time.includes(":40")){
                if (timestampsMobile[counter] !== data[i].Timestamp){
                    timestampsMobile[counter+1] = data[i].Timestamp;
                    counter++;
                }
            }
        }
        counter = 0;
        console.log(timestampsMobile);
    }

    function IDlistMobile(data) {
        numbersMobile[0] = data[0].SensorID;
        for (i = 1; data[i].Timestamp === timestampsMobile[0]; i++){
            for(j = 0; j < i; j++){
                if (numbersMobile[j] === data[i].SensorID){
                    seen = true;
                }
            }
            if (seen === false){
                numbersMobile[i] = data[i].SensorID;
            }
        }
    }

    function averageCalcMobile(data, key, ID) {
        //console.log(timestamps[key]);
        if(index < 743910) {
            while (data[index].Timestamp !== timestamps[key]) {
                index++;
            }
            while (data[index].Timestamp === timestampsMobile[key]) {
                if (numbersMobile[ID] === data[index].SensorID) {
                    check = true;
                    average1[counter] = +data[index].Value;
                    counter++;
                }
                index++;
            }
        }
        //console.log(check);
        check = false;
        counter = 0;
        for (a = 0; a < average1.length; a++){
            total = total + average1[a];
        }
        average = total/a;
        totalList[key] = +average.toFixed(2);
        //console.log(Math.max(...average1));
        //console.log(Math.min(...average1));
    }
*/
//-------------------------Static Sensors-------------------------------

var sensorDataOne = [];
var sensorDataFour = [];
var sensorDataSix = [];
var sensorDataNine = [];
var sensorDataEleven = [];
var sensorDataTwelve = [];
var sensorDataThirdteen = [];
var sensorDataFourteen = [];
var sensorDataFifthteen = [];

function testing() {
    for(var i = 0; i < timestamps.length; i++ ) {
        sensorDataOne.push({Label: "Sensor 1", Time: timestamps[i], Value: staticAverage[1][i]});
    }
    for(var i = 0; i < timestamps.length; i++ ) {
        sensorDataFour.push({Label: "Sensor 4", Time: timestamps[i], Value: staticAverage[4][i]});
    }
    for(var i = 0; i < timestamps.length; i++ ) {
        sensorDataSix.push({Label: "Sensor 6", Time: timestamps[i], Value: staticAverage[6][i]});
    }
    for(var i = 0; i < timestamps.length; i++ ) {
        sensorDataNine.push({Label: "Sensor 9", Time: timestamps[i], Value: staticAverage[9][i]});
    }
    for(var i = 0; i < timestamps.length; i++ ) {
        sensorDataEleven.push({Label: "Sensor 11", Time: timestamps[i], Value: staticAverage[11][i]});
    }
    for(var i = 0; i < timestamps.length; i++ ) {
        sensorDataTwelve.push({Label: "Sensor 12", Time: timestamps[i], Value: staticAverage[12][i]});
    }
    for(var i = 0; i < timestamps.length; i++ ) {
        sensorDataThirdteen.push({Label: "Sensor 13", Time: timestamps[i], Value: staticAverage[13][i]});
    }
    for(var i = 0; i < timestamps.length; i++ ) {
        sensorDataFourteen.push({Label: "Sensor 14", Time: timestamps[i], Value: staticAverage[14][i]});
    }
    for(var i = 0; i < timestamps.length; i++ ) {
        sensorDataFifthteen.push({Label: "Sensor 15", Time: timestamps[i], Value: staticAverage[15][i]});
    }
    console.log(sensorDataOne);
    console.log(sensorDataOne[0]);
    console.log(sensorDataFifthteen);
    console.log(sensorDataFifthteen[0]);
}