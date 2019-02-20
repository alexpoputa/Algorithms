const cannonsReady = (gunners) => {
 if(Object.values(gunners).indexOf("nay") > -1) return "Shiver me timbers!";
 else return "Fire!";
}
