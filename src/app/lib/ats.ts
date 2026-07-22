export function calculateATS(parsedResume:any){
    let score =0;
if( parsedResume.name){
        score += 10;
    }
    if (parsedResume.email) {
    score += 10;
}

if (parsedResume.phone) {
    score += 10;
}
if (parsedResume.skills.length >= 5) {
    score += 20;
}

if (parsedResume.projects.length >= 2) {
    score += 20;
}

if (parsedResume.degree) {
    score += 10;
}

if (parsedResume.cgpa) {
    score += 10;
}

return score;

}