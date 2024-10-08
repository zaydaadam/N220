
const codeChallange ={
    codeChallangeNumber: "N220",
    codeChallangeTitle: "Introduction to Media Application Development",
    totalSeats: 20,
    enrolledStudents: 18,
    getAvailability: function(){
        return this.totalSeats<this.enrolledStudents;
    }
};
console.log(`N220 Open: ${codeChallange.getAvailability}`);
codeChallange.enrolledStudents+=2;
console.log(`Total Students: ${codeChallange.enrolledStudents}`);
console.log(`N220 Open: ${codeChallange.getAvailability}`);

var tacocat = "wednesday";

function IUPUIWebsite(){
    window.open("https://www.google.com/");
    console.log(`Inner width ${window.innerWidth}`)
    console.log(`Outer width ${window.outerWidth}`)
    console.log(window.location);

}


function printPage(){
    window.print();
}
