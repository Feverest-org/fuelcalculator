let race_dur = 0,
    lap_sec = 0,
    laps = 0,
    fuel = 0;

    
function calcDuration(){
    // calculate the race distance in secondes
    
    let hrs_dur = document.getElementById("hrs_dur").value;
    let min_dur = document.getElementById("min_dur").value;

    this.race_dur = hrs_dur * 60 * 60 + min_dur * 60;
    console.log("race distance: " + this.race_dur);
};

function calcLaptime(){
    // calculate the input laptime in secondes

    let lap_time = document.getElementById("lap_time").value;
    const lap_time_arr = lap_time.split(".");

    if (lap_time_arr[1] == null) {
        this.lap_sec = Number(lap_time_arr[0])
    } else {
        this.lap_sec = Number(lap_time_arr[0] * 60) + Number(lap_time_arr[1]);
    }

    console.log("lap time in secondes: " + this.lap_sec);
};

function calcFuel(){
    // calculate the raced laps based on duration and laptime

    let lap_cons = document.getElementById("lap_cons").value;
    const laps_floor = Math.floor(this.race_dur / this.lap_sec);
    const diff = (this.race_dur / this.lap_sec) - laps_floor;

    if (this.race_dur != 0 && this.lap_sec != 0) {
        
        console.log("laps: " + this.race_dur / this.lap_sec);
        
        if (diff >= .7) {
            this.laps = Math.ceil(this.race_dur / this.lap_sec) + 2;
        } else {
            this.laps = Math.ceil(this.race_dur / this.lap_sec) + 1; 
        }
    
        this.fuel = lap_cons * this.laps;

        document.getElementById("fuel_cons").value = Math.ceil(this.fuel);

        console.log("raced laps: " + this.laps)
        console.log("fuel per race: " + Math.ceil(this.fuel))
    }
}